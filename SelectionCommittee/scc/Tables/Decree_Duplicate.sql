CREATE TABLE [scc].[Decree_Duplicate] (
    [DecreeID]       SMALLINT       NOT NULL,
    [DecreeNumber]   NVARCHAR (100) NULL,
    [DecreeProtocol] NVARCHAR (100) NULL,
    [DecreeName]     NVARCHAR (100) NULL,
    [DecreeDate]     DATE           NULL,
    CONSTRAINT [PK_scc_Decree_Duplicate] PRIMARY KEY CLUSTERED ([DecreeID] ASC)
);

