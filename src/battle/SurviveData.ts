class SurviveData {
    private initLife_: number;
    private currLife_: number;
    private killCount_: number;
    private watcher_: number;

    constructor() {
        this.initLife = 3;
        this.currLife = this.initLife;
        this.killCount = 0;
        this.watcher = 0;
    }

    set initLife(value) {
        this.initLife_ = value;
    }

    get initLife() {
        return this.initLife_;
    }

    set currLife(value) {
        this.currLife_ = value;
    }

    get currLife() {
        return this.currLife_;
    }

    set killCount(value) {
        this.killCount_ = value;
    }

    get killCount() {
        return this.killCount_;
    }

    set watcher(value) {
        this.watcher_ = value;
    }

    get watcher() {
        return this.watcher_;
    }
}