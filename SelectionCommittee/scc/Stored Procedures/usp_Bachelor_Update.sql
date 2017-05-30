
CREATE PROCEDURE [scc].[usp_Bachelor_Update]
	@PersonID					int,
	@FirstName					nvarchar(70),
	@MiddleName					nvarchar(70),
	@LastName					nvarchar(70),
	@PhoneNumber				nvarchar(50),
	@Check						bit,
	@Discription				nvarchar(2000),
	@AgreementOnTransfer		bit,
	@ProcessingOfPersonalData	bit,
	@Reference					bit,
	@Policy						bit,
	@Photo						tinyint,
	@PassportCopy				tinyint,
	@INN						nvarchar(70),
	@SNILS						nvarchar(70),
	@DocNumber					nvarchar(70),
	@CityName					nvarchar(100),
	@MethodOfAdmissionID		tinyint,
	@SchoolName					nvarchar(100),
	@SchoolCityName				nvarchar(100),
    @Certificate				bit,
    @Payment					bit,
    @WayOfLearning				bit,
    @BallRussian				smallint,
    @BallMathematics			smallint,
    @BallInformatics			smallint,
    @BallPhysics				smallint,
    @BallSocialSciense			smallint,
    @BallExtraPoints			smallint,
	@FirstDirection				tinyint,
	@SecondDirection			tinyint,
	@ThirdDirection				tinyint,
	@MotherFirstName			nvarchar(70),
	@MotherMiddleName			nvarchar(70),
	@MotherLastName				nvarchar(70),
	@FatherFirstName			nvarchar(70),
	@FatherMiddleName			nvarchar(70),
	@FatherLastName				nvarchar(70),
	@MotherPhoneNumber			nvarchar(50),
	@FatherPhoneNumber			nvarchar(50)
	AS
BEGIN
	SET NOCOUNT ON
	DECLARE @ErrorMessage AS NVARCHAR(255) = '';
	DECLARE @ErrorCode AS INT = 55063;
	DECLARE @ID AS INT;
	DECLARE @IDschool as SMALLINT;
	DECLARE @CityID AS SMALLINT;
	DECLARE @SchoolCityID AS SMALLINT;

	IF(REPLACE(@FirstName,' ','') = '') OR (REPLACE(@FirstName,' ','') = 'null') SET @FirstName = null;
	IF(REPLACE(@MiddleName,' ','') = '') OR (REPLACE(@MiddleName,' ','') = 'null') SET @MiddleName = null;	
	IF(REPLACE(@LastName,' ','') = '') OR (REPLACE(@LastName,' ','') = 'null') SET @LastName = null;	
	IF(REPLACE(@PhoneNumber,' ','') = '') OR (REPLACE(@PhoneNumber,' ','') = 'null') SET @PhoneNumber = null;
	IF(REPLACE(@Discription,' ','') = '') OR (REPLACE(@Discription,' ','') = 'null') SET @Discription = null;
	IF(REPLACE(@INN,' ','') = '') OR (REPLACE(@INN,' ','') = 'null') SET @INN = null;
	IF(REPLACE(@SNILS,' ','') = '') OR (REPLACE(@SNILS,' ','') = 'null') SET @SNILS = null;	
	IF(REPLACE(@DocNumber,' ','') = '') OR (REPLACE(@DocNumber,' ','') = 'null') SET @DocNumber = null;	
	IF(REPLACE(@CityName,' ','') = '') OR (REPLACE(@CityName,' ','') = 'null') SET @CityName = null;	
	IF(REPLACE(@SchoolName,' ','') = '') OR (REPLACE(@SchoolName,' ','') = 'null') SET @SchoolName = null;	
	IF(REPLACE(@SchoolCityName,' ','') = '') OR (REPLACE(@SchoolCityName,' ','') = 'null') SET @SchoolCityName = null;	
	IF(REPLACE(@MotherFirstName,' ','') = '') OR (REPLACE(@MotherFirstName,' ','') = 'null') SET @MotherFirstName = null;
	IF(REPLACE(@MotherMiddleName,' ','') = '') OR (REPLACE(@MotherMiddleName,' ','') = 'null') SET @MotherMiddleName = null;	
	IF(REPLACE(@MotherLastName,' ','') = '') OR (REPLACE(@MotherLastName,' ','') = 'null') SET @MotherLastName = null;	
	IF(REPLACE(@FatherFirstName,' ','') = '') OR (REPLACE(@FatherFirstName,' ','') = 'null') SET @FatherFirstName = null;
	IF(REPLACE(@FatherMiddleName,' ','') = '') OR (REPLACE(@FatherMiddleName,' ','') = 'null') SET @FatherMiddleName = null;	
	IF(REPLACE(@FatherLastName,' ','') = '') OR (REPLACE(@FatherLastName,' ','') = 'null') SET @FatherLastName = null;	
	IF(REPLACE(@MotherPhoneNumber,' ','') = '') OR (REPLACE(@MotherPhoneNumber,' ','') = 'null') SET @MotherPhoneNumber = null;	
	IF(REPLACE(@FatherPhoneNumber,' ','') = '') OR (REPLACE(@FatherPhoneNumber,' ','') = 'null') SET @FatherPhoneNumber = null;

	BEGIN TRY

	--обработка ошибок

	--Если PersonID, имя или фамилия не указаны, то процедура прерывается

		IF @PersonID IS NULL
			BEGIN
				SET @ErrorMessage = 'Person ID can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	

		IF @FirstName IS NULL
			BEGIN
				SET @ErrorMessage = 'First name can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	

		IF @LastName IS NULL
			BEGIN
				SET @ErrorMessage = 'Last Name can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END

		--Если способ поступления не указан или не существует, то процедура прерывается

		IF @MethodOfAdmissionID IS NULL
			BEGIN
				SET @ErrorMessage = 'Method of admission can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END
		ELSE IF NOT EXISTS (SELECT 1 
							FROM [scc].[MethodOfAdmission] 
							WHERE MethodOfAdmissionID = @MethodOfAdmissionID)
			BEGIN
				SET @ErrorMessage = 'Method of admissionID with ID ''' + CAST(@MethodOfAdmissionID AS NVARCHAR)+''' does not exists.';
				THROW @ErrorCode,@ErrorMessage,1;
			END

		--Если направление указано, но не существует, то процедура прерывается

		IF @FirstDirection IS NOT NULL AND NOT EXISTS (SELECT 1 
														FROM [scc].[Direction] 
														WHERE DirectionID = @FirstDirection)
			BEGIN
				SET @ErrorMessage = 'Direction  with ID ''' + CAST(@FirstDirection AS NVARCHAR)+''' does not exists.';
				THROW @ErrorCode,@ErrorMessage,1;
			END

		IF @SecondDirection IS NOT NULL AND NOT EXISTS (SELECT 1 
														FROM [scc].[Direction] 
														WHERE DirectionID = @SecondDirection)
			BEGIN
				SET @ErrorMessage = 'Direction  with ID ''' + CAST(@SecondDirection AS NVARCHAR)+''' does not exists.';
				THROW @ErrorCode,@ErrorMessage,1;
			END

		IF @ThirdDirection IS NOT NULL AND NOT EXISTS (SELECT 1 
														FROM [scc].[Direction] 
														WHERE DirectionID = @ThirdDirection)
			BEGIN
				SET @ErrorMessage = 'Direction  with ID ''' + CAST(@ThirdDirection AS NVARCHAR)+''' does not exists.';
				THROW @ErrorCode,@ErrorMessage,1;
			END


		--Вставка школы, аналогично с процедуры Insert
		IF @CityName IS NOT NULL AND NOT EXISTS (SELECT 1 
																FROM [scc].[City]
																WHERE [CityName] = UPPER(REPLACE(@CityName,' ','')))
					BEGIN  
						INSERT INTO  [scc].[City]
									([CityName])
								VALUES
									(UPPER(REPLACE(@CityName,' ','')))

						--вытягиваю вставленный айдишник, чтобы вставить в person

						SET @CityID = SCOPE_IDENTITY();
					END

					--или тот который уже есть

				ELSE 
							SET @CityID = (SELECT CityID FROM [scc].[City] WHERE [CityName] = UPPER(REPLACE(@CityName,' ','')));



		IF @SchoolCityName IS NOT NULL AND NOT EXISTS (SELECT 1 
																FROM [scc].[City]
																WHERE [CityName] = UPPER(REPLACE(@SchoolCityName,' ','')))
					BEGIN  
						INSERT INTO  [scc].[City]
									([CityName])
								VALUES
									(UPPER(REPLACE(@SchoolCityName,' ','')))

						--вытягиваю вставленный айдишник, чтобы вставить в person

						SET @SchoolCityID = SCOPE_IDENTITY();
					END

					--или тот который уже есть

				ELSE 
							SET @SchoolCityID = (SELECT CityID FROM [scc].[City] WHERE [CityName] = UPPER(REPLACE(@SchoolCityName,' ','')));



		IF @SchoolName IS NOT NULL AND NOT EXISTS (SELECT 1 
														FROM [scc].[School]
														WHERE [SchoolName] = UPPER(REPLACE(@SchoolName,' ',''))
														AND [CityID] = @SchoolCityID)
			BEGIN  
				INSERT INTO  [scc].[School]
							([SchoolName],
							[CityID]
							)
						VALUES
							(UPPER(REPLACE(@SchoolName,' ','')),
							@SchoolCityID)

				--вытягиваю вставленный айдишник, чтобы вставить в person

				SET @IDschool = SCOPE_IDENTITY();
			END

			--или тот который уже есть

		ELSE 
					SET @IDschool = (SELECT [SchoolID] FROM [scc].[School] WHERE [SchoolName] = UPPER(REPLACE(@SchoolName,' ',''))
																									AND [CityID] = @SchoolCityID);
		
		
		--update person и bachelor

			BEGIN TRAN
				UPDATE [scc].[Person]
					SET
							[FirstName] = @FirstName
							,[MiddleName] = @MiddleName
							,[LastName] = @LastName
							,[PhoneNumber] = @PhoneNumber
							,[Check] = @Check
							,[Discription] = @Discription
							,[AgreementOnTransfer] = @AgreementOnTransfer
							,[ProcessingOfPersonalData] = @ProcessingOfPersonalData
							,[Reference] = @Reference
							,[Policy] = @Policy
							,[Photo] = @Photo
							,[PassportCopy] = @PassportCopy
							,[INN] = @INN
							,[SNILS] = @SNILS
							,[DocNumber] = @DocNumber
							,[CityID] = @CityID
							,[MethodOfAdmissionID] = @MethodOfAdmissionID
					WHERE PersonID = @PersonID


				UPDATE [scc].[Bachelor]
					SET
							[Certificate] = @Certificate
							,[Payment] = @Payment
							,[WayOfLearning] = @WayOfLearning
							,[BallRussian] = @BallRussian
							,[BallMathematics] = @BallMathematics
							,[BallInformatics] =@BallInformatics
							,[BallPhysics] = @BallPhysics
							,[BallSocialSciense] = @BallSocialSciense
							,[BallExtraPoints] = @BallExtraPoints
							,[SchoolID] = @IDschool
					WHERE [PersonID] = @PersonID


			--здесь сложнее, нам надо смотреть сколько направлений уже указано и сколько пришло
			--если чтото было указано ранее, а теперь направления нет, то удалять
			--update если и ранее чтото было указано и при обновленной загрузке тоже
			--и соответсвенно вставлять если ранее ничего не было а теперь направление указано
			--Происходит для всех трех направлений

				IF @FirstDirection IS NULL AND EXISTS (SELECT 1 
														FROM [scc].[Priority] 
														WHERE [PersonID] = @PersonID and [State] = 1)
					BEGIN
						DELETE FROM [scc].[Priority]
						WHERE [PersonID] = @PersonID AND [State] = 1
					END

				ELSE

					IF @FirstDirection IS NOT NULL AND NOT EXISTS (SELECT 1 
															FROM [scc].[Priority] 
															WHERE [PersonID] = @PersonID and [State] = 1)
						BEGIN
							INSERT INTO [scc].[Priority]
										([PersonID]
										,[DirectionID]
										,[State])
									VALUES
										(@PersonID
										,@FirstDirection
										,1)
						END

					ELSE

						IF @FirstDirection IS NOT NULL AND EXISTS (SELECT 1 
																FROM [scc].[Priority] 
																WHERE [PersonID] = @PersonID and [State] = 1)
							BEGIN
								UPDATE [scc].[Priority]
									SET
											[DirectionID] = @FirstDirection
									WHERE   [PersonID] = @PersonID and [State] = 1

							END;

				IF @SecondDirection IS NULL AND EXISTS (SELECT 1 
														FROM [scc].[Priority] 
														WHERE [PersonID] = @PersonID and [State] = 2)
					BEGIN
						DELETE FROM [scc].[Priority]
						WHERE [PersonID] = @PersonID AND [State] = 2
					END

				ELSE

					IF @SecondDirection IS NOT NULL AND NOT EXISTS (SELECT 1 
															FROM [scc].[Priority] 
															WHERE [PersonID] = @PersonID and [State] = 2)
						BEGIN
							INSERT INTO [scc].[Priority]
										([PersonID]
										,[DirectionID]
										,[State])
									VALUES
										(@PersonID
										,@SecondDirection
										,2)
						END

					ELSE

						IF @SecondDirection IS NOT NULL AND EXISTS (SELECT 1 
																FROM [scc].[Priority] 
																WHERE [PersonID] = @PersonID and [State] = 2)
							BEGIN
								UPDATE [scc].[Priority]
									SET
											[DirectionID] = @SecondDirection
									WHERE   [PersonID] = @PersonID and [State] = 2

							END;

				IF @ThirdDirection IS NULL AND EXISTS (SELECT 1 
														FROM [scc].[Priority] 
														WHERE [PersonID] = @PersonID and [State] = 3)
					BEGIN
						DELETE FROM [scc].[Priority]
						WHERE [PersonID] = @PersonID AND [State] = 3
					END

				ELSE

					IF @ThirdDirection IS NOT NULL AND NOT EXISTS (SELECT 1 
															FROM [scc].[Priority] 
															WHERE [PersonID] = @PersonID and [State] = 3)
						BEGIN
							INSERT INTO [scc].[Priority]
										([PersonID]
										,[DirectionID]
										,[State])
									VALUES
										(@PersonID
										,@ThirdDirection
										,3)
						END

					ELSE

						IF @ThirdDirection IS NOT NULL AND EXISTS (SELECT 1 
																FROM [scc].[Priority] 
																WHERE [PersonID] = @PersonID and [State] = 3)
							BEGIN
								UPDATE [scc].[Priority]
									SET
											[DirectionID] = @ThirdDirection
									WHERE   [PersonID] = @PersonID and [State] = 3

							END;

				--Тут тоже самое, что и с направлениями
				--здесь как раз нужно то поле Identification, чтобы 2 родителя различались
					
				IF @MotherFirstName IS  NULL AND EXISTS (SELECT 1 
														FROM [scc].[Parent]
														WHERE [PersonID] = @PersonID and [Identification] = 0)
					BEGIN
						DELETE FROM [scc].[Parent]
						WHERE [PersonID] = @PersonID AND [Identification] = 0
					END

				ELSE

					IF @MotherFirstName IS NOT NULL AND NOT EXISTS (SELECT 1 
																		FROM [scc].[Parent]
																	WHERE [PersonID] = @PersonID and [Identification] = 0)
						BEGIN
							INSERT INTO [scc].[Parent]
										([FirstName]
										,[MiddleName]
										,[LastName]
										,[PhoneNumber]
										,[Identification]
										,[PersonID])
									VALUES
										(@MotherFirstName
										,@MotherMiddleName
										,@MotherLastName
										,@MotherPhoneNumber
										,0
										,@PersonID)
						END

					ELSE

						IF @MotherFirstName IS NOT NULL AND EXISTS (SELECT 1 
																		FROM  [scc].[Parent]
																	WHERE [PersonID] = @PersonID and [Identification] = 0)
							BEGIN
								UPDATE [scc].[Parent]
									SET
											[FirstName] = @MotherFirstName
											,[MiddleName] = @MotherMiddleName
											,[LastName] = @MotherLastName
											,[PhoneNumber] = @MotherPhoneNumber
									WHERE   [PersonID] = @PersonID and [Identification] = 0

							END;

				IF @FatherFirstName IS  NULL AND EXISTS (SELECT 1 
																FROM [scc].[Parent]
															WHERE [PersonID] = @PersonID and [Identification] = 1)
					BEGIN
						DELETE FROM [scc].[Parent]
						WHERE [PersonID] = @PersonID AND [Identification] = 1
					END

				ELSE

					IF @FatherFirstName IS NOT NULL AND NOT EXISTS (SELECT 1 
																		FROM [scc].[Parent]
																	WHERE [PersonID] = @PersonID and [Identification] = 1)
						BEGIN
							INSERT INTO [scc].[Parent]
										([FirstName]
										,[MiddleName]
										,[LastName]
										,[PhoneNumber]
										,[Identification]
										,[PersonID])
									VALUES
										(@FatherFirstName
										,@FatherMiddleName
										,@FatherLastName
										,@FatherPhoneNumber
										,1
										,@PersonID)
						END

					ELSE

						IF @FatherFirstName IS NOT NULL AND EXISTS (SELECT 1 
																		FROM [scc].[Parent]
																	WHERE [PersonID] = @PersonID and [Identification] = 1)
							BEGIN
								UPDATE [scc].[Parent]
									SET
											[FirstName] = @FatherFirstName
											,[MiddleName] = @FatherMiddleName
											,[LastName] = @FatherLastName
											,[PhoneNumber] = @FatherPhoneNumber
									WHERE   [PersonID] = @PersonID and [Identification] = 1

							END;

			COMMIT TRAN

	END TRY
	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRAN;
		THROW;
	END CATCH
	SET NOCOUNT OFF
END

