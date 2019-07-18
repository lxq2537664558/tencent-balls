class PlayerProxy extends Proxy {
    public static NAME: string = "PlayerProxy";

    private propertyChangeHandler_: Dictionary;
    private playerVo_: PlayerVO;

    constructor() {
        super();

        this.playerVo_ = new PlayerVO();
    }

    private initHandlers(): void {
        // this.propertyChangeHandler_.add(PlayerProperty.SelectCharacterSkin, this.onSelectCharcaterSkin);
        // this.propertyChangeHandler_.add(PlayerProperty.ShareFlag, this.onShareFlag);
        // this.propertyChangeHandler_.add(PlayerProperty.AchievePoint, this.onAchievePoint);
        // this.propertyChangeHandler_.add(PlayerProperty.SignNum, this.onSignNum);
        // this.propertyChangeHandler_.add(PlayerProperty.LastSignTime, this.onLastSignTime);
        // this.propertyChangeHandler_.add(PlayerProperty.SelectSpore, this.onSelectSpore);
        // this.propertyChangeHandler_.add(PlayerProperty.SelectHalo, this.onSelectHalo);
        // this.propertyChangeHandler_.add(PlayerProperty.LevelExp, this.onLevelExp);
        // this.propertyChangeHandler_.add(PlayerProperty.ShopLevel, this.onShopLevel);
        // this.propertyChangeHandler_.add(PlayerProperty.UserLevel, this.onUserLevel);
    }

    private onPropertyChanged(): void {
    }

    private onSelectCharcaterSkin(id: number): void {
    }

    private onShareFlag(id: number): void {
    }

    private onAchievePoint(point: number): void {
    }

    private onSignNum(count: number): void {
    }

    private onLastSignTime(timestamp: number): void {
    }

    private onSelectSpore(id: number): void {
    }

    private onSelectHalo(id: number): void {
    }

    private onLevelExp(exp: number): void {
    }

    private onShopLevel(level: number): void {
    }

    private onUserLevel(level: number): void {
    }

    set playerVo(value) {
        this.playerVo_ = value;
    }

    get playerVo() {
        return this.playerVo_;
    }

    get openId() {
        return 0;
    }

    get accessToken() {
        return
    }
}