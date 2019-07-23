class Vector2D {
    private x_: number;
    private y_: number;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.x = 0;
        this.y = 0;
    }

    set x(value) {
        this.x_ = value;
    }

    get x() {
        return this.x_;
    }

    set y(value) {
        this.y_ = value;
    }

    get y() {
        return this.y_;
    }
}