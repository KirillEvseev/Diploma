CREATE TABLE [scc].[Auth] (
    [ID]       INT            IDENTITY (1, 1) NOT NULL,
    [Login]    NVARCHAR (100) NOT NULL,
    [Password] NVARCHAR (100) NULL,
    CONSTRAINT [PK_scc_AuthID] PRIMARY KEY CLUSTERED ([ID] ASC)
);

