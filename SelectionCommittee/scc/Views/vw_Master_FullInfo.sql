
CREATE VIEW scc.vw_Master_FullInfo
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
	  ,Master.[Payment]
	  ,Master.[WayOfLearning]
	  ,Master.[Interview]
	  ,Master.[BallExtraPoints]
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
	  ,Direction.FirstDirection
	  ,Direction.SecondDirection
	  ,Direction.ThirdDirection
	FROM [scc].[Person] AS Person
		JOIN [scc].[Master] AS Master
			ON Person.[PersonID] = Master.[PersonID]
		JOIN [scc].[MethodOfAdmission] AS MOA
			ON Person.[MethodOfAdmissionID] = MOA.[MethodOfAdmissionID]
		LEFT JOIN [scc].[City] AS City
			ON City.[CityID] = Person.[CityID]
		LEFT JOIN [scc].[University] AS University
			ON University.[UniversityID] = Master.[UniversityID]
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
		LEFT JOIN (SELECT ISNULL(ISNULL(First.[PersonID], Second.[PersonID]),Third.[PersonID]) AS PersonID
				,First.[DirectionName] AS FirstDirection
				,Second.[DirectionName] AS SecondDirection
				,Third.[DirectionName] AS ThirdDirection
			FROM (SELECT Proirity.[PersonID]
						,Direction.[DirectionName]
					FROM [scc].[Priority] AS Proirity
						JOIN [scc].[Direction] AS Direction
							ON Direction.[DirectionID] = Proirity.[DirectionID]
						WHERE Proirity.State = 1) AS First
				FULL JOIN (SELECT Proirity.[PersonID]
							,Direction.[DirectionName]
						FROM [scc].[Priority] AS Proirity
							JOIN [scc].[Direction] AS Direction
								ON Direction.[DirectionID] = Proirity.[DirectionID]
							WHERE Proirity.State = 2) AS Second	
						ON First.PersonID = Second.PersonID
					FULL JOIN (SELECT Proirity.[PersonID]
								,Direction.[DirectionName]
							FROM [scc].[Priority] AS Proirity
								JOIN [scc].[Direction] AS Direction
									ON Direction.[DirectionID] = Proirity.[DirectionID]
								WHERE Proirity.State = 3) AS Third
						ON First.PersonID = Third.PersonID OR Second.PersonID = Third.PersonID) as Direction
			ON Person.[PersonID] = Direction.[PersonID]
