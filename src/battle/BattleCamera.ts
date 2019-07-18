class BattleCamera {
    private battleWorld_: BattleWorld;
    private battleBg_: BattleBackground;
    private zoom_: number;

    constructor() {

    }

    set battleWorld(value) {
        this.battleWorld_ = value;
    }

    get battleWorld() {
        return this.battleWorld_;
    }

    set battleBg(value) {
        this.battleBg_ = value;
    }

    get battleBg() {
        return this.battleBg_;
    }

    set zoom(value) {
        this.zoom_ = value;
    }

    get zoom() {
        return this.zoom_;
    }
}