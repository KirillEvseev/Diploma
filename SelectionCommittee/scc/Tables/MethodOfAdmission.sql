CREATE TABLE [scc].[MethodOfAdmission] (
    [MethodOfAdmissionID] TINYINT       IDENTITY (1, 1) NOT NULL,
    [MethodName]          NVARCHAR (50) NOT NULL,
    CONSTRAINT [PK_scc_MethodOfAdmission] PRIMARY KEY CLUSTERED ([MethodOfAdmissionID] ASC)
);

