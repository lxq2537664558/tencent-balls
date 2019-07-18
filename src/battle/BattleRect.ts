class BattleRect {
    private xMin_: number;
    private yMin_: number;
    private xMax_: number;
    private yMax_: number;
    private xCenter_: number;
    private yCenter_: number;

    constructor(xMin?: number, yMin?: number, xMax?: number, yMax?: number) {
        this.init(xMin, yMin, xMax, yMax);
    }

    public init(xMin: number, yMin: number, xMax: number, yMax: number): void {
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMax;
        this.yMax = yMax;
        this.xCenter = (this.xMin + this.xMax) * .5;
        this.xCenter = (this.yMin + this.yMax) * .5;
    }

    public isValid(): boolean {
        return this.xMin < this.xMax && this.yMin < this.yMax;
    }

    public split(): Array<BattleRect> {
        const rectArr: Array<BattleRect> = new Array<BattleRect>();

        if (this.isValid()) {
            rectArr.push(new BattleRect(this.xCenter, this.yCenter, this.xMax, this.yMax));
            rectArr.push(new BattleRect(this.xMin, this.yCenter, this.xCenter, this.yMax));
            rectArr.push(new BattleRect(this.xMin, this.yMin, this.xCenter, this.yCenter));
            rectArr.push(new BattleRect(this.xCenter, this.yMin, this.xMax, this.yCenter));
        }

        return rectArr;
    }

    public isIntersect(rect: BattleRect): boolean {
        return !(this.xMin > rect.xMax || this.xMax < rect.xMin || this.yMin > rect.yMax || this.yMax < rect.yMin);
    }

    set xMin(value) {
        this.xMin_ = value;
    }

    get xMin() {
        return this.xMin_;
    }

    set yMin(value) {
        this.yMin_ = value;
    }

    get yMin() {
        return this.yMin_;
    }

    set xMax(value) {
        this.xMax_ = value;
    }

    get xMax() {
        return this.xMax_;
    }

    set yMax(value) {
        this.yMax_ = value;
    }

    get yMax() {
        return this.yMax_;
    }

    set xCenter(value) {
        this.xCenter_ = value;
    }

    get xCenter() {
        return this.xCenter_;
    }

    set yCenter(value) {
        this.yCenter_ = value;
    }

    get yCenter() {
        return this.yCenter_;
    }
}