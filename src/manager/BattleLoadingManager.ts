class BattleLoadingManager {
    private battleMgr_: BattleManager;
    private step_: number;
    private waitEnterRoom_: number;
    private preRender_: egret.DisplayObjectContainer;
    private playerResNum_: number;
    private enterData_: any;

    constructor(battleMgr: BattleManager) {
        this.battleMgr_ = battleMgr;
        this.step = BattleLoadingStep.None;
        this.waitEnterRoom = 60;
        this.preRender_ = new egret.DisplayObjectContainer();
        this.playerResNum = 0;
    }

    public loadAssets(enterData: any): void {
        const loadStateData: LoadingStateData = new LoadingStateData();
        loadStateData.state = "准备...";
        loadStateData.loaded = 1;
        ApplicationFacade.getInstance().sendNotification(ApplicationFacade.ChangeLoading, loadStateData, UIConfig.ShowLoading);
        this.enterData = enterData;
        this.step = BattleLoadingStep.Assets;
        console.log("BattleLoadingManager.loadAssets:");
        this.onLoadingConfigCompleted();
    }

    public reset(): void {
        this.waitEnterRoom = 60;
        this.step = BattleLoadingStep.None;
        egret.stopTick(this.onTick, this);
        this.playerResNum = 0;
        TextTextureCaches.getInstance().dispose();
    }

    public loadingCompleted(): void {
        console.log("BattleLoadingManager.loadingCompleted:");
        this.step = BattleLoadingStep.EnterRoom;
        const texture: egret.Texture = RES.getRes("battle_bead_json.baozi_01_png");
        this.addPreRenderTexture(texture);
        ApplicationFacade.getInstance().sendNotification(ApplicationFacade.ChangeLoading, "正在进入", UIConfig.ShowLoading);
    }

    public collectPlayerResource(playerVo: BattlePlayerVo, isSelf?: boolean): void {
        const self = this;

        if (isSelf === null || isSelf === void 0) {
            isSelf = false;
        }

        if (playerVo.ringId !== 0) {
            ++this.playerResNum;
            const url: string = Battle.getItemResPath(playerVo.ringId);
            ResourceUtil.getResByUrlRelative(url, (texture: egret.Texture) => {
                self.addPreRenderTexture(texture);
                --self.playerResNum;
            }, this, RES.ResourceItem.TYPE_IMAGE);
        }

        if (playerVo.charId !== 0) {
            ++this.playerResNum;
            const lowResUrl: string = Battle.getCharResUrl(playerVo.charId);
            ResourceUtil.getResByUrlRelative(lowResUrl, (texture: egret.Texture) => {
                self.addPreRenderTexture(texture);
                --self.playerResNum;
            }, this, RES.ResourceItem.TYPE_IMAGE);
            const highResUrl: string = Battle.getCharResUrl(playerVo.charId, true);
            ResourceUtil.getResByUrlRelative(highResUrl, (texture: egret.Texture) => {
                self.addPreRenderTexture(texture);
                --self.playerResNum;
            }, this, RES.ResourceItem.TYPE_IMAGE);
        }

        if (BattleService.getInstance().isSingleMode()) {
            const name: string = BattleService.getInstance().getPlayerNameByUid(playerVo.uid);
            TextTextureCaches.getInstance().cacheText(name, {
                size: 32,
            });
            TextTextureCaches.getInstance().getCacheTexture(name, this.onTextCompleted, this, 32);

            if (isSelf) {
                TextTextureCaches.getInstance().cacheText(name + " ", {
                    size: 32,
                    textColor: 16448401,
                });
                TextTextureCaches.getInstance().getCacheTexture(name + " ", this.onTextCompleted, this, 32);
            }
        }
        else if (BattleService.getInstance().isTeamMode()) {
            TextTextureCaches.getInstance().cacheText(playerVo.fullName, {
                size: 32,
            });
            TextTextureCaches.getInstance().getCacheTexture(playerVo.fullName, this.onTextCompleted, this, 32);
            const teamName: string = playerVo.teamName + "(2)";

            if (isSelf) {
                TextTextureCaches.getInstance().cacheText(teamName + " ", {
                    size: 32,
                    textColor: 16448401,
                });
                TextTextureCaches.getInstance().getCacheTexture(teamName + " ", this.onTextCompleted, this, 32);
            }
            else {
                TextTextureCaches.getInstance().cacheText(teamName, {
                    size: 32,
                });
                TextTextureCaches.getInstance().getCacheTexture(teamName, this.onTextCompleted, this, 32);
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

    private onTextCompleted(data: any): void {
        this.addPreRenderTexture(data.texture);
    }

    private onLoadingConfigCompleted(): void {
        const loadStateData: LoadingStateData = new LoadingStateData();
        loadStateData.state = "准备...";
        loadStateData.loaded = 80;
        ApplicationFacade.getInstance().sendNotification(ApplicationFacade.ChangeLoading, loadStateData, UIConfig.ShowLoading);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupLoadCompleted, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onGroupProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("battle_common", -1);
    }

    private onGroupLoadCompleted(e: RES.ResourceEvent): void {
        console.log("BattleLoadingManager.onGroupLoadCompleted: ", "group name " + e.groupName);

        if (e.groupName === "battle_common") {
            this.step = BattleLoadingStep.AseetsCompleted;
        }

        if (this.step === BattleLoadingStep.AseetsCompleted) {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupLoadCompleted, this);
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
        console.log("BattleLoadingManager.onGroupLoadError: ", "url " + e.resItem.url + " has failed to load.");
    }

    private onTick(timestamp: number): boolean {
        if (this.step !== BattleLoadingStep.None) {
            if (this.step === BattleLoadingStep.AseetsCompleted) {
                this.battleMgr_.initGame();
                this.step = BattleLoadingStep.InitCompleted;
            }
            else if (this.step === BattleLoadingStep.InitCompleted) {
                this.battleMgr_.preCreate();
                this.step = BattleLoadingStep.PreCreateCompleted;
            }
            else if (this.step === BattleLoadingStep.PreCreateCompleted) {
                this.battleMgr_.startNewGameScene(this.enterData);
                this.step = BattleLoadingStep.None;
            }
            else if (this.step === BattleLoadingStep.EnterRoom) {
                if (this.waitEnterRoom > 0) {
                    --this.waitEnterRoom;
                }
                else {
                    if (this.playerResNum < 2) {
                        this.step = BattleLoadingStep.PreRender;
                        ApplicationFacade.getInstance().stage.addChildAt(this.preRender_, 0);
                    }
                }
            }
            else if (this.step === BattleLoadingStep.PreRender) {
                this.step = BattleLoadingStep.PreCreate;
                this.preRender_.removeChildren();
                ApplicationFacade.getInstance().stage.removeChild(this.preRender_);
            }
            else if (this.step === BattleLoadingStep.PreCreate) {
                this.waitEnterRoom = 60;
                this.step = BattleLoadingStep.AllCompleted;
                this.battleMgr_.preCreateStage();
                this.battleMgr_.preCreateStar();
                this.battleMgr_.preCreateStar();
            }
            else if (this.step === BattleLoadingStep.AllCompleted) {
                if (this.waitEnterRoom > 0) {
                    --this.waitEnterRoom;
                }
                else {
                    ApplicationFacade.getInstance().sendNotification(ApplicationFacade.ChangeLoading, "", UIConfig.HideLoading);
                    egret.stopTick(this.onTick, this);
                }
            }
        }

        return false;
    }

    set step(value) {
        this.step_ = value;
    }

    get step() {
        return this.step_;
    }

    set waitEnterRoom(value) {
        this.waitEnterRoom_ = value;
    }

    get waitEnterRoom() {
        return this.waitEnterRoom_;
    }

    set playerResNum(value) {
        this.playerResNum_ = value;
    }

    get playerResNum() {
        return this.playerResNum_;
    }

    set enterData(value) {
        this.enterData_ = value;
    }

    get enterData() {
        return this.enterData_;
    }
}