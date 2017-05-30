
CREATE PROCEDURE [scc].[usp_auth]
@Login NVARCHAR(100),
@Password NVARCHAR(100)
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @ErrorMessage AS NVARCHAR(255) = '';
	DECLARE @ErrorCode AS INT = 55063;
	
	BEGIN TRY
		IF (REPLACE(@Login,' ','') IS NULL OR REPLACE(@Login,' ','') = '' OR REPLACE(@Login,' ','') = 'null')
			BEGIN
				SET @Login = N'Login can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	

			ELSE IF NOT EXISTS (SELECT 1 FROM [scc].[Auth] WHERE [Login] = @Login)
					BEGIN
						SET @ErrorMessage = N'Specified Login not be found';
						THROW @ErrorCode,@ErrorMessage,1;
					END	 

		IF (REPLACE(@Password,' ','') IS NULL OR REPLACE(@Password,' ','') = '' OR REPLACE(@Password,' ','') = 'null')
			BEGIN
				SET @ErrorMessage = N'Password can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	

			ELSE IF NOT EXISTS (SELECT 1 FROM [scc].[Auth] WHERE [Login] = @Login AND [Password] = @Password)
					BEGIN
						SET @ErrorMessage = N'Specified Person with this login and this password not be found';
						THROW @ErrorCode,@ErrorMessage,1;
					END	
	END TRY
	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRAN;
		THROW;
	END CATCH
	SET NOCOUNT OFF
END
