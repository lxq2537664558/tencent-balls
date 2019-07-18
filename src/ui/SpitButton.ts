class SpitButton extends egret.Bitmap {
    private static readonly MinDeltaTime: number = 120;

    private touchPointId_: number;
    private currCenterX_: number;
    private currCenterY_: number;
    private maxMoveDisPow_: number;
    private spitTimer_: egret.Timer;
    private settingsProxy_: SettingsProxy;
    private lastSpitTime_: number;

    constructor() {
        super();

        this.touchPointId = 0;
        this.currCenterX = 0;
        this.currCenterY = 0;
        this.maxMoveDisPow = 500;
        this.texture = RES.getRes("b_Fight_NormalIco_01_png");
        this.touchEnabled = true;
        DisplayUtils.anchorOffset(this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchReleaseOutside, this);
        this.spitTimer_ = new egret.Timer(SpitButton.MinDeltaTime, 0);
        this.spitTimer_.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this.settingsProxy_ = <SettingsProxy>(ApplicationFacade.getInstance().retrieveProxy(SettingsProxy.NAME));
    }

    public resetData(): void {
        this.touchPointId = -1;
        this.currCenterX = 0;
        this.currCenterY = 0;
        this.maxMoveDisPow = 25;
        this.lastSpitTime = -1;
    }

    public onDestroy(): void {
        if (this.spitTimer_ !== null) {
            this.settingsProxy_ = null;
            this.spitTimer_.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
            this.spitTimer_ = null;
        }

        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchReleaseOutside, this);
        this.texture = null;
    }

    private onTouchBegin(e: egret.TouchEvent): void {

    }

    private onTouchEnd(e: egret.TouchEvent): void {

    }

    private onTouchReleaseOutside(e: egret.TouchEvent): void {

    }

    private onTimer(e: egret.TimerEvent): void {

    }

    set touchPointId(value) {
        this.touchPointId_ = value;
    }

    get touchPointId() {
        return this.touchPointId_;
    }

    set currCenterX(value) {
        this.currCenterX_ = value;
    }

    get currCenterX() {
        return this.currCenterX_;
    }

    set currCenterY(value) {
        this.currCenterY_ = value;
    }

    get currCenterY() {
        return this.currCenterY_;
    }

    set maxMoveDisPow(value) {
        this.maxMoveDisPow_ = value;
    }

    get maxMoveDisPow() {
        return this.maxMoveDisPow_;
    }

    set lastSpitTime(value) {
        this.lastSpitTime_ = value;
    }

    get lastSpitTime() {
        return this.lastSpitTime_;
    }
}