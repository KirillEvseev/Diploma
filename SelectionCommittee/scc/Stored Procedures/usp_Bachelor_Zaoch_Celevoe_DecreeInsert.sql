
CREATE PROCEDURE [scc].[usp_Bachelor_Zaoch_Celevoe_DecreeInsert]
@DecreeNumber NVARCHAR(100),
@DecreeProtocol NVARCHAR(100),
@DecreeName NVARCHAR(100),
@DecreeDate DATE,
@Celevoe INT
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

		IF @Celevoe IS NULL
			BEGIN
				SET @ErrorMessage = 'Quantity "Celevoe" can''t be null';
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
		WHERE [PersonID] IN (SELECT TOP(@Celevoe) Bachelor.PersonID
											FROM [scc].[vw_Bachelor_FullInfo] as Bachelor
											WHERE [WayOfLearning] = 0 AND [Certificate] = 1 AND [MethodName] = 'ЦЕЛЕВОЕ'
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

			SELECT TOP(@Celevoe) Bachelor.PersonID
					,@ID
					,0
					,Bachelor.FirstDirection
				FROM [scc].[vw_Bachelor_FullInfo] as Bachelor
				WHERE [WayOfLearning] = 0 AND [Certificate] = 1 AND [MethodName] = 'ЦЕЛЕВОЕ'
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
