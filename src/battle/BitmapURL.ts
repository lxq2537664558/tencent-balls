class BitmapURL extends egret.Bitmap {
    private loadCompleted_: boolean;
    private offsetX_: number;
    private offsetY_: number;

    constructor() {
        super();
    }

    public load(url: string): void {
        this.loadCompleted = false;
        ResourceUtils.getResByUrlRelative(ResourceUtils.getResUrl(url), this.onLoad, this, RES.ResourceItem.TYPE_IMAGE);
    }

    public setOffsetXY(offsetX?: number, offsetY?: number): void {
        if (offsetX === void 0) {
            offsetX = .5;
        }

        if (offsetY === void 0) {
            offsetY = .5;
        }

        this.offsetX_ = offsetX;
        this.offsetY_ = offsetY;

        if (this.loadCompleted) {
            DisplayUtils.anchorOffset(this, this.offsetX_, this.offsetY_);
        }
    }

    public setSize(width: number, height: number): void {
        this.width = width;
        this.height = height;
    }

    public setPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    private onLoad(texture: egret.Texture): void {
        if (!texture) {
            return;
        }

        this.texture = texture;
        this.loadCompleted = true;
        this.setOffsetXY(this.offsetX_, this.offsetY_);
    }

    set loadCompleted(value) {
        this.loadCompleted_ = value;
    }

    get loadCompleted() {
        return this.loadCompleted_;
    }
}