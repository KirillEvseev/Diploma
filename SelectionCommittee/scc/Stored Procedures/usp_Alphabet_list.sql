
CREATE PROCEDURE [scc].[usp_Alphabet_list]
@Bachelor   bit,
@Master     bit,
@PostgradulateStudent bit
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @ErrorMessage AS NVARCHAR(255) = '';
	DECLARE @ErrorCode AS INT = 55063;

	BEGIN TRY

		IF @Bachelor IS NULL
			BEGIN
				SET @ErrorMessage = 'Bachelor param is incorrect';
				THROW @ErrorCode,@ErrorMessage,1;
			END	

		IF @Master IS NULL
			BEGIN
				SET @ErrorMessage = 'Master param is incorrect';
				THROW @ErrorCode,@ErrorMessage,1;
			END	

		IF @PostgradulateStudent IS NULL
			BEGIN
				SET @ErrorMessage = 'PostgardulateStudent param is incorrect';
				THROW @ErrorCode,@ErrorMessage,1;
			END	

		IF @Bachelor = 0
			BEGIN
				IF @Master = 0
					BEGIN
						IF @PostgradulateStudent = 0
							BEGIN
								SET @ErrorMessage = 'All paramas can''t be EMPTY';
								THROW @ErrorCode,@ErrorMessage,1;
							END	
						ELSE
							BEGIN
								SELECT PGS.[LastName]
										,PGS.[FirstName]
										,PGS.[MiddleName]
										,PGS.[PhoneNumber]								
										,PGS.[MotherLastName]
										,PGS.[MotherFirstName]
										,PGS.[MotherMiddleName]
										,PGS.[MotherPhoneNumber]
										,PGS.[FatherLastName]
										,PGS.[FatherFirstName]
										,PGS.[FatherMiddleName]
										,PGS.[FatherPhoneNumber]
										,'PostgradulateStudent' as State
									FROM [scc].[vw_PostgradulateStudent_FullInfo] as PGS
							END
					END
				ELSE 
					BEGIN
						IF @PostgradulateStudent = 0
							BEGIN
								SELECT Master.[LastName]
										,Master.[FirstName]
										,Master.[MiddleName]
										,Master.[PhoneNumber]								
										,Master.[MotherLastName]
										,Master.[MotherFirstName]
										,Master.[MotherMiddleName]
										,Master.[MotherPhoneNumber]
										,Master.[FatherLastName]
										,Master.[FatherFirstName]
										,Master.[FatherMiddleName]
										,Master.[FatherPhoneNumber]
										,'Master' as State
									FROM [scc].[vw_Master_FullInfo] as Master
							END	
						ELSE
							BEGIN
								SELECT PGS.[LastName]
										,PGS.[FirstName]
										,PGS.[MiddleName]
										,PGS.[PhoneNumber]								
										,PGS.[MotherLastName]
										,PGS.[MotherFirstName]
										,PGS.[MotherMiddleName]
										,PGS.[MotherPhoneNumber]
										,PGS.[FatherLastName]
										,PGS.[FatherFirstName]
										,PGS.[FatherMiddleName]
										,PGS.[FatherPhoneNumber]
										,'PostgradulateStudent' as State
									FROM [scc].[vw_PostgradulateStudent_FullInfo] as PGS
								UNION ALL
								SELECT Master.[LastName]
										,Master.[FirstName]
										,Master.[MiddleName]
										,Master.[PhoneNumber]								
										,Master.[MotherLastName]
										,Master.[MotherFirstName]
										,Master.[MotherMiddleName]
										,Master.[MotherPhoneNumber]
										,Master.[FatherLastName]
										,Master.[FatherFirstName]
										,Master.[FatherMiddleName]
										,Master.[FatherPhoneNumber]
										,'Master' as State
									FROM [scc].[vw_Master_FullInfo] as Master
							END
					END
			END
		ELSE 
			BEGIN
				IF @Master = 0
					BEGIN
						IF @PostgradulateStudent = 0
							BEGIN
								SELECT Bachelor.[LastName]
										,Bachelor.[FirstName]
										,Bachelor.[MiddleName]
										,Bachelor.[PhoneNumber]								
										,Bachelor.[MotherLastName]
										,Bachelor.[MotherFirstName]
										,Bachelor.[MotherMiddleName]
										,Bachelor.[MotherPhoneNumber]
										,Bachelor.[FatherLastName]
										,Bachelor.[FatherFirstName]
										,Bachelor.[FatherMiddleName]
										,Bachelor.[FatherPhoneNumber]
										,'Bachelor' as State
									FROM [scc].[vw_Bachelor_FullInfo] as Bachelor
							END	
						ELSE
							BEGIN
								SELECT PGS.[LastName]
										,PGS.[FirstName]
										,PGS.[MiddleName]
										,PGS.[PhoneNumber]								
										,PGS.[MotherLastName]
										,PGS.[MotherFirstName]
										,PGS.[MotherMiddleName]
										,PGS.[MotherPhoneNumber]
										,PGS.[FatherLastName]
										,PGS.[FatherFirstName]
										,PGS.[FatherMiddleName]
										,PGS.[FatherPhoneNumber]
										,'PostgradulateStudent' as State
									FROM [scc].[vw_PostgradulateStudent_FullInfo] as PGS
								UNION ALL
								SELECT Bachelor.[LastName]
										,Bachelor.[FirstName]
										,Bachelor.[MiddleName]
										,Bachelor.[PhoneNumber]								
										,Bachelor.[MotherLastName]
										,Bachelor.[MotherFirstName]
										,Bachelor.[MotherMiddleName]
										,Bachelor.[MotherPhoneNumber]
										,Bachelor.[FatherLastName]
										,Bachelor.[FatherFirstName]
										,Bachelor.[FatherMiddleName]
										,Bachelor.[FatherPhoneNumber]
										,'Bachelor' as State
									FROM [scc].[vw_Bachelor_FullInfo] as Bachelor
							END
					END
				ELSE 
					BEGIN
						IF @PostgradulateStudent = 0
							BEGIN
								SELECT Master.[LastName]
										,Master.[FirstName]
										,Master.[MiddleName]
										,Master.[PhoneNumber]								
										,Master.[MotherLastName]
										,Master.[MotherFirstName]
										,Master.[MotherMiddleName]
										,Master.[MotherPhoneNumber]
										,Master.[FatherLastName]
										,Master.[FatherFirstName]
										,Master.[FatherMiddleName]
										,Master.[FatherPhoneNumber]
										,'Master' as State
									FROM [scc].[vw_Master_FullInfo] as Master
								UNION ALL
								SELECT Bachelor.[LastName]
										,Bachelor.[FirstName]
										,Bachelor.[MiddleName]
										,Bachelor.[PhoneNumber]								
										,Bachelor.[MotherLastName]
										,Bachelor.[MotherFirstName]
										,Bachelor.[MotherMiddleName]
										,Bachelor.[MotherPhoneNumber]
										,Bachelor.[FatherLastName]
										,Bachelor.[FatherFirstName]
										,Bachelor.[FatherMiddleName]
										,Bachelor.[FatherPhoneNumber]
										,'Bachelor' as State
									FROM [scc].[vw_Bachelor_FullInfo] as Bachelor
							END	
						ELSE
							BEGIN
								SELECT PGS.[LastName]
										,PGS.[FirstName]
										,PGS.[MiddleName]
										,PGS.[PhoneNumber]								
										,PGS.[MotherLastName]
										,PGS.[MotherFirstName]
										,PGS.[MotherMiddleName]
										,PGS.[MotherPhoneNumber]
										,PGS.[FatherLastName]
										,PGS.[FatherFirstName]
										,PGS.[FatherMiddleName]
										,PGS.[FatherPhoneNumber]
										,'PostgradulateStudent' as State
									FROM [scc].[vw_PostgradulateStudent_FullInfo] as PGS
								UNION ALL
								SELECT Master.[LastName]
										,Master.[FirstName]
										,Master.[MiddleName]
										,Master.[PhoneNumber]								
										,Master.[MotherLastName]
										,Master.[MotherFirstName]
										,Master.[MotherMiddleName]
										,Master.[MotherPhoneNumber]
										,Master.[FatherLastName]
										,Master.[FatherFirstName]
										,Master.[FatherMiddleName]
										,Master.[FatherPhoneNumber]
										,'Master' as State
									FROM [scc].[vw_Master_FullInfo] as Master
								UNION ALL
								SELECT Bachelor.[LastName]
										,Bachelor.[FirstName]
										,Bachelor.[MiddleName]
										,Bachelor.[PhoneNumber]								
										,Bachelor.[MotherLastName]
										,Bachelor.[MotherFirstName]
										,Bachelor.[MotherMiddleName]
										,Bachelor.[MotherPhoneNumber]
										,Bachelor.[FatherLastName]
										,Bachelor.[FatherFirstName]
										,Bachelor.[FatherMiddleName]
										,Bachelor.[FatherPhoneNumber]
										,'Bachelor' as State
									FROM [scc].[vw_Bachelor_FullInfo] as Bachelor
							END
					END
			END

	END TRY

	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRAN;
		THROW;
	END CATCH
	SET NOCOUNT OFF
END
