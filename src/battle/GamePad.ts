class GamePad extends egret.DisplayObjectContainer {
    private bg_: egret.Bitmap;

    constructor(bg: egret.Bitmap) {
        super();

        this.bg = bg;
    }

    set bg(value) {
        this.bg_ = value;
    }

    get bg() {
        return this.bg_;
    }
}