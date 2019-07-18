class BattleScene extends egret.DisplayObjectContainer {
    private bg_: egret.Bitmap;
    private battleBg_: BattleBackground;
    private battleCamera_: BattleCamera;
    private battleWorld_: BattleWorld;
    private battleTouchLayer_: BattleTouchLayer;
    private battleUILayer_: BattleUILayer;
    private gamePad_: GamePad;

    constructor() {
        super();

        this.bg_ = new egret.Bitmap();
        this.battleBg_ = new BattleBackground();
        this.battleBg_.touchChildren = false;
        this.battleWorld_ = new BattleWorld();
        this.battleWorld_.touchChildren = false;
        this.battleCamera_ = new BattleCamera();
        this.battleCamera_.battleWorld = this.battleWorld_;
        this.battleCamera_.battleBg = this.battleBg_;
        this.battleTouchLayer_ = new BattleTouchLayer();
        this.battleUILayer_ = new BattleUILayer();
        this.battleUILayer_.touchChildren = false;

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    public initGamePad(): void {
        if (this.gamePad_) {
            return;
        }

        this.gamePad_ = new GamePad(this.bg);
    }

    public addToBattleLayer(container: egret.DisplayObjectContainer): void {
        // this.battleWorld_.
    }

    public onDestroy(): void {
        
    }

    private setStage(e: egret.Event): void {
        BattleConfig.setStage(this.stage);
    }

    private onAddToStage(e: egret.Event): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.setStage(e);
        this.addChild(this.bg);
        this.bg.texture = RES.getRes("b_bg_png");
        const scale9Grid: egret.Rectangle = new egret.Rectangle(1, 1, 11, 16);
        this.bg.scale9Grid = scale9Grid;
        this.bg.width = BattleConfig.stageWidth;
        this.bg.height = BattleConfig.stageHeight;
        this.addChild(this.battleBg_);
        this.addChild(this.battleWorld_);
        this.addChild(this.battleUILayer_);
        this.addChild(this.battleTouchLayer_);
        this.addEventListener(egret.Event.RESIZE, this.setStage, this);
    }

    get bg() {
        return this.bg_;
    }

    set battleCamera(value) {
        this.battleCamera_ = value;
    }

    get battleCamera() {
        return this.battleCamera_;
    }

    set zoom(value) {
        this.battleCamera.zoom = value;
    }

    get zoom() {
        return this.battleCamera.zoom;
    }
}