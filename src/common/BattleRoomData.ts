class BattleRoomData {
    private roomId_: string;
    private battleMode_: number;
    private teamId_: string;
    private type_: number;

    constructor() {
    }

    public reset(): void {
        this.roomId = "";
        this.battleMode = 0;
        this.teamId = "";
        this.type = 0;
    }

    set roomId(value) {
        this.roomId_ = value;
    }

    get roomId() {
        return this.roomId_;
    }

    set battleMode(value) {
        this.battleMode_ = value;
    }

    get battleMode() {
        return this.battleMode_;
    }

    set teamId(value) {
        this.teamId_ = value;
    }

    get teamId() {
        return this.teamId_;
    }

    set type(value) {
        this.type_ = value;
    }

    get type() {
        return this.type_;
    }
}