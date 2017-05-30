
CREATE VIEW scc.vw_PostgradulateStudent_FullInfo
WITH SCHEMABINDING
AS SELECT Person.[PersonID]
      ,Person.[FirstName]
      ,Person.[MiddleName]
      ,Person.[LastName]
      ,Person.[PhoneNumber]
      ,Person.[Check]
      ,Person.[Discription]
      ,Person.[AgreementOnTransfer]
      ,Person.[ProcessingOfPersonalData]
      ,Person.[Reference]
      ,Person.[Policy]
      ,Person.[Photo]
      ,Person.[PassportCopy]
      ,Person.[INN]
      ,Person.[SNILS]
      ,Person.[DocNumber]
      ,City.[CityName]
      ,MOA.[MethodName]
      ,Person.[sysDateCreated]
      ,Person.[sysDateModified]
	  ,PostgradulateStudent.[BallPhilosophy]
	  ,PostgradulateStudent.[BallEnglish]
	  ,PostgradulateStudent.[BallSpecial]
	  ,PostgradulateStudent.[SumBalls]
	  ,PostgradulateStudent.[UniversityID]
	  ,University.[UniversityName]
	  ,University.[Speciality]
	  ,Parent.MotherFirstName
	  ,Parent.MotherMiddleName
	  ,Parent.MotherLastName
	  ,Parent.MotherPhoneNumber
	  ,Parent.FatherFirstName
	  ,Parent.FatherMiddleName
	  ,Parent.FatherLastName
	  ,Parent.FatherPhoneNumber
	FROM [scc].[Person] AS Person
		JOIN [scc].[PostgradulateStudent] AS PostgradulateStudent
			ON Person.[PersonID] = PostgradulateStudent.[PersonID]
		JOIN [scc].[MethodOfAdmission] AS MOA
			ON Person.[MethodOfAdmissionID] = MOA.[MethodOfAdmissionID]
		LEFT JOIN [scc].[City] AS City
			ON City.[CityID] = Person.[CityID]
		LEFT JOIN [scc].[University] AS University
			ON University.[UniversityID] = PostgradulateStudent.[UniversityID]
		LEFT JOIN(SELECT ISNULL(Mother.[PersonID], Father.[PersonID]) AS PersonID
				,Mother.[FirstName] AS MotherFirstName
				,Mother.[MiddleName] AS MotherMiddleName
				,Mother.[LastName] AS MotherLastName
				,Mother.[PhoneNumber] AS MotherPhoneNumber
				,Father.[FirstName] AS FatherFirstName
				,Father.[MiddleName] AS FatherMiddleName
				,Father.[LastName] AS FatherLastName
				,Father.[PhoneNumber] AS FatherPhoneNumber
			FROM (SELECT [PersonID]
							,[FirstName]
							,[MiddleName]
							,[LastName]
							,[PhoneNumber]
						FROM [scc].[Parent]
						WHERE Identification = 0) AS Mother
				FULL JOIN (SELECT [PersonID]
							,[FirstName]
							,[MiddleName]
							,[LastName]
							,[PhoneNumber]
						FROM [scc].[Parent]
						WHERE Identification = 1) AS Father
					ON Mother.PersonID = Father.PersonID) as Parent
			ON Person.[PersonID] = Parent.[PersonID]
