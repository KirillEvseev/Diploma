
CREATE PROCEDURE [scc].[usp_Master_BriefInformation]
AS
BEGIN
	SELECT [LastName]
			,[FirstName]
			,[MiddleName]
			,[UniversityName]
			,[Speciality]
			,[FirstDirection]
			,[SecondDirection]
			,[ThirdDirection]
		FROM [scc].[vw_Master_FullInfo]
		ORDER BY [LastName]
				,[FirstName]
				,[MiddleName]
END
