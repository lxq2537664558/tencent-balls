class PanelBase extends eui.Component {
    public static counter: number = -1;

    private customEvents_: Array<any>;
    private panelName_: string;
    private modalBg_: eui.Image;
    private layer_: number;
    private isModal_: boolean;
    private adhereToPanel_: any;

    constructor(name: string, isResize?: boolean) {
        super();

        if (isResize === null || isResize === void 0) {
            isResize = true;
        }

        this.customEvents_ = new Array();
        this.panelName = this.getUniqueName(name);
        this.name = this.panelName;

        if (isResize) {
            this.makeMeCenter();
            this.addEventListener(eui.UIEvent.COMPLETE, this.makeMeCenter, this);
            this.addEventListener(eui.UIEvent.RESIZE, this.makeMeCenter, this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }

        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
    }

    public initData(data: any): void {
    }

    public makeMeCenter(): void {
        if (this.parent !== null) {
            this.x = this.parent.width / 2;
            this.y = this.parent.height / 2;
            this.anchorOffsetX = this.width / 2;
            this.anchorOffsetY = this.height / 2;
        }

        this.adjustModalBg();
    }

    public setModalBg(key: string, alpha?: number): void {
        if (alpha === null || alpha === void 0) {
            alpha = 1;
        }

        if (this.modalBg_ !== null) {
            this.removeChild(this.modalBg_);
            this.modalBg_ = null;
        }

        this.modalBg_ = new eui.Image();
        this.modalBg_.scale9Grid = new egret.Rectangle(1, 1, 2, 2);
        UIUtil.getResImageAsync(this.modalBg_, key);
        this.modalBg_.alpha = alpha;
        this.modalBg_.name = "ModalBg";
        this.addChildAt(this.modalBg_, 0);
        this.adjustModalBg();
        this.isModal = true;
    }

    public setTransparentBg(): void {
        this.setModalBg("modalbg_png");
    }

    public setDarkBg(alpha?: number): void {
        if (alpha === null || alpha === void 0) {
            alpha = .8;
        }

        this.setModalBg("image_black_png", alpha);
    }

    public enterPanel(mediator: puremvc.Mediator): void {
        ApplicationFacade.getInstance().registerMediator(mediator);
    }

    public leavePanel(): void {
    }

    public addToScene(): void {
    }

    public removeFromScene(): void {
    }

    public addCustomEventListener(ui: any, eventName: string, listener: Function, thisObject: any): void {
        ui.addEventListener(eventName, listener, thisObject);
        const obj: any = {
            ui,
            eventName,
            listener,
            thisObject,
        };
        this.customEvents_.push(obj);
    }

    private getUniqueName(name: string): string {
        if (PanelBase.counter >= Number.MAX_VALUE) {
            PanelBase.counter = 0;
        }

        ++PanelBase.counter;

        if (name === null || name === void 0 || name === "") {
            return "_" + PanelBase.counter;
        }

        return name + "_" + PanelBase.counter;
    }

    private adjustModalBg(): void {
        if (this.modalBg_ !== null) {
            const view: any = UIMediator.view;
            this.modalBg_.width = view.width + 2;
            this.modalBg_.width = view.height + 2;
            const point: egret.Point = this.globalToLocal(view.width / 2, view.height / 2);
            this.modalBg_.x = point.x;
            this.modalBg_.y = point.y;
            this.modalBg_.anchorOffsetX = this.modalBg_.width / 2;
            this.modalBg_.anchorOffsetY = this.modalBg_.height / 2;
        }
    }

    private onAddToStage(e: egret.Event): void {
        if (this.parent) {
            this.height = this.parent.height;
        }
    }

    private onRemoveFromStage(e: egret.Event): void {
        if (ApplicationFacade.getInstance().retrieveMediator(this.panelName) !== null) {
            ApplicationFacade.getInstance().removeMediator(this.panelName);
        }

        this.removeEventListener(eui.UIEvent.COMPLETE, this.makeMeCenter, this);
        this.removeEventListener(eui.UIEvent.RESIZE, this.makeMeCenter, this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);

        if (this.modalBg_ !== null && this.modalBg_ !== void 0) {
            this.modalBg_.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickModalBg, this);
        }

        for (let i = 0, len = this.customEvents_.length; i < len; ++i) {
            const obj: any = this.customEvents_[i].ui;
            const type: string = this.customEvents_[i].eventName;
            const listener: Function = this.customEvents_[i].listener;
            const thisObject: any = this.customEvents_[i].thisObject;
            obj.removeEventListener(type, listener, thisObject);
        }
    }

    private onClickModalBg(e: egret.TouchEvent): void {
    }

    set panelName(value) {
        this.panelName_ = value;
    }

    get panelName() {
        return this.panelName_;
    }

    set layer(value) {
        this.layer_ = value;
    }

    get layer() {
        return this.layer_;
    }

    set isModal(value) {
        this.isModal_ = value;

        if (this.modalBg_ === null || this.modalBg_ === void 0) {
            return;
        }

        if (this.isModal) {
            this.modalBg_.visible = true;
            this.modalBg_.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickModalBg, this);
            this.modalBg_.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickModalBg, this);
        }
        else {
            this.modalBg_.visible = false;
            this.modalBg_.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickModalBg, this);
        }
    }

    get isModal() {
        return this.isModal_;
    }

    set adhereToPanel(value) {
        this.adhereToPanel_ = value;
    }

    get adhereToPanel() {
        return this.adhereToPanel_;
    }
}