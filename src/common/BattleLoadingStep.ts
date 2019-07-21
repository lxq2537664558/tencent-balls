class BattleLoadingStep {
    public static readonly None: number = 0;
    public static readonly Assets: number = 1;
    public static readonly AseetsCompleted: number = 2;
    public static readonly InitCompleted: number = 3;
    public static readonly PreCreateCompleted: number = 4;
    public static readonly EnterRoom: number = 5;
    public static readonly PreRender: number = 6;
    public static readonly PreCreate: number = 7;
    public static readonly AllCompleted: number = 8;
}

BattleLoadingStep[BattleLoadingStep.None.toString()] = "None";
BattleLoadingStep[BattleLoadingStep.Assets.toString()] = "Assets";
BattleLoadingStep[BattleLoadingStep.AseetsCompleted.toString()] = "AseetsCompleted";
BattleLoadingStep[BattleLoadingStep.InitCompleted.toString()] = "InitCompleted";
BattleLoadingStep[BattleLoadingStep.PreCreateCompleted.toString()] = "PreCreateCompleted";
BattleLoadingStep[BattleLoadingStep.EnterRoom.toString()] = "EnterRoom";
BattleLoadingStep[BattleLoadingStep.PreRender.toString()] = "PreRender";
BattleLoadingStep[BattleLoadingStep.PreCreate.toString()] = "PreCreate";
BattleLoadingStep[BattleLoadingStep.AllCompleted.toString()] = "AllCompleted";