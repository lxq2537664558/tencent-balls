class BattleManager {
    private static instance_: BattleManager;

    private battleScene_: BattleScene;
    private isInGame_: boolean;
    private isEnterGame_: boolean;
    private lastTime_: number;
    private deltaTime_: number;
    private halfUpdate_: boolean;
    private battleLoadMgr_: BattleLoadingManager;
    private battleBallFactory_: BattleBallCreateFactory;
    private gameLayer_: GameLayer;
    private isBattlePlaying_: boolean;

    constructor() {

    }

    public static getInstance(): BattleManager {
        if (!this.instance_) {
            this.instance_ = new BattleManager();
        }

        return this.instance_;
    }

    public preLoadGame(enterGameData: EnterGameData): void {
        if (!this.battleLoadMgr_) {
            this.battleLoadMgr_ = new BattleLoadingManager(this);            
        }

        this.battleLoadMgr.initAssets(enterGameData);
    }

    public initGame(): void {
        if (!this.isInGame) {
            this.battleBallFactory = new BattleBallCreateFactory();
            this.battleScene_ = new BattleScene();
            ApplicationFacade.getInstance().sendNotification(ApplicationFacade.CHANGE_SCENE, SceneName.Battle, UIConfig.ADD_SCENE);
            this.isInGame = true;
            ApplicationFacade.getInstance().retrieveMediator(UIMediator.NAME).viewComponent;
        }

        this.isInGame = true;
    }

    public preCreate(): void {

    }

    public preCreateStage(): void {

    }

    public preCreateStar(): void {
        
    }

    public startNewGameScene(enterGameData: EnterGameData): void {

    }

    public gameOverGameScene(): void {
        egret.stopTick(this.onEnterFrame, this);
        this.onExitRoom();
        StarSystem.getInstance().destoryData();
        this.battleBallFactory.onDestroy();
        this.battleScene.onDestroy();

        if (this.battleScene.parent !== null) {
            this.battleScene.parent.removeChild(this.battleScene);
        }

        this.battleLoadMgr.cleanup();
        this.battleScene = null;
        this.battleBallFactory = null;
        this.battleLoadMgr = null;
        this.isInGame = false;
        this.isEnterGame = false;
    }

    public onExitRoom(): void {

    }

    private onEnterFrame(timestamp: number): boolean {
        return false;
    }

    set battleScene(value) {
        this.battleScene_ = value;
    }

    get battleScene() {
        return this.battleScene_;
    }

    set zoom(value) {
        this.battleScene.zoom = value;
    }

    get zoom() {
        return this.battleScene.zoom;
    }

    set battleLoadMgr(value) {
        this.battleLoadMgr_ = value;
    }

    get battleLoadMgr() {
        return this.battleLoadMgr_;
    }

    set isInGame(value) {
        this.isInGame_ = value;
    }

    get isInGame() {
        return this.isInGame_;
    }

    set battleBallFactory(value) {
        this.battleBallFactory_ = value;
    }

    get battleBallFactory() {
        return this.battleBallFactory_;
    }

    set gameLayer(value) {
        this.gameLayer_ = value;
    }

    get gameLayer() {
        return this.gameLayer_;
    }

    set isEnterGame(value) {
        this.isEnterGame_ = value;
    }

    get isEnterGame() {
        return this.isEnterGame_;
    }

    set isBattlePlaying(value) {
        this.isBattlePlaying_ = value;
    }

    get isBattlePlaying() {
        return this.isBattlePlaying_;
    }
}