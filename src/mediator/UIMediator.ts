class UIMediator extends puremvc.Mediator {
    public static readonly NAME: string = "UIMediator";
    public static view: any = null;

    private rootView_: UILayer;
    private navScene_: Array<any>;
    private stage_: egret.Stage;

    constructor(uiLayer: UILayer) {
        super(UIMediator.NAME, uiLayer);

        this.rootView_ = this.viewComponent;
        this.rootView_.name = "UIRootView";
        this.navScene_ = new Array();
        this.stage_ = this.rootView_.stage;
        UIMediator.view = this.rootView_;
    }

    public listNotificationInterests(): string[] {
        return [ 
            ApplicationFacade.ChangeScene, ApplicationFacade.ChangePanel, ApplicationFacade.ChangeLoading,
            SingletonPanelBase.AddSingletonPanel, SingletonPanelBase.RemoveSingletonPanel
        ]
    }

    public handleNotification(notification: puremvc.Notification): void {
        switch (notification.getName()) {
            case ApplicationFacade.ChangeScene: {
                if (notification.getType() === UIConfig.AddScene) {
                    this.openScene(notification.getBody());
                }
                else if (notification.getType() === UIConfig.SceneNavBack) {
                    const id: number = this.popNavScene();
                    this.openScene(id);
                }
                else if (notification.getType() === UIConfig.RemoveScene) {
                    this.closeCurrentScene();
                }
            }
            break;
            case ApplicationFacade.ChangePanel: {
                if (notification.getType() === UIConfig.AddPanel) {
                    const obj: any = notification.getBody();

                    if (!obj) {
                        console.error("UIMediator.handleNotification: ", "add panel, null body");
                        break;
                    }

                    if (obj.constructor === String) {
                        const Ctor: any = egret.getDefinitionByName(obj);
                        const instance: any = new Ctor();
                        this.rootView_.addPanel(instance);
                    }
                    else if (obj.constructor === NotificationPanelAddData.prototype.constructor) {
                        if (obj.type === AddPanelType.NoRepeat && this.rootView_.containsPanel(obj.className)) {
                            return;
                        }

                        const Ctor: any = egret.getDefinitionByName(obj.className);
                        const instance: any = new Ctor();
                        instance.layer = obj.layer;
                        instance.adhereToPanel = obj.adhereToPanel;
                        this.rootView_.addPanel(instance);
                        instance.initData(obj);
                    }
                    else {
                        console.error("UIMediator.handleNotification: ", "add panel, unsupported body");
                    }
                }
                else if (notification.getType() === UIConfig.RemovePanel) {
                    this.rootView_.removePanel(notification.getBody());
                }
            }
            break;
            case ApplicationFacade.ChangeLoading: {
                if (notification.getType() === UIConfig.ShowLoading) {
                    if (this.rootView_.loadingView === null) {
                        this.rootView_.loadingView = new LoadingUI();
                        this.rootView_.loadingView.initAssets(this.rootView_.stage);
                        this.rootView_.topView.addChild(this.rootView_.loadingView);
                    }

                    const body: any = notification.getBody();

                    if (body instanceof LoadingStateData) {
                        this.rootView_.loadingView.setState(body.state);
                        this.rootView_.loadingView.setProgress(body.loaded, body.total);
                    }
                    else {
                        this.rootView_.loadingView.setState(body);
                    }
                }
                else {
                    if (this.rootView_.loadingView !== null) {
                        this.rootView_.topView.removeChild(this.rootView_.loadingView);
                        this.rootView_.loadingView = null;
                    }
                }
            }
            break;
            case SingletonPanelBase.AddSingletonPanel: {
                SingletonPanelManager.getInstance().pushPanel(notification.getBody());
            }
            break;
            case SingletonPanelBase.RemoveSingletonPanel: {
                SingletonPanelManager.getInstance().popPanel(notification.getBody());
            }
            break;
        }
    }

    private closeCurrentScene(): void {
        this.rootView_.closeCurrentScene();
    }

    private openScene(id: number): void {
        let scene: any;
        this.closeCurrentScene();
        this.pushNavScene(id);

        switch (id) {
            case SceneName.Login: {

            }
            break;
            case SceneName.Elf: {

            }
            break;
            case SceneName.MainScene: {

            }
            break;
            case SceneName.Battle: {

            }
            break;
            case SceneName.TreasureScene: {

            }
            break;
            case SceneName.Social: {

            }
            break;
            case SceneName.Achieve: {

            }
            break;
            case SceneName.HomePage: {

            }
            break;
            case SceneName.Team: {

            }
            break;
            case SceneName.Growup: {

            }
            break;
            case SceneName.RankBattle: {

            }
            break;
            case SceneName.Rank: {

            }
            break;
            case SceneName.Loading: {
                scene = new LoadingScene();
            }
            break;
            default: {
                console.error("UIMediator.openScene: ", "unsupported scene type " + id.toString());
            }
            break;
        }

        if (scene) {
            this.rootView_.addScene(scene);
        }
    }
    
    private pushNavScene(id: number): void {
        const length: number = this.navScene_.length;

        if (!(length > 0 && this.navScene_[length - 1] === id)) {
            let str: string = "";
            str += this.navScene_[length - 1] + ":";
            console.log("UIMediator.pushNavScene: " + str + ", scene: " + id);

            if (length >= 10) {
                this.navScene_.shift();
            }

            this.navScene_.push(id);
        }
    }

    private popNavScene(): number {
        this.navScene_.pop();
        const length: number = this.navScene_.length;
        let str: string = "";

        if (length > 0) {
            str += this.navScene_[length - 1] + ":";
        }

        console.log("UIMediator.popNavScene: ", str);

        return this.navScene_.pop();
    }
}