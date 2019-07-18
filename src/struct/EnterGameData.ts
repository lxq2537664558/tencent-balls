class EnterGameData {
    private battleType_: number;
    private uid_: number;
    private roomId_: number;
    private battleTeamId_: number;
    private openId_: string;

    set battleType(value) {
        this.battleType_ = value;
    }

    get battleType() {
        return this.battleType_;
    }

    set uid(value) {
        this.uid_ = value;
    }

    get uid() {
        return this.uid_;
    }

    set roomId(value) {
        this.roomId_ = value;
    }

    get roomId() {
        return this.roomId_;
    }

    set battleTeamId(value) {
        this.battleTeamId_ = value;
    }

    get battleTeamId() {
        return this.battleTeamId_;
    }

    set openId(value) {
        this.openId_ = value;
    }

    get openId() {
        return this.openId_;
    }
}