class MatchProxy extends Proxy {
    public static NAME: string = "MatchProxy";
    private isMatching_: boolean;
    private gameType_: number;

    constructor() {
        super();

        this.isMatching = false;
        this.gameType = 0;
    }

    public requestStartMatch(id: number): void {
        this.sendNotification(ApplicationFacade.CHANGE_LOADING, LoadingStateData.LOW_NETWORK, UIConfig.SHOW_LOADING);
    }

    public static onStartMatchResponse(): void {

    }

    public static onStartMatchNotify(): void {

    }

    public static onStopMatchResponse(): void {

    }

    public static onStopMatchNotify(): void {
    }

    set isMatching(value) {
        this.isMatching_ = value;
    }

    get isMatching() {
        return this.isMatching_;
    }

    set gameType(value) {
        this.gameType_ = value;
    }

    get gameType() {
        return this.gameType_;
    }
}