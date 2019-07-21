class BattlePlayerVo {
    private uid_: string;
    private ringId_: number;

    set uid(value) {
        this.uid_ = value;
    }

    get uid() {
        return this.uid_;
    }

    set ringId(value) {
        this.ringId_ = value;
    }

    get ringId() {
        return this.ringId_;
    }
}