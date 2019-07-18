class UILayer extends egret.DisplayObjectContainer {
    private scenes_: Array<SceneBase>;
    private currScene_: SceneBase;
    private sceneView_: egret.DisplayObjectContainer;
    private topView_: egret.DisplayObjectContainer;
    private loadingView_: LoadingUI;

    constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    public init(): void {
        this.width = this.parent.width;
        this.height = this.parent.height;
        this.scenes_ = [];
        this.currScene_ = null;
        this.sceneView_ = new egret.DisplayObjectContainer();
        this.sceneView_.name = "SceneView";
        this.addChild(this.sceneView_);
        this.sceneView_ = new egret.DisplayObjectContainer();
        this.topView_.name = "TopView";
        this.addChild(this.topView_);
        this.sceneView_.width = this.width;
        this.sceneView_.height = this.height;
        UIUtils.uiTips = new PopupTips(this.topView_);
        // AnnouncementManager.getInstance().init(this.topView_);
    }

    public addScene(scene: SceneBase): void {
        this.currScene_ = scene;
        scene.height = this.sceneView_.height;
        this.sceneView_.addChild(scene);
        scene.enterScene();
        this.scenes_.push(scene);
        SingletonPanelManager.getInstance().currScene = scene;
    }

    public removeScene(scene: SceneBase): void {
        const index: number = this.findScene(scene);

        if (index === -1) {
            return;
        }

        const cacheScene: SceneBase = this.scenes_[index];
        cacheScene.leaveScene();

        if (this.sceneView_.contains(cacheScene)) {
            this.sceneView_.removeChild(cacheScene);
        }

        if (this.currScene_ === cacheScene) {
            this.currScene_ = null;
        }

        this.scenes_.splice(index, 1);
    }

    public getPopupNumOfCurrScene(): number {
        if (!this.currScene_) {
            return 0;
        }

        return this.currScene_.getPanelsNum();
    }

    public isScene(name: string): boolean {
        if (!this.currScene_) {
            return false;
        }

        return this.currScene_.name === name;
    }

    public clearScenes(): void {
        if (0 >= this.scenes_.length) {
            return;
        }

        for (let i = 0, len = this.scenes_.length; i < len; ++i) {
            const scene: SceneBase = this.scenes_[i];
            scene.leaveScene();

            if (this.sceneView_.contains(scene)) {
                this.sceneView_.removeChild(scene);
            }
        }

        this.scenes_.splice(0);
        this.currScene_ = null;
        this.scenes_ = [];
    }

    public closeCurrScene(): void {
        if (this.currScene_) {
            this.removeScene(this.currScene_);
        }
    }

    public containPanel(name: string): boolean {
        if (!this.currScene_) {
            return false;
        }

        return this.currScene_.containPanel(name);
    }

    public isTopPanel(name): boolean {
        if (!this.currScene_) {
            return false;
        }

        return this.currScene_.isTopPanel(name);
    }

    public addPanel(panel: any): void {
        if (!this.currScene_) {
            return;
        }

        this.currScene_.addPanel(panel);
    }

    public removePanel(panel: any): void {
        if (!this.currScene_) {
            return;
        }

        this.currScene_.removePanel(panel);
    }

    public touchEnabledByTopView(enabled: boolean): void {
        this.topView_.touchEnabled = enabled;
        this.topView_.touchChildren = enabled;
    }

    private findScene(scene: SceneBase): number {
        for (let i = this.scenes_.length - 1; i >= 0; --i) {
            if (this.scenes_[i] === scene) {
                return i;
            }
        }

        return -1;
    }

    private onAddToStage(e: egret.Event): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    set topView(value) {
        this.topView_ = value;
    }

    get topView() {
        return this.topView_;
    }

    set loadingView(value) {
        this.loadingView_ = value;
    }

    get loadingView() {
        return this.loadingView_;
    }
}