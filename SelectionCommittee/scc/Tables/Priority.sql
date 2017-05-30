CREATE TABLE [scc].[Priority] (
    [PersonID]    INT     NOT NULL,
    [DirectionID] TINYINT NOT NULL,
    [State]       TINYINT NOT NULL,
    CONSTRAINT [PK_scc_Priority] PRIMARY KEY CLUSTERED ([PersonID] ASC, [DirectionID] ASC, [State] ASC),
    CONSTRAINT [FK_scc_Priority_Direction] FOREIGN KEY ([DirectionID]) REFERENCES [scc].[Direction] ([DirectionID]),
    CONSTRAINT [FK_scc_Priority_Person] FOREIGN KEY ([PersonID]) REFERENCES [scc].[Person] ([PersonID])
);

