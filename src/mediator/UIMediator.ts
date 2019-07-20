class UIMediator extends puremvc.Mediator {
    public static readonly NAME: string = "UIMediator";
    public static view: UILayer;

    private rootView_: UILayer;
    private stage_: egret.Stage;
    private navScene_: Array<number>;

    constructor(layer: UILayer) {
        super(UIMediator.NAME, layer);

        this.rootView = this.viewComponent;
        this.rootView.name = "UIRootView";
        this.stage = this.rootView.stage;
        UIMediator.view = this.rootView;
    }

    public listNotificationInterests(): Array<string> {
        return [ApplicationFacade.CHANGE_SCENE, ApplicationFacade.CHANGE_PANEL, ApplicationFacade.CHANGE_LOADING
            , SingletonPanelBase.AddSingletonPanel, SingletonPanelBase.RemoveSingletonPanel];
    }

    public handleNotification(notification: puremvc.Notification): void {
        switch (notification.name) {
            case ApplicationFacade.CHANGE_SCENE: {
                if (notification.type === UIConfig.ADD_SCENE) {
                    this.openScene(notification.getBody());
                }
                else if (notification.type === UIConfig.SCENE_NAV_BACK) {
                    const sceneId: number = 0;
                    this.openScene(sceneId);
                }
                else if (notification.type === UIConfig.REMOVE_SCENE) {
                    this.closeCurrScene();
                }
            }
            break;
            case ApplicationFacade.CHANGE_PANEL: {
                if (notification.type === UIConfig.ADD_PANEL) {
                    const params: string | NotificationPanelAddData = notification.getBody();

                    if (!params) {
                        console.error("UIMediator.handleNotification: ", "add panel with a null param.");
                        break;
                    }

                    if (params.constructor === String) {
                        const Ctor: any = egret.getDefinitionByName(<string>(params));
                        const instance: any = new Ctor();

                        if (instance) {
                            this.rootView.addPanel(instance);
                        }
                    }
                    else if (params.constructor === NotificationPanelAddData.prototype.constructor) {
                        const data: NotificationPanelAddData = <NotificationPanelAddData>(params);
                        const Ctor: any = egret.getDefinitionByName(data.className);

                        if (data.type === AddPanelType.NoRepeat && this.rootView.containPanel(data.className)) {
                            return;
                        }

                        const instance: any = new Ctor();

                        if (instance) {
                            instance.layer = data.layer;
                            instance.adhereToPanel = data.adhereToPanel;
                            this.rootView.addPanel(instance);
                            instance.initData(data);
                        }
                    }
                    else {
                        console.error("UIMediator.handleNotification: ", "add panel and pass a unsupported data struction.");
                    }
                }
                else {
                    this.rootView.removePanel(notification.getBody());
                }
            }
            break;
            case ApplicationFacade.CHANGE_LOADING: {
                if (notification.type === UIConfig.SHOW_LOADING) {
                    const params: string | LoadingStateData = notification.getBody();

                    if (!params) {
                        console.error("UIMediator.handleNotification: ", "change loading with a null param.");
                        return;
                    }

                    if (!this.rootView.loadingView) {
                        this.rootView.loadingView = new LoadingUI(this.rootView.stage);
                    }

                    this.rootView.topView.addChild(this.rootView.loadingView);

                    if (params.constructor === String) {
                        this.rootView.loadingView.setState(<string>(params));

                    }
                    else if (params.constructor === LoadingStateData.prototype.constructor) {
                        const data: LoadingStateData = <LoadingStateData>(params);
                        this.rootView.loadingView.setState(data.stateName);
                        this.rootView.loadingView.setProgress(data.loaded, data.total);
                    }
                    else {
                         console.error("UIMediator.handleNotification: ", "change loading and pass a unsupported data struction.");
                    }
                }
                else {
                    if (this.rootView.loadingView !== null) {
                        this.rootView.topView.removeChild(this.rootView.loadingView);
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
            default: {
                console.error("UIMediator.handleNotification: ", "invalid option " + notification.name);
            }
            break;
        }
    }

    private openScene(id: number): void {
        this.closeCurrScene();
        this.pushNavScene(id);

        let scene: SceneBase;

        switch (id) {
            case SceneName.Login: {
            }
            break;
            case SceneName.Elf: {

            }
            break;
            case SceneName.MainScene: {
                scene = new MainScene();
            }
            break;
            case SceneName.Battle: {

            }
            break;
            case SceneName.Treasure: {

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
                console.warn("UIMediator.openScene: ", "invalid scene type " + id.toString());
            }
            break;
        }

        if (scene) {
            this.rootView.addScene(scene);
        }
    }

    private pushNavScene(id: number): void {
        const length: number = this.navScene_.length;

        if (0 >= length || this.navScene_[length - 1] === id) {
            return;
        }

        if (this.navScene_.length >= 10) {
            this.navScene_.pop();
        }

        this.navScene_.push(id);
        console.log("UIMediator.pushNavScene:", "From the scene: " + this.navScene_[length - 1] + " to scene: " + id);
    }

    private popNavScene(): void {
        let backId: number = this.navScene_.pop();
        let sceneId: number = this.navScene_.pop();
        backId = backId === void 0 || backId === null ? -1 : backId;
        sceneId = sceneId === void 0 || sceneId === null ? -1 : sceneId;
        console.log("UIMediator.popNavScene:", "Back scene: " + backId + " from scene: ", sceneId);
    }

    public closeCurrScene(): void {
        this.rootView.closeCurrScene();
    }

    set rootView(value) {
        this.rootView_ = value;
    }

    get rootView() {
        return this.rootView_;
    }

    set stage(value) {
        this.stage_ = value;
    }

    get stage() {
        return this.stage_;
    }
}