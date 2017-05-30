CREATE TABLE [scc].[Parent] (
    [ParentID]       SMALLINT      IDENTITY (1, 1) NOT NULL,
    [FirstName]      NVARCHAR (70) NULL,
    [MiddleName]     NVARCHAR (70) NULL,
    [LastName]       NVARCHAR (70) NULL,
    [PhoneNumber]    NVARCHAR (50) NULL,
    [Identification] BIT           NULL,
    [PersonID]       INT           NULL,
    CONSTRAINT [PK_scc_Parent] PRIMARY KEY CLUSTERED ([ParentID] ASC),
    CONSTRAINT [FK_scc_Parent_Person] FOREIGN KEY ([PersonID]) REFERENCES [scc].[Person] ([PersonID])
);

