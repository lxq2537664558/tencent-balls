class BattleLoadingManager {
    private static readonly WAIT_ENTER_GAME: number = 60;

    private battleMgr_: BattleManager;
    private currStep_: string;
    private preRender_: egret.DisplayObjectContainer;
    private playerResNum_: number;
    private enterGameData_: EnterGameData;
    private waitEnterGame_: number;

    constructor(battleMgr: BattleManager) {
        this.battleMgr = battleMgr;
        this.currStep = BattleLoadingStep.None;
        this.preRender_ = new egret.DisplayObjectContainer();
        this.playerResNum = 0;
    }

    public initAssets(enterGameData: EnterGameData): void {
        console.log("BattleLoadingManager.initAssets.enterGameData:", enterGameData);
        const data: LoadingStateData = new LoadingStateData();
        data.stateName = "准备.";
        data.loaded = 1;
        ApplicationFacade.getInstance().sendNotification(ApplicationFacade.CHANGE_LOADING, data, UIConfig.SHOW_LOADING);
        this.enterGameData = enterGameData;
        this.currStep = BattleLoadingStep.Assets;
        this.onLoadingConfigCompleted();
    }

    public cleanup(): void {
        RES.destroyRes("battleCommon");
    }

    private startup(): void {
        egret.startTick(this.onTick, this);
    }

    private onLoadingConfigCompleted(): void {
        const data: LoadingStateData = new LoadingStateData();
        data.stateName = "准备..";
        data.loaded = 80;
        ApplicationFacade.getInstance().sendNotification(ApplicationFacade.CHANGE_LOADING, data, UIConfig.SHOW_LOADING);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoadGroupCompleted, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onLoadGroupError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onLoadGroupProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onLoadGroupItemError, this);
        console.log("BattleLoadingManager.onLoadingConfigCompleted.enterGameData:", this.enterGameData);

        // if (BattleDisplayBall.CHAR_URL) {
        //     console.log("BattleLoadingManager.initAssets:", "BattleDisplayBall.CHAR_URL");
        // }
        // else {
        //     switch (this.enterGameData.battleType) {
        //     }
        // }

        // RES.loadGroup("battleCommon", -1);
    }

    private onLoadGroupCompleted(e: RES.ResourceEvent): void {
        console.log("BattleLoadingManager.onLoadGroupCompleted:", e.groupName);

        if (e.groupName === "battleCommon") {
            this.currStep = BattleLoadingStep.AssetsCompleted;
        }

        if (this.currStep === BattleLoadingStep.AssetsCompleted) {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoadGroupCompleted, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onLoadGroupError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onLoadGroupProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onLoadGroupItemError, this);
            this.startup();
        }
    }

    private onLoadGroupError(e: RES.ResourceEvent): void {

    }

    private onLoadGroupProgress(e: RES.ResourceEvent): void {

    }

    private onLoadGroupItemError(e: RES.ResourceEvent): void {

    }

    private onTick(timestamp: number): boolean {
        if (this.currStep !== BattleLoadingStep.None) {
            if (this.currStep === BattleLoadingStep.AssetsCompleted) {
                this.battleMgr.initGame();
                this.currStep = BattleLoadingStep.InitCompleted;

                return false;
            }
            else if (this.currStep === BattleLoadingStep.InitCompleted) {
                this.battleMgr.preCreate();
                this.currStep = BattleLoadingStep.PreCreateCompleted;

                return false;
            }
            else if (this.currStep === BattleLoadingStep.PreCreateCompleted) {
                this.battleMgr.startNewGameScene(this.enterGameData);
                this.currStep = BattleLoadingStep.None;

                return false;
            }
            else if (this.currStep === BattleLoadingStep.EnterRoom) {
                if (this.waitEnterGame > 0) {
                    --this.waitEnterGame;
                }
                else {
                    if (this.playerResNum < 2) {
                        this.currStep = BattleLoadingStep.PreRender;
                        ApplicationFacade.getInstance().stage.addChildAt(this.preRender_, 0);
                    }

                    return false;
                }
            }
            else if (this.currStep === BattleLoadingStep.PreRender) {
                this.currStep = BattleLoadingStep.PreCreate;
                this.preRender_.removeChildren();
                ApplicationFacade.getInstance().stage.removeChild(this.preRender_);
            }
            else if (this.currStep === BattleLoadingStep.PreCreate) {
                this.waitEnterGame = BattleLoadingManager.WAIT_ENTER_GAME;
                this.currStep = BattleLoadingStep.AllCompleted;
                this.battleMgr.preCreateStage();
                this.battleMgr.preCreateStar();
            }
        }
    }

    set battleMgr(value) {
        this.battleMgr_ = value;
    }

    get battleMgr() {
        return this.battleMgr_;
    }

    set currStep(value) {
        this.currStep_ = value;
    }

    get currStep() {
        return this.currStep_;
    }

    set playerResNum(value) {
        this.playerResNum_ = value;
    }

    get playerResNum() {
        return this.playerResNum_;
    }

    set enterGameData(value) {
        this.enterGameData_ = value;
    }

    get enterGameData() {
        return this.enterGameData_;
    }

    set waitEnterGame(value) {
        this.waitEnterGame_ = value;
    }

    get waitEnterGame() {
        return this.waitEnterGame_;
    }
}