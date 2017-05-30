CREATE TABLE [scc].[Bachelor] (
    [PersonID]             INT      NOT NULL,
    [Certificate]          BIT      NOT NULL,
    [Payment]              BIT      NOT NULL,
    [WayOfLearning]        BIT      NOT NULL,
    [BallRussian]          SMALLINT NOT NULL,
    [BallMathematics]      SMALLINT NULL,
    [BallInformatics]      SMALLINT NOT NULL,
    [BallPhysics]          SMALLINT NULL,
    [BallSocialSciense]    SMALLINT NULL,
    [BallExtraPoints]      SMALLINT NULL,
    [SumWithMathematics]   AS       (case when [BallMathematics] IS NOT NULL then (([BallRussian]+[BallInformatics])+[BallMathematics])+[BallExtraPoints]  end),
    [SumWithSocialSciense] AS       (case when [BallSocialSciense] IS NOT NULL then (([BallRussian]+[BallInformatics])+[BallSocialSciense])+[BallExtraPoints]  end),
    [SchoolID]             SMALLINT NULL,
    CONSTRAINT [PK_scc_Bachelor] PRIMARY KEY CLUSTERED ([PersonID] ASC),
    CONSTRAINT [FK_scc_Bachelor_Person] FOREIGN KEY ([PersonID]) REFERENCES [scc].[Person] ([PersonID]),
    CONSTRAINT [FK_scc_Bachelor_School] FOREIGN KEY ([SchoolID]) REFERENCES [scc].[School] ([SchoolID])
);

