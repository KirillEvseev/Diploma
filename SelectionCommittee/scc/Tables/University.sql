CREATE TABLE [scc].[University] (
    [UniversityID]   TINYINT        IDENTITY (1, 1) NOT NULL,
    [UniversityName] NVARCHAR (100) NOT NULL,
    [Speciality]     NVARCHAR (100) NULL,
    CONSTRAINT [PK_scc_University] PRIMARY KEY CLUSTERED ([UniversityID] ASC)
);

