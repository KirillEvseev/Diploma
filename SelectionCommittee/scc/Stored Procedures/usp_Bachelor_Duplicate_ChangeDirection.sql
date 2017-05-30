
CREATE PROCEDURE [scc].[usp_Bachelor_Duplicate_ChangeDirection]
@PersonID INT,
@FirstDirection NVARCHAR(50),
@SecondDirection NVARCHAR(50),
@ThirdDirection NVARCHAR(50)
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @ErrorMessage AS NVARCHAR(255) = '';
	DECLARE @ErrorCode AS INT = 55063;

	BEGIN TRY

		IF @PersonID IS NULL
			BEGIN
				SET @ErrorMessage = 'Person ID can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	

			ELSE IF NOT EXISTS (SELECT 1 FROM [scc].[Bachelor_FullInfo_Duplicate] WHERE [PersonID] = @PersonID)
					BEGIN
						SET @ErrorMessage = 'Specified Person not be found';
						THROW @ErrorCode,@ErrorMessage,1;
					END	

		IF @FirstDirection IS NULL
			BEGIN
				SET @ErrorMessage = 'First Direction can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	
			
			ELSE IF NOT EXISTS (SELECT 1 FROM [scc].[Direction] WHERE [DirectionName] = @FirstDirection)
					BEGIN
						SET @ErrorMessage = 'Specified Direction not be found';
						THROW @ErrorCode,@ErrorMessage,1;
					END	

		IF @SecondDirection IS NULL
			BEGIN
				SET @ErrorMessage = 'Second Direction can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	
			
			ELSE IF NOT EXISTS (SELECT 1 FROM [scc].[Direction] WHERE [DirectionName] = @SecondDirection)
					BEGIN
						SET @ErrorMessage = 'Specified Direction not be found';
						THROW @ErrorCode,@ErrorMessage,1;
					END	


		IF @ThirdDirection IS NULL
			BEGIN
				SET @ErrorMessage = 'Third Direction can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	
			
			ELSE IF NOT EXISTS (SELECT 1 FROM [scc].[Direction] WHERE [DirectionName] = @ThirdDirection)
					BEGIN
						SET @ErrorMessage = 'Specified Direction not be found';
						THROW @ErrorCode,@ErrorMessage,1;
					END	

			BEGIN TRAN

				UPDATE [scc].[Bachelor_FullInfo_Duplicate]
					SET [FirstDirection] = @FirstDirection
						,[SecondDirection] = @SecondDirection
						,[ThirdDirection] = @ThirdDirection
					WHERE [PersonID] = @PersonID

			COMMIT TRAN
						
	END TRY

	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRAN;
		THROW;
	END CATCH
	SET NOCOUNT OFF
END
