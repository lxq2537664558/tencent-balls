class HeadingUI extends egret.DisplayObjectContainer {
    private main_: Main;
    private allow_: boolean;
    private bg_: egret.Bitmap;
    private bmp_: egret.Bitmap;
    private startBtn_: egret.Bitmap;
    private check_: egret.Bitmap;
    private checkBg_: egret.Bitmap;
    private startName_: egret.Bitmap;
    private protoLab_: egret.TextField;
    private waringText_: egret.TextField;
    private versionText_: egret.TextField;

    constructor(main: Main) {
        super();

        this.main_ = main;
        this.allow = true;
        this.bg_ = new egret.Bitmap();
        this.addChild(this.bg_);
        this.bg_.touchEnabled = true;
        this.bmp_ = new egret.Bitmap();
        this.addChild(this.bmp_);
        this.startBtn_ = new egret.Bitmap();
        this.check_ = new egret.Bitmap();
        this.checkBg_ = new egret.Bitmap();
        this.startName_ = new egret.Bitmap();
        this.protoLab_ = new egret.TextField();
        this.waringText_ = new egret.TextField();
        this.addChild(this.waringText_);
        this.waringText_.width = 1280;
        this.waringText_.textAlign = egret.HorizontalAlign.CENTER;
        this.waringText_.size = 18;
        this.waringText_.text = "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。";
        this.versionText_ = new egret.TextField();
        this.addChild(this.versionText_);
        this.versionText_.size = 12;
        this.versionText_.textColor = 11184810;
        this.versionText_.text = "新出网证（粤）字xxx号 著作权人：上海游光网络科技有限公司 \n出版单位：上海游光网络科技有限公司 批准文号：新广出审〔xxxx〕xxxx号 \n出版物号：ISBN xxx-x-xxx-xxxxx-x ";

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveStage, this);
    }

    public initAsset(stage: egret.Stage): void {
        this.bg_.texture = RES.getRes("");
        this.bg_.scale9Grid = new egret.Rectangle(1, 1, 11, 16);
        this.bg_.width = stage.stageWidth;
        this.bg_.height = stage.stageHeight;
        this.bmp_.texture = RES.getRes("");
        this.bmp_.x = stage.stageWidth / 2 - this.bmp_.width / 2;
        this.bmp_.y = stage.stageHeight / 3 - this.bmp_.height / 2;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    }

    private onAddStage(e: egret.Event): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
        this.initAsset(this.stage);
        this.startBtn_.texture = RES.getRes("");
        this.startBtn_.scale9Grid = new egret.Rectangle(15, 18, 7, 4);
        this.addChild(this.startBtn_);
        this.startBtn_.touchEnabled = true;
        this.startBtn_.width = 280;
        this.startBtn_.height = 80;
        this.startBtn_.x = this.stage.stageWidth / 2 - this.startBtn_.measuredWidth / 2;
        this.startBtn_.y = 484;
        this.startName_.texture = RES.getRes("");
        this.addChild(this.startName_);
        this.startName_.scaleX = this.startName_.scaleY = 1.4;
        this.startName_.x = this.stage.stageWidth / 2 - this.startName_.measuredWidth / 2 - 25;
        this.startName_.y = 505;
        this.addChild(this.checkBg_);
        this.checkBg_.texture = RES.getRes("");
        this.checkBg_.touchEnabled = true;
        this.checkBg_.x = 370;
        this.checkBg_.y = 400;
        this.addChild(this.check_);
        this.check_.texture = RES.getRes("");
        this.check_.touchEnabled = true;
        this.check_.x = 370;
        this.check_.y = 390;
        this.waringText_.y = 460;
        this.protoLab_.x = 450;
        this.protoLab_.y = 410;
        this.addChild(this.protoLab_);
        this.protoLab_.textFlow = new Array<egret.ITextElement>({
            text: "我阅读并同意",
            style: {
                textColor: 16777215
            },
        }, {
            text: "游光游戏用户协议",
            style: {
                href: "event:t1",
                underline: true,
            },
        }, {
            text: "和",
            style: {
                textColor: 16777215
            },
        }, {
            text: "隐私政策",
            style: {
                href: "event:t2",
                underline: true,
            },
        });
        this.protoLab_.touchEnabled = true;
        this.protoLab_.size = 20;
        this.protoLab_.addEventListener(egret.TextEvent.LINK, this.onProtoLabLink, this);
        this.check_.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCheckTap, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.startBtn_.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartBtnTap, this);
    }

    private onRemoveStage(e: egret.Event): void {
        
    }

    private onEnterFrame(e: egret.Event): void {

    }

    private onProtoLabLink(e: egret.TextEvent): void {
        if (e.text === "t1" || e.text === "t2") {
            console.log("HeadingUI.onProtoLabLink:", e.text);
        }
    }

    private onCheckTap(e: egret.TouchEvent): void {
        if (this.check_.alpha > .5) {
            this.check_.alpha = .1;
            this.allow = false;
            this.startBtn_.filters = [new egret.ColorMatrixFilter(ColorMatrixData.buttonColorMatrix)];
        }
        else {
            this.check_.alpha = 1;
            this.allow = true;
            this.startBtn_.filters = [];
        }
    }

    private onStartBtnTap(e: egret.TouchEvent): void {
        if (this.allow) {
            this.main_.startGame();
        }
        else {
            egret.Tween.get(this.check_).to({
                alpha: 1,
            }, 200, egret.Ease.sineOut).to({
                alpha: 0,
            }, 200, egret.Ease.sineIn);
        }
    }

    set allow(value) {
        this.allow_ = value;
    }

    get allow() {
        return this.allow_;
    }
}