CREATE TABLE [scc].[Master] (
    [PersonID]        INT             NOT NULL,
    [Payment]         BIT             NULL,
    [WayOfLearning]   BIT             NULL,
    [Interview]       NVARCHAR (2000) NULL,
    [BallExtraPoints] TINYINT         NULL,
    [UniversityID]    TINYINT         NULL,
    CONSTRAINT [PK_scc_Master] PRIMARY KEY CLUSTERED ([PersonID] ASC),
    CONSTRAINT [FK_scc_Master_Person] FOREIGN KEY ([PersonID]) REFERENCES [scc].[Person] ([PersonID]),
    CONSTRAINT [FK_scc_Master_University] FOREIGN KEY ([UniversityID]) REFERENCES [scc].[University] ([UniversityID])
);

