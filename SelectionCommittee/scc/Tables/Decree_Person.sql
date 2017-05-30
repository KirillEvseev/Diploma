CREATE TABLE [scc].[Decree_Person] (
    [PersonID]                      INT           NOT NULL,
    [DecreeID]                      SMALLINT      NOT NULL,
    [ParticipationInAnotherContest] BIT           NOT NULL,
    [PassDirection]                 NVARCHAR (50) NOT NULL,
    CONSTRAINT [PK_scc_Decree_Person] PRIMARY KEY CLUSTERED ([PersonID] ASC, [DecreeID] ASC),
    CONSTRAINT [FK_scc_Decree_Person_Decree] FOREIGN KEY ([DecreeID]) REFERENCES [scc].[Decree] ([DecreeID]),
    CONSTRAINT [FK_scc_Decree_Person_Person] FOREIGN KEY ([PersonID]) REFERENCES [scc].[Person] ([PersonID])
);

