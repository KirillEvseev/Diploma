CREATE TABLE [scc].[PostgradulateStudent] (
    [PersonID]       INT      NOT NULL,
    [BallPhilosophy] SMALLINT NULL,
    [BallEnglish]    SMALLINT NULL,
    [BallSpecial]    SMALLINT NULL,
    [SumBalls]       AS       (([BallPhilosophy]+[BallEnglish])+[BallSpecial]),
    [UniversityID]   TINYINT  NULL,
    CONSTRAINT [PK_scc_PostgradulateStudent] PRIMARY KEY CLUSTERED ([PersonID] ASC),
    CONSTRAINT [FK_scc_PostgradulateStudent_Person] FOREIGN KEY ([PersonID]) REFERENCES [scc].[Person] ([PersonID]),
    CONSTRAINT [FK_scc_PostgradulateStudent_University] FOREIGN KEY ([UniversityID]) REFERENCES [scc].[University] ([UniversityID])
);

