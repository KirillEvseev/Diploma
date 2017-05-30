
CREATE PROCEDURE [scc].[usp_Bachelor_Insert]
	@FirstName					nvarchar(70),
	@MiddleName					nvarchar(70),
	@LastName					nvarchar(70),
	@PhoneNumber				nvarchar(50),
	@Check						bit,				--по дефолту 0
	@Discription				nvarchar(2000),
	@AgreementOnTransfer		bit,				--по дефолту 0
	@ProcessingOfPersonalData	bit,				--по дефолту 0
	@Reference					bit,				--по дефолту 0
	@Policy						bit,				--по дефолту 0
	@Photo						tinyint,			--по дефолту 0
	@PassportCopy				tinyint,			--по дефолту 0
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
	DECLARE @SchoolCityID as SMALLINT;
	DECLARE @CityID as SMALLINT;
	DECLARE @ID AS INT;
	DECLARE @IDschool as SMALLINT;

	--обработка ошибок, в принципе можно дополнить, но я пока не вижу это целессобразным

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

	--Если имя не указано, то процедура прерывается

		IF @FirstName IS NULL
			BEGIN
				SET @ErrorMessage = 'First name can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END	

	--Если фамилия не указана, то процедура прерывается

		IF @LastName IS NULL
			BEGIN
				SET @ErrorMessage = 'Last Name can''t be NULL';
				THROW @ErrorCode,@ErrorMessage,1;
			END


		--поиск есть ли такой способ поступления и  указанные направления - вывод ошибок если таковых нет

		--если способ поступления не указан, или таковой не существует, то процедура прерывается

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
		
		--если какое либо направление указано, но не существует, то процедура прерывается

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

		--так как списка школ у нас заранее нет (да и не вводить же их со всей страны), 
		--то я ее добавляю если такая не была найдена
		--для того, что бы минимизировать вероятность опечаток то я удаляю пробелы и перевожу
		--в верхний регистр
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
			
			--обработка ошибок прошла, если их нет, начинаю транзакцию

			BEGIN TRAN
				INSERT INTO [scc].[Person]
							([FirstName]
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
							,[CityID]
							,[MethodOfAdmissionID])
						VALUES
							(@FirstName
							,@MiddleName
							,@LastName
							,@PhoneNumber
							,@Check
							,@Discription
							,@AgreementOnTransfer
							,@ProcessingOfPersonalData
							,@Reference
							,@Policy
							,@Photo
							,@PassportCopy
							,@INN
							,@SNILS
							,@DocNumber
							,@CityID
							,@MethodOfAdmissionID);

				--аналогичная операция, нам нужен ID вставленной персоны для заполнения бакалавра

				SET @ID = SCOPE_IDENTITY();

				--персона есть, заполняем бакалавра

				INSERT INTO [scc].[Bachelor]
							([PersonID]
							,[Certificate]
							,[Payment]
							,[WayOfLearning]
							,[BallRussian]
							,[BallMathematics]
							,[BallInformatics]
							,[BallPhysics]
							,[BallSocialSciense]
							,[BallExtraPoints]
							,[SchoolID])
						VALUES
							(@ID
							,@Certificate
							,@Payment
							,@WayOfLearning
							,@BallRussian
							,@BallMathematics
							,@BallInformatics
							,@BallPhysics
							,@BallSocialSciense
							,@BallExtraPoints
							,@IDschool);


				--вставляю указанные директории, есть они есть

				IF @FirstDirection IS NOT NULL
					BEGIN
						INSERT INTO [scc].[Priority]
									([PersonID]
									,[DirectionID]
									,[State])
								VALUES
									(@ID
									,@FirstDirection
									,1)
					END

				IF @SecondDirection IS NOT NULL
					BEGIN
						INSERT INTO [scc].[Priority]
									([PersonID]
									,[DirectionID]
									,[State])
								VALUES
									(@ID
									,@SecondDirection
									,2)
					END

				IF @ThirdDirection IS NOT NULL
					BEGIN
						INSERT INTO [scc].[Priority]
									([PersonID]
									,[DirectionID]
									,[State])
								VALUES
									(@ID
									,@ThirdDirection
									,3)
					END
					
				--вставка родителя происходит только если указано имя

				IF @MotherFirstName IS NOT NULL
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
									,@ID)
					END

				IF @FatherFirstName IS NOT NULL
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
									,@ID)
					END

			COMMIT TRAN

	END TRY

	--откат транзакции при ошибках

	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRAN;
		THROW;
	END CATCH
	SET NOCOUNT OFF
END

