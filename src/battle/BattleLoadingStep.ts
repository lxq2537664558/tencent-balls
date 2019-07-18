class BattleLoadingStep {
    public static readonly None: string = "None";
    public static readonly Assets: string = "Assets";
    public static readonly AssetsCompleted: string = "AssetsCompleted";
    public static readonly InitCompleted: string = "InitCompleted";
    public static readonly PreCreateCompleted: string = "PreCreateCompleted";
    public static readonly PreCreate: string = "PreCreate";
    public static readonly AllCompleted: string = "AllCompleted";
    public static readonly PreRender: string = "PreRender";
    public static readonly EnterRoom: string = "EnterRoom";

    public static readonly NONE: number = 0;
    public static readonly ASSETS: number = 1;
    public static readonly ASSETS_COMPLETED: number = 2;
    public static readonly INIT_COMPLETED: number = 3;
    public static readonly PRECREATE_COMPLETED: number = 4;
    public static readonly ENTER_ROOM: number = 5;
    public static readonly PRE_RENDER: number = 6;
    public static readonly PRE_CREATE: number = 7;
    public static readonly ALL_COMPLETED: number = 8;
}

BattleLoadingStep[BattleLoadingStep.NONE] = BattleLoadingStep.None;
BattleLoadingStep[BattleLoadingStep.ASSETS] = BattleLoadingStep.Assets;
BattleLoadingStep[BattleLoadingStep.ASSETS_COMPLETED] = BattleLoadingStep.AssetsCompleted;
BattleLoadingStep[BattleLoadingStep.INIT_COMPLETED] = BattleLoadingStep.InitCompleted;
BattleLoadingStep[BattleLoadingStep.PRECREATE_COMPLETED] = BattleLoadingStep.PreCreateCompleted;
BattleLoadingStep[BattleLoadingStep.ENTER_ROOM] = BattleLoadingStep.EnterRoom;
BattleLoadingStep[BattleLoadingStep.PRE_RENDER] = BattleLoadingStep.PreRender;
BattleLoadingStep[BattleLoadingStep.PRE_CREATE] = BattleLoadingStep.PreCreate;
BattleLoadingStep[BattleLoadingStep.ALL_COMPLETED] = BattleLoadingStep.AllCompleted;