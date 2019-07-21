class GuideService {
    public static instance_: GuideService;
    public static readonly ReqGuideMsgInterval: number = 2;

    private playerVo_: PlayerVO;
    private actionHandlers_: {[key: number]: any};
    private guideDebug_: boolean;
    private returnBack_: boolean;
    private targetIds_: Dictionary;
    private targetIdsToPanel_: Dictionary;
    private currStep_: number;
    private isMatching_: boolean;
    private delayResumeTime_: number;
    private reqResumeBattleTime_: number;
    private preReqGuideMsgTime_: number;
    private guideMsgList_: Dictionary;
    private lastTimestamp_: number;
    private timer_: egret.Timer;

    constructor() {
        this.playerVo = null;
        this.actionHandlers_ = {};
        this.guideDebug = false;
        this.returnBack = false;
        this.targetIds_ = new Dictionary();
        this.targetIdsToPanel_ = new Dictionary();
        this.currStep = 0;
        this.isMatching = false;
        this.reqResumeBattleTime = 0;
        this.preReqGuideMsgTime = 0;
        this.guideMsgList_ = new Dictionary();
    }

    public static getInstance(): GuideService {
        if (!this.instance_) {
            this.instance_ = new GuideService();
        }

        return this.instance_;
    }

    public init(): void {
        this.lastTimestamp = 0;
        this.timer_ = new egret.Timer(0, 0);
        this.timer_.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
        this.timer_.start();
    }

    public initWinIds(): void {
        const playerProxy: PlayerProxy = <PlayerProxy>(ApplicationFacade.getInstance().retrieveProxy(PlayerProxy.NAME));
        this.playerVo = playerProxy.playerVo;
    }

    public hasModuleOver(id: number): boolean {
        const playerProxy: PlayerProxy = <PlayerProxy>(ApplicationFacade.getInstance().retrieveProxy(PlayerProxy.NAME));
        const playerVo: PlayerVO = playerProxy.playerVo;

        if (!playerProxy) {
            return false;
        }

        if (playerVo.overModule === "") {
            return false;
        }

        const modules: Array<string> = playerVo.overModule.split(",");

        for (let i = 0, len = modules.length; i < len; ++i) {
            if (Number(modules[i]) === id) {
                return true;
            }
        }

        return false;
    }

    public getGuestRewardConfig(): Array<GuideRewardItemInfo> {
        const guideRewardConfig: GuideRewardInfo = ConfigManager.getInstance().guideInfo.getGuideRewardConfig(1);

        if (guideRewardConfig) {
            return guideRewardConfig.rewardItems_;
        }

        return [];
    }

    public getGuideWeakConfig(id: number): GuideWeakInfo {
        const guideWeakConfig: GuideWeakInfo = ConfigManager.getInstance().guideInfo.getGuideWeakConfig(id);

        if (guideWeakConfig) {
            return guideWeakConfig;
        }

        console.log("GuideService.getGuideWeakConfig: ", "not found GuideWeakInfo with id " + id.toString());

        return null;
    }

    public getGuideServerConfig(id: number): GuideServerInfo {
        const guideServerConfig: GuideServerInfo = ConfigManager.getInstance().guideInfo.getGuideServerConfig(id);

        if (guideServerConfig) {
            return guideServerConfig;
        }

        console.log("GuideService.getGuideWeakConfig: ", "not found GuideServerInfo with id " + id.toString());

        return null;
    }

    private onUpdate(e: egret.Timer): boolean {
        return false;
    }

    set playerVo(value) {
        this.playerVo_ = value;
    }

    get playerVo() {
        return this.playerVo_;
    }

    set guideDebug(value) {
        this.guideDebug_ = value;
    }

    get guideDebug() {
        return this.guideDebug_;
    }

    set returnBack(value) {
        this.returnBack_ = value;
    }

    get returnBack() {
        return this.returnBack_;
    }

    set currStep(value) {
        this.currStep_ = value;
    }

    get currStep() {
        return this.currStep_;
    }

    set isMatching(value) {
        this.isMatching_ = value;

        if (this.isMatching) {
            const guideProxy: GuideProxy = <GuideProxy>(ApplicationFacade.getInstance().retrieveProxy(GuideProxy.NAME));
            
        }
    }

    get isMatching() {
        return this.isMatching_;
    }

    set delayResumeTime(value) {
        this.delayResumeTime_ = value;
    }

    get delayResumeTime() {
        return this.delayResumeTime_;
    }

    set reqResumeBattleTime(value) {
        this.reqResumeBattleTime_ = value;
    }

    get reqResumeBattleTime() {
        return this.reqResumeBattleTime_;
    }

    set preReqGuideMsgTime(value) {
        this.preReqGuideMsgTime_ = value;
    }

    get preReqGuideMsgTime() {
        return this.preReqGuideMsgTime_;
    }

    set lastTimestamp(value) {
        this.lastTimestamp_ = value;
    }

    get lastTimestamp() {
        return this.lastTimestamp_;
    }
}