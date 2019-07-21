class EnterGameVo {
    private battleType_: number;
    private uid_: string;
    private roomId_: string;
    private battleTeamId_: string;
    private openId_: string;

    constructor() {

    }

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