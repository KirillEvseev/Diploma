
CREATE PROCEDURE [scc].[usp_Bachelor_CityPeopleCount]
AS
BEGIN
	SELECT City.[CityName]
			,COUNT(Bachelor.[PersonID]) AS Applicant
			,COUNT(Decree.[PersonID]) AS Enrolled
		FROM [scc].[City] as City
			JOIN [scc].[Person] as Person
				ON Person.CityID = City.CityID
			JOIN [scc].[Bachelor] as Bachelor
				ON Bachelor.PersonID = Person.PersonID
			LEFT JOIN [scc].[Decree_Person] as Decree
				ON Decree.PersonID = Bachelor.PersonID
		GROUP BY City.[CityName]
		ORDER BY COUNT(Bachelor.[PersonID]) DESC
				,COUNT(Decree.[PersonID]) DESC
END
