class PopupTips extends egret.DisplayObjectContainer {
    public static readonly INIT_X: number = 650;
    public static readonly INIT_Y: number = 268;

    private parentContainer_: egret.DisplayObjectContainer;
    private bg_: egret.Bitmap;
    private floatTipsText_: egret.TextField;
    private floatText_: egret.TextField;
    private floatImg_: egret.Bitmap;
    private floatImgAndText_: egret.TextField;
    private floatImgAndImg_: egret.Bitmap;
    private floatImgAndTextContainer_: egret.DisplayObjectContainer;

    constructor(parentContainer: egret.DisplayObjectContainer) {
        super();

        this.parentContainer_ = parentContainer;
        this.bg_ = new egret.Bitmap();
        this.bg_.x = PopupTips.INIT_X;
        this.bg_.y = PopupTips.INIT_Y;
        this.addChild(this.bg_);
        this.floatTipsText_ = new egret.TextField();
        this.floatTipsText_.size = 26;
        this.floatTipsText_.textColor = 3821659;
        this.floatTipsText_.x = 532;
        this.floatTipsText_.y = 273;
        this.addChild(this.floatTipsText_);
        this.floatText_ = new egret.TextField();
        this.floatText_.size = 30;
        this.floatText_.textColor = 3821659;
        this.floatText_.x = 1144;
        this.floatText_.y = 651;
        this.addChild(this.floatText_);
        this.floatImg_ = new egret.Bitmap();
        UIUtils.getResImageAsync(this.floatImg_, "tx_flower_png");
        this.floatImgAndText_ = new egret.TextField();
        this.floatImgAndText_.x = 0;
        this.floatImgAndText_.y = 0;
        this.floatImgAndText_.textAlign = egret.HorizontalAlign.CENTER;
        this.floatImgAndText_.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.floatImgAndImg_ = new egret.Bitmap();
        this.floatImgAndImg_.x = 0;
        this.floatImgAndImg_.y = 0;
        this.floatImgAndTextContainer_ = new egret.DisplayObjectContainer();
        this.floatImgAndTextContainer_.addChild(this.floatImgAndImg_);
        this.floatImgAndTextContainer_.addChild(this.floatImgAndText_);
        this.floatImgAndTextContainer_.x = 1144;
        this.floatImgAndTextContainer_.y = 651;
        this.addChild(this.floatImgAndTextContainer_);
        this.hideAllItems();
    }

    private hideAllItems(): void {
        this.bg_.visible = false;
        this.floatTipsText_.visible = false;
        this.floatImg_.visible = false;
        this.floatText_.visible = false;
        this.floatImgAndTextContainer_.visible = false;

        if (this.parent !== null) {
            this.parent.removeChild(this);
        }
    }
}