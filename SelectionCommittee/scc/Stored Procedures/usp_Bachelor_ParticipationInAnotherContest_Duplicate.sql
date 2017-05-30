
CREATE PROCEDURE [scc].[usp_Bachelor_ParticipationInAnotherContest_Duplicate]
@PersonID INT
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @ErrorMessage AS NVARCHAR(255) = '';
	DECLARE @ErrorCode AS INT = 55063;

	BEGIN TRY

	IF @PersonID IS NULL
		BEGIN
			SET @ErrorMessage = 'PersonID can''t be null';
			THROW @ErrorCode,@ErrorMessage,1;
		END

	IF NOT EXISTS (SELECT 1 FROM [scc].[Decree_Person_Duplicate] WHERE [PersonID] = @PersonID)
		BEGIN
			SET @ErrorMessage = 'This Person ID not exists in anyone decree';
			THROW @ErrorCode,@ErrorMessage,1;
		END
		
	BEGIN TRAN
		IF EXISTS (SELECT 1 [ParticipationInAnotherContest] 
					FROM [scc].[Decree_Person_Duplicate] 
					WHERE [PersonID] = @PersonID AND [ParticipationInAnotherContest] = 0)
			BEGIN									
				UPDATE [scc].[Decree_Person_Duplicate]
					SET [ParticipationInAnotherContest] = 1
				WHERE [PersonID] = @PersonID
			END
		ELSE
			BEGIN									
				UPDATE [scc].[Decree_Person_Duplicate]
					SET [ParticipationInAnotherContest] = 0
				WHERE [PersonID] = @PersonID
			END
	COMMIT TRAN

	END TRY

	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRAN;
		THROW;
	END CATCH
	SET NOCOUNT OFF
END
