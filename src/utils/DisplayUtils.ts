class DisplayUtils {
    public static anchorOffset(bitmap: egret.Bitmap, offsetX?: number, offsetY?: number): void {
        if (!bitmap) {
            return;
        }

        if (!offsetX === void 0) {
            offsetX = .5;
        }

        if (offsetY === void 0) {
            offsetY = .5;
        }

        bitmap.anchorOffsetX = bitmap.measuredWidth * offsetX;
        bitmap.anchorOffsetY = bitmap.measuredHeight * offsetY;
    }

    public createBitmapByName(name: string): egret.Bitmap {
        const bitmap: egret.Bitmap = new egret.Bitmap();
        bitmap.texture = RES.getRes(name);

        return bitmap;
    }
}