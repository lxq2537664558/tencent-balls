class BattleBallVo {
    private id_: number;
    private type_: number;
    private player_: BattlePlayerVo;
    private lastRoleBallId_: number;
    private uid_: number;
    private name_: string;
    private skinId_: number;
    private charId_: number;
    private ringId_: number;
    private face_: number;
    private isShowProtect_: boolean;
    private forwardRad_: number;
    private isShowForwardRad_: boolean;
    private isCharacterRotate_: boolean;
    private velocity_: Vector2D;
    private velocity2_: Vector2D;
    private velocityUpdateMode_: boolean;
    private velocityUpdateModeDuration_: number;
    private velocityUpdateModeEndTime_: number;
    private vMax_: number;
    private sizeDirty_: boolean;
    private size_: number;
    private currSize_: number;
    private score_: number;
    private position_: Vector2D;
    private targetPosition_: Vector2D;
    private targetPositionTime_: number;
    private positionApplied_: Vector2D;
    private positionDirty_: boolean;
    private city_: string;
    private shareTeamSkin_: number;
    private initCameraScale_: number;
    private addRadius_: number;
    private lastTimeFixedUpdate_: number;
    private moveDistance_: number;
    private isSplitCollide_: boolean;
    private isRoleBall_: boolean;
    private preCheckTime_: number;
    private isInitFrame_: boolean;
    private deltaTime_: number;
    private isDebugBall_: boolean;
    private bufferMap_: any;
    private nullTable_: any;
    private sp0_: number;
    private timeOwn_: number;
    private timeMax_: number;
    private tmp_: boolean;
    private updateInfo_: any;
    private positionUpdateLatestMsgTime_: number;
    private positionUpdateMode_: boolean;
    private ballView_: BattleBall;

    constructor() {
        this.ballView = new BattleBall();
        this.reset();
    }

    public static vector2SqrDistance(a: Vector2D, b: Vector2D): number {
        const offsetX: number = a.x - b.x;
        const offsetY: number = a.y - b.y;

        return offsetX * offsetX + offsetY * offsetY;
    }

    public static world2UI(x: number, y: number): Vector2D {
        const pos: Vector2D = {
            x,
            y,
        };

        const role: BattlePlayerVo = BattleService.getInstance().rolePlayer;

        if (!role) {
            return pos;
        }

        const rolePos: Vector2D = role.position;
        const cameraScale: number = BattleService.getInstance().cameraScale;
        pos.x = (pos.x - rolePos.x) / cameraScale + Battle.PanelWidth / 2;
        pos.y = (pos.y - rolePos.y) / cameraScale + Battle.PanelHeight / 2;

        return pos;
    }

    public static UI2World(x: number, y: number): Vector2D {
        const pos: Vector2D = {
            x,
            y,
        };

        const role: BattlePlayerVo = BattleService.getInstance().rolePlayer;

        if (!role) {
            return pos;
        }

        const rolePos: Vector2D = role.position;
        const cameraScale: number = BattleService.getInstance().cameraScale;
        pos.x = (pos.x - Battle.PanelWidth / 2) * cameraScale + pos.x;
        pos.y = (pos.y - Battle.PanelHeight / 2) * cameraScale + pos.y;

        return pos;
    }

    public destroy(): void {
        
    }

    public getScore(): number {
        return;
    }

    public canSplit(): boolean {
        return this.type == BallType.Ball && this.score >= (this.sp0 * this.calcEatFactor(this.score) * 2);
    }

    public canSpit(): boolean {
        return this.type === BallType.Ball && this.score >= (this.sp0 * this.calcEatFactor(this.score));
    }

    public canBoom(): boolean {
        return this.type == BallType.Ball && this.score >= 60;
    }

    public canBullet(): boolean {
        return this.type == BallType.Ball && this.score >= (this.sp0 * this.calcEatFactor(this.score) + this.sp0 / 2);
    }

    public canLightning(): boolean {
        return this.type == BallType.Ball && this.score >= (Constants.ShotLightningCost + 19);
    }

    public isValid(): boolean {
        return;
    }

    public getPosition(): Vector2D {
        return;
    }

    public getCurrentSize(): number {
        return;
    }

    public hasBuff(id: number): boolean {
        return this.bufferMap_[id] !== null;
    }

    public hasAddRadiusPrecentBuff(): boolean {
        return this.hasBuff(BattleBuffVo.AddRadiusPrecentBuffId);
    }

    public hasAddRadiusValueBuff(): boolean {
        return this.hasBuff(BattleBuffVo.AddRadiusValueBuff);
    }

    public addBuffer(buff: BattleBallVo): void {
        if (!buff) {
            return;
        }

        this.bufferMap_[buff.id] = buff;
        this.checkAddRadiusBuff();
    }

    public removeBuffer(id: number): void {
        const buff: BattleBuffVo = this.bufferMap_[id];

        if (!buff) {
            return;
        }

        this.bufferMap_[id] = null;
        delete this.bufferMap_[id];
    }

    public synchSplitCollision(info: SplitCollisionInfo, clientTimeBase: number, serverTime: number): void {
        this.targetPosition.x = info.x;
        this.targetPosition.y = info.y;
        this.targetPositionTime = serverTime;
        this.isSplitCollide = true;
    }

    public synchPosUpdateOther(info: PositionUpdateInfo, clientTimeBase: number, serverTime: number): void {
        const vx: number = info.vx / 100;
        const vy: number = info.vy / 100;
        const radius: number = Battle.getInstance().getRadiusByScore(info.score);

        this.size = radius;
        this.score = info.score;
        this.velocity2.x = vx;
        this.velocity2.y = vy;
        this.targetPosition.x = info.x;
        this.targetPosition.y = info.y;
        this.targetPositionTime = serverTime;
        this.positionUpdateMode = true;
        this.positionUpdateLatestMsgTime = serverTime;

        if ((vx * vx + vy * vy) > .001) {
            const angle: number = Math.atan2(vy, vx);
            this.forwardRad = angle;
        }
    }

    public synchMovement(info: BallForceUpdate, clientTimeBase: number, serverTime: number): void {
        if (this.type !== BallType.Ball) {
            this.velocityUpdateMode = true;
        }

        this.checkRollbackMovement(info, serverTime);
        const radius: number = Battle.getInstance().getRadiusByScore(info.score);
        this.size = radius;
        this.score = info.score;

        if (info.forceList.length > 0) {
            for (let i = 0, len = info.forceList.length; i < len; ++i) {
                const forceInfo: ForceInfo = info.forceList[i];
                const velocityInfo: VelocityInfo = Battle.getInstance().popVelocityInfo();
                velocityInfo.init(serverTime, forceInfo.type, forceInfo.vSrcX / 100, forceInfo.vSrcY / 100,
                    forceInfo.vDstX / 100, forceInfo.vDstY / 100, forceInfo.remainTime);
                this.synchVelocityInfo(velocityInfo);
            }
        }

        this.rollback(info, serverTime);
    }

    private rollback(info: BallForceUpdate, serverTime: number): void {
        this.targetPosition.x = info.x;
        this.targetPosition.y = info.y;
        this.targetPositionTime = serverTime;
    }

    private synchVelocityInfo(velocity: VelocityInfo): void {

    }

    private checkRollbackMovement(info: BallForceUpdate, serverTime: number): void {
        if (this.targetPositionTime > serverTime) {
            this.rollback(info, serverTime);
        }
    }

    private checkAddRadiusBuff(): void {
        this.addRadius = 0;

        if (this.hasAddRadiusPrecentBuff()) {

        }

        if (this.hasAddRadiusValueBuff()) {

        }
    }

    private calcEatFactor(score: number): number {
        return 20 >= score ? 1.3 : score >= 1e4 ? 1.05 : -25e-6 * score + 1.3;
    }

    private vector2SqrtMagnitude2(x: number, y: number): number {
        return Math.sqrt(x * x + y * y);
    }

    private reset(): void {
        this.player = null;
        this.id = -1;
        this.uid = -1;
        this.name = "";
        this.type = BallType.Ball;
        this.skinId = 1e3;
        this.charId = 0;
        this.ringId = 0;
        this.face = -1;
        this.isShowProtect = false;
        this.forwardRad = 0;
        this.isShowForwardRad = false;
        this.isCharacterRotate = false;
        this.velocity = { x: 0, y: 0 };
        this.velocity2 = { x: 0, y: 0 };
        this.velocityUpdateMode = false;
        this.velocityUpdateModeDuration = .5;
        this.velocityUpdateModeEndTime = 0;
        this.vMax = 300;
        this.sizeDirty = false;
        this.size = 1;
        this.currSize = 1;
        this.score = 1;
        this.position = { x: 0, y: 0 };
        this.targetPosition = { x: 0, y: 0 };
        this.targetPositionTime = 0;
        this.positionUpdateLatestMsgTime = 0;
        this.positionUpdateMode = false;
        this.positionApplied = { x: 0, y: 0 };
        this.positionDirty = true;
        this.city = "";
        this.shareTeamSkin = 0;
        this.initCameraScale = 1;
        this.addRadius = 0;
        this.lastTimeFixedUpdate = 0;
        this.moveDistance = 0;
        this.isSplitCollide = false;
        this.isRoleBall = false;
        this.preCheckTime = 0;
        this.isInitFrame = false;
    }

    private clearBufferMap(): void {
        if (this.bufferMap) {
            for (const id in this.bufferMap) {

            }
        }

        this.bufferMap = {};
    }

    set id(value) {
        this.id_ = value;
    }

    get id() {
        return this.id_;
    }

    set type(value) {
        this.type_ = value;
    }

    get type() {
        return this.type_;
    }

    set player(value) {
        this.player_ = value;
    }

    get player() {
        return this.player_;
    }

    set lastRoleBallId(value) {
        this.lastRoleBallId_ = value;
    }

    get lastRoleBallId() {
        return this.lastRoleBallId_;
    }

    set uid(value) {
        this.uid_ = value;
    }

    get uid() {
        return this.uid_;
    }

    set name(value) {
        this.name_ = value;
    }

    get name() {
        return this.name_;
    }

    set skinId(value) {
        this.skinId_ = value;
    }

    get skinId() {
        return this.skinId_;
    }

    set charId(value) {
        this.charId_ = value;
    }

    get charId() {
        return this.charId_;
    }

    set ringId(value) {
        this.ringId_ = value;
    }

    get ringId() {
        return this.ringId_;
    }

    set face(value) {
        this.face_ = value;
    }

    get face() {
        return this.face_;
    }

    set isShowProtect(value) {
        this.isShowProtect_ = value;
    }

    get isShowProtect() {
        return this.isShowProtect_;
    }

    set forwardRad(value) {
        this.forwardRad_ = value;
    }

    get forwardRad() {
        return this.forwardRad_;
    }

    set isShowForwardRad(value) {
        this.isShowForwardRad_ = value;
    }

    get isShowForwardRad() {
        return this.isShowProtect_;
    }

    set isCharacterRotate(value) {
        this.isCharacterRotate_ = value;
    }

    get isCharacterRotate() {
        return this.isCharacterRotate_;
    }

    set velocity(value) {
        this.velocity_ = value;
    }

    get velocity() {
        return this.velocity_;
    }

    set velocity2(value) {
        this.velocity2_ = value;
    }

    get velocity2() {
        return this.velocity2_;
    }

    set velocityUpdateMode(value) {
        this.velocityUpdateMode_ = value;
    }

    get velocityUpdateMode() {
        return this.velocityUpdateMode_;
    }

    set velocityUpdateModeDuration(value) {
        this.velocityUpdateModeDuration_ = value;
    }

    get velocityUpdateModeDuration() {
        return this.velocityUpdateModeDuration_;
    }

    set velocityUpdateModeEndTime(value) {
        this.velocityUpdateModeEndTime_ = value;
    }

    get velocityUpdateModeEndTime() {
        return this.velocityUpdateModeEndTime_;
    }

    set vMax(value) {
        this.vMax_ = value;
    }

    get vMax() {
        return this.vMax_;
    }

    set sizeDirty(value) {
        this.sizeDirty_ = value;
    }

    get sizeDirty() {
        return this.sizeDirty_;
    }

    set size(value) {
        this.size_ = value;
    }

    get size() {
        return this.size_;
    }

    set currSize(value) {
        this.currSize_ = value;
    }

    get currSize() {
        return this.currSize_;
    }

    set score(value) {
        this.score_ = value;
    }

    get score() {
        return this.score_;
    }

    set position(value) {
        this.position_ = value;
    }

    get position() {
        return this.position_;
    }

    set targetPosition(value) {
        this.targetPosition_ = value;
    }

    get targetPosition() {
        return this.targetPosition_;
    }

    set targetPositionTime(value) {
        this.targetPositionTime_ = value;
    }

    get targetPositionTime() {
        return this.targetPositionTime_;
    }

    set positionApplied(value) {
        this.positionApplied_ = value;
    }

    get positionApplied() {
        return this.positionApplied_;
    }

    set positionDirty(value) {
        this.positionDirty_ = value;
    }

    get positionDirty() {
        return this.positionDirty_;
    }

    set city(value) {
        this.city_ = value;
    }

    get city() {
        return this.city_;
    }

    set shareTeamSkin(value) {
        this.shareTeamSkin_ = value;
    }

    get shareTeamSkin() {
        return this.shareTeamSkin_;
    }

    set initCameraScale(value) {
        this.initCameraScale_ = value;
    }

    get initCameraScale() {
        return this.initCameraScale_;
    }

    set addRadius(value) {
        this.addRadius_ = value;
    }

    get addRadius() {
        return this.addRadius_;
    }

    set lastTimeFixedUpdate(value) {
        this.lastTimeFixedUpdate_ = value;
    }

    get lastTimeFixedUpdate() {
        return this.lastTimeFixedUpdate_;
    }

    set moveDistance(value) {
        this.moveDistance_ = value;
    }

    get moveDistance() {
        return this.moveDistance_;
    }

    set isSplitCollide(value) {
        this.isSplitCollide_ = value;
    }

    get isSplitCollide() {
        return this.isSplitCollide_;
    }

    set isRoleBall(value) {
        this.isRoleBall_ = value;
    }

    get isRoleBall() {
        return this.isRoleBall_;
    }

    set preCheckTime(value) {
        this.preCheckTime_ = value;
    }

    get preCheckTime() {
        return this.preCheckTime_;
    }

    set isInitFrame(value) {
        this.isInitFrame_ = value;
    }

    get isInitFrame() {
        return this.isInitFrame_;
    }

    set deltaTime(value) {
        this.deltaTime_ = value;
    }

    get deltaTime() {
        return this.deltaTime_;
    }

    set isDebugBall(value) {
        this.isDebugBall_ = value;
    }

    get isDebugBall() {
        return this.isDebugBall_;
    }

    set bufferMap(value) {
        this.bufferMap_ = value;
    }

    get bufferMap() {
        return this.bufferMap_;
    }

    set nullTable(value) {
        this.nullTable_ = value;
    }

    get nullTable() {
        return this.nullTable_;
    }

    set sp0(value) {
        this.sp0_ = value;
    }

    get sp0() {
        return this.sp0_;
    }

    set timeOwn(value) {
        this.timeOwn_ = value;
    }

    get timeOwn() {
        return this.timeOwn_;
    }

    set timeMax(value) {
        this.timeMax_ = value;
    }

    get timeMax() {
        return this.timeMax_;
    }

    set tmp(value) {
        this.tmp_ = value;
    }

    get tmp() {
        return this.tmp_;
    }

    set updateInfo(value) {
        this.updateInfo_ = value;
    }

    get updateInfo() {
        return this.updateInfo_;
    }

    set positionUpdateLatestMsgTime(value) {
        this.positionUpdateLatestMsgTime_ = value;
    }

    get positionUpdateLatestMsgTime() {
        return this.positionUpdateLatestMsgTime_;
    }

    set positionUpdateMode(value) {
        this.positionUpdateMode_ = value;
    }

    get positionUpdateMode() {
        return this.positionUpdateMode_;
    }

    set ballView(value) {
        this.ballView_ = value;
    }

    get ballView() {
        return this.ballView_;
    }
}