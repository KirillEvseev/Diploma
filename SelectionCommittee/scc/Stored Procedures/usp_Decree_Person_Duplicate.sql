
CREATE PROCEDURE [scc].[usp_Decree_Person_Duplicate]
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
			FROM [scc].[Bachelor_FullInfo_Duplicate] AS Person
				JOIN [scc].[Decree_Person_Duplicate] AS DecreePerson
					ON Person.PersonID = DecreePerson.PersonID
				JOIN [scc].[Decree_Duplicate] as Decree
					ON Decree.DecreeID = DecreePerson.DecreeID
				


	SET NOCOUNT OFF
END
