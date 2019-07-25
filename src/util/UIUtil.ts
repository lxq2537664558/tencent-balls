class UIUtil {
    public static copyImage(image: eui.Image): eui.Image {
        const newImage: eui.Image = new eui.Image(image.texture);
        newImage.name = image.name;
        newImage.touchEnabled = image.touchEnabled;
        newImage.alpha = image.alpha;
        newImage.width = image.width;
        newImage.height = image.height;
        newImage.anchorOffsetX = image.anchorOffsetX;
        newImage.anchorOffsetY = image.anchorOffsetY;
        newImage.scale9Grid = image.scale9Grid;
        newImage.scaleX = image.scaleX;
        newImage.scaleY = image.scaleY;
        newImage.rotation = image.rotation;
        newImage.horizontalCenter = image.horizontalCenter;
        newImage.verticalCenter = image.verticalCenter;

        if (image.texture === null && image.source !== null) {
            newImage.source = image.source;
        }

        return newImage;
    }

    public static copyBitmap(src: egret.Bitmap): egret.Bitmap {
        const bitmap: egret.Bitmap = new egret.Bitmap(src.texture);
        bitmap.name = src.name;
        bitmap.touchEnabled = src.touchEnabled;
        bitmap.width = src.width;
        bitmap.height = src.height;
        bitmap.anchorOffsetX = src.anchorOffsetX;
        bitmap.anchorOffsetY = src.anchorOffsetY;
        bitmap.scale9Grid = src.scale9Grid;
        bitmap.scaleX = src.scaleX;
        bitmap.scaleY = src.scaleY;
        bitmap.rotation = src.rotation;

        return bitmap;
    }

    public static copyBitmapLabel(src: eui.BitmapLabel): eui.BitmapLabel {
        const obj: eui.BitmapLabel = new eui.BitmapLabel();
        obj.font = src.font;
        obj.textAlign = src.textAlign;
        obj.verticalAlign = src.verticalAlign;
        obj.horizontalCenter = src.horizontalCenter;
        obj.width = src.width;
        obj.height = src.height;
        obj.touchEnabled = src.touchEnabled;
        obj.anchorOffsetX = src.anchorOffsetX;
        obj.anchorOffsetY = src.anchorOffsetY;
        obj.scaleX = src.scaleX;
        obj.scaleY = src.scaleY;
        obj.rotation = src.rotation;
        obj.name = src.name;

        return obj;
    }

    public copyLabel(src: eui.Label): eui.Label {
        const obj: eui.Label = new eui.Label();
        obj.textAlign = src.textAlign;
        obj.verticalAlign = src.verticalAlign;
        obj.horizontalCenter = src.horizontalCenter;
        obj.textColor = src.textColor;
        obj.bold = src.bold;
        obj.italic = src.italic;
        obj.fontFamily = src.fontFamily;
        obj.size = src.size;
        obj.width = src.width;
        obj.height = src.height;
        obj.touchEnabled = src.touchEnabled;
        obj.anchorOffsetX = src.anchorOffsetX;
        obj.anchorOffsetY = src.anchorOffsetY;
        obj.scaleX = src.scaleX;
        obj.scaleY = src.scaleY;
        obj.rotation = src.rotation;
        obj.name = src.name;

        return obj;
    }

    public static getResImageAsync(image: any, key: string): void {
        if (image instanceof eui.Image) {
            image.source = "";
        }
        else {
            image.texture = null;
        }

        image.expectedKey = key;

        RES.getResAsync(key, (texture: egret.Texture) => {
            if (image !== null && image.expectedKey === key) {
                image.texture = texture;
            }
        }, null);
    }
}