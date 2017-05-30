
CREATE PROCEDURE [scc].[usp_PostgradulateStudent_BriefInformation]
AS
BEGIN
	SELECT [LastName]
			,[FirstName]
			,[MiddleName]
			,[UniversityName]
			,[Speciality]
			,[BallPhilosophy]
			,[BallEnglish]
			,[BallSpecial]
			,[SumBalls]
		FROM [scc].[vw_PostgradulateStudent_FullInfo]
		ORDER BY [SumBalls] DESC
				,[LastName]
				,[FirstName]
				,[MiddleName]
END
