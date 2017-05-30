
CREATE PROCEDURE [scc].[usp_Master_Insert]
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
	@UniversityName				nvarchar(100),
	@Speciality					nvarchar(100),
	@MethodOfAdmissionID		tinyint,
    @Payment					bit,
    @WayOfLearning				bit,
	@Interview					nvarchar(2000),
    @BallExtraPoints			tinyint,
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
	DECLARE @IDuniversity as TINYINT;
	DECLARE @CityID as SMALLINT;

	IF(REPLACE(@FirstName, ' ','') = '') OR (REPLACE(@FirstName, ' ','') = 'null')	SET @FirstName = null;				
	IF(REPLACE(@MiddleName, ' ','') = '') OR (REPLACE(@MiddleName, ' ','') = 'null')	SET @MiddleName = null;	
	IF(REPLACE(@LastName, ' ','') = '') OR (REPLACE(@LastName, ' ','') = 'null')	SET @LastName = null;	
	IF(REPLACE(@PhoneNumber, ' ','') = '') OR (REPLACE(@PhoneNumber, ' ','') = 'null')	SET @PhoneNumber = null;
	IF(REPLACE(@Discription, ' ','') = '') OR (REPLACE(@Discription, ' ','') = 'null')	SET @Discription = null;
	IF(REPLACE(@INN, ' ','') = '') OR (REPLACE(@INN, ' ','') = 'null')	SET @INN = null;
	IF(REPLACE(@SNILS, ' ','') = '') OR (REPLACE(@SNILS, ' ','') = 'null')	SET @SNILS = null;	
	IF(REPLACE(@DocNumber, ' ','') = '') OR (REPLACE(@DocNumber, ' ','') = 'null')	SET @DocNumber = null;	
	IF(REPLACE(@CityName, ' ','') = '') OR (REPLACE(@CityName, ' ','') = 'null')	SET @CityName = null;	
	IF(REPLACE(@UniversityName, ' ','') = '') OR (REPLACE(@UniversityName, ' ','') = 'null')	SET @UniversityName = null;	
	IF(REPLACE(@Speciality, ' ','') = '') OR (REPLACE(@Speciality, ' ','') = 'null')	SET @Speciality = null;	
	IF(REPLACE(@Interview, ' ','') = '') OR (REPLACE(@Interview, ' ','') = 'null')	SET @Interview = null;	
	IF(REPLACE(@MotherFirstName, ' ','') = '') OR (REPLACE(@MotherFirstName, ' ','') = 'null')	SET @MotherFirstName = null;
	IF(REPLACE(@MotherMiddleName, ' ','') = '') OR (REPLACE(@MotherMiddleName, ' ','') = 'null')	SET @MotherMiddleName = null;	
	IF(REPLACE(@MotherLastName, ' ','') = '') OR (REPLACE(@MotherLastName, ' ','') = 'null')	SET @MotherLastName = null;	
	IF(REPLACE(@FatherFirstName, ' ','') = '') OR (REPLACE(@FatherFirstName, ' ','') = 'null')	SET @FatherFirstName = null;
	IF(REPLACE(@FatherMiddleName, ' ','') = '') OR (REPLACE(@FatherMiddleName, ' ','') = 'null')	SET @FatherMiddleName = null;	
	IF(REPLACE(@FatherLastName, ' ','') = '') OR (REPLACE(@FatherLastName, ' ','') = 'null')	SET @FatherLastName = null;	
	IF(REPLACE(@MotherPhoneNumber, ' ','') = '') OR (REPLACE(@MotherPhoneNumber, ' ','') = 'null')	SET @MotherPhoneNumber = null;	
	IF(REPLACE(@FatherPhoneNumber, ' ','') = '') OR (REPLACE(@FatherPhoneNumber, ' ','') = 'null')	SET @FatherPhoneNumber = null;	

	BEGIN TRY
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





		IF @UniversityName IS NOT NULL AND @Speciality IS NOT NULL AND NOT EXISTS (SELECT 1 
														FROM [scc].[University]
														WHERE [UniversityName] = UPPER(REPLACE(@UniversityName,' ',''))
														AND [Speciality] = UPPER(REPLACE(@Speciality,' ','')))
			BEGIN  
				INSERT INTO  [scc].[University]
							([UniversityName],
							[Speciality]
							)
						VALUES
							(UPPER(REPLACE(@UniversityName,' ','')),
							UPPER(REPLACE(@Speciality,' ','')))

				SET @IDuniversity = SCOPE_IDENTITY();
			END
			
			ELSE IF  @UniversityName IS NOT NULL AND @Speciality IS NULL AND NOT EXISTS (SELECT 1 
														FROM [scc].[University]
														WHERE [UniversityName] = UPPER(REPLACE(@UniversityName,' ',''))
														AND [Speciality] IS NULL)
														
				BEGIN  
					INSERT INTO  [scc].[University]
								([UniversityName],
								[Speciality]
								)
							VALUES
								(UPPER(REPLACE(@UniversityName,' ','')),
								NULL)

					SET @IDuniversity = SCOPE_IDENTITY();
				END
		 ELSE IF @Speciality IS NOT NULL
					SET @IDuniversity = (SELECT [UniversityID] FROM [scc].[University] WHERE [UniversityName] = UPPER(REPLACE(@UniversityName,' ',''))
																						AND [Speciality] = UPPER(REPLACE(@Speciality,' ','')))

		 ELSE 
			SET @IDuniversity = (SELECT [UniversityID] FROM [scc].[University] WHERE [UniversityName] = UPPER(REPLACE(@UniversityName,' ',''))
																						AND [Speciality] IS NULL);

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

				SET @ID = SCOPE_IDENTITY();

				INSERT INTO [scc].[Master]
							([PersonID]
							,[Payment]
							,[WayOfLearning]
							,[Interview]
							,[BallExtraPoints]
							,[UniversityID]
							)
						VALUES
							(@ID
							,@Payment
							,@WayOfLearning
							,@Interview
							,@BallExtraPoints
							,@IDuniversity);

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
	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRAN;
		THROW;
	END CATCH
	SET NOCOUNT OFF
END

