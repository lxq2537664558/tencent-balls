class BattlePlayerVo {
    private id_: number;
    private x_: number;
    private y_: number;
    private sex_: number;
    private uid_: number;
    private name_: string;
    private headImage_: string;
    private country_: number;
    private province_: number;
    private level_: number;
    private index_: number;
    private teamId_: number;
    private teamName_: string;
    private fullName_: string;
    private balls_: { [key: number]: BattleBallVo };
    private ballCount_: number;
    private position_: Vector2D;
    private positionRect_: PositionRect;
    private positionDirty_: boolean;
    private isRole_: boolean;
    private surviveData_: SurviveData;
    private cameraScale_: number;
    private waitTime_: number;
    private charId_: number;
    private ringId_: number;
    private sporeId_: number;
    private realCharacter_: number;
    private isRemoveBoom_: boolean;

    constructor(userInfo: BallRoomUserInfo) {
        this.cameraScale = Battle.InitViewScale;
        this.reset();
        this.init(userInfo);
    }

    public init(userInfo: BallRoomUserInfo): void {
        this.uid = userInfo.uid;
        this.name = userInfo.name;
        this.country = userInfo.country;
        this.province = userInfo.province;
        this.level = userInfo.level;
        this.index = userInfo.index + 1;
        this.teamId = userInfo.teamId;
        this.teamName = userInfo.teamName;
        this.headImage = userInfo.headImage;
        this.sex = userInfo.sex;

        if (this.isInTeam()) {
            this.fullName = this.teamName + "|" + this.name;
        }
        else {
            this.fullName = this.name;
        }

        this.surviveData.initLife = userInfo.initLife || 3;
        this.surviveData.currLife = userInfo.currLife || 3;
        this.surviveData.killCount = userInfo.killCount || 0;
        this.surviveData.watcher = userInfo.watcher || 0;
        this.charId = userInfo.charId;
        this.ringId = userInfo.ring;
        this.sporeId = userInfo.spore;
        this.realCharacter = userInfo.realCharacter;
    }

    public isInTeam(): boolean {
        return this.teamId !== null && this.teamId !== 0;
    }

    public getScore(): number {
        let score = 0;

        for (const id in this.balls_) {
            score += this.balls_[id].getScore();
        }

        return score;
    }

    public canSplit(): boolean {
        for (const id in this.balls_) {
            const ball: BattleBallVo = this.balls_[id];

            if (ball !== null && ball.canSplit()) {
                return true;
            }
        }

        return false;
    }

    public canSpit(): boolean {
        for (const id in this.balls_) {
            const ball: BattleBallVo = this.balls_[id];

            if (ball !== null && ball.canSpit()) {
                return true;
            }
        }

        return false;
    }

    public getMaxBallScore(): number {
        let maxScore = 0;

        for (const id in this.balls_) {
            const ball: BattleBallVo = this.balls_[id];

            if (ball && ball.getScore() > maxScore) {
                maxScore = ball.getScore();
            }
        }

        return maxScore;
    }

    public getWeight(): number {
        return this.getScore();
    }

    public addBall(ball: BattleBallVo): void {
        if (ball.isValid()) {
            this.positionDirty = true;
            this.ballCount += 1;
            this.balls_[ball.id] = ball;
            ball.player = this;
        }
    }

    public removeBall(ball: BattleBallVo): void {
        if (!ball.isValid()) {
            CustomLogger.error("BattleBallVo.removeBall: ", "BattleBallVo.isValid: false");
            return;
        }

        this.balls_[ball.id] = null;
        delete this.balls_[ball.id];
        --this.ballCount;
        this.isRemoveBoom = ball.type === BallType.Boom;

        if (this.isRemoveBoom || ball.type === BallType.Bullet || ball.type === BallType.Lightning) {
            this.waitTime = BattleService.getInstance().clientTimeBase;
        }
    }

    public cameraScaleNeedWait(): boolean {
        if (this.waitTime === 0) {
            return false;
        }

        const value: number = BattleService.getInstance().clientTimeBase - this.waitTime;

        return 1 > value ? true : false;
    }

    public fixedUpdate(): void {
        this.positionDirty = true;
    }

    public setSurviveData(data: SurviveData): void {
        this.surviveData.initLife = data.initLife || 3;
        this.surviveData.currLife = data.currLife || 3;
        this.surviveData.killCount = data.killCount || 0;
        this.surviveData.watcher = data.watcher || 0;
    }

    public destroy(): void {
        this.reset();
    }

    public reset(): void {
        this.id = 0;
        this.x = 100;
        this.y = 100;
        this.sex = 0;
        this.uid = 0;
        this.name = "";
        this.headImage = "";
        this.country = 0;
        this.province = 0;
        this.balls_ = {};
        this.ballCount = 0;
        this.position = { x: 0, y: 0 };
        this.positionRect = { minX: 0, minY: 0, maxX: 10, maxY: 10 };
        this.positionDirty = true;
        this.isRole = false;
        this.surviveData = new SurviveData();
        this.cameraScale = Battle.InitViewScale;
        this.waitTime = 0;
        this.charId = 0;
        this.ringId = 0;
        this.sporeId = 0;
        this.realCharacter = 0;
    }

    private updateCameraScale(): void {
        if (0 >= this.ballCount) {
            return;
        }

        const offsetX: number = this.positionRect.maxX - this.positionRect.minX;
        const offsetY: number = this.positionRect.maxY - this.positionRect.minY;
        const ballSize: number = Battle.BallSizeParam;
        let n: number = Math.max(offsetX, offsetY) * .5 / ballSize;
        const r: number = 8 / Math.sqrt(n);
        const o: number = Math.max(r, 1.5);
        const a: number = n * o;
        const s: number = Math.max(a, 10);
        const l: number = Math.min(s, 100);
        let h: number = l * ballSize;
        h /= Battle.PanelHeight / 2;
        this.cameraScale = h;
    }

    private updatePosition(): void {
        if (!this.positionDirty || 0 >= this.ballCount) {
            return;
        }

        let minX: number = 1e6;
        let minY: number = 1e6;
        let maxX: number = 0;
        let maxY: number = 0;

        for (const id in this.balls_) {
            const ball: BattleBallVo = this.balls_[id];
            const pos: Vector2D = ball.getPosition();
            const currSize: number = ball.getCurrentSize();

            if ((pos.x + currSize) > maxX) {
                maxX = pos.x + currSize;
            }

            if ((pos.y + currSize) > maxY) {
                maxY = pos.y + currSize;
            }

            if (minX > (pos.x - currSize)) {
                minX = pos.x - currSize;
            }

            if (minY > (pos.y - currSize)) {
                minY = pos.y - currSize;
            }

            if (ball.type !== BallType.Bullet && ball.type !== BallType.Lightning) {
                this.position.x = (minX + maxX) / 2;
                this.position.y = (minY + maxY) / 2;
            }
        }

        this.positionRect.minX = minX;
        this.positionRect.minY = minY;
        this.positionRect.maxX = maxX;
        this.positionRect.maxY = maxY;
        this.positionDirty = false;
    }

    set id(value) {
        this.id_ = value;
    }

    get id() {
        return this.id_;
    }

    set x(value) {
        this.x_ = value;
    }

    get x() {
        return this.x_;
    }

    set y(value) {
        this.y_ = value;
    }

    get y() {
        return this.y_;
    }

    set sex(value) {
        this.sex_ = value;
    }

    get sex() {
        return this.sex_;
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

    set headImage(value) {
        this.headImage_ = value;
    }

    get headImage() {
        return this.headImage_;
    }

    set country(value) {
        this.country_ = value;
    }

    get country() {
        return this.country_;
    }

    set province(value) {
        this.province_ = value;
    }

    get province() {
        return this.province_;
    }

    set level(value) {
        this.level_ = value;
    }

    get level() {
        return this.level_;
    }

    set index(value) {
        this.index_ = value;
    }

    get index() {
        return this.index_;
    }

    set teamId(value) {
        this.teamId_ = value;
    }

    get teamId() {
        return this.teamId_;
    }

    set teamName(value) {
        this.teamName_ = value;
    }

    get teamName() {
        return this.teamName_;
    }

    set fullName(value) {
        this.fullName_ = value;
    }

    get fullName() {
        return this.fullName_;
    }

    set ballCount(value) {
        this.ballCount_ = value;
    }

    get ballCount() {
        return this.ballCount_;
    }

    set position(value) {
        this.position_ = value;
    }

    get position() {
        this.updatePosition();
        return this.position_;
    }

    set positionRect(value) {
        this.positionRect_ = value;
    }

    get positionRect() {
        return this.positionRect_;
    }

    set positionDirty(value) {
        this.positionDirty_ = value;
    }

    get positionDirty() {
        return this.positionDirty_;
    }

    set isRole(value) {
        this.isRole_ = value;
    }

    get isRole() {
        return this.isRole_;
    }

    set surviveData(value) {
        this.surviveData_ = value;
    }

    get surviveData() {
        return this.surviveData_;
    }

    set cameraScale(value) {
        this.cameraScale_ = value;
    }

    get cameraScale() {
        this.updateCameraScale();
        return this.cameraScale_;
    }

    set waitTime(value) {
        this.waitTime_ = value;
    }

    get waitTime() {
        return this.waitTime_;
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

    set sporeId(value) {
        this.sporeId_ = value;
    }

    get sporeId() {
        return this.sporeId_;
    }

    set realCharacter(value) {
        this.realCharacter_ = value;
    }

    get realCharacter() {
        return this.realCharacter_;
    }

    set isRemoveBoom(value) {
        this.isRemoveBoom_ = value;
    }

    get isRemoveBoom() {
        return this.isRemoveBoom_;
    }
}