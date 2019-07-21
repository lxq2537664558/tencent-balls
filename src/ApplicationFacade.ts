class ApplicationFacade extends puremvc.Facade {
    public static readonly Startup: string = "Startup";
    public static readonly ChangeScene: string = "ChangeScene";
    public static readonly ChangePanel: string = "ChangePanel";
    public static readonly ChangeLoading: string = "ChangeLoading";

    private static instance_: ApplicationFacade;

    private switchDragonBones_: boolean;
    private timestamp_: number;
    private stage_: egret.Stage;

    constructor() {
        super(ApplicationFacade);

        this.switchDragonBones = true;
        this.timestamp = -1;
    }

    public static getInstance(): ApplicationFacade {
        if (!this.instance_) {
            this.instance_ = new ApplicationFacade();
        }

        return this.instance_;
    }

    public initializeController(): void {
        super.initializeController();
        this.registerCommand(ApplicationFacade.Startup, StartupCommand);
    }

    public startup(main: Main): void {
        console.log("ApplicationFacade.startup:");
        this.stage = main.stage;
        this.sendNotification(ApplicationFacade.Startup, main);
        this.removeCommand(ApplicationFacade.Startup);
        this.sendNotification(ApplicationFacade.ChangeScene, SceneName.Loading, UIConfig.AddScene);
        this.sendNotification(ServiceCommand.StartLogin);
        egret.startTick(this.onTick, this);
        this.stage.addEventListener(egret.Event.ACTIVATE, this.onActivate, this);
        this.stage.addEventListener(egret.Event.DEACTIVATE, this.onDeactivate, this);
    }

    public onActivate(): void {

    }

    public onDeactivate(): void {

    }

    // 自 egret 运行至现在的毫秒数
    private onTick(timestamp: number): boolean {
        return false;
    }

    set switchDragonBones(value) {
        this.switchDragonBones_ = value;

        if (value) {
            this.timestamp = -1;
        }
    }

    get switchDragonBones() {
        return this.switchDragonBones_;
    }

    set timestamp(value) {
        this.timestamp_ = value;
    }

    get timestamp() {
        return this.timestamp_;
    }

    set stage(value) {
        this.stage_ = value;
    }

    get stage() {
        return this.stage_;
    }
}