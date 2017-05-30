
CREATE PROCEDURE [scc].[usp_Bachelor_Delete]
	@PersonID INT
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @ErrorMessage AS NVARCHAR(255) = '';
	DECLARE @ErrorCode AS INT = 55063;
	
	BEGIN TRY

	--обработка ошибок

		IF @PersonID IS NULL
			BEGIN
				SET @ErrorMessage = 'Person ID can''t be NULL';
				THROW @ErrorCode,@ErrorMessage, 1;
			END
				
		--однако PersonID может существовать но принадлежать магистру или аспиранту
		--нам же в этой процедуре требуется удалить только бакалавра
		--поэтому производим проверку не только на person но и bachelor 

		ELSE
			IF NOT EXISTS (SELECT 1 
						   FROM [scc].[Person] as P
								JOIN [scc].[Bachelor] as B
									ON P.PersonID = B.PersonID
						   WHERE B.[PersonID] = @PersonID)

			BEGIN
				SET @ErrorMessage = 'Bachelor with ID ''' + CAST(@PersonID AS NVARCHAR)+''' does not exists.';
				THROW @ErrorCode,@ErrorMessage, 1;
			END

			--иначе начинаем удаление

			ELSE 

				BEGIN TRAN


					INSERT INTO [scc].[Bachelor_Deleted]
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
						WHERE [PersonID] = @PersonID


					--сначала удаляем все то, что ссылается на Person

					--Приказы

					IF EXISTS (SELECT 1 
							   FROM [scc].[Decree_Person]
							   WHERE [PersonID] = @PersonID)
						BEGIN
							DELETE [scc].[Decree_Person]
							WHERE [PersonID] = @PersonID
						END
				
					--Приоритеты направлений

					IF EXISTS (SELECT 1 
							   FROM [scc].[Priority]
							   WHERE [PersonID] = @PersonID)
						BEGIN
							DELETE [scc].[Priority]
							WHERE [PersonID] = @PersonID
						END

					--Родителей

					IF EXISTS (SELECT 1 
							   FROM [scc].[Parent]
							   WHERE [PersonID] = @PersonID)
						BEGIN
							DELETE [scc].[Parent]
							WHERE [PersonID] = @PersonID
						END

					--И удаляем сначала бакалавра, а потом Person

					DELETE [scc].[Bachelor]
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
