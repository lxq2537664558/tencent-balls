class VelocityInfo {
    private minTimeDuration_: number;
    private vAveX_: number;
    private vAveY_: number;
    private forceType_: number;
    private timestamp_: number;
    private endTimestamp_: number;
    private timeDuration_: number;
    private vSrcX_: number;
    private vSrcY_: number;
    private vDstX_: number;
    private vDstY_: number;

    constructor() {
    }

    public init(timestamp: number, forceType: number, vSrcX: number, vSrcY: number, vDstX: number, vDstY: number, remainTime: number): void {
        if (0 >= remainTime) {
            remainTime = this.minTimeDuration;
        }
        else {
            remainTime /= 1000;
        }

        this.forceType = forceType;
        this.timestamp = timestamp;
        this.endTimestamp = timestamp + remainTime;
        this.timeDuration = remainTime;
        this.vSrcX = vSrcX;
        this.vSrcY = vSrcY;
        this.vDstX = vDstX;
        this.vDstY = vDstY;
        this.vAveX = 0;
        this.vAveY = 0;
    }

    public cut(target: VelocityInfo): void {
        if (this.forceType === target.forceType && !(this.timeDuration <= 0 || this.endTimestamp <= target.timestamp)) {
            const diff: number = target.timestamp - this.timestamp;

            if (diff >= this.minTimeDuration) {
                const n: number = diff / this.timestamp;
                const r: number = this.vSrcX * (1 - n) + this.vDstX * n;
                const o: number = this.vSrcY * (1 - n) + this.vDstY * n;
                this.timeDuration = diff;
                this.endTimestamp = this.timestamp + diff;
                this.vDstX = r;
                this.vDstY = o;
            }
        }
    }

    private calcAverageVelocity(vSrcX: number, vSrcY: number, timestamp: number, vDstX: number, vDstY: number, endTimestamp: number): Array<number> {
        return 
    }

    set minTimeDuration(value) {
        this.minTimeDuration_ = value;
    }

    get minTimeDuration() {
        return this.minTimeDuration_;
    }

    set vAveX(value) {
        this.vAveX_ = value;
    }

    get vAveX() {
        return this.vAveX_;
    }

    set vAveY(value) {
        this.vAveY_ = value;
    }

    get vAveY() {
        return this.vAveY_;
    }

    set forceType(value) {
        this.forceType_ = value;
    }

    get forceType() {
        return this.forceType_;
    }

    set timestamp(value) {
        this.timestamp_ = value;
    }

    get timestamp() {
        return this.timestamp_;
    }

    set endTimestamp(value) {
        this.endTimestamp_ = value;
    }

    get endTimestamp() {
        return this.endTimestamp_;
    }

    set timeDuration(value) {
        this.timeDuration_ = value;
    }

    get timeDuration() {
        return this.timeDuration_;
    }

    set vSrcX(value) {
        this.vSrcX_ = value;
    }

    get vSrcX() {
        return this.vSrcX_;
    }

    set vSrcY(value) {
        this.vSrcY_ = value;
    }

    get vSrcY() {
        return this.vSrcY_;
    }

    set vDstX(value) {
        this.vDstX_ = value;
    }

    get vDstX() {
        return this.vDstX_;
    }

    set vDstY(value) {
        this.vDstY_ = value;
    }

    get vDstY() {
        return this.vDstY_;
    }
}