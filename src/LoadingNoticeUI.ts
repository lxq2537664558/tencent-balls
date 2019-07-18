class LoadingNoticeUI extends egret.DisplayObjectContainer {
    private loadingUI_: LoadingUI;
    private startBtn_: egret.Bitmap;
    private stateText_: egret.TextField;
    private bg_: egret.Bitmap;
    private bg0_: egret.Bitmap;
    private title_: egret.Bitmap;
    private titleText_: egret.TextField;
    private startName_: egret.TextField;

    constructor(loadingUI: LoadingUI) {
        super();

        this.loadingUI_ = loadingUI;
        this.startBtn_ = new egret.Bitmap();
        this.stateText_ = new egret.TextField();
        this.bg_ = new egret.Bitmap();
        this.bg0_ = new egret.Bitmap();
        this.title_ = new egret.Bitmap();
        this.titleText_ = new egret.TextField();
        this.startName_ = new egret.TextField();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveStage, this);
    }

    public setText(text: string): void {
        this.stateText_.textFlow = new egret.HtmlTextParser().parser(text);
    }

    private onAddStage(stage: egret.Stage): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
        this.addChild(this.bg_);
        this.bg_.texture = RES.getRes("");
        this.bg_.scale9Grid = new egret.Rectangle(10, 9, 3, 5);
        this.bg_.width = 592;
        this.bg_.height = 412;
        this.bg_.touchEnabled = true;
        this.addChild(this.bg0_);
        this.bg0_.texture = RES.getRes("");
        this.bg0_.scale9Grid = new egret.Rectangle(10, 10, 2, 2);
        this.bg0_.width = 592;
        this.bg0_.height = 45;
        this.addChild(this.title_);
        this.title_.texture = RES.getRes("");
        this.title_.scale9Grid = new egret.Rectangle(73, 0, 8, 0);
        this.title_.width = 270;
        this.title_.x = -60;
        this.title_.y = 5;
        this.addChild(this.titleText_);
        this.titleText_.text = "提示";
        this.titleText_.textColor = 16777215;
        this.titleText_.width = 200;
        this.titleText_.x = 10;
        this.titleText_.y = 35;
        this.addChild(this.stateText_);
        this.stateText_.textColor = 8165031;
        this.stateText_.width = 500;
        this.stateText_.x = 50;
        this.stateText_.y = 100;
        this.addChild(this.startBtn_);
        this.startBtn_.texture = RES.getRes("");
        this.startBtn_.scale9Grid = new egret.Rectangle(15, 18, 7, 4);
        this.startBtn_.y = 326;
        this.startBtn_.touchEnabled = true;
        this.startBtn_.width = 230;
        this.startBtn_.height = 66;
        this.startBtn_.x = this.bg_.width / 2 - this.startBtn_.measuredWidth / 2;
        this.startBtn_.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartBtn, this);
        this.addChild(this.startName_);
        this.startName_.x = 264;
        this.startName_.y = 343;
        this.startName_.text = "确定";
        this.startName_.bold = true;
        this.startName_.textColor = 0;
        this.startName_.touchEnabled = false;
    }

    private onRemoveStage(stage: egret.Stage): void {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveStage, this);
        egret.Tween.removeTweens(this);
    }

    private onStartBtn(e: egret.TouchEvent): void {
        this.startBtn_.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartBtn, this);

        if (this.parent !== null) {
            this.parent.removeChild(this);
        }

        if (this.loadingUI_.parent !== null) {
            this.loadingUI_.parent.removeChild(this.loadingUI_);
            this.loadingUI_ = null;
        }
    }
}