
CREATE PROCEDURE [scc].[usp_Bachelor_SchoolPeopleCount]
AS
BEGIN
	SELECT School.[SchoolName]
			,City.[CityName]
			,COUNT(Bachelor.[PersonID]) AS Applicant
			,COUNT(Decree.[PersonID]) AS Enrolled
		FROM [scc].[School] as School
			JOIN [scc].[City] as City
				ON City.CityID = School.CityID
			JOIN [scc].[Bachelor] as Bachelor
				ON Bachelor.SchoolID = School.SchoolID
			LEFT JOIN [scc].[Decree_Person] as Decree
				ON Decree.PersonID = Bachelor.PersonID
		GROUP BY School.[SchoolName]
				,City.[CityName]
		ORDER BY COUNT(Bachelor.[PersonID]) DESC
				,COUNT(Decree.[PersonID]) DESC
END
