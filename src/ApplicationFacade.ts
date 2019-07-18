class ApplicationFacade extends Facade {
    public static STARTUP: string = "startUp";
    public static CHANGE_SCENE: string = "changeScene";
    public static CHANGE_PANEL: string = "changePanel";
    public static CHANGE_LOADING: string = "changeLoading";

    private timestamp_: number;
    private switchDB_: boolean;
    private stage_: egret.Stage;

    constructor() {
        super();
    }

    public static getInstance(): ApplicationFacade {
        if (!this.instance_) {
            this.instance_ = new ApplicationFacade();
        }

        return this.instance_;
    }

    public startup(main: Main): void {
        console.log("ApplicationFacade.startup:");
        this.stage = main.stage;
        this.sendNotification(ApplicationFacade.STARTUP, main);
        this.removeCommand(ApplicationFacade.STARTUP);
        this.sendNotification(ApplicationFacade.CHANGE_SCENE, SceneName.Loading, UIConfig.ADD_SCENE);
        this.sendNotification(ServiceCommand.START_LOGIN);
        egret.startTick(this.onTick, this);
        this.stage.addEventListener(egret.Event.ACTIVATE, this.onActivate, this);
        this.stage.addEventListener(egret.Event.DEACTIVATE, this.onDeActivate, this);
    }

    public onActivate(): void {
        const settingsProxy: SettingsProxy = <SettingsProxy>(this.retrieveProxy(SettingsProxy.NAME));

        if (settingsProxy && settingsProxy.bmgEnabled) {
        }
    }

    public onDeActivate(): void {
    }

    protected initializeController(): void {
        super.initializeController();
        this.registerCommand(ApplicationFacade.STARTUP, StartupCommand);
    }

    private onTick(timestamp: number): boolean {
        TimeUtils.getInstance().enterFrameTimer = egret.getTimer();

        if (this.switchDB) {
            if (this.timestamp === -1) {
                this.timestamp = timestamp;
            }

            const elapsedTime: number = timestamp - this.timestamp;
            this.timestamp = timestamp;
            dragonBones.WorldClock.clock.advanceTime(elapsedTime / Constants.SECOND_IN_MILLISECONDS);
        }

        return false;
    }

    set timestamp(value) {
        this.timestamp_ = value;
    }

    get timestamp() {
        return this.timestamp_;
    }

    set switchDB(value) {
        this.switchDB_ = value;
        this.timestamp = -1;
    }

    get switchDB() {
        return this.switchDB_;
    }

    set stage(value) {
        this.stage_ = value;
    }

    get stage() {
        return this.stage_;
    }
}