class BattleService {
    private static instance_: BattleService;

    private balls_: { [key: number]: BattleBallVo };
    private players_: { [key: number]: BattlePlayerVo };
    private playerUids_: Array<number>;
    private playerCount_: number;
    private startWaiting_: boolean;
    private startWaitingTime_: number;
    private rolePlayer_: BattlePlayerVo;
    private clientTimeBase_: number;
    private cameraScale_: number;
    private cameraScaleDirty_: boolean;
    private cameraScaleDst_: number;
    private sceneBattle_: SceneBattle;
    private worldSqrEdgeLength_: number;
    private inSceneBalls_: { [key: number]: BattleBallVo };
    private clientTime_: number;
    private serverTime_: number;
    private serverTimeSrc_: number;
    private serverTimeDst_: number;
    private serverTimeDstDuration_: number;
    private isBattleTime_: boolean;
    private isExitFromWatch_: boolean;
    private isBattlePlaying_: boolean;
    private rolePosition_: Vector2D;
    private pauseServerTime_: number;
    private lastTimeFixedUpdate_: number;
    private roomData_: BattleRoomData;
    private ballToken_: number;
    private isPauseBattle_: boolean;
    private meleeModeConfig_: any;

    constructor() {
        this.balls_ = {};
        this.players_ = {};
        this.playerUids_ = [];
        this.clientTimeBase = -.05;
        this.worldSqrEdgeLength = Battle.WorldSqrEdgeLength;
        this.meleeModeConfig_ = RES.getRes("res_melee_mode_json").Melee_Mode
    }

    public static getInstance(): BattleService {
        if (!this.instance_) {
            this.instance_ = new BattleService();
        }

        return this.instance_;
    }

    public startup(): void {
        this.worldSqrEdgeLength = Battle.WorldSqrEdgeLength;

    }

    public isRoleBall(ballVo: BattleBallVo): boolean {
        if (!ballVo || !this.rolePlayer) {
            return false;
        }

        return this.rolePlayer.uid === ballVo.uid && ballVo.uid === BallType.Ball;
    }

    public getBall(ballId: number): BattleBallVo {
        return this.balls_[ballId];
    }

    public getTimeLeft(): number {
        return;
    }

    public reset(): void {
        this.isBattlePlaying = false;
        this.startWaiting = false;
        this.startWaitingTime = null;
        this.rolePlayer = null;
        this.rolePosition = {
            x: -100000,
            y: -100000,
        };
        this.removeAllBalls();
        this.removeAllPlayers();
        this.clientTime = 0;
        this.serverTime = 0;
        this.serverTimeSrc = 0;
        this.serverTimeDst = 0;
        this.serverTimeDstDuration = -1;
        this.clientTimeBase = 0;
        this.roomData_ = new BattleRoomData();
        this.cameraScale = 0;
        this.ballToken = 1;
    }

    public onEnterRoom(cmd: any): void {
        this.reset();
        BattleSystem.getInstance().reset();
        Battle.WorldSqrEdgeLength = cmd.boder;
        Battle.getInstance().updatePositionTime = cmd.frameInterval * .001;

        if (Battle.getInstance().updatePositionTime < .001) {
            Battle.getInstance().updatePositionTime = .1;
        }

        RoomHeartbeatSystem.getInstance().onEnterRoom();
        this.isBattlePlaying = true;
        this.setBattleMode(cmd.type);
        this.setBattleRoomId(cmd.room_id);

        for (let i = 0, len = cmd.user_infos.length; i < len; ++i) {
            const data: any = cmd.user_infos[i];
            const playerVo: BattlePlayerVo = this.createPlayer(data);
            // BattleManager.getInstance().battleLoadMgr.
        }
    }

    public createPlayer(data: any): BattlePlayerVo {
        if (this.players_[data.uid] !== null) {
            return;
        }

        const playerVo: BattlePlayerVo = new BattlePlayerVo(data);
        this.players_[data.uid] = playerVo;
        ++this.playerCount;
        this.playerUids_.push(data.uid);

        return playerVo;
    }

    public isOnePlayerMode(): boolean {
        return (this.getBattleMode() === BattleMode.Survive || this.isTeamMode()) ? false : true;
    }

    public isTeamMode(): boolean {
        const battleMode: number = this.getBattleMode();

        return battleMode === BattleMode.Team2 || battleMode === BattleMode.Team5 || battleMode === BattleMode.BattleMelee2
            || battleMode === BattleMode.BattleMelee5 || battleMode === BattleMode.BattleQualifyMulti
            || battleMode === BattleMode.BattleQualifyTeam || battleMode === BattleMode.BattleQualifyMeleeMulti
            || battleMode === BattleMode.BattleQualifyMeleeTeam;
    }

    public isGuideModule(): boolean {
        const battleMode: number = this.getBattleMode();

        return (battleMode === BattleMode.IntroduceSingle1 || battleMode === BattleMode.IntroduceSingle2
        || battleMode === BattleMode.IntroduceTeam2) ? true : false;
    }

    public isMeleeMode(battleMode?: number): boolean {
        if (battleMode === void 0 || battleMode === null) {
            battleMode = this.getBattleMode();
        }

        for (const id in this.meleeModeConfig_) {
            if (+this.meleeModeConfig_[id].mode_id === battleMode) {
                return true;
            }
        }

        return false;
    }

    public isRankBattleMode(battleMode?: number): boolean {
        if (battleMode === void 0 || battleMode === null) {
            battleMode = this.getBattleMode();
        }

        return (battleMode === BattleMode.BattleQualifyClassic || battleMode === BattleMode.BattleQualifyMulti
            || battleMode === BattleMode.BattleQualifyTeam || battleMode === BattleMode.BattleQualifyMelee
        || battleMode === BattleMode.BattleQualifyMeleeMulti || BattleMode.BattleQualifyMeleeTeam) ? false : true;
    }

    public isGuestModel(): boolean {
        return this.getBattleMode() === BattleMode.Guest;
    }

    public hasOtherPlayerInScene(): boolean {
        const uid: number = this.rolePlayer.uid;

        for (const id in this.balls_) {
            const ballVo: BattleBallVo = this.balls_[id];

            if (ballVo.type === BallType.Ball && ballVo.uid !== uid) {
                return true;
            }
        }

        return false;
    }

    public getPlayer(uid: number): BattlePlayerVo {
        return this.players_[uid];
    }

    public getPlayerNameByUid(uid: number): string {
        const player: BattlePlayerVo = this.getPlayer(uid);

        if (!player) {
            return "";
        }

        return player.name;
    }

    public getBattleMode(): number {
        if (this.roomData_ === null || this.roomData_ === void 0) {
            return null;
        }

        return this.roomData_.battleMode;
    }

    public setBattleMode(mode: number) {
        if (this.roomData_ === null || this.roomData_ === void 0) {
            this.roomData_ = new BattleRoomData();
        }

        this.roomData_.battleMode = mode;
    }

    public setBattleRoomId(roomId: number): void {
        if (this.roomData_ === null || this.roomData_ === void 0) {
            this.roomData_ = new BattleRoomData();
        }

        this.roomData_.roomId = roomId;
    }

    public exitRoom(): void {
        this.reset();
        this.releaseBallPool();
        BattleSystem.getInstance().reset();
        BattleManager.getInstance().onExitRoom();
    }

    public setTime(clientTime: number, serverTime: number): void {
        if (this.isPauseBattle) {
            return;
        }

        const time: number = clientTime + (this.serverTime - this.clientTime);
        const deltaServerTime: number = serverTime - time;
        const defaultDelay: number = .5;

        if (deltaServerTime > defaultDelay || -defaultDelay > deltaServerTime) {
            this.initTime(clientTime, serverTime);
        }
        else {
            this.clientTime = clientTime;
            this.serverTime = time;
            this.serverTimeSrc = time;
            this.serverTimeDst = serverTime;
            this.serverTimeDstDuration = 3;
        }
    }

    private releaseBallPool(): void {
    }

    private initTime(clientTime: number, serverTime: number): void {
        this.clientTime = clientTime;
        this.serverTime = serverTime;
        this.serverTimeSrc = serverTime;
        this.serverTimeDst = serverTime;
        this.serverTimeDstDuration = -1;
    }

    private removeAllBalls(): void {
        for (const id in this.balls_) {
            this.balls_[id].destroy();
        }

        this.balls_ = {};
    }

    private removeAllPlayers(): void {
        for (const id in this.players_) {
            this.players_[id].destroy();
        }

        this.players_ = {};
        this.playerCount = 0;
        this.playerUids_.length = 0;
    }

    private initMeleeBaseInfo(): void {
    }

    set clientTimeBase(value) {
        this.clientTimeBase_ = value;
    }

    get clientTimeBase() {
        return this.clientTimeBase_;
    }

    set rolePlayer(value) {
        this.rolePlayer_ = value;
    }

    get rolePlayer() {
        return this.rolePlayer_;
    }

    set cameraScale(value) {
        this.cameraScale_ = value;
    }

    get cameraScale() {
        return this.cameraScale_;
    }

    set cameraScaleDirty(value) {
        this.cameraScaleDirty_ = value;
    }

    get cameraScaleDirty() {
        return this.cameraScaleDirty_;
    }

    set cameraScaleDst(value) {
        this.cameraScaleDst_ = value;
    }

    get cameraScaleDst() {
        return this.cameraScaleDst_;
    }

    set sceneBattle(value) {
        this.sceneBattle_ = value;
    }

    get sceneBattle() {
        return this.sceneBattle_;
    }

    set worldSqrEdgeLength(value) {
        this.worldSqrEdgeLength_ = value;
    }

    get worldSqrEdgeLength() {
        return this.worldSqrEdgeLength_;
    }

    set clientTime(value) {
        this.clientTime_ = value;
    }

    get clientTime() {
        return this.clientTime_;
    }

    set serverTime(value) {
        this.serverTime_ = value;
    }

    get serverTime() {
        return this.serverTime_;
    }

    set serverTimeSre(value) {
        this.serverTimeSrc_ = value;
    }

    set serverTimeSrc(value) {
        this.serverTimeSrc_ = value;
    }

    get serverTimeSrc() {
        return this.serverTimeSrc_;
    }

    set serverTimeDst(value) {
        this.serverTimeDst_ = value;
    }

    get serverTimeDst() {
        return this.serverTimeDst_;
    }

    set serverTimeDstDuration(value) {
        this.serverTimeDstDuration_ = value;
    }

    get serverTimeDstDuration() {
        return this.serverTimeDstDuration_;
    }

    set isBattleTime(value) {
        this.isBattleTime_ = value;
    }

    get isBattleTime() {
        return this.isBattleTime_;
    }

    set isExitFromWatch(value) {
        this.isExitFromWatch_ = value;
    }

    get isExitFromWatch() {
        return this.isExitFromWatch_;
    }

    set isBattlePlaying(value) {
        this.isBattlePlaying_ = value;
    }

    get isBattlePlaying() {
        return this.isBattlePlaying_;
    }

    set startWaiting(value) {
        this.startWaiting_ = value;
    }

    get startWaiting() {
        return this.startWaiting_;
    }

    set startWaitingTime(value) {
        this.startWaitingTime_ = value;
    }

    get startWaitingTime() {
        return this.startWaitingTime_;
    }

    set rolePosition(value) {
        this.rolePosition_ = value;
    }

    get rolePosition() {
        return this.rolePosition_;
    }

    set playerCount(value) {
        this.playerCount_ = value;
    }

    get playerCount() {
        return this.playerCount_;
    }

    set pauseServerTime(value) {
        this.pauseServerTime_ = value;
    }

    get pauseServerTime() {
        return this.pauseServerTime_;
    }

    set lastTimeFixedUpdate(value) {
        this.lastTimeFixedUpdate_ = value;
    }

    get lastTimeFixedUpdate() {
        return this.lastTimeFixedUpdate_;
    }

    set ballToken(value) {
        this.ballToken_ = value;
    }

    get ballToken() {
        return this.ballToken_;
    }

    set isPauseBattle(value) {
        this.isPauseBattle_ = value;
    }

    get isPauseBattle() {
        return this.isPauseBattle_;
    }
}