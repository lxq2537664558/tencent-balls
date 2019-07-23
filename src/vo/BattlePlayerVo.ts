class BattlePlayerVo {
    private uid_: string;
    private name_: string;
    private country_: number;
    private province_: number;
    private level_: number;
    private relationFlag_: number;
    private index_: number;
    private teamId_: string;
    private teamName_: string;
    private headImg_: string;
    private charId_: number;
    private tailId_: number;
    private ringId_: number;
    private sporeId_: number;
    private realCharId_: number;
    private sex_: number;
    private fullName_: string;
    private surviveData_: SurviveDataVo;
    private ballMap_: { [key: number]: BattleBallVo };
    private ballCount_: number;
    private position_: Vector2D;
    private positionRect_: BattleRect;
    private positionDirty_: boolean;
    private isRole_: boolean;
    private cameraScale_: number;
    private waitTime_: number;

    constructor(userInfo: any) {
        this.surviveData = new SurviveDataVo();
        this.position = new Vector2D();
        this.positionRect = new BattleRect(0, 0, 10, 10);
        this.reset();
        this.init(userInfo);
    }

    public init(userInfo: any): void {
        this.uid = userInfo.uid;
        this.name = userInfo.name;
        this.country = userInfo.country;
        this.province = userInfo.province;
        this.level = userInfo.level;
        this.relationFlag = userInfo.relationFlag;
        this.index = userInfo.index + 1;
        this.teamId = userInfo.teamId;
        this.teamName = userInfo.teamName;
        this.fullName = this.name;
        this.headImg = userInfo.headImg;
        this.sex = userInfo.sex;
        this.initLife = userInfo.initLife || 3;
        this.currLife = userInfo.currLife || 3;
        this.killCount = userInfo.killCount || 0;
        this.watcher = userInfo.watcher || 0;
        this.charId = userInfo.charId;
        this.ringId = userInfo.ringId;
        this.sporeId = userInfo.sporeId;
        this.realCharId = userInfo.realCharId;

        if (this.isInTeam()) {
            this.fullName = this.teamName + "|" + this.name;
        }
    }

    public isInTeam(): boolean {
        return this.teamId !== null && this.teamId !== void 0 && this.teamId !== "" && this.teamId !== "0";
    }

    public reset(): void {
        this.uid = "";
        this.name = "";
        this.country = 0;
        this.province = 0;
        this.level = 0;
        this.relationFlag = 0;
        this.index = 0;
        this.teamId = "";
        this.teamName = "";
        this.fullName = this.name;
        this.headImg = "";
        this.sex = 0;
        this.charId = 0;
        this.ringId = 0;
        this.sporeId = 0;
        this.realCharId = 0;
        this.surviveData.reset();
        this.ballMap_ = {};
        this.ballCount = 0;
        this.position.reset();
        this.positionRect.init(0, 0, 10, 10);
        this.positionDirty = true;
        this.isRole = false;
        this.cameraScale = Battle.InitViewScale;
        this.waitTime = 0;
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

    set relationFlag(value) {
        this.relationFlag_ = value;
    }

    get relationFlag() {
        return this.relationFlag_;
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

    set initLife(value) {
        this.surviveData.initLife = value;
    }

    get initLife() {
        return this.surviveData.initLife;
    }

    set currLife(value) {
        this.surviveData.currLife = value;
    }

    get currLife() {
        return this.surviveData.currLife;
    }

    set killCount(value) {
        this.surviveData.killCount = value;
    }

    get killCount() {
        return this.surviveData.killCount;
    }

    set teamName(value) {
        this.teamName_ = value;
    }

    get teamName() {
        return this.teamName_;
    }

    set headImg(value) {
        this.headImg_ = value;
    }

    get headImg() {
        return this.headImg_;
    }

    set charId(value) {
        this.charId_ = value;
    }

    get charId() {
        return this.charId_;
    }

    set tailId(value) {
        this.tailId_ = value;
    }

    get tailId() {
        return this.tailId_;
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

    set watcher(value) {
        this.surviveData.watcher = value;
    }

    get watcher() {
        return this.surviveData.watcher;
    }

    set realCharId(value) {
        this.realCharId_ = value;
    }

    get realCharId() {
        return this.realCharId_;
    }

    set sex(value) {
        this.sex_ = value;
    }

    get sex() {
        return this.sex_;
    }

    set fullName(value) {
        this.fullName_ = value;
    }

    get fullName() {
        return this.fullName_;
    }

    set surviveData(value) {
        this.surviveData_ = value;
    }

    get surviveData() {
        return this.surviveData_;
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

    set cameraScale(value) {
        this.cameraScale_ = value;
    }

    get cameraScale() {
        return this.cameraScale_;
    }

    set waitTime(value) {
        this.waitTime_ = value;
    }

    get waitTime() {
        return this.waitTime_;
    }
}