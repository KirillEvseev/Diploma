CREATE TABLE [scc].[Decree] (
    [DecreeID]       SMALLINT       IDENTITY (1, 1) NOT NULL,
    [DecreeNumber]   NVARCHAR (100) NULL,
    [DecreeProtocol] NVARCHAR (100) NULL,
    [DecreeName]     NVARCHAR (100) NULL,
    [DecreeDate]     DATE           NULL,
    CONSTRAINT [PK_scc_Decree] PRIMARY KEY CLUSTERED ([DecreeID] ASC)
);

