class BattleStarVo {
    private id_: number;
    private x_: number;
    private y_: number;
    private active_: boolean;

    constructor() {
        this.id = 0;
        this.x = 0;
        this.y = 0;
        this.active = true;
    }

    set id(value) {
        this.id_ = value;
    }

    get id() {
        return this.id_;
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

    set active(value) {
        this.active_ = value;
    }

    get active() {
        return this.active_;
    }
}