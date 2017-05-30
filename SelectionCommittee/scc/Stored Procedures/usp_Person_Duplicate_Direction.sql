
CREATE PROCEDURE [scc].[usp_Person_Duplicate_Direction]
AS
BEGIN
	SET NOCOUNT ON
	
		SELECT Person.[PersonID]
				,Person.[FirstDirection]
				,[SecondDirection]
				,[ThirdDirection]
				,Person.[LastName]
				,Person.[FirstName]
				,Person.[MiddleName]
				,Person.[DocNumber]
				,Decree.[DecreeNumber]
				,Decree.[DecreeProtocol]
				,Decree.[DecreeName]
				,Decree.[DecreeDate]
				,DecreePerson.[ParticipationInAnotherContest]
				,DecreePerson.[PassDirection]
			FROM [scc].[Bachelor_FullInfo_Duplicate] AS Person
				LEFT JOIN [scc].[Decree_Person_Duplicate] AS DecreePerson
					ON Person.PersonID = DecreePerson.PersonID
				LEFT JOIN [scc].[Decree_Duplicate] as Decree
					ON Decree.DecreeID = DecreePerson.DecreeID
				ORDER BY 
				Decree.[DecreeDate] DESC
				,Person.[LastName]
				,Person.[FirstName]
				,Person.[MiddleName]

				
	SET NOCOUNT OFF
END
