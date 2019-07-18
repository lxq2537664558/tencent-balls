class PanelBase extends eui.Component {
    private customEvent_: Array<any>;
    private panelName_: string;
    private modalBg_: any;
    private layer_: string;
    private counter_: number;
    private isModal_: boolean;

    constructor(className: string, isRegisterEvent?: boolean) {
        super();

        if (isRegisterEvent ===  void 0 || isRegisterEvent === null) {
            isRegisterEvent = true;
        }

        this.customEvent_ = [];
        this.panelName = this.getNameUnique(className);
        this.name = this.panelName;
        this.modalBg = null;
        this.layer = kPanelLayer.Normal;

        if (isRegisterEvent) {
            this.makeMeCenter();
            this.addEventListener(eui.UIEvent.COMPLETE, this.makeMeCenter, this);
            this.addEventListener(eui.UIEvent.RESIZE, this.makeMeCenter, this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToSage, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
        }
    }

    public enterPanel(mediator: Mediator): void {
        ApplicationFacade.getInstance().registerMediator(mediator);
    }

    public leavePanel(): void {

    }

    public addToScene(): void {

    }

    public removeFromScene(): void {

    }

    public addCustomEventListener(ui: any, type: string, listener: Function, thisObject: any): void {
        ui.addEventListener(type, listener, thisObject);
        const data = {
            ui,
            type,
            listener,
            thisObject,
        };

        this.customEvent_.push(data);
    }

    public initData(data: any): void {

    }

    public onAddToStageByPanelBase(): void {

    }

    public onRemoveFromStageByPanelBase(): void {

    }

    public setModalBg(name: string, alpha: number): void {

    }

    public setDarkBg(): void {

    }

    public setTransparentBg(): void {

    }

    private makeMeCenter(): void {
        if (this.parent != null) {
            this.x = this.parent.width / 2;
            this.y = this.parent.height / 2;
            this.anchorOffsetX = this.width / 2;
            this.anchorOffsetY = this.height / 2;
        }

        this.adjustModalBg();
    }

    private adjustModalBg(): void {
        if (this.modalBg === void 0 || this.modalBg === null) {
            return;
        }

        const view: any = UIMediator.view;
        this.modalBg.width = view.width + 2;
        this.modalBg.height = view.height + 2;
        const point: egret.Point = this.globalToLocal(view.width / 2, view.height / 2);
        this.modalBg.x = point.x;
        this.modalBg.y = point.y;
        this.modalBg.anchorOffsetX = this.modalBg.width / 2;
        this.modalBg.anchorOffsetY = this.modalBg.height / 2;
    }

    private getNameUnique(className: string): string {
        if (this.counter >= Number.MAX_VALUE) {
            this.counter = 0;
        }

        this.counter += 1;

        if (className === "") {
            return "_" + this.counter;
        }

        return className + "_" + this.counter;
    }

    public onAddToSage(e: egret.Event): void {

    }

    public onRemoveFromStage(e: egret.Event): void {

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

    set counter(value) {
        this.counter_ = value;
    }

    get counter() {
        return this.counter_;
    }

    set modalBg(value) {
        this.modalBg_ = value;
    }

    get modalBg() {
        return this.modalBg_;
    }

    set isModal(value) {
        this.isModal_ = value;
    }

    get isModal() {
        return this.isModal_;
    }
}