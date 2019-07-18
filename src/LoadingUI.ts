class LoadingUI extends egret.DisplayObjectContainer {
    private bg_: egret.Bitmap;
    // private bmp_: egret.Bitmap;
    private totalPercent_: number;
    private currentPercent_: number;
    private targetPercent_: number;
    private stateName_: string;
    private dir_: number;
    private lowNetwork_: egret.Bitmap;
    private text_: egret.TextField;
    private waringText_: egret.TextField;
    private notice_: LoadingNoticeUI;
    private progressBarBg_: egret.Bitmap;
    private progressBar_: egret.Bitmap;

    constructor(stage?: egret.Stage) {
        super();

        this.totalPercent = 0;
        this.currentPercent = 0;
        this.targetPercent = 0;
        this.stateName = "Loading... ";
        this.dir = 1;
        this.createView();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveStage, this);

        if (stage) {
            this.initAssets(stage);
        }
    }

    public initAssets(stage: egret.Stage): void {
        this.bg_.texture = RES.getRes("loading-bg_png");
        // this.bg_.scale9Grid = new egret.Rectangle(1, 1, 11, 16);
        this.bg_.width = stage.stageWidth;
        this.bg_.height = stage.stageHeight;
        this.progressBarBg_.texture = RES.getRes("loading-progressbar-bg_png");
        this.progressBar_.texture = RES.getRes("loading-progressbar_png");
        // this.bmp_.texture = RES.getRes("");
        // this.bmp_.x = stage.stageWidth / 2 - this.bmp_.width / 2;
        // this.bmp_.y = stage.stageHeight / 3 - this.bmp_.height / 2;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    }

    public setProgress(loaded: number, total?: number): void {
        if (!total) {
            total = 100;
        }

        this.targetPercent = loaded;
        this.totalPercent = total;
    }

    public setState(stateName: string): void {
        // this.stateName = stateName;

        // if (this.stateName === LoadingStateData.LOW_NETWORK) {
        //     this.addChild(this.lowNetwork_);
        //     this.hideLoading(true);
        // }
        // else {
        //     if (this.lowNetwork_.parent === this) {
        //         this.removeChild(this.lowNetwork_);
        //     }

        //     this.hideLoading(false);
        // }
    }

    public showNoticeMessage(text: string): void {
        if (!this.notice) {
            this.notice = new LoadingNoticeUI(this);
            this.addChild(this.notice);
            this.notice.setText("资源加载失败，请重新尝试！ ");
            this.notice.x = 343;
            this.notice.y = 170;
        }
    }

    private hideLoading(isHide: boolean): void {
        // this.waringText_.visible = !isHide;
        this.text_.visible = !isHide;
        this.bg_.alpha = isHide ? .5 : 1;
        // this.bmp_.visible = !isHide;
    }

    private createView(): void {
        this.bg_ = new egret.Bitmap();
        this.addChild(this.bg_);
        this.bg_.touchEnabled = false;
        // this.lowNetwork_ = new egret.Bitmap(RES.getRes(""));
        this.progressBarBg_ = new egret.Bitmap();
        this.addChild(this.progressBarBg_);
        this.progressBar_ = new egret.Bitmap();
        this.addChild(this.progressBar_);
        this.text_ = new egret.TextField();
        this.addChild(this.text_);
        this.text_.width = 400;
        this.text_.height = 100;
        this.text_.textAlign = egret.HorizontalAlign.CENTER;
        this.text_.text = "loading... ";
        this.text_.size = 18;
        this.waringText_ = new egret.TextField();
        this.addChild(this.waringText_);
        this.waringText_.width = 1280;
        this.waringText_.textAlign = egret.HorizontalAlign.CENTER;
        this.waringText_.size = 18;
        this.waringText_.textColor = 0;
        this.waringText_.text = "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。";
        // this.bmp_ = new egret.Bitmap();
        // this.addChild(this.bmp_);
    }

    private onAddStage(e: egret.Event): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
        this.text_.x = this.stage.stageWidth / 2 - 200;
        this.text_.y = this.stage.stageHeight / 2 + 180;
        this.waringText_.x -= 95;
        this.waringText_.y = this.stage.stageHeight * 5 / 6;
        // this.lowNetwork_.anchorOffsetX = this.lowNetwork_.anchorOffsetY = this.lowNetwork_.measuredWidth / 2;
        // this.lowNetwork_.x = this.stage.stageWidth / 2;
        // this.lowNetwork_.y = this.stage.stageHeight / 2;
        this.progressBarBg_.x = this.stage.stageWidth / 2 - 300;
        this.progressBarBg_.y = this.stage.stageHeight / 2 + 180;
        this.progressBar_.x = this.stage.stageWidth / 2 - 300;
        this.progressBar_.y = this.stage.stageHeight / 2 + 180;
    }

    private onRemoveStage(e: egret.Event): void {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveStage, this);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.text_ = null;
        // this.bg_.scale9Grid = null;
        this.bg_ = null;
        // this.bmp_ = null;
        this.removeChildren();
    }

    private onEnterFrame(e: egret.Event): void {
        if (this.targetPercent > this.currentPercent) {
            this.currentPercent += .5;
        }

        if (this.currentPercent <= 0) {
            this.text_.text = this.stateName;
        }
        else {
            this.text_.text = this.stateName + (Math.floor(this.currentPercent) + "/" + this.totalPercent);
        }

        // if (this.stateName === LoadingStateData.LOW_NETWORK) {
        //     ++this.lowNetwork_.rotation;
        // }
        // else {
        //     if (this.targetPercent > this.currentPercent) {
        //         this.currentPercent += .5;
        //     }
        //     else {
        //         if (this.currentPercent <= 0) {
        //             this.text_.text = this.stateName;
        //         }
        //         else {
        //             this.text_.text = this.stateName + (Math.floor(this.currentPercent) + "/" + this.totalPercent);
        //         }
        //     }
        // }
    }

    set totalPercent(value) {
        this.totalPercent_ = value;
    }

    get totalPercent() {
        return this.totalPercent_;
    }

    set currentPercent(value) {
        this.currentPercent_ = value;
    }

    get currentPercent() {
        return this.currentPercent_;
    }

    set targetPercent(value) {
        this.targetPercent_ = value;
    }

    get targetPercent() {
        return this.targetPercent_;
    }

    set stateName(value) {
        this.stateName_ = value;
    }

    get stateName() {
        return this.stateName_;
    }

    set dir(value) {
        this.dir_ = value;
    }

    get dir() {
        return this.dir_;
    }

    set notice(value) {
        this.notice_ = value;
    }

    get notice() {
        return this.notice_;
    }
}
