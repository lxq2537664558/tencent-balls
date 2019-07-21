class GuideSystemPanel extends PanelBase {
    public static readonly className: string = "GuideSystemPanel";
    private static instance_: GuideSystemPanel;

    private stepToShowGuideUI_: number;
    private lastGuideUIPosX_: number;
    private lastGuideUIPosY_: number;
    private guideHandlers_: {[key: number]: Function};
    private passTime_: number;
    private lastTime_: number;
    private isPressing_: boolean;
    private pressTime_: number;
    private preUpdateTime_: number;
    private isDidEvent_: boolean;
    private uiSizeH_: {[key: number]: Object};
    private uiSizeV_: {[key: number]: Object};
    private ballSize_: {[key: number]: number};
    private animationScale_: {[key: number]: Object};
    private copyTargetCompMap_: Dictionary;

    constructor() {
        super(GuideSystemPanel.className);

        this.stepToShowGuideUI = 0;
        this.lastGuideUIPosX = 0;
        this.lastGuideUIPosY = 0;
        this.guideHandlers_ = {};
        this.passTime = 0;
        this.lastTime = 0;
        this.isPressing = false;
        this.pressTime = 0;
        this.preUpdateTime = 0;
        this.isDidEvent = false;
        this.uiSizeH_ = {};
        this.uiSizeV_ = {};
        this.ballSize_ = {};
        this.animationScale_ = {};
        this.copyTargetCompMap_ = new Dictionary();

        this.addEventListener(eui.UIEvent.COMPLETE, this.onUILoadCompleted, this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.skinName = "";
    }

    public static getInstance(): GuideSystemPanel {
        if (!this.instance_) {
            this.instance_ = new GuideSystemPanel();
        }

        return this.instance_;
    }

    private onAddToStage(e: egret.Event): void {

    }

    private onUILoadCompleted(e: eui.UIEvent): void {

    }

    set stepToShowGuideUI(value) {
        this.stepToShowGuideUI_ = value;
    }

    get stepToShowGuideUI() {
        return this.stepToShowGuideUI_;
    }

    set lastGuideUIPosX(value) {
        this.lastGuideUIPosX_ = value;
    }

    get lastGuideUIPosX() {
        return this.lastGuideUIPosX_;
    }

    set lastGuideUIPosY(value) {
        this.lastGuideUIPosY_ = value;
    }

    get lastGuideUIPosY() {
        return this.lastGuideUIPosY_;
    }

    set passTime(value) {
        this.passTime_ = value;
    }

    get passTime() {
        return this.passTime_;
    }

    set lastTime(value) {
        this.lastTime_ = value;
    }

    get lastTime() {
        return this.lastTime_;
    }

    set isPressing(value) {
        this.isPressing_ = value;
    }

    get isPressing() {
        return this.isPressing_;
    }

    set pressTime(value) {
        this.pressTime_ = value;
    }

    get pressTime() {
        return this.pressTime_;
    }

    set preUpdateTime(value) {
        this.preUpdateTime_ = value;
    }

    get preUpdateTime() {
        return this.preUpdateTime_;
    }

    set isDidEvent(value) {
        this.isDidEvent_ = value;
    }

    get isDidEvent() {
        return this.isDidEvent_;
    }
}