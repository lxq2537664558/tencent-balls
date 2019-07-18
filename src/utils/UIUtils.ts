class UIUtils {
    public static uiTips: PopupTips;

    public static copyImage(image: eui.Image): eui.Image {
        const img: eui.Image = new eui.Image(image.texture);
        img.name = image.name;
        img.touchEnabled = image.touchEnabled;
        img.alpha = image.alpha;
        img.width = image.width;
        img.height = image.height;
        img.anchorOffsetX = image.anchorOffsetX;
        img.anchorOffsetY = image.anchorOffsetY;
        img.scale9Grid = image.scale9Grid;
        img.scaleX = image.scaleX;
        img.scaleY = image.scaleY;
        img.rotation = image.rotation;
        img.horizontalCenter = image.horizontalCenter;
        img.verticalCenter = image.verticalCenter;

        if (image.texture === null && image.source !== null) {
            img.source = image.source;
        }

        return img;
    }

    public static copyBitmapLable(src: eui.BitmapLabel): eui.BitmapLabel {
        const label: eui.BitmapLabel = new eui.BitmapLabel();
        label.font = src.font;
        label.textAlign = src.textAlign;
        label.verticalAlign = src.verticalAlign;
        label.horizontalCenter = src.horizontalCenter;
        label.width = src.width;
        label.height = src.height;
        label.touchEnabled = src.touchEnabled;
        label.anchorOffsetX = src.anchorOffsetX;
        label.anchorOffsetY = src.anchorOffsetY;
        label.scaleX = src.scaleX;
        label.scaleY = src.scaleY;
        label.rotation = src.rotation;
        label.name = src.name;

        return label;
    }

    public static copyLabel(src: eui.Label): eui.Label {
        const label: eui.Label = new eui.Label();
        label.textAlign = src.textAlign;
        label.verticalAlign = src.verticalAlign;
        label.horizontalCenter = src.horizontalCenter;
        label.textColor = src.textColor;
        label.bold = src.bold;
        label.italic = src.italic;
        label.fontFamily = src.fontFamily;
        label.size = src.size;
        label.width = src.width;
        label.height = src.height;
        label.touchEnabled = src.touchEnabled;
        label.anchorOffsetX = src.anchorOffsetX;
        label.anchorOffsetY = src.anchorOffsetY;
        label.scaleX = src.scaleX;
        label.scaleY = src.scaleY;
        label.rotation = src.rotation;
        label.name = src.name;

        return label;
    }

    public static copyGroup(): void {

    }

    public static ignoreHitTest(container: egret.DisplayObjectContainer): void {
        container.$hitTest = function (stageX: number, stageY: number) {
            return null;
        };
    }

    public static getResImageAsync(image: egret.Bitmap | eui.Image, name: string): void {
        if (image instanceof eui.Image) {
            image.source = "";
        }
        else {
            image.texture = null;
        }

        image["expectedKey"] = name;

        const func: any = function () {
            if (image !== null && image["expectedKey"] === name) {
                image.texture = arguments[0];
            }
        };

        RES.getResAsync(name, func, null);
    }
}