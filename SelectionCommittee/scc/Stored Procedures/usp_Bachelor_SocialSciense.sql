
CREATE PROCEDURE [scc].[usp_Bachelor_SocialSciense]
AS
BEGIN
	WITH CTE AS 
	(SELECT Bachelor.PersonID
			,Bachelor.[LastName]
			,Bachelor.[FirstName]
			,Bachelor.[MiddleName]
			,Bachelor.[SumWithSocialSciense]
			,CASE WHEN Bachelor.[Certificate] = 0 
				  THEN N'КОПИЯ'
				  ELSE N'ОРИГИНАЛ'
			END AS Certificate
			,Bachelor.[FirstDirection]
			,Bachelor.[SecondDirection]
			,Bachelor.[ThirdDirection]
			,Bachelor.[BallSocialSciense]
			,Bachelor.[BallInformatics]
			,Bachelor.[Discription]
			,0 AS PRESORT
		FROM [scc].[vw_Bachelor_FullInfo] AS Bachelor
		WHERE [BallSocialSciense] IS NOT NULL AND [MethodName] = 'БЕЗ ЭКЗАМЕНОВ' AND [BallSocialSciense] != 0
	UNION ALL
	SELECT Bachelor.PersonID
			,Bachelor.[LastName]
			,Bachelor.[FirstName]
			,Bachelor.[MiddleName]
			,Bachelor.[SumWithSocialSciense]
			,CASE WHEN Bachelor.[Certificate] = 0 
				  THEN N'КОПИЯ'
				  ELSE N'ОРИГИНАЛ'
			END AS Certificate
			,Bachelor.[FirstDirection]
			,Bachelor.[SecondDirection]
			,Bachelor.[ThirdDirection]
			,Bachelor.[BallSocialSciense]
			,Bachelor.[BallInformatics]
			,Bachelor.[Discription]
			,1 AS PRESORT
		FROM [scc].[vw_Bachelor_FullInfo] AS Bachelor
		WHERE [BallSocialSciense] IS NOT NULL AND [MethodName] = 'КВОТА' AND [BallSocialSciense] != 0
	UNION ALL
	SELECT Bachelor.PersonID
			,Bachelor.[LastName]
			,Bachelor.[FirstName]
			,Bachelor.[MiddleName]
			,Bachelor.[SumWithSocialSciense]
			,CASE WHEN Bachelor.[Certificate] = 0 
				  THEN N'КОПИЯ'
				  ELSE N'ОРИГИНАЛ'
			END AS Certificate
			,Bachelor.[FirstDirection]
			,Bachelor.[SecondDirection]
			,Bachelor.[ThirdDirection]
			,Bachelor.[BallSocialSciense]
			,Bachelor.[BallInformatics]
			,Bachelor.[Discription]
			,2 AS PRESORT
		FROM [scc].[vw_Bachelor_FullInfo] AS Bachelor
		WHERE [BallSocialSciense] IS NOT NULL AND [MethodName] = 'ЦЕЛЕВОЕ' AND [BallSocialSciense] != 0
	UNION ALL
	SELECT Bachelor.PersonID
			,Bachelor.[LastName]
			,Bachelor.[FirstName]
			,Bachelor.[MiddleName]
			,Bachelor.[SumWithSocialSciense]
			,CASE WHEN Bachelor.[Certificate] = 0 
				  THEN N'КОПИЯ'
				  ELSE N'ОРИГИНАЛ'
			END AS Certificate
			,Bachelor.[FirstDirection]
			,Bachelor.[SecondDirection]
			,Bachelor.[ThirdDirection]
			,Bachelor.[BallSocialSciense]
			,Bachelor.[BallInformatics]
			,Bachelor.[Discription]
			,3 AS PRESORT
		FROM [scc].[vw_Bachelor_FullInfo] AS Bachelor
		WHERE [BallSocialSciense] IS NOT NULL AND [MethodName] = 'КОНКУРС' AND [BallSocialSciense] != 0)

	SELECT Bachelor.[LastName]
			,Bachelor.[FirstName]
			,Bachelor.[MiddleName]
			,Bachelor.[SumWithSocialSciense]
			,Certificate
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
		ORDER BY Bachelor.[PRESORT]
				,Bachelor.[SumWithSocialSciense] DESC
				,Bachelor.[BallSocialSciense] DESC
				,Bachelor.[BallInformatics] DESC
END
