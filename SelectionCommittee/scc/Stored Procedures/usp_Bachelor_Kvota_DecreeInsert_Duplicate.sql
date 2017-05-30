
CREATE PROCEDURE [scc].[usp_Bachelor_Kvota_DecreeInsert_Duplicate]
@DecreeNumber NVARCHAR(100),
@DecreeProtocol NVARCHAR(100),
@DecreeName NVARCHAR(100),
@DecreeDate DATE,
@Kvota INT
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @ErrorMessage AS NVARCHAR(255) = '';
	DECLARE @ErrorCode AS INT = 55063;
	DECLARE @ID AS INT; DECLARE @DecreeID as INT; SET @DecreeID = (SELECT CASE WHEN MAX(DecreeID) IS NULL THEN 1 ELSE MAX(DecreeID) + 1 END FROM [scc].[Decree_Duplicate]);
	
	IF((REPLACE(@DecreeNumber,' ','') = '') OR (REPLACE(@DecreeNumber,' ','') = 'null')) SET @DecreeNumber = NULL;
	IF((REPLACE(@DecreeProtocol,' ','') = '') OR (REPLACE(@DecreeProtocol,' ','') = 'null')) SET @DecreeProtocol = NULL;
	IF((REPLACE(@DecreeName,' ','') = '') OR (REPLACE(@DecreeName,' ','') = 'null')) SET @DecreeName = NULL;

	BEGIN TRY

		IF @Kvota IS NULL
			BEGIN
				SET @ErrorMessage = 'Quantity "Kvota" can''t be null';
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

		INSERT INTO [scc].[Decree_Duplicate]([DecreeID],[DecreeNumber]
									,[DecreeProtocol]
									,[DecreeName]
									,[DecreeDate])
			VALUES (@DecreeID,@DecreeNumber
					,@DecreeProtocol
					,@DecreeName
					,@DecreeDate)

		 

		DELETE [scc].[Decree_Person_Duplicate]
		WHERE [PersonID] IN (SELECT TOP(@Kvota) Bachelor.PersonID
											FROM [scc].[Bachelor_FullInfo_Duplicate] as Bachelor
											WHERE [WayOfLearning] = 1 AND [Certificate] = 1 AND [MethodName] = 'КВОТА'
													AND Bachelor.PersonID NOT IN (SELECT [PersonID] FROM [scc].[Decree_Person_Duplicate] WHERE [ParticipationInAnotherContest] = 0)
											ORDER BY [SumWithMathematics] DESC
												,[BallMathematics] DESC
												,[BallInformatics] DESC
												,[LastName]
												,[FirstName]
												,[MiddleName])
				AND [ParticipationInAnotherContest] = 1

		INSERT INTO [scc].[Decree_Person_Duplicate]([PersonID]
											,[DecreeID]
											,[ParticipationInAnotherContest]
											,[PassDirection])

			SELECT TOP(@Kvota) Bachelor.PersonID
					,@DecreeID
					,0
					,Bachelor.FirstDirection
				FROM [scc].[Bachelor_FullInfo_Duplicate] as Bachelor
				WHERE [WayOfLearning] = 1 AND [Certificate] = 1 AND [MethodName] = 'КВОТА'
						AND Bachelor.PersonID NOT IN (SELECT [PersonID] FROM [scc].[Decree_Person_Duplicate] WHERE [ParticipationInAnotherContest] = 0)
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
