class BattleLoadingManager {
    private static readonly WAIT_ENTER_GAME: number = 60;

    private battleMgr_: BattleManager;
    private currStep_: number;
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
        this.enterGameData = null;
    }

    public completeLoading(): void {
        console.log("BattleLoadingManager.completeLoading: ", "BattleLoadingStep.EnterRoom");
        this.currStep = BattleLoadingStep.EnterRoom;
        const texture: egret.Texture = RES.getRes("battle_bead_json.baozi_01_png");
        this.addPreRenderTexture(texture);
        ApplicationFacade.getInstance().sendNotification(ApplicationFacade.CHANGE_LOADING, "正在进入", UIConfig.SHOW_LOADING);
    }

    public collectPlayerResource(playerVo: BattlePlayerVo, isCache?: boolean): void {
        const self = this;

        if (isCache === void 0 || isCache === null) {
            isCache = false;
        }

        if (playerVo.ringId !==0) {
            ++this.playerResNum;
            const url: string = Battle.getInstance().getItemResPath(playerVo.ringId);
            ResourceUtils.getResByUrlRelative(url, (e: egret.Texture) => {
                self.addPreRenderTexture(e);
                --self.playerResNum;
            }, this, RES.ResourceItem.TYPE_IMAGE);
        }

        if (playerVo.charId !== 0) {
            ++this.playerResNum;
            const lowResUrl: string = Battle.getInstance().getCharUrlRes(playerVo.charId, false);
            ResourceUtils.getResByUrlRelative(lowResUrl, (texture: egret.Texture) => {
                self.addPreRenderTexture(texture);
                --self.playerResNum;
            }, this, RES.ResourceItem.TYPE_IMAGE);
            BattleManager.getInstance().battleBallFactory.addUrlMark(lowResUrl);
            const highResUrl: string = Battle.getInstance().getCharUrlRes(playerVo.charId, true);

            if (lowResUrl !== highResUrl) {
                ++this.playerResNum;
                ResourceUtils.getResByUrlRelative(highResUrl, (texture: egret.Texture) => {
                    self.addPreRenderTexture(texture);
                    --self.playerResNum;
                }, this, RES.ResourceItem.TYPE_IMAGE);
                BattleManager.getInstance().battleBallFactory.addUrlMark(highResUrl);
            }
        }

        const battleMode: number = BattleService.getInstance().getBattleMode();

        if (BattleService.getInstance().isOnePlayerMode()) {
            const name: string = BattleService.getInstance().getPlayerNameByUid(playerVo.uid);
            TextTextureCaches.getInstance().cacheTexture(name, {
                size: 32
            });
            TextTextureCaches.getInstance().getChacheTexture(name, this.onTextureCompleted, this, 32);

            if (isCache) {
                TextTextureCaches.getInstance().cacheTexture(name + " ", {
                    size: 32,
                    textColor: 16448401,
                });
                TextTextureCaches.getInstance().getChacheTexture(name + " ", this.onTextureCompleted, this, 32);
            }
            else if (BattleService.getInstance().isTeamMode()) {
                TextTextureCaches.getInstance().cacheTexture(playerVo.fullName, {
                    size: 32
                });
                TextTextureCaches.getInstance().getChacheTexture(playerVo.fullName, this.onTextureCompleted, this, 32);
                const teamName: string = playerVo.teamName + "(2)";

                if (isCache) {
                    TextTextureCaches.getInstance().cacheTexture(teamName + " ", {
                        size: 32,
                        textColor: 16448401
                    });
                    TextTextureCaches.getInstance().getChacheTexture(teamName + " ", this.onTextureCompleted, this, 32);
                }
                else {
                    TextTextureCaches.getInstance().cacheTexture(teamName, {
                        size: 32,
                        textColor: 16448401
                    });
                    TextTextureCaches.getInstance().getChacheTexture(teamName, this.onTextureCompleted, this, 32); 
                }
            }
        }
    }

    private addPreRenderTexture(texture: egret.Texture): void {
        if (texture !== null) {
            const bitmap: egret.Bitmap = new egret.Bitmap(texture);
            this.preRender_.addChild(bitmap);
        }
    }

    private startup(): void {
        egret.startTick(this.onTick, this);
    }

    private reset(): void {
        this.waitEnterGame = 60;
        this.currStep = BattleLoadingStep.None;
        egret.stopTick(this.onTick, this);
        this.playerResNum = 0;
        TextTextureCaches.getInstance().dispose();
    }

    private onTextureCompleted(): void {

    }

    private onLoadingConfigCompleted(): void {
        const data: LoadingStateData = new LoadingStateData();
        data.stateName = "准备..";
        data.loaded = 80;
        ApplicationFacade.getInstance().sendNotification(ApplicationFacade.CHANGE_LOADING, data, UIConfig.SHOW_LOADING);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoadGroupCompleted, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onGroupProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        console.log("BattleLoadingManager.onLoadingConfigCompleted.enterGameData:", this.enterGameData);

        if (BattleDisplayBall.CHAR_URL) {
            console.log("BattleLoadingManager.initAssets:", "BattleDisplayBall.CHAR_URL");
        }
        else {
            switch (this.enterGameData.battleType) {
                case 2:
                case 102:
                case 111: {
                }
                break;
                case 1:
                case 101: {
                }
                break;
                case 204:
                case 4:
                case 104: {
                }
                break;
                case 6: {
                }
                break;
                default: {
                    console.log("BattleDisplayBall.onLoadingConfigCompleted: ", "miss battle type " + this.enterGameData.battleType);
                }
                break;
            }
        }

        RES.loadGroup("battleCommon", -1);
    }

    private onLoadGroupCompleted(e: RES.ResourceEvent): void {
        console.log("BattleLoadingManager.onLoadGroupCompleted:", e.groupName);

        if (e.groupName === "battleCommon") {
            this.currStep = BattleLoadingStep.AssetsCompleted;
        }

        if (this.currStep === BattleLoadingStep.AssetsCompleted) {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoadGroupCompleted, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onGroupProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.startup();
        }
    }

    private onGroupLoadError(e: RES.ResourceEvent): void {

    }

    private onGroupProgress(e: RES.ResourceEvent): void {

    }

    private onItemLoadError(e: RES.ResourceEvent): void {
        console.log("BattleDisplayBall.onLoad: ", "url " + e.resItem.url + " has failed to load.");
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