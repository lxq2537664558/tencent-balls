class BattleRoomData {
    private roomId_: number;
    private battleMode_: number;
    private teamId_: number;
    private type_: number;

    constructor() {
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