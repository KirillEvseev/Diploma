
CREATE PROCEDURE [scc].[usp_Bachelor_NoExams_DecreeInsert]
@DecreeNumber NVARCHAR(100),
@DecreeProtocol NVARCHAR(100),
@DecreeName NVARCHAR(100),
@DecreeDate DATE,
@NoExams INT
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @ErrorMessage AS NVARCHAR(255) = '';
	DECLARE @ErrorCode AS INT = 55063;
	DECLARE @ID AS INT;

	IF((REPLACE(@DecreeNumber,' ','') = '') OR (REPLACE(@DecreeNumber,' ','') = 'null')) SET @DecreeNumber = NULL;
	IF((REPLACE(@DecreeProtocol,' ','') = '') OR (REPLACE(@DecreeProtocol,' ','') = 'null')) SET @DecreeProtocol = NULL;
	IF((REPLACE(@DecreeName,' ','') = '') OR (REPLACE(@DecreeName,' ','') = 'null')) SET @DecreeName = NULL;

	BEGIN TRY

		IF @NoExams IS NULL
			BEGIN
				SET @ErrorMessage = 'Quantity "No Exams" can''t be null';
				THROW @ErrorCode,@ErrorMessage,1;
			END

		IF @DecreeNumber IS NULL
			BEGIN
				SET @ErrorMessage = 'Decree Number  can''t be null';
				THROW @ErrorCode,@ErrorMessage,1;
			END

		IF @DecreeProtocol IS NULL
			BEGIN
				SET @ErrorMessage = 'Decree Protocol  can''t be null';
				THROW @ErrorCode,@ErrorMessage,1;
			END

		IF @DecreeName IS NULL
			BEGIN
				SET @ErrorMessage = 'Decree Name  can''t be null';
				THROW @ErrorCode,@ErrorMessage,1;
			END

		IF @DecreeDate IS NULL
			BEGIN
				SET @ErrorMessage = 'Decree Date  can''t be null';
				THROW @ErrorCode,@ErrorMessage,1;
			END

		BEGIN TRAN

		INSERT INTO [scc].[Decree]([DecreeNumber]
									,[DecreeProtocol]
									,[DecreeName]
									,[DecreeDate])
			VALUES (@DecreeNumber
					,@DecreeProtocol
					,@DecreeName
					,@DecreeDate)

		SET @ID = SCOPE_IDENTITY()

		DELETE [scc].[Decree_Person]
		WHERE [PersonID] IN (SELECT TOP(@NoExams) Bachelor.PersonID
											FROM [scc].[vw_Bachelor_FullInfo] as Bachelor
											WHERE [WayOfLearning] = 1 AND [Certificate] = 1 AND [MethodName] = 'БЕЗ ЭКЗАМЕНОВ'
													AND Bachelor.PersonID NOT IN (SELECT [PersonID] FROM [scc].[Decree_Person] WHERE [ParticipationInAnotherContest] = 0)
											ORDER BY [SumWithMathematics] DESC
												,[BallMathematics] DESC
												,[BallInformatics] DESC
												,[LastName]
												,[FirstName]
												,[MiddleName])
				AND [ParticipationInAnotherContest] = 1

		INSERT INTO [scc].[Decree_Person]([PersonID]
											,[DecreeID]
											,[ParticipationInAnotherContest]
											,[PassDirection])

				SELECT TOP(@NoExams) Bachelor.PersonID
									,@ID
									,0
									,Bachelor.FirstDirection
					FROM [scc].[vw_Bachelor_FullInfo] as Bachelor
					WHERE [WayOfLearning] = 1 AND [Certificate] = 1 AND [MethodName] = 'БЕЗ ЭКЗАМЕНОВ'
							AND Bachelor.PersonID NOT IN (SELECT [PersonID] FROM [scc].[Decree_Person] WHERE [ParticipationInAnotherContest] = 0)
					ORDER BY [SumWithMathematics] DESC
						,[BallMathematics] DESC
						,[BallInformatics] DESC
						,[LastName]
						,[FirstName]
						,[MiddleName];

		COMMIT TRAN
	END TRY

	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRAN;
		THROW;
	END CATCH
	SET NOCOUNT OFF
END
