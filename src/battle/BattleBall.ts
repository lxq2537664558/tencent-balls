class BattleBall {
    private isShowBallGo_: boolean;
    private isShowBallChange_: boolean;
    private isInScreen_: boolean;
    private ui_: any;
    private isGo_: boolean;
    private name_: string;
    private score_: number;
    private city_: string;
    private ringId_: number;
    private tailId_: number;
    private tailPath_: string;
    private characterLow_: number;
    private characterHigh_: number;
    private charAnim_: number;
    private isShowCharEffect_: boolean;
    private isShowProtect_: boolean;
    private forwardRad_: number;
    private isShowForward_: boolean;
    private position_: Vector2D;
    private isCharRotate_: boolean;
    private isChangeRotation_: boolean;
    private isPlayHurt_: boolean;
    private isTopZ_: boolean;
    private isShowSelfBall_: boolean;
    private isLastRunning_: boolean;
    private ballVo_: BattleBallVo;
    private id_: number;
    private uid_: number;
    private isRole_: boolean;
    private size_: number;

    constructor() {
    }

    public initVo(ballVo: BattleBallVo): void {
        this.reset();
        this.ballVo = ballVo;
        this.id = ballVo.id;
        this.uid = ballVo.uid;
        this.isRole = BattleService.getInstance().isRoleBall(ballVo);
    }

    private reset(): void {
        this.isInScreen =  false;
        this.ballVo = null;
        this.id = null;
        this.uid = 0;
        this.ui = null;
        this.isGo = false;
        this.isRole = false;
        this.name = "";
        this.size = 1;
        this.score = 1;
        this.city = "";
        this.ringId = 0;
        this.tailId = 0;
        this.tailPath = "";
        this.characterLow = 0;
        this.characterHigh = 0;
        this.charAnim = 0;
        this.isShowCharEffect = false;
        this.isShowProtect = false;
        this.forwardRad = 100;
        this.isShowForward = false;
        this.position = {x:-1e5,y:1e5};
        this.isCharRotate = false;
        this.isChangeRotation = false;
        this.isPlayHurt = false;
        this.isTopZ = false;
    }

    set isShowBallGo(value) {
        this.isShowBallGo_ = value;
    }

    get isShowBallGo() {
        return this.isShowBallGo_;
    }

    set isShowBallChange(value) {
        this.isShowBallChange_ = value;
    }

    get isShowBallChange() {
        return this.isShowBallChange_;
    }

    set isInScreen(value) {
        this.isInScreen_ = value;
    }

    get isInScreen() {
        return this.isInScreen_;
    }

    set ui(value) {
        this.ui_ = value;
    }

    get ui() {
        return this.ui_;
    }

    set isGo(value) {
        this.isGo_ = value;
    }

    get isGo() {
        return this.isGo_;
    }

    set name(value) {
        this.name_ = value;
    }

    get name() {
        return this.name_;
    }

    set score(value) {
        this.score_ = value;
    }

    get score() {
        return this.score_;
    }

    set city(value) {
        this.city_ = value;
    }

    get city() {
        return this.city_;
    }

    set ringId(value) {
        this.ringId_ = value;
    }

    get ringId() {
        return this.ringId_;
    }

    set tailId(value) {
        this.tailId_ = value;
    }

    get tailId() {
        return this.tailId_;
    }

    set tailPath(value) {
        this.tailPath_ = value;
    }

    get tailPath() {
        return this.tailPath_;
    }

    set characterLow(value) {
        this.characterLow_ = value;
    }

    get characterLow() {
        return this.characterLow_;
    }

    set characterHigh(value) {
        this.characterHigh_ = value;
    }

    get characterHigh() {
        return this.characterHigh_;
    }

    set charAnim(value) {
        this.charAnim_ = value;
    }

    get charAnim() {
        return this.charAnim_;
    }

    set isShowCharEffect(value) {
        this.isShowCharEffect_ = value;
    }

    get isShowCharEffect() {
        return this.isShowCharEffect_;
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

    set isShowForward(value) {
        this.isShowForward_ = value;
    }

    get isShowForward() {
        return this.isShowForward_;
    }

    set position(value) {
        this.position_ = value;
    }

    get position() {
        return this.position_;
    }

    set isCharRotate(value) {
        this.isCharRotate_ = value;
    }

    get isCharRotate() {
        return this.isCharRotate_;
    }

    set isChangeRotation(value) {
        this.isChangeRotation_ = value;
    }

    get isChangeRotation() {
        return this.isChangeRotation_;
    }

    set isPlayHurt(value) {
        this.isPlayHurt_ = value;
    }

    get isPlayHurt() {
        return this.isPlayHurt_;
    }

    set isTopZ(value) {
        this.isTopZ_ = value;
    }

    get isTopZ() {
        return this.isTopZ_;
    }

    set isShowSelfBall(value) {
        this.isShowSelfBall_ = value;
    }

    get isShowSelfBall() {
        return this.isShowSelfBall_;
    }

    set isLastRunning(value) {
        this.isLastRunning_ = value;
    }

    get isLastRunning() {
        return this.isLastRunning_;
    }

    set ballVo(value) {
        this.ballVo_ = value;
    }

    get ballVo() {
        return this.ballVo_;
    }

    set id(value) {
        this.id_ = value;
    }

    get id() {
        return this.id_;
    }

    set uid(value) {
        this.uid_ = value;
    }

    get uid() {
        return this.uid_;
    }

    set isRole(value) {
        this.isRole_ = value;
    }

    get isRole() {
        return this.isRole_;
    }

    set size(value) {
        this.size_ = value;
    }

    get size() {
        return this.size_;
    }
}