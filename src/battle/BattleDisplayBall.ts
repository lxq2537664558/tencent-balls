class BattleDisplayBall extends egret.DisplayObject {
    public static readonly CHAR_URL: boolean = true;

    private isTopZ_: boolean;
    private isShowHigh_: boolean;
    private isProtect_: boolean;
    private forwardRad_: number;
    private targetForwardRad_: number;
    private nowSize_: number;
    private targetSize_: number;
    private depth_: number;
    private isRole_: boolean;
    private underCharR_: number;
    private inviteSize_: boolean;
    private shape_: any;

    constructor() {
        super();
    }

    set isTopZ(value) {
        this.isTopZ_ = value;
    }

    get isTopZ() {
        return this.isTopZ_;
    }

    set isShowHigh(value) {
        this.isShowHigh_ = value;
    }

    get isShowHigh() {
        return this.isShowHigh_;
    }

    set isProtect(value) {
        this.isProtect_ = value;
    }

    get isProtect() {
        return this.isProtect_;
    }

    set forwardRad(value) {
        this.forwardRad_ = value;
    }

    get forwardRad() {
        return this.forwardRad_;
    }

    set targetForwardRad(value) {
        this.targetForwardRad_ = value;
    }

    get targetForwardRad() {
        return this.targetForwardRad_;
    }

    set nowSize(value) {
        this.nowSize_ = value;
    }

    get nowSize() {
        return this.nowSize_;
    }

    set targetSize(value) {
        this.targetSize_ = value;
    }

    get targetSize() {
        return this.targetSize_;
    }

    set depth(value) {
        this.depth_ = value;
    }

    get depth() {
        return this.depth_;
    }

    set isRole(value) {
        this.isRole_ = value;
    }

    get isRole() {
        return this.isRole_;
    }

    set underCharR(value) {
        this.underCharR_ = value;
    }

    get underCharR() {
        return this.underCharR_;
    }

    set inviteSize(value) {
        this.inviteSize_ = value;
    }

    get inviteSize() {
        return this.inviteSize_;
    }

    set shape(value) {
        this.shape_ = value;
    }

    get shape() {
        return this.shape_;
    }
}