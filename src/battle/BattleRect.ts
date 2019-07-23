class BattleRect {
    private minX_: number;
    private minY_: number;
    private maxX_: number;
    private maxY_: number;
    private centerX_: number;
    private centerY_: number;

    constructor(minX: number, minY: number, maxX: number, maxY: number) {
        this.init(minX, minY, maxX, maxY);
    }

    public init(minX: number, minY: number, maxX: number, maxY: number): void {
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
        this.centerX = (this.minX + this.maxX) * .5;
        this.centerY = (this.minY + this.maxY) * .5;
    }

    public split(): Array<BattleRect> {
        const array: Array<BattleRect> = new Array();

        if (this.isValid()) {
            array.push(new BattleRect(this.centerX, this.centerY, this.maxX, this.maxY));
            array.push(new BattleRect(this.minX, this.centerY, this.centerX, this.maxY));
            array.push(new BattleRect(this.minX, this.minY, this.centerX, this.centerY));
            array.push(new BattleRect(this.centerX, this.minY, this.maxX, this.centerY));
        }

        return array;
    }

    public isValid(): boolean {
        return this.minX < this.maxX && this.minY < this.maxY;
    }

    public isIntersect(rect: BattleRect): boolean {
        return !(this.minX > rect.minX || this.maxX < rect.minX || this.minY > rect.maxY || this.maxY < rect.minY);
    }

    set minX(value) {
        this.minX_ = value;
    }

    get minX() {
        return this.minX_;
    }

    set maxX(value) {
        this.maxX_ = value;
    }

    get maxX() {
        return this.maxX_;
    }

    set minY(value) {
        this.minY_ = value;
    }

    get minY() {
        return this.minY_;
    }

    set maxY(value) {
        this.maxY_ = value;
    }

    get maxY() {
        return this.maxY_;
    }

    set centerX(value) {
        this.centerX_ = value;
    }

    get centerX() {
        return this.centerX_;
    }

    set centerY(value) {
        this.centerY_ = value;
    }

    get centerY() {
        return this.centerY_;
    }
}