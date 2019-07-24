class LoadingUI extends egret.DisplayObjectContainer {
    private targetProgress_: number;
    private currProgress_: number;
    private totalProgress_: number;
    private stateStr_: string;
    private bg_: egret.Bitmap;
    private lowNet_: egret.Bitmap;
    private text_: egret.TextField;
    private waringText_: egret.TextField;
    private bmp_: egret.Bitmap;

    constructor() {
        super();

        this.targetProgress = 0;
        this.currProgress = 0;
        this.totalProgress = 0;
        this.stateStr = "Loading...";
        this.createView();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
    }

    public createView(): void {
        this.bg_ = new egret.Bitmap();
        this.addChild(this.bg_);
        this.bg_.touchEnabled = false;
        this.lowNet_ = new egret.Bitmap(RES.getRes("loading_zhuanquan_png"));
        this.text_ = new egret.TextField();
        this.addChild(this.text_);
        this.text_.width = 400;
        this.text_.height = 100;
        this.text_.textAlign = egret.HorizontalAlign.CENTER;
        this.text_.text = "Loading...";
        this.waringText_ = new egret.TextField();
        this.addChild(this.waringText_);
        this.waringText_.width = 1280;
        this.waringText_.textAlign = egret.HorizontalAlign.CENTER;
        this.waringText_.size = 18;
        this.waringText_.text = "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。";
        this.bmp_ = new egret.Bitmap();
        this.addChild(this.bmp_);
    }

    public initAssets(stage: egret.Stage): void {
        this.bg_.texture = RES.getRes("loading_bg_1_png");
        this.bg_.scale9Grid = new egret.Rectangle(1, 1, 11, 16);
        this.bg_.width = stage.stageWidth;
        this.bg_.height = stage.stageHeight;
        this.bmp_.texture = RES.getRes("RedFoxLogo_png");
        this.bmp_.x = stage.stageWidth / 2 - this.bmp_.width / 2;
        this.bmp_.y = stage.stageHeight / 3 - this.bmp_.height / 2;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    }

    public setProgress(loaded: number, total?: number): void {
        if (total === void 0 || total === null) {
            total = 100;
        }

        this.targetProgress = loaded;
        this.totalProgress = total;
    }

    public setState(state: string): void {
        this.stateStr = state;

        if (this.stateStr === LoadingStateData.NETWORK_LOW) {
            this.addChild(this.lowNet_);
        }
    }

    public showNoticeMessage(): void {

    }

    private hideLoading(visible: boolean): void {
        this.waringText_.visible = !visible;
        this.text_.visible = !visible;
        this.bg_.alpha = visible ? .5 : 1;
        this.bmp_.visible = !visible;
    }

    private onEnterFrame(e: egret.Event): void {
        if (this.stateStr === LoadingStateData.NETWORK_LOW) {
            ++this.lowNet_.rotation;
        }
        else {
            if (this.targetProgress > this.currProgress) {
                this.currProgress += .5;
            }

            if (this.currProgress <= 0) {
                this.text_.text = this.stateStr;
            }
            else {
                this.text_.text = this.stateStr + (Math.floor(this.currProgress) + "/" + this.totalProgress);
            }
        }
    }

    private onAddToStage(e: egret.Event): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.text_.x = this.stage.stageWidth / 2 - 200;
        this.text_.y = this.stage.stageHeight / 3 * 2;
        this.waringText_.y = 5 * this.stage.stageHeight / 6;
        this.lowNet_.anchorOffsetX = this.lowNet_.anchorOffsetY = this.lowNet_.measuredWidth / 2;
        this.lowNet_.x = this.stage.stageWidth / 2;
        this.lowNet_.y = this.stage.stageHeight / 2;
    }

    private onRemoveFromStage(e: egret.Event): void {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.text_ = null;
        this.bg_.scale9Grid = null;
        this.bg_ = null;
        this.bmp_ = null;
        this.removeChildren();
    }

    set targetProgress(value) {
        this.targetProgress_ = value;
    }

    get targetProgress() {
        return this.targetProgress_;
    }

    set currProgress(value) {
        this.currProgress_ = value;
    }

    get currProgress() {
        return this.currProgress_;
    }

    set totalProgress(value) {
        this.totalProgress_ = value;
    }

    get totalProgress() {
        return this.totalProgress_;
    }

    set stateStr(value) {
        this.stateStr_ = value;
    }

    get stateStr() {
        return this.stateStr_;
    }
}
