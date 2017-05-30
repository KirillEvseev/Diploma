CREATE TABLE [scc].[Direction] (
    [DirectionID]   TINYINT       IDENTITY (1, 1) NOT NULL,
    [DirectionName] NVARCHAR (50) NOT NULL,
    CONSTRAINT [PK_scc_Direction] PRIMARY KEY CLUSTERED ([DirectionID] ASC)
);

