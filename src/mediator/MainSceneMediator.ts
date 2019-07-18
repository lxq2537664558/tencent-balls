class MainSceneMediator extends Mediator {
    public static readonly NAME: string = "MainSceneMediator";
    
    private openSystemCache_: Dictionary;
    private playerVo_: PlayerVO;
    private passTime_: number;
    private preReqTime_: number;
    private ringItemCfg_: any;

    constructor(viewComponent: any) {
        super(MainSceneMediator.NAME, viewComponent);

        this.openSystemCache_ = new Dictionary();
    }

    public onRegister(): void {
        const playerProxy: PlayerProxy = <PlayerProxy>(this.facade.retrieveProxy(PlayerProxy.NAME));
        this.playerVo = playerProxy.playerVo;
        this.viewComponent.singleBtn_.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSingleBtn, this);
        this.passTime = 5;
        this.preReqTime = 0;
        egret.startTick(this.onTick, this);
    }

    private updateNetworkSignal(): void {

    }

    private onSingleBtn(e: egret.TouchEvent): void {
        console.log("MainSceneMediator.onSingleBtn");
        this.sendNotification(GameCommand.START_GAME, 101);
    }

    private onTick(timestamp: number): boolean {
        if (this.viewComponent.ring !== null && this.ringItemCfg !== null) {

        }

        if (this.viewComponent.spore !== null) {

        }

        this.passTime += timestamp;

        if ((this.passTime - this.preReqTime) >= 5) {
            this.preReqTime = this.passTime;
            this.updateNetworkSignal();
        }

        return false;
    }

    set playerVo(value) {
        this.playerVo_ = value;
    }

    get playerVo() {
        return this.playerVo_;
    }

    set passTime(value) {
        this.passTime_ = value;
    }

    get passTime() {
        return this.passTime_;
    }

    set preReqTime(value) {
        this.preReqTime_ = value;
    }

    get preReqTime() {
        return this.preReqTime_;
    }

    set ringItemCfg(value) {
        this.ringItemCfg_ = value;
    }

    get ringItemCfg() {
        return this.ringItemCfg_;
    }
}