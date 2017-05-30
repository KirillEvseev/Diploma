CREATE TABLE [scc].[Decree_Person_Duplicate] (
    [PersonID]                      INT           NOT NULL,
    [DecreeID]                      SMALLINT      NOT NULL,
    [ParticipationInAnotherContest] BIT           NOT NULL,
    [PassDirection]                 NVARCHAR (50) NOT NULL,
    CONSTRAINT [PK_scc_Decree_Person_Duplicate] PRIMARY KEY CLUSTERED ([PersonID] ASC, [DecreeID] ASC),
    CONSTRAINT [FK_scc_Decree_Person_Decree_Duplicate] FOREIGN KEY ([DecreeID]) REFERENCES [scc].[Decree_Duplicate] ([DecreeID]),
    CONSTRAINT [FK_scc_Decree_Person_Person_Duplicate] FOREIGN KEY ([PersonID]) REFERENCES [scc].[Bachelor_FullInfo_Duplicate] ([PersonID])
);

