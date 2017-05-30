
CREATE PROCEDURE [scc].[Duplicate_Update]
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @ErrorMessage AS NVARCHAR(255) = '';
	DECLARE @ErrorCode AS INT = 55063;
	
	BEGIN TRY

		BEGIN TRAN
			DELETE FROM [scc].[Decree_Person_Duplicate];
			DELETE FROM [scc].[Priority_Duplicate];
			DELETE FROM [scc].[Decree_Duplicate];
			DELETE FROM [scc].[Bachelor_FullInfo_Duplicate];


			INSERT INTO [scc].[Decree_Duplicate]
			SELECT [DecreeID]
					,[DecreeNumber]
					,[DecreeProtocol]
					,[DecreeName]
					,[DecreeDate]
				FROM [scc].[Decree];

			INSERT INTO [scc].[Bachelor_FullInfo_Duplicate]
			SELECT [PersonID]
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
				  ,[Certificate]
				  ,[Payment]
				  ,[WayOfLearning]
				  ,[BallRussian]
				  ,[BallMathematics]
				  ,[BallInformatics]
				  ,[BallPhysics]
				  ,[BallSocialSciense]
				  ,[BallExtraPoints]
				  ,[SumWithMathematics]
				  ,[SumWithSocialSciense]
				  ,[SchoolName]
				  ,[SchoolCity]
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
			  FROM [scc].[vw_Bachelor_FullInfo]

			INSERT INTO [scc].[Priority_Duplicate]
			SELECT Priority.[PersonID]
					,Priority.[DirectionID]
					,Priority.[State]
				FROM [scc].[Priority] AS Priority
					JOIN [scc].[Bachelor] AS Bachelor
						ON Bachelor.PersonID = Priority.PersonID;

			INSERT INTO [scc].[Decree_Person_Duplicate]
			SELECT DecreePerson.[PersonID]
					,DecreePerson.[DecreeID]
					,DecreePerson.[ParticipationInAnotherContest]
					,DecreePerson.[PassDirection]
				FROM [scc].[Decree_Person] AS DecreePerson
					JOIN [scc].[Bachelor] AS Bachelor
						ON Bachelor.PersonID = DecreePerson.PersonID;

		COMMIT TRAN

	END TRY
	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRAN;
		THROW;
	END CATCH
	SET NOCOUNT OFF
END
