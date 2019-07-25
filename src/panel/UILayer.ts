class UILayer extends egret.DisplayObjectContainer {
    private scenes_: Array<SceneBase>;
    private currentScene_: SceneBase;
    private sceneView_: egret.DisplayObjectContainer;
    private topView_: egret.DisplayObjectContainer;
    private loadingView_: LoadingUI;

    constructor() {
        super();

        this.name = "UILayer";
        this.scenes_ = new Array();
    }

    public init(): void {
        this.width = this.parent.width;
        this.height = this.parent.height;
        this.sceneView_ = new egret.DisplayObjectContainer();
        this.sceneView_.name = "SceneView";
        this.addChild(this.sceneView_);
        this.topView_ = new egret.DisplayObjectContainer();
        this.topView_.name = "TopView";
        this.addChild(this.topView_);
        this.sceneView_.width = this.width;
        this.sceneView_.height = this.height;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    public touchTopView(touchEnabled: boolean): void {
        this.topView_.touchEnabled = touchEnabled;
        this.topView_.touchChildren = touchEnabled;
    }

    public addScene(scene: SceneBase): void {
        this.currentScene_ = scene;
        scene.height = this.sceneView_.height;
        this.sceneView_.addChild(scene);
        scene.enterScene();
        SingletonPanelManager.getInstance().currentScene = scene;
        this.scenes_.push(scene);
    }

    public removeScene(scene: SceneBase): void {
        const index: number = this.findScene(scene);

        if (index === -1) {
            return;
        }

        scene.leaveScene();
        
        if (this.sceneView_.contains(scene)) {
            this.sceneView_.removeChild(scene);
        }

        if (this.currentScene_ === scene) {
            this.currentScene_ = null;
        }

        this.scenes_.splice(index, 1);
    }

    public isScene(name: string): boolean {
        if (this.currentScene_ === void 0 || this.currentScene_ === null) {
            console.error("UILayer.isScene: ", "no scene");
            return false;
        }

        return this.currentScene_.name === name;
    }

    public closeCurrentScene(): void {
        if (this.currentScene_ !== null) {
            this.removeScene(this.currentScene_);
            this.currentScene_ = null;
        }
    }

    public addPanel(panel: PanelBase): void {
        if (this.currentScene_ === void 0 || this.currentScene_ === null) {
            console.error("UILayer.addPanel: ", "no scene");
            return;
        }
        this.currentScene_.addPanel(panel);
    }

    public removePanel(panel: PanelBase): void {
        if (this.currentScene_ === void 0 || this.currentScene_ === null) {
            console.error("UILayer.removePanel: ", "no scene");
            return;
        }
        this.currentScene_.removePanel(panel);
    }

    public containsPanel(panelName: string): boolean {
        if (this.currentScene_ === void 0 || this.currentScene_ === null) {
            console.error("UILayer.containsPanel: ", "no scene");
            return true;
        }

        return this.currentScene_.containsPanel(panelName);
    }    

    public isTopPanel(panelName: string): boolean {
        if (this.currentScene_ === void 0 || this.currentScene_ === null) {
            console.error("UILayer.isTopPanel: ", "no scene");
            return true;
        }

        return this.currentScene_.isTopPanel(panelName);
    }

    public getPopupNumOfCurrentScene(): number {
        if (this.currentScene_ === void 0 || this.currentScene_ === null) {
            console.error("UILayer.getPopupNumOfCurrentScene: ", "no scene");
            return 0;
        }

        return this.currentScene_.getPanelsNum();
    }    

    private findScene(scene: SceneBase): number {
        for (let len = this.scenes_.length - 1; len >= 0; --len) {
            if (this.scenes_[len] === scene) {
                return len;
            }
        }

        return -1;
    }

    private onAddToStage(e: egret.Event): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    set loadingView(value) {
        this.loadingView_ = value;
    }

    get loadingView() {
        return this.loadingView_;
    }

    get topView() {
        return this.topView_;
    }
}