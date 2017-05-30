
CREATE PROCEDURE [scc].[usp_Bachelor_Rank]
@QuantityNoExams TINYINT,
@QuantityKvota TINYINT,
@QuantityCelevoe TINYINT
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @ErrorMessage AS NVARCHAR(255) = '';
	DECLARE @ErrorCode AS INT = 55063;

	BEGIN TRY

	IF @QuantityNoExams IS NULL
		BEGIN
			SET @ErrorMessage = 'Quantity (no exam) param is incorrect';
			THROW @ErrorCode,@ErrorMessage,1;
		END	

	IF @QuantityKvota IS NULL
		BEGIN
			SET @ErrorMessage = 'Quantity (kvota) param is incorrect';
			THROW @ErrorCode,@ErrorMessage,1;
		END

	IF @QuantityCelevoe IS NULL
		BEGIN
			SET @ErrorMessage = 'Quantity (celevoe) param is incorrect';
			THROW @ErrorCode,@ErrorMessage,1;
		END

		BEGIN TRAN

			SELECT TOP(@QuantityNoExams) Bachelor.PersonID
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
			INTO #TmpNoExams
				FROM [scc].[vw_Bachelor_FullInfo] as Bachelor
				WHERE [WayOfLearning] = 1 AND [Certificate] = 1 AND [MethodName] = 'БЕЗ ЭКЗАМЕНОВ'
				ORDER BY [SumWithMathematics] DESC
					,[BallMathematics] DESC
					,[BallInformatics] DESC
					,[LastName]
					,[FirstName]
					,[MiddleName];


			SELECT TOP(@QuantityKvota) Bachelor.PersonID
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
			INTO #TmpKvota
				FROM [scc].[vw_Bachelor_FullInfo] as Bachelor
				WHERE [WayOfLearning] = 1 AND [Certificate] = 1 AND [MethodName] = 'КВОТА'
				ORDER BY [SumWithMathematics] DESC
					,[BallMathematics] DESC
					,[BallInformatics] DESC
					,[LastName]
					,[FirstName]
					,[MiddleName];


			SELECT TOP(@QuantityCelevoe) Bachelor.PersonID
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
			INTO #TmpCelevoe
				FROM [scc].[vw_Bachelor_FullInfo] as Bachelor
				WHERE [WayOfLearning] = 1 AND [Certificate] = 1 AND [MethodName] = 'ЦЕЛЕВОЕ'
				ORDER BY [SumWithMathematics] DESC
					,[BallMathematics] DESC
					,[BallInformatics] DESC
					,[LastName]
					,[FirstName]
					,[MiddleName];

			WITH CTE AS(
			SELECT Bachelor.PersonID
					,Bachelor.[LastName]
					,Bachelor.[FirstName]
					,Bachelor.[MiddleName]
					,Bachelor.[SumWithMathematics]
					,Bachelor.[BallMathematics]
					,Bachelor.[BallInformatics]
					,Bachelor.[SumWithSocialSciense]
					,Bachelor.[Certificate]
					,Bachelor.[FirstDirection]
					,Bachelor.[SecondDirection]
					,Bachelor.[ThirdDirection]
					,Bachelor.[Discription]
					,0 AS PRESORT
				FROM #TmpNoExams as Bachelor
			UNION ALL
			SELECT Bachelor.PersonID
					,Bachelor.[LastName]
					,Bachelor.[FirstName]
					,Bachelor.[MiddleName]
					,Bachelor.[SumWithMathematics]
					,Bachelor.[BallMathematics]
					,Bachelor.[BallInformatics]
					,Bachelor.[SumWithSocialSciense]
					,Bachelor.[Certificate]
					,Bachelor.[FirstDirection]
					,Bachelor.[SecondDirection]
					,Bachelor.[ThirdDirection]
					,Bachelor.[Discription]
					,1 AS PRESORT
				FROM #TmpKvota as Bachelor
			UNION ALL
			SELECT TOP(6) Bachelor.PersonID
					,Bachelor.[LastName]
					,Bachelor.[FirstName]
					,Bachelor.[MiddleName]
					,Bachelor.[SumWithMathematics]
					,Bachelor.[BallMathematics]
					,Bachelor.[BallInformatics]
					,Bachelor.[SumWithSocialSciense]
					,Bachelor.[Certificate]
					,Bachelor.[FirstDirection]
					,Bachelor.[SecondDirection]
					,Bachelor.[ThirdDirection]
					,Bachelor.[Discription]
					,2 AS PRESORT
				FROM #TmpCelevoe as Bachelor
			UNION ALL
			(SELECT Bachelor.PersonID
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
					,3 AS PRESORT
				FROM [scc].[vw_Bachelor_FullInfo] as Bachelor
				WHERE [WayOfLearning] = 1
			EXCEPT
			(SELECT Bachelor.PersonID
					,Bachelor.[LastName]
					,Bachelor.[FirstName]
					,Bachelor.[MiddleName]
					,Bachelor.[SumWithMathematics]
					,Bachelor.[BallMathematics]
					,Bachelor.[BallInformatics]
					,Bachelor.[SumWithSocialSciense]
					,Bachelor.[Certificate]
					,Bachelor.[FirstDirection]
					,Bachelor.[SecondDirection]
					,Bachelor.[ThirdDirection]
					,Bachelor.[Discription]
					,3 AS PRESORT
				FROM #TmpNoExams as Bachelor
			UNION ALL
			SELECT Bachelor.PersonID
					,Bachelor.[LastName]
					,Bachelor.[FirstName]
					,Bachelor.[MiddleName]
					,Bachelor.[SumWithMathematics]
					,Bachelor.[BallMathematics]
					,Bachelor.[BallInformatics]
					,Bachelor.[SumWithSocialSciense]
					,Bachelor.[Certificate]
					,Bachelor.[FirstDirection]
					,Bachelor.[SecondDirection]
					,Bachelor.[ThirdDirection]
					,Bachelor.[Discription]
					,3 AS PRESORT
				FROM #TmpKvota as Bachelor
			UNION ALL
			SELECT Bachelor.PersonID
					,Bachelor.[LastName]
					,Bachelor.[FirstName]
					,Bachelor.[MiddleName]
					,Bachelor.[SumWithMathematics]
					,Bachelor.[BallMathematics]
					,Bachelor.[BallInformatics]
					,Bachelor.[SumWithSocialSciense]
					,Bachelor.[Certificate]
					,Bachelor.[FirstDirection]
					,Bachelor.[SecondDirection]
					,Bachelor.[ThirdDirection]
					,Bachelor.[Discription]
					,3 AS PRESORT
				FROM #TmpCelevoe as Bachelor
				)))

			SELECT  PI.Rank AS PI_Rank
					,KB.Rank AS KB_Rank
					,FIIT.Rank AS FIIT_Rank
					,MOAIS.Rank AS MOAIS_Rank
					,IVT.Rank AS IVT_Rank
					,SAU.Rank AS SAU_Rank
					,Bachelor.[LastName]
					,Bachelor.[FirstName]
					,Bachelor.[MiddleName]
					,Bachelor.[SumWithMathematics]
					,Bachelor.Certificate
					,Bachelor.[FirstDirection]
					,Bachelor.[SecondDirection]
					,Bachelor.[ThirdDirection]
					,Bachelor.[Discription]
					,CASE WHEN Bachelor.PRESORT = 0 THEN N'БЕЗ ЭКЗАМЕНОВ'
						  WHEN Bachelor.PRESORT = 1 THEN N'КВОТА'
						  WHEN Bachelor.PRESORT = 2 THEN N'ЦЕЛЕВОЕ'
						  WHEN Bachelor.PRESORT = 3 THEN N'ПО КОНКУРСУ'
					END AS MOF
				FROM CTE AS Bachelor
					LEFT JOIN (SELECT RANK() OVER (ORDER BY Bachelor.PRESORT
															,Bachelor.[SumWithMathematics] DESC
															,Bachelor.[BallMathematics] DESC
															,Bachelor.[BallInformatics] DESC
															,Bachelor.[LastName]
															,Bachelor.[FirstName]
															,Bachelor.[MiddleName]) as Rank
															,Bachelor.[PersonID] as PersonID
											FROM CTE as Bachelor
												WHERE [FirstDirection] = 'ПИ' OR 
														[SecondDirection] = 'ПИ' OR
														[ThirdDirection] = 'ПИ') AS PI
							ON PI.PersonID = Bachelor.PersonID
					LEFT JOIN (SELECT RANK() OVER (ORDER BY Bachelor.PRESORT
															,Bachelor.[SumWithMathematics] DESC
															,Bachelor.[BallMathematics] DESC
															,Bachelor.[BallInformatics] DESC
															,Bachelor.[LastName]
															,Bachelor.[FirstName]
															,Bachelor.[MiddleName]) as Rank
															,Bachelor.[PersonID] as PersonID
											FROM CTE as Bachelor
												WHERE [FirstDirection] = 'КБ' OR 
														[SecondDirection] = 'КБ' OR
														[ThirdDirection] = 'КБ') AS KB
							ON KB.PersonID = Bachelor.PersonID
					LEFT JOIN (SELECT RANK() OVER (ORDER BY Bachelor.PRESORT
															,Bachelor.[SumWithMathematics] DESC
															,Bachelor.[BallMathematics] DESC
															,Bachelor.[BallInformatics] DESC
															,Bachelor.[LastName]
															,Bachelor.[FirstName]
															,Bachelor.[MiddleName]) as Rank
															,Bachelor.[PersonID] as PersonID
											FROM CTE as Bachelor
												WHERE [FirstDirection] = 'ФИИТ' OR 
														[SecondDirection] = 'ФИИТ' OR
														[ThirdDirection] = 'ФИИТ') AS FIIT
							ON FIIT.PersonID = Bachelor.PersonID
					LEFT JOIN (SELECT RANK() OVER (ORDER BY Bachelor.PRESORT
															,Bachelor.[SumWithMathematics] DESC
															,Bachelor.[BallMathematics] DESC
															,Bachelor.[BallInformatics] DESC
															,Bachelor.[LastName]
															,Bachelor.[FirstName]
															,Bachelor.[MiddleName]) as Rank
															,Bachelor.[PersonID] as PersonID
											FROM CTE as Bachelor
												WHERE [FirstDirection] = 'МОАИС' OR 
														[SecondDirection] = 'МОАИС' OR
														[ThirdDirection] = 'МОАИС') AS MOAIS
							ON MOAIS.PersonID = Bachelor.PersonID
					LEFT JOIN (SELECT RANK() OVER (ORDER BY Bachelor.PRESORT
															,Bachelor.[SumWithMathematics] DESC
															,Bachelor.[BallMathematics] DESC
															,Bachelor.[BallInformatics] DESC
															,Bachelor.[LastName]
															,Bachelor.[FirstName]
															,Bachelor.[MiddleName]) as Rank
															,Bachelor.[PersonID] as PersonID
											FROM CTE as Bachelor
												WHERE [FirstDirection] = 'ИВТ' OR 
														[SecondDirection] = 'ИВТ' OR
														[ThirdDirection] = 'ИВТ') AS IVT
							ON IVT.PersonID = Bachelor.PersonID
					LEFT JOIN (SELECT RANK() OVER (ORDER BY Bachelor.PRESORT
															,Bachelor.[SumWithMathematics] DESC
															,Bachelor.[BallMathematics] DESC
															,Bachelor.[BallInformatics] DESC
															,Bachelor.[LastName]
															,Bachelor.[FirstName]
															,Bachelor.[MiddleName]) as Rank
															,Bachelor.[PersonID] as PersonID
											FROM CTE as Bachelor
												WHERE [FirstDirection] = 'САУ' OR 
														[SecondDirection] = 'САУ' OR
														[ThirdDirection] = 'САУ') AS SAU
							ON SAU.PersonID = Bachelor.PersonID
				ORDER BY Bachelor.PRESORT
						,Bachelor.[SumWithMathematics] DESC
						,Bachelor.[BallMathematics] DESC
						,Bachelor.[BallInformatics] DESC
						,Bachelor.[LastName]
						,Bachelor.[FirstName]
						,Bachelor.[MiddleName]

			DROP TABLE #TmpNoExams
			DROP TABLE #TmpKvota
			DROP TABLE #TmpCelevoe
		COMMIT TRAN
	END TRY

	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRAN;
		THROW;
	END CATCH
	SET NOCOUNT OFF
END
