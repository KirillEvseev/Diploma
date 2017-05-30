CREATE TABLE [scc].[School] (
    [SchoolID]   SMALLINT       IDENTITY (1, 1) NOT NULL,
    [SchoolName] NVARCHAR (100) NOT NULL,
    [CityID]     SMALLINT       NULL,
    CONSTRAINT [PK_scc_School] PRIMARY KEY CLUSTERED ([SchoolID] ASC),
    CONSTRAINT [FK_scc_School_City] FOREIGN KEY ([CityID]) REFERENCES [scc].[City] ([CityID])
);

