class SingletonPanelManager {
    private static instance_: SingletonPanelManager;
    public static readonly WaitFrame: number = 2;

    private timestampOnEnterFrame_: number;
    private waitFrame2Add_: number;
    private pushCache_: Array<SingletonPanelAddData>;
    private dict_: Dictionary;
    private currentScene_: any;

    constructor() {
        this.timestampOnEnterFrame = 0;
        this.waitFrame2Add = SingletonPanelManager.WaitFrame;
        this.pushCache_ = new Array();
        this.dict_ = new Dictionary();
        egret.startTick(this.onTick, this);
    }

    public static getInstance(): SingletonPanelManager {
        if (!this.instance_) {
            this.instance_ = new SingletonPanelManager();
        }

        return this.instance_;
    }

    public pushPanel(data: SingletonPanelAddData): void {
        this.pushCache_.push(data);
    }

    public popPanel(panelName: string): void {
        if (panelName === void 0 || panelName === null) {
            return;
        }

        const pos: number = panelName.lastIndexOf("_");
        const className: string = panelName.substr(0, pos);
        const array: Array<WrapData> = this.dict_.getValue(className);

        if (array === void 0 || array === null || array.length === 0) {
            return;
        }

        array.shift();

        if (array.length === 0) {
            this.dict_.remove(className);
        }
    }

    public isLastOne(panelName: string): boolean {
        const array: Array<WrapData> = this.dict_.getValue(panelName);

        if (array === void 0 || array === null) {
            return false;
        }

        return array.length <= 1 ? true : false;
    }

    private onTick(timestamp: number): boolean {
        this.checkAdding();

        const keys: Array<string> = this.dict_.keys;

        for (let i = 0, len = keys.length; i < len; ++i) {
            const key: any = keys[i];
            const array: Array<WrapData> = this.dict_[key];

            if (array.length > 0 && array[0].isShowing) {
                if (array[0].data.type === SingletonPanelType.Wait && array[0].data.delayTime !== 0) {
                    const elapsedTime: number = egret.getTimer();
                    const deltaTime: number = elapsedTime - this.timestampOnEnterFrame;

                    if (deltaTime < array[0].data.delayTime) {
                        return;
                    }
                    this.timestampOnEnterFrame = elapsedTime;
                }
                array[0].isShowing = true;
                const addData: NotificationPanelAddData = new NotificationPanelAddData(array[0].data.className, array[0].data.data);
                ApplicationFacade.getInstance().sendNotification(ApplicationFacade.ChangePanel, addData, UIConfig.AddPanel);
            }
        }

        return false;
    }

    private checkAdding(): void {
        if (this.waitFrame2Add > 0) {
            --this.waitFrame2Add;
        }

        if (this.waitFrame2Add === 0 && this.pushCache_.length > 0) {
            this.internalPushPanel(this.pushCache_.shift());
            this.waitFrame2Add = SingletonPanelManager.WaitFrame;
        }
    }

    private internalPushPanel(data: SingletonPanelAddData): void {
        const wrapData: WrapData = new WrapData(data);
        let array: Array<WrapData> = this.dict_.getValue(data.className);

        if (array === void 0 || array === null) {
            array = new Array();
            this.dict_.add(data.className, array);
        }
        
        if (wrapData.data.type === SingletonPanelType.Replace && array.length > 0) {
            array.splice(1, array.length - 1);

            if (this.currentScene !== null && array[0].isShowing) {
                this.currentScene.removePanelByName(array[0].data.className);
            }
        }

        array.push(wrapData);
    }

    set timestampOnEnterFrame(value) {
        this.timestampOnEnterFrame_ = value;
    }

    get timestampOnEnterFrame() {
        return this.timestampOnEnterFrame_;
    }

    set waitFrame2Add(value) {
        this.waitFrame2Add_ = value;
    }

    get waitFrame2Add() {
        return this.waitFrame2Add_;
    }

    set currentScene(value) {
        this.currentScene_ = value;
    }

    get currentScene() {
        return this.currentScene_;
    }
}