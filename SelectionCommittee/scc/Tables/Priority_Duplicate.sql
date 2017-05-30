CREATE TABLE [scc].[Priority_Duplicate] (
    [PersonID]    INT     NOT NULL,
    [DirectionID] TINYINT NOT NULL,
    [State]       TINYINT NOT NULL,
    CONSTRAINT [PK_scc_Priority_Duplicate] PRIMARY KEY CLUSTERED ([PersonID] ASC, [DirectionID] ASC, [State] ASC),
    CONSTRAINT [FK_scc_Priority_Direction_Duplicate] FOREIGN KEY ([DirectionID]) REFERENCES [scc].[Direction] ([DirectionID]),
    CONSTRAINT [FK_scc_Priority_Person_Duplicate] FOREIGN KEY ([PersonID]) REFERENCES [scc].[Bachelor_FullInfo_Duplicate] ([PersonID])
);

