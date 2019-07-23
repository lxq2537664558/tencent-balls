class BattleService {
    private static instance_: BattleService;

    private roomData_: BattleRoomData;
    private players_: { [key: string]: BattlePlayerVo };

    constructor() {
        this.roomData_ = new BattleRoomData();
    }

    public static getInstance(): BattleService {
        if (!this.instance_) {
            this.instance_ = new BattleService();
        }

        return this.instance_;
    }

    // public createPlayer(): BattlePlayerVo {

    // }

    public getPlayer(uid: string): BattlePlayerVo {
        return this.players_[uid];
    }

    public getPlayerNameByUid(uid: string): string {
        const playerVo: BattlePlayerVo = this.getPlayer(uid);

        if (playerVo) {
            return playerVo.name;
        }

        return "";
    }

    public isTeamMode(mode?: number): boolean {
        if (mode === void 0 || mode === null) {
            mode = this.battleMode;
        }

        return mode === BattleMode.Team2 || mode === BattleMode.Team5 || mode === BattleMode.BattleMelee_2 || mode === BattleMode.BattleMelee_5
            || mode === BattleMode.BattleQualifyMulti || mode === BattleMode.BattleQualifyTeam || mode === BattleMode.BattleQualifyMeleeMulti
            || mode === BattleMode.BattleQualifyMeleeTeam;
    }

    public isSingleMode(mode?: number): boolean {
        if (mode === void 0 || mode === null) {
            mode = this.battleMode;
        }

        return (mode === BattleMode.Survive || this.isTeamMode(mode)) ? false : true;
    }

    public isGuideMode(mode?: number): boolean {
        if (mode === void 0 || mode === null) {
            mode = this.battleMode;
        }

        return mode === BattleMode.IntroduceSingle_1 || mode === BattleMode.IntroduceSingle_2 || mode === BattleMode.IntroduceTeam_2;
    }

    public isMeleeMode(mode?: number): boolean {
        if (mode === void 0 || mode === null) {
            mode = this.battleMode;
        }

        return ConfigManager.getInstance().meleeInfo.getMeleeInfoConfig(mode) !== null;
    }

    public isRankBattleMode(mode?: number): boolean {
        if (mode === void 0 || mode === null) {
            mode = this.battleMode;
        }

        return mode === BattleMode.BattleQualifyClassic || mode === BattleMode.BattleQualifyMulti || mode === BattleMode.BattleQualifyTeam
            || mode === BattleMode.BattleQualifyMelee || mode === BattleMode.BattleQualifyMeleeMulti || mode === BattleMode.BattleQualifyMeleeTeam;
    }

    set battleMode(value) {
        this.roomData_.battleMode = value;
    }

    get battleMode() {
        return this.roomData_.battleMode;
    }

    set roomId(value) {
        this.roomData_.roomId = value;
    }

    get roomId() {
        return this.roomData_.roomId;
    }

    set teamId(value) {
        this.roomData_.teamId = value;
    }

    get teamId() {
        return this.roomData_.teamId;
    }
}