
CREATE PROCEDURE [scc].[usp_Bachelor_Zaoch_NoExams_Select_Duplicate]
@NoExams INT
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @ErrorMessage AS NVARCHAR(255) = '';
	DECLARE @ErrorCode AS INT = 55063;

	BEGIN TRY

		IF @NoExams IS NULL
			BEGIN
				SET @ErrorMessage = 'Quantity "No Exams" param is incorrect';
				THROW @ErrorCode,@ErrorMessage,1;
			END

		SELECT TOP(@NoExams) Bachelor.PersonID
				,Bachelor.[LastName]
				,Bachelor.[FirstName]
				,Bachelor.[MiddleName]
				,Bachelor.[SumWithMathematics]
				,Bachelor.[BallMathematics]
				,Bachelor.[BallInformatics]
				,Bachelor.[SumWithSocialSciense]
				,CASE WHEN Bachelor.[Certificate] = 0 
						THEN N'КОПИЯ'
						ELSE N'ОРИГИНАЛ'
				END AS Certificate
				,Bachelor.[FirstDirection]
				,Bachelor.[SecondDirection]
				,Bachelor.[ThirdDirection]
				,Bachelor.[Discription]
				,Bachelor.[MethodName]
			FROM [scc].[Bachelor_FullInfo_Duplicate] as Bachelor
			WHERE [WayOfLearning] = 0 AND [Certificate] = 1 AND [MethodName] = 'БЕЗ ЭКЗАМЕНОВ'
					AND Bachelor.PersonID NOT IN (SELECT [PersonID] FROM [scc].[Decree_Person_Duplicate] WHERE [ParticipationInAnotherContest] = 0)
			ORDER BY [SumWithMathematics] DESC
				,[BallMathematics] DESC
				,[BallInformatics] DESC
				,[LastName]
				,[FirstName]
				,[MiddleName];
	END TRY

	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRAN;
		THROW;
	END CATCH
	SET NOCOUNT OFF
END
