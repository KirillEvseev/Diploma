
CREATE PROCEDURE [scc].[usp_Decree_Delete_Duplicate]
@DecreeID SMALLINT
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @ErrorMessage AS NVARCHAR(255) = '';
	DECLARE @ErrorCode AS INT = 55063;

	BEGIN TRY

		IF @DecreeID IS NULL
			BEGIN
				SET @ErrorMessage = 'Decree ID can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	

			ELSE IF NOT EXISTS (SELECT 1 FROM [scc].[Decree_Duplicate] WHERE DecreeID = @DecreeID)
					BEGIN
						SET @ErrorMessage = 'Specified Decree not be found';
						THROW @ErrorCode,@ErrorMessage,1;
					END	

			BEGIN TRAN

				DELETE [scc].[Decree_Person_Duplicate]
				WHERE DecreeID = @DecreeID

				DELETE [scc].[Decree_Duplicate]
				WHERE DecreeID = @DecreeID

			COMMIT TRAN
						
	END TRY

	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRAN;
		THROW;
	END CATCH
	SET NOCOUNT OFF
END
