class SingletonPanelManager {
    private static readonly WaitFrame: number = 2;
    private static instance_: SingletonPanelManager;

    private currScene_: SceneBase;
    private timeOnEnterFrame_: number;
    private waitFrameAdd_: number;
    private pushCache_: Array<any>;
    private dict_: Dictionary;

    constructor() {
        this.pushCache_ = [];
        this.waitFrameAdd_ = SingletonPanelManager.WaitFrame;
        egret.startTick(this.onTick, this);
    }

    public static getInstance(): SingletonPanelManager {
        if (!this.instance_) {
            this.instance_ = new SingletonPanelManager();
        }

        return this.instance_;
    }

    private checkAdding(): void {
        if (this.waitFrameAdd_ > 0) {
            --this.waitFrameAdd_;
        }

        if (this.waitFrameAdd_ === 0 && this.pushCache_.length > 0) {
            this.internalPushPanel(this.pushCache_.shift());
            this.waitFrameAdd_ = SingletonPanelManager.WaitFrame;
        }
    }

    public pushPanel(panel: any): void {
        this.pushCache_.push(panel);
    }

    public popPanel(name: string): void {
        const pos: number = name.lastIndexOf("_");
        const classNmae: string = name.substr(0, pos);
        const array: Array<any> = this.dict_.getValue(classNmae);

        if (array === void 0 || array === null || array.length === 0) {
            return;
        }

        array.shift();
    }

    public isLastOne(className: string): boolean {
        const array: Array<WrapPanel> = this.dict_.getValue(className);

        if (array === void 0 || array === null || array.length <= 1) {
            return true;
        }

        return false;
    }

    private internalPushPanel(panel: any): void {
        const wrapper: WrapPanel = new WrapPanel(panel);
        let array: Array<any> = this.dict_.getValue(panel.className);

        if (!array) {
            array = new Array<any>();
            this.dict_.add(panel.className, array);
        }

        if (panel.type === SingletonPanelType.Replace && array.length > 0) {
            array.splice(1, array.length - 1);

            if (this.currScene && array[0].isShowing) {
                this.currScene.removePanelByName(array[0].panel.className);
            }
        }

        array.push(wrapper);
    }

    private onTick(timestamp: number): boolean {
        AnnouncementManager.getInstance().onTick(timestamp);
        this.checkAdding();
        const keys: Array<string> = this.dict_.keys;

        for (let i = 0, len = keys.length; i < len; ++i) {
            const className: string = keys[i];
            const array: Array<any> = this.dict_[className];

            if (array.length > 0 && !array[0].isShowing) {
                if (array[0].panel.type === SingletonPanelType.Wait && array[0].panel.delayTime !== 0) {
                    const elpasedTime: number = egret.getTimer();
                    const diff: number = elpasedTime - this.timeOnEnterFrame;

                    if (array[0].panel.delayTime > diff) {
                        return;
                    }

                    this.timeOnEnterFrame = elpasedTime;
                }

                array[0].isShowing = true;
                const notification: NotificationPanelAddData = new NotificationPanelAddData(array[0].panel.className, array[0].panel.type);
                ApplicationFacade.getInstance().sendNotification(ApplicationFacade.CHANGE_PANEL, notification, UIConfig.ADD_PANEL);
            }
        }

        return false;
    }

    set currScene(value) {
        this.currScene_ = value;
    }

    get currScene() {
        return this.currScene_;
    }

    set timeOnEnterFrame(value) {
        this.timeOnEnterFrame_ = value;
    }

    get timeOnEnterFrame() {
        return this.timeOnEnterFrame_;
    }
}