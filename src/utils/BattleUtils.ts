class BattleUtils {
    private static bitmapPool_: Array<egret.Bitmap> = [];

    public static scoreToWeight(score: number): Score2WeightInfo {
        if (0 > score) {
            score = 0;
        }

        const value: number = Math.pow(score, 3);
        let info: Score2WeightInfo = {};

        if (31 > score) {
            info.weight = Math.floor(value / 1e5 * value).toString();
            info.suffix = "毫克";
        }
        else if (100 > score) {
            info.weight = Math.floor(value / 1e5 / 1e3 * value).toString();
            info.suffix = "克";
        }
        else if (464 >= score) {
            info.weight = Math.floor(value / 1e5 / 1e6 * value).toString();
            info.suffix = "千克";
        }
        else if (2154 >= score) {
            info.weight = Math.floor(value / 1e5 / 1e9 * value).toString();
            info.suffix = "吨";
        }
        else if (14677 >= score) {
            info.weight = Math.floor(value / 1e5 / 1e13 * value).toString();
            info.suffix = "万吨";
        }
        else {
            info.weight = Math.floor(value / 1e5 / 1e18 * value).toString();
            info.suffix = "亿万吨";
        }

        return info;
    }

    public static pushBitmap(bitmap: egret.Bitmap): void {
        if (!bitmap) {
            return;
        }

        this.bitmapPool_.push(bitmap);
    }

    public static popBitmap(): egret.Bitmap {
        if (this.bitmapPool_.length > 0) {
            return this.bitmapPool_.pop();
        }

        return new egret.Bitmap();
    }

    public static bitmapPoolSize(): number {
        return this.bitmapPool_.length;
    }
}