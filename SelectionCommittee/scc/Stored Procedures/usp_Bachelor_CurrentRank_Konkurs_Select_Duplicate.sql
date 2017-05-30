
CREATE PROCEDURE [scc].[usp_Bachelor_CurrentRank_Konkurs_Select_Duplicate]
	@NoExams	INT,
	@Kvota		INT,
	@Celevoe	INT,
	@PI			INT,
	@KB			INT,
	@FIIT		INT,
	@MOAIS		INT,
	@IVT		INT,
	@SAU		INT,
	@TotalQuantity INT,
	@OnlyOriginal BIT,
	@PISelect BIT,
	@KBSelect BIT,
	@FIITSelect BIT,
	@MOAISSelect BIT,
	@IVTSelect BIT,
	@SAUSelect BIT
	AS
BEGIN
	SET NOCOUNT ON
	DECLARE @FD AS NVARCHAR(50);
	DECLARE @ErrorMessage AS NVARCHAR(255) = '';
	DECLARE @ErrorCode AS INT = 55063;
	DECLARE @SD AS NVARCHAR(50);
	DECLARE @TD AS NVARCHAR(50);

	BEGIN TRY

		IF @NoExams IS NULL
			BEGIN
				SET @ErrorMessage = 'Quantity "No Exams" can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	

		IF @Kvota IS NULL
			BEGIN
				SET @ErrorMessage = 'Quantity "Kvota" can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	

		IF @Celevoe IS NULL
			BEGIN
				SET @ErrorMessage = 'Quantity "Celevoe" can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	

		IF @PI IS NULL
			BEGIN
				SET @ErrorMessage = 'Quantity "PI" can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	


		IF @KB IS NULL
			BEGIN
				SET @ErrorMessage = 'Quantity "KB" can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	


		IF @MOAIS IS NULL
			BEGIN
				SET @ErrorMessage = 'Quantity "MOAIS" can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	

		IF @FIIT IS NULL
			BEGIN
				SET @ErrorMessage = 'Quantity "FIIT" can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	


		IF @IVT IS NULL
			BEGIN
				SET @ErrorMessage = 'Quantity "IVT" can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	


		IF @SAU IS NULL
			BEGIN
				SET @ErrorMessage = 'Quantity "SAU" can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	


			BEGIN TRAN
			
			CREATE TABLE #TmpSelectedDirection (
					Direction NVARCHAR(100));

			IF @PISelect = 1 
				BEGIN
					INSERT INTO #TmpSelectedDirection
					VALUES ('ПИ');
				END

			IF @KBSelect = 1 
				BEGIN
					INSERT INTO #TmpSelectedDirection
					VALUES ('КБ');
				END

			IF @FIITSelect = 1 
				BEGIN
					INSERT INTO #TmpSelectedDirection
					VALUES ('ФИИТ');
				END

			IF @MOAISSelect = 1 
				BEGIN
					INSERT INTO #TmpSelectedDirection
					VALUES ('МОАИС');
				END

			IF @IVTSelect = 1 
				BEGIN
					INSERT INTO #TmpSelectedDirection
					VALUES ('ИВТ');
				END

			IF @SAUSelect = 1 
				BEGIN
					INSERT INTO #TmpSelectedDirection
					VALUES ('САУ');
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
			INTO #TmpNoExams
				FROM [scc].[Bachelor_FullInfo_Duplicate] as Bachelor
				WHERE [WayOfLearning] = 1 AND [Certificate] = 1 AND [MethodName] = 'БЕЗ ЭКЗАМЕНОВ'
						AND Bachelor.PersonID NOT IN (SELECT [PersonID] FROM [scc].[Decree_Person_Duplicate] WHERE [ParticipationInAnotherContest] = 0)
				ORDER BY [SumWithMathematics] DESC
					,[BallMathematics] DESC
					,[BallInformatics] DESC
					,[LastName]
					,[FirstName]
					,[MiddleName];


			SELECT TOP(@Kvota) Bachelor.PersonID
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
			INTO #TmpKvota
				FROM [scc].[Bachelor_FullInfo_Duplicate] as Bachelor
				WHERE [WayOfLearning] = 1 AND [Certificate] = 1 AND [MethodName] = 'КВОТА'
						AND Bachelor.PersonID NOT IN (SELECT [PersonID] FROM [scc].[Decree_Person_Duplicate] WHERE [ParticipationInAnotherContest] = 0)
				ORDER BY [SumWithMathematics] DESC
					,[BallMathematics] DESC
					,[BallInformatics] DESC
					,[LastName]
					,[FirstName]
					,[MiddleName];


			SELECT TOP(@Celevoe) Bachelor.PersonID
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
			INTO #TmpCelevoe
				FROM [scc].[Bachelor_FullInfo_Duplicate] as Bachelor
				WHERE [WayOfLearning] = 1 AND [Certificate] = 1 AND [MethodName] = 'ЦЕЛЕВОЕ'
						AND Bachelor.PersonID NOT IN (SELECT [PersonID] FROM [scc].[Decree_Person_Duplicate] WHERE [ParticipationInAnotherContest] = 0)
				ORDER BY [SumWithMathematics] DESC
					,[BallMathematics] DESC
					,[BallInformatics] DESC
					,[LastName]
					,[FirstName]
					,[MiddleName];

	CREATE TABLE #TmpKonkurs (PersonID int
					,[LastName] nvarchar (70)
					,[FirstName] nvarchar (70)
					,[MiddleName] nvarchar (70)
					,[SumWithMathematics] smallint
					,[BallMathematics] smallint
					,[BallInformatics] smallint
					,[SumWithSocialSciense] smallint
					,[Certificate] NVARCHAR(50)
					,[FirstDirection] NVARCHAR(50)
					,[SecondDirection] NVARCHAR(50)
					,[ThirdDirection] NVARCHAR(50)
					,[Discription] NVARCHAR(2000));

			IF @OnlyOriginal = 'False'
				BEGIN
				INSERT INTO #TmpKonkurs
					SELECT Bachelor.PersonID
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
						FROM [scc].[Bachelor_FullInfo_Duplicate] as Bachelor
						WHERE [WayOfLearning] = 1
								AND Bachelor.PersonID NOT IN (SELECT [PersonID] FROM [scc].[Decree_Person_Duplicate] WHERE [ParticipationInAnotherContest] = 0)
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
						FROM #TmpKvota as Bachelor
					UNION ALL
					SELECT  Bachelor.PersonID
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
						FROM #TmpCelevoe as Bachelor
						)
						ORDER BY Bachelor.[SumWithMathematics] DESC
								,Bachelor.[BallMathematics] DESC
								,Bachelor.[BallInformatics] DESC
								,Bachelor.[LastName]
								,Bachelor.[FirstName]
								,Bachelor.[MiddleName]
				END
			ELSE
				BEGIN
				INSERT INTO #TmpKonkurs
					SELECT Bachelor.PersonID
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
						FROM [scc].[Bachelor_FullInfo_Duplicate] as Bachelor
						WHERE [WayOfLearning] = 1 AND [Certificate] = 1
								AND Bachelor.PersonID NOT IN (SELECT [PersonID] FROM [scc].[Decree_Person_Duplicate] WHERE [ParticipationInAnotherContest] = 0)
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
						FROM #TmpKvota as Bachelor
					UNION ALL
					SELECT  Bachelor.PersonID
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
						FROM #TmpCelevoe as Bachelor
						)
						ORDER BY Bachelor.[SumWithMathematics] DESC
								,Bachelor.[BallMathematics] DESC
								,Bachelor.[BallInformatics] DESC
								,Bachelor.[LastName]
								,Bachelor.[FirstName]
								,Bachelor.[MiddleName]
				END

	
	

	CREATE TABLE #CurrentRank (PersonID int
					,[LastName] nvarchar (70)
					,[FirstName] nvarchar (70)
					,[MiddleName] nvarchar (70)
					,[SumWithMathematics] smallint
					,[BallMathematics] smallint
					,[BallInformatics] smallint
					,[SumWithSocialSciense] smallint
					,[Certificate] NVARCHAR(50)
					,[FirstDirection] NVARCHAR(50)
					,[SecondDirection] NVARCHAR(50)
					,[ThirdDirection] NVARCHAR(50)
					,[PassDirection] NVARCHAR(50))

	CREATE TABLE #BlackListDirection (MethodName NVARCHAR (50))
	INSERT INTO #BlackListDirection(MethodName)
	VALUES('')
							

	WHILE ((@KB > 0) OR (@PI > 0) OR (@FIIT > 0) OR (@MOAIS > 0) OR (@IVT > 0) OR (@SAU > 0)) AND EXISTS (SELECT 1
																											FROM #TmpKonkurs
																											WHERE #TmpKonkurs.PersonID NOT IN (SELECT #CurrentRank.PersonID FROM #CurrentRank)
																												AND
																													([FirstDirection] NOT IN (SELECT MethodName FROM #BlackListDirection) 
																													OR
																													[SecondDirection] NOT IN (SELECT MethodName FROM #BlackListDirection)
																													OR
																													[ThirdDirection] NOT IN (SELECT MethodName FROM #BlackListDirection)
																													))
		BEGIN

			IF @KB = 0 
				BEGIN
					INSERT INTO #BlackListDirection (MethodName)
					VALUES (N'КБ')
					SET @KB = -1
				END

			IF @PI = 0 
				BEGIN 
					INSERT INTO #BlackListDirection (MethodName)
					VALUES (N'ПИ')
					SET @PI = -1
				END


			IF @FIIT = 0 
				BEGIN
					INSERT INTO #BlackListDirection (MethodName)
					VALUES (N'ФИИТ')
				SET @FIIT = -1
				END

			IF @MOAIS = 0 
			BEGIN
				INSERT INTO #BlackListDirection (MethodName)
				VALUES (N'МОАИС')
				SET @MOAIS = -1
			END

			IF @IVT = 0 
				BEGIN 
					INSERT INTO #BlackListDirection (MethodName)
					VALUES (N'ИВТ')
				SET @IVT = -1
				END

			IF @SAU = 0 
				BEGIN 
					INSERT INTO #BlackListDirection (MethodName)
					VALUES (N'САУ')
					SET @SAU = -1
				END

				
					INSERT INTO #CurrentRank
					SELECT TOP(1)  [PersonID]
									,[LastName]
									,[FirstName]
									,[MiddleName]
									,[SumWithMathematics]
									,[BallMathematics]
									,[BallInformatics]
									,[SumWithSocialSciense]
									,[Certificate]
									,[FirstDirection]
									,[SecondDirection]
									,[ThirdDirection]
									,NULL
							FROM #TmpKonkurs
							WHERE #TmpKonkurs.PersonID NOT IN (SELECT #CurrentRank.PersonID FROM #CurrentRank)
								AND
									([FirstDirection] NOT IN (SELECT MethodName FROM #BlackListDirection) 
									OR
									[SecondDirection] NOT IN (SELECT MethodName FROM #BlackListDirection)
									OR
									[ThirdDirection] NOT IN (SELECT MethodName FROM #BlackListDirection)
									)

			SET @FD = (SELECT TOP(1) #CurrentRank.FirstDirection FROM #CurrentRank ORDER BY [SumWithMathematics]
																							,[BallMathematics]
																							,[BallInformatics]
																							,[LastName] DESC
																							,[FirstName] DESC
																							,[MiddleName] DESC)
			SET @SD = (SELECT TOP(1) #CurrentRank.SecondDirection FROM #CurrentRank ORDER BY [SumWithMathematics]
																							,[BallMathematics]
																							,[BallInformatics]
																							,[LastName] DESC
																							,[FirstName] DESC
																							,[MiddleName] DESC)
			SET @TD = (SELECT TOP(1) #CurrentRank.ThirdDirection FROM #CurrentRank ORDER BY [SumWithMathematics]
																							,[BallMathematics]
																							,[BallInformatics]
																							,[LastName] DESC
																							,[FirstName] DESC
																							,[MiddleName] DESC)

			IF @FD = 'КБ'
				BEGIN
					IF @KB > 0 
						BEGIN 
							UPDATE #CurrentRank 
								SET PassDirection = N'КБ'
								WHERE PassDirection IS NULL; 
							SET @KB = @KB - 1 
						END
					ELSE
						BEGIN
						IF @SD = 'ПИ' 
							BEGIN 
								IF @PI > 0 
									BEGIN
										UPDATE #CurrentRank 
											SET PassDirection = N'ПИ'
											WHERE PassDirection IS NULL;
										SET @PI = @PI - 1 
									END
								ELSE BEGIN
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL; 
												SET @IVT = @IVT - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END
							END
						IF @SD = 'ФИИТ' 
							BEGIN 
								IF @FIIT > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'ФИИТ'
											WHERE PassDirection IS NULL;
										SET @FIIT = @FIIT - 1 
									END
								ELSE BEGIN
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END
							 END
						IF @SD = 'МОАИС' 
							BEGIN 
								IF @MOAIS > 0
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'МОАИС'
											WHERE PassDirection IS NULL;
										SET @MOAIS = @MOAIS - 1
									END
								ELSE BEGIN
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END 
							 END
						IF @SD = 'ИВТ' 
							BEGIN 
								IF @IVT > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'ИВТ'
											WHERE PassDirection IS NULL;
										SET @IVT = @IVT - 1 
									END
								ELSE BEGIN
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END 
							 END
						IF @SD = 'САУ' 
							BEGIN 
								IF @SAU > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'САУ'
											WHERE PassDirection IS NULL;
										SET @SAU = @SAU - 1 
									END
								ELSE BEGIN
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
									 END
							END
						END
				END

			IF @FD = 'ПИ'
				BEGIN
					IF @PI > 0 
						BEGIN 
							UPDATE #CurrentRank 
								SET PassDirection = N'ПИ'
								WHERE PassDirection IS NULL; 
							SET @PI = @PI - 1 
						END
					ELSE
						BEGIN
						IF @SD = 'КБ' 
							BEGIN 
								IF @KB > 0 
									BEGIN
										UPDATE #CurrentRank 
											SET PassDirection = N'КБ'
											WHERE PassDirection IS NULL;
										SET @KB = @KB - 1 
									END
								ELSE BEGIN
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL; 
												SET @IVT = @IVT - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END
							END
						IF @SD = 'ФИИТ' 
							BEGIN 
								IF @FIIT > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'ФИИТ'
											WHERE PassDirection IS NULL;
										SET @FIIT = @FIIT - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END
							 END
						IF @SD = 'МОАИС' 
							BEGIN 
								IF @MOAIS > 0
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'МОАИС'
											WHERE PassDirection IS NULL;
										SET @MOAIS = @MOAIS - 1
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END 
							 END
						IF @SD = 'ИВТ' 
							BEGIN 
								IF @IVT > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'ИВТ'
											WHERE PassDirection IS NULL;
										SET @IVT = @IVT - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END 
							 END
						IF @SD = 'САУ' 
							BEGIN 
								IF @SAU > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'САУ'
											WHERE PassDirection IS NULL;
										SET @SAU = @SAU - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
									 END
							END
						END
				END

			IF @FD = 'ФИИТ'
				BEGIN
					IF @FIIT > 0 
						BEGIN 
							UPDATE #CurrentRank 
								SET PassDirection = N'ФИИТ'
								WHERE PassDirection IS NULL; 
							SET @FIIT = @FIIT - 1 
						END
					ELSE
						BEGIN
						IF @SD = 'КБ' 
							BEGIN 
								IF @KB > 0 
									BEGIN
										UPDATE #CurrentRank 
											SET PassDirection = N'КБ'
											WHERE PassDirection IS NULL;
										SET @KB = @KB - 1 
									END
								ELSE BEGIN
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL; 
												SET @IVT = @IVT - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END
							END
						IF @SD = 'ПИ' 
							BEGIN 
								IF @PI > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'ПИ'
											WHERE PassDirection IS NULL;
										SET @PI = @PI - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END
							 END
						IF @SD = 'МОАИС' 
							BEGIN 
								IF @MOAIS > 0
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'МОАИС'
											WHERE PassDirection IS NULL;
										SET @MOAIS = @MOAIS - 1
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END 
							 END
						IF @SD = 'ИВТ' 
							BEGIN 
								IF @IVT > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'ИВТ'
											WHERE PassDirection IS NULL;
										SET @IVT = @IVT - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END 
							 END
						IF @SD = 'САУ' 
							BEGIN 
								IF @SAU > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'САУ'
											WHERE PassDirection IS NULL;
										SET @SAU = @SAU - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
									 END
							END
						END
				END

			IF @FD = 'МОАИС'
				BEGIN
					IF @MOAIS > 0 
						BEGIN 
							UPDATE #CurrentRank 
								SET PassDirection = N'МОАИС'
								WHERE PassDirection IS NULL; 
							SET @MOAIS = @MOAIS - 1 
						END
					ELSE
						BEGIN
						IF @SD = 'КБ' 
							BEGIN 
								IF @KB > 0 
									BEGIN
										UPDATE #CurrentRank 
											SET PassDirection = N'КБ'
											WHERE PassDirection IS NULL;
										SET @KB = @KB - 1 
									END
								ELSE BEGIN
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL; 
												SET @IVT = @IVT - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END
							END
						IF @SD = 'ПИ' 
							BEGIN 
								IF @PI > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'ПИ'
											WHERE PassDirection IS NULL;
										SET @PI = @PI - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END
							 END
						IF @SD = 'ФИИТ' 
							BEGIN 
								IF @FIIT > 0
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'ФИИТ'
											WHERE PassDirection IS NULL;
										SET @FIIT = @FIIT - 1
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END 
							 END
						IF @SD = 'ИВТ' 
							BEGIN 
								IF @IVT > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'ИВТ'
											WHERE PassDirection IS NULL;
										SET @IVT = @IVT - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END 
							 END
						IF @SD = 'САУ' 
							BEGIN 
								IF @SAU > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'САУ'
											WHERE PassDirection IS NULL;
										SET @SAU = @SAU - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
									 END
							END
						END
				END

			IF @FD = 'ИВТ'
				BEGIN
					IF @IVT > 0 
						BEGIN 
							UPDATE #CurrentRank 
								SET PassDirection = N'ИВТ'
								WHERE PassDirection IS NULL; 
							SET @IVT = @IVT - 1 
						END
					ELSE
						BEGIN
						IF @SD = 'КБ' 
							BEGIN 
								IF @KB > 0 
									BEGIN
										UPDATE #CurrentRank 
											SET PassDirection = N'КБ'
											WHERE PassDirection IS NULL;
										SET @KB = @KB - 1 
									END
								ELSE BEGIN
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END
							END
						IF @SD = 'ПИ' 
							BEGIN 
								IF @PI > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'ПИ'
											WHERE PassDirection IS NULL;
										SET @PI = @PI - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END
							 END
						IF @SD = 'ФИИТ' 
							BEGIN 
								IF @FIIT > 0
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'ФИИТ'
											WHERE PassDirection IS NULL;
										SET @FIIT = @FIIT - 1
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END 
							 END
						IF @SD = 'МОАИС' 
							BEGIN 
								IF @MOAIS > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'МОАИС'
											WHERE PassDirection IS NULL;
										SET @MOAIS = @MOAIS - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'САУ' AND @SAU > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'САУ'
													WHERE PassDirection IS NULL;
												SET @SAU = @SAU - 1 
											END
									 END 
							 END
						IF @SD = 'САУ' 
							BEGIN 
								IF @SAU > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'САУ'
											WHERE PassDirection IS NULL;
										SET @SAU = @SAU - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
									 END
							END
						END
				END

			IF @FD = 'САУ'
				BEGIN
					IF @SAU > 0 
						BEGIN 
							UPDATE #CurrentRank 
								SET PassDirection = N'САУ'
								WHERE PassDirection IS NULL; 
							SET @SAU = @SAU - 1 
						END
					ELSE
						BEGIN
						IF @SD = 'КБ' 
							BEGIN 
								IF @KB > 0 
									BEGIN
										UPDATE #CurrentRank 
											SET PassDirection = N'КБ'
											WHERE PassDirection IS NULL;
										SET @KB = @KB - 1 
									END
								ELSE BEGIN
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
									 END
							END
						IF @SD = 'ПИ' 
							BEGIN 
								IF @PI > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'ПИ'
											WHERE PassDirection IS NULL;
										SET @PI = @PI - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
									 END
							 END
						IF @SD = 'ФИИТ' 
							BEGIN 
								IF @FIIT > 0
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'ФИИТ'
											WHERE PassDirection IS NULL;
										SET @FIIT = @FIIT - 1
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
									 END 
							 END
						IF @SD = 'МОАИС' 
							BEGIN 
								IF @MOAIS > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'МОАИС'
											WHERE PassDirection IS NULL;
										SET @MOAIS = @MOAIS - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'ИВТ' AND @IVT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ИВТ'
													WHERE PassDirection IS NULL;
												SET @IVT = @IVT - 1 
											END
									 END 
							 END
						IF @SD = 'ИВТ' 
							BEGIN 
								IF @IVT > 0 
									BEGIN 
										UPDATE #CurrentRank 
											SET PassDirection = N'ИВТ'
											WHERE PassDirection IS NULL;
										SET @IVT = @IVT - 1 
									END
								ELSE BEGIN
										IF @TD = 'КБ' AND @KB > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'КБ'
													WHERE PassDirection IS NULL;
												SET @KB = @KB - 1 
											END
										IF @TD = 'ПИ' AND @PI > 0 
											BEGIN
												UPDATE #CurrentRank 
													SET PassDirection = N'ПИ'
													WHERE PassDirection IS NULL;
												SET @PI = @PI - 1 
											END
										IF @TD = 'ФИИТ' AND @FIIT > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'ФИИТ'
													WHERE PassDirection IS NULL;
												SET @FIIT = @FIIT - 1 
											END
										IF @TD = 'МОАИС' AND @MOAIS > 0 
											BEGIN 
												UPDATE #CurrentRank 
													SET PassDirection = N'МОАИС'
													WHERE PassDirection IS NULL;
												SET @MOAIS = @MOAIS - 1 
											END
									 END
							END
						END
				END

		END

	DROP TABLE #BlackListDirection
	DROP TABLE #TmpKonkurs
	DROP TABLE #TmpNoExams
	DROP TABLE #TmpKvota
	DROP TABLE #TmpCelevoe
	SELECT TOP(@TotalQuantity)PersonID
			,[LastName]
			,[FirstName]
			,[MiddleName]
			,[SumWithMathematics]
			,[BallMathematics]
			,[BallInformatics]
			,[SumWithSocialSciense]
			,[Certificate]
			,[FirstDirection] 
			,[SecondDirection] 
			,[ThirdDirection] 
			,[PassDirection] 
		FROM #CurrentRank
		WHERE [PassDirection] IN (SELECT Direction FROM #TmpSelectedDirection)

	DROP TABLE #CurrentRank	
	DROP TABLE #TmpSelectedDirection

	COMMIT TRAN

	END TRY

	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRAN;
		THROW;
	END CATCH
	SET NOCOUNT OFF
END
