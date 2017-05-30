
CREATE PROCEDURE [scc].[usp_Master_Delete]
	@PersonID INT
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @ErrorMessage AS NVARCHAR(255) = '';
	DECLARE @ErrorCode AS INT = 55063;
	
	BEGIN TRY

		IF @PersonID IS NULL
			BEGIN
				SET @ErrorMessage = 'Person ID can''t be NULL';
				THROW @ErrorCode,@ErrorMessage, 1;
			END	
		ELSE
			IF NOT EXISTS (SELECT 1 
						   FROM [scc].[Person] as P
								JOIN [scc].[Master] as M
									ON P.PersonID = M.PersonID
						   WHERE M.[PersonID] = @PersonID)

			BEGIN
				SET @ErrorMessage = 'Master with ID ''' + CAST(@PersonID AS NVARCHAR)+''' does not exists.';
				THROW @ErrorCode,@ErrorMessage, 1;
			END

			ELSE 

				BEGIN TRAN


					INSERT INTO [scc].[Master_Deleted]
					SELECT [PersonID]
						  ,GETDATE()
						  ,[FirstName]
						  ,[MiddleName]
						  ,[LastName]
						  ,[PhoneNumber]
						  ,[Check]
						  ,[Discription]
						  ,[AgreementOnTransfer]
						  ,[ProcessingOfPersonalData]
						  ,[Reference]
						  ,[Policy]
						  ,[Photo]
						  ,[PassportCopy]
						  ,[INN]
						  ,[SNILS]
						  ,[DocNumber]
						  ,[CityName]
						  ,[MethodName]
						  ,[sysDateCreated]
						  ,[sysDateModified]
						  ,[Payment]
						  ,[WayOfLearning]
						  ,[Interview]
						  ,[BallExtraPoints]
						  ,[UniversityName]
						  ,[Speciality]
						  ,[MotherFirstName]
						  ,[MotherMiddleName]
						  ,[MotherLastName]
						  ,[MotherPhoneNumber]
						  ,[FatherFirstName]
						  ,[FatherMiddleName]
						  ,[FatherLastName]
						  ,[FatherPhoneNumber]
						  ,[FirstDirection]
						  ,[SecondDirection]
						  ,[ThirdDirection]
					  FROM [scc].[vw_Master_FullInfo]
						WHERE [PersonID] = @PersonID


					IF EXISTS (SELECT 1 
							   FROM [scc].[Decree_Person]
							   WHERE [PersonID] = @PersonID)
						BEGIN
							DELETE [scc].[Decree_Person]
							WHERE [PersonID] = @PersonID
						END

					IF EXISTS (SELECT 1 
							   FROM [scc].[Priority]
							   WHERE [PersonID] = @PersonID)
						BEGIN
							DELETE [scc].[Priority]
							WHERE [PersonID] = @PersonID
						END

					IF EXISTS (SELECT 1 
							   FROM [scc].[Parent]
							   WHERE [PersonID] = @PersonID)
						BEGIN
							DELETE [scc].[Parent]
							WHERE [PersonID] = @PersonID
						END

					DELETE [scc].[Master]
					WHERE [PersonID] = @PersonID

					DELETE [scc].[Person]
					WHERE [PersonID] = @PersonID	

				COMMIT TRAN

	END TRY
	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRAN;
		THROW;
	END CATCH
	SET NOCOUNT OFF
END
