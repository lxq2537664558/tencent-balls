class BattleBallTitle extends egret.DisplayObjectContainer {
    private fontSize_: number;
    private nameText_: egret.Bitmap;
    private regionText_: egret.BitmapText;

    constructor() {
        super();

        this.fontSize = 0;
        this.nameText = new egret.Bitmap();
        this.addChild(this.nameText);
        this.regionText = new egret.BitmapText();
        this.regionText.font = RES.getRes("areafont_fnt");
        this.addChild(this.regionText);
        this.regionText.width = 200;
        this.regionText.smoothing = false;
        this.regionText.visible = false;
    }

    public init(text: string, region: string): void {
        TextTextureCaches.getInstance().getCacheTexture(text, this.onNameTextLoad, this);
        this.regionText.visible = false;
        this.regionText.text = text;
        this.fontSize = 0;
    }

    public setSize(ballSize: number): void {
        let fontSize: number = 12;

        if (60 >= ballSize) {
            fontSize = Math.max(fontSize, Math.sqrt(ballSize) * 3);
        }
        else {
            fontSize = Math.min(100, Math.sqrt(ballSize) * 3.5);
        }

        if (Math.abs(this.fontSize - fontSize) < 1) {
            return;
        }

        this.nameText.scaleX = this.nameText.scaleY = fontSize / 32;
        this.updateRegionText(fontSize);
        this.fontSize = fontSize;
        this.y = -ballSize - Math.min(20, fontSize);
    }

    public showRegion(visible: boolean) {
        if (this.regionText.visible !== visible) {
            this.regionText.visible = visible;

            if (this.regionText.visible) {
                this.updateRegionText(this.fontSize);
            }
        }
    }

    private updateRegionText(fontSize: number): void {
        if (!this.regionText.visible) {
            return;
        }

        const scale: number = fontSize / 32;
        this.regionText.scaleX = this.regionText.scaleY = scale * .75;
        this.regionText.x = this.regionText.y = -fontSize;
    }

    private onNameTextLoad(textureData: TextureData): void {
        this.nameText.texture = textureData.texture;
        this.nameText.anchorOffsetX = textureData.width / 2;
        this.nameText.width = textureData.width;
        this.nameText.height = textureData.height;
        this.nameText.scaleX = this.nameText.scaleY = this.fontSize / 32;
    }

    set fontSize(value) {
        this.fontSize_ = value;
    }

    get fontSize() {
        return this.fontSize_;
    }

    set nameText(value) {
        this.nameText_ = value;
    }

    get nameText() {
        return this.nameText_;
    }

    set regionText(value) {
        this.regionText_ = value;
    }

    get regionText() {
        return this.regionText_;
    }
}