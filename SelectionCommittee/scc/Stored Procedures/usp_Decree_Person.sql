
CREATE PROCEDURE [scc].[usp_Decree_Person]
AS
BEGIN
	SET NOCOUNT ON
	
		SELECT Person.[PersonID]
				,Person.[LastName]
				,Person.[FirstName]
				,Person.[MiddleName]
				,Person.[DocNumber]
				,DecreePerson.[ParticipationInAnotherContest]
				,DecreePerson.[PassDirection]
				,Decree.[DecreeNumber]
				,Decree.[DecreeProtocol]
				,Decree.[DecreeName]
				,Decree.[DecreeDate]
			FROM [scc].[Person] AS Person
				JOIN [scc].[Decree_Person] AS DecreePerson
					ON Person.PersonID = DecreePerson.PersonID
				JOIN [scc].[Decree] as Decree
					ON Decree.DecreeID = DecreePerson.DecreeID
				


	SET NOCOUNT OFF
END


