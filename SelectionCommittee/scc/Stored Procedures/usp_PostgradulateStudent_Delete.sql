
CREATE PROCEDURE [scc].[usp_PostgradulateStudent_Delete]
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
								JOIN [scc].[PostgradulateStudent] as PS
									ON P.PersonID = PS.PersonID
						   WHERE PS.[PersonID] = @PersonID)

			BEGIN
				SET @ErrorMessage = 'Postgradulate Student with ID ''' + CAST(@PersonID AS NVARCHAR)+''' does not exists.';
				THROW @ErrorCode,@ErrorMessage, 1;
			END

			ELSE 

				BEGIN TRAN

					INSERT INTO [scc].[PostgradulateStudent_Deleted]
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
						  ,[BallPhilosophy]
						  ,[BallEnglish]
						  ,[BallSpecial]
						  ,[SumBalls]
						  ,[UniversityID]
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
					  FROM [scc].[vw_PostgradulateStudent_FullInfo]
						WHERE [PersonID] = @PersonID

					IF EXISTS (SELECT 1 
							   FROM [scc].[Decree_Person]
							   WHERE [PersonID] = @PersonID)
						BEGIN
							DELETE [scc].[Decree_Person]
							WHERE [PersonID] = @PersonID
						END

					IF EXISTS (SELECT 1 
							   FROM [scc].[Parent]
							   WHERE [PersonID] = @PersonID)
						BEGIN
							DELETE [scc].[Parent]
							WHERE [PersonID] = @PersonID
						END

					DELETE [scc].[PostgradulateStudent]
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
