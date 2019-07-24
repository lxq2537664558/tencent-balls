class ColorMatrixData {
    public static shadowColorMatrix: Array<number> = [
        .4, 0, 0, 0, 0, 0, .4, 0, 0, 0, 0, 0, .4, 0, 0, 0, 0, 0, 1, 0
    ];
    public static noRColorMatrix2: Array<number> = [
        0, .587, .114, .24, 0, 0, .587, .114, .24, 0, 0, .587, .114, .24, 0, 0, 0, 0, 1, 0
    ];
    public static greenColorMatrix: Array<number> = [
        1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
    ];
    public static grayColorMatrix: Array<number> = [
        .3, .6, 0, 0, 0, .3, .6, 0, 0, 0, .3, .6, 0, 0, 0, 0, 0, 0, 1, 0
    ];
    public static buttonColorMatrix: Array<number> = [
        .717, 0, 0, 0, 0, 0, .639, 0, 0, 0, 0, 0, .482, 0, 0, 0, 0, 0, 1, 0
    ];
}