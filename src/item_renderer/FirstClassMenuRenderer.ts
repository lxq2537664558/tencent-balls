class FirstClassMenuRenderer extends eui.ItemRenderer {
    private giftGroup_: eui.Group;
    private icon_: eui.Image;
    private iconOnly_: eui.Image;
    private iconText_: eui.Image;
    private iconNum_: eui.Image;
    private redDot_: eui.Image;
    private locked_: eui.Image;
    private count_: eui.Label;

    constructor() {
        super();

        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    }

    public onRemove(): void {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);

        if (this.giftGroup_) {
            egret.Tween.removeTweens(this.giftGroup_);
        }
    }

    public dataChanged(): void {
        const data: any = this.data;

        if (this.icon_ !== null && data.iconName) {
            this.icon_.name = data.iconName;
            this.setIconVisible(true);
            return;
        }

        this.iconOnly_.source = data.iconSourceName;
        this.iconText_.source = data.iconTxtName;
        this.setIconVisible(false);
        this.playAnimatin();

        if (this.redDot_ !== null) {
            if (MainScene.firstEnter) {
                this.redDot_.visible = false;
            }
            else {

            }
        }

        if (this.locked_ !== null) {
            
        }
    }

    private setIconVisible(visible: boolean): void {
        if (this.icon_) {
            this.icon_.visible = visible;
        }

        if (this.iconOnly_) {
            this.iconOnly_.visible = !visible;
        }

        if (this.iconText_) {
            this.iconText_.visible = !visible;
        }

        if (this.iconNum_) {
            this.iconNum_.visible = !visible;
        }

        if (this.giftGroup_) {
            this.giftGroup_.visible = !visible;
        }
    }

    private playAnimatin(): void {
        egret.Tween.get(this.giftGroup_, {
            loop: true,
        }).to({
            rotation: -3,
        }, 150).to({
            rotation: 0,
        }, 100).to({
            rotation: 5,
        }, 100).to({
            rotation: 0,
        }, 100).wait(1000);
    }
}