class MainAssetLoader {
    private static instance_: MainAssetLoader;
    private loadingStateData_: LoadingStateData;
    private isHide_: boolean;

    constructor() {
        this.loadingStateData_ = new LoadingStateData();
    }

    public static getInstance(): MainAssetLoader {
        if (!this.instance_) {
            this.instance_ = new MainAssetLoader();
        }

        return this.instance_;
    }

    public loadGuest(): void {

    }

    public loadAll(isHide?: boolean): void {
        if (isHide === void 0 || isHide === null) {
            isHide = false;
        }

        this.isHide_ = isHide;
        this.loadingStateData_.stateName = "Home...";
        this.loadingStateData_.loaded = 10;

        if (!isHide) {
            ApplicationFacade.getInstance().sendNotification(ApplicationFacade.CHANGE_LOADING, this.loadingStateData_, UIConfig.SHOW_LOADING);
        }

        this.addEventListener();
        RES.loadGroup("home");
    }

    private addEventListener(): void {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupLoadCompleted, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onGroupProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    }

    private onGroupLoadCompleted(e: RES.ResourceEvent): void {
        if (e.groupName === "home") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupLoadCompleted, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onGroupProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);

            if (!this.isHide_) {
                ApplicationFacade.getInstance().sendNotification(CommonCommand.START_ENTER_GAME);
            }
        }
    }

    private onGroupLoadError(e: RES.ResourceEvent): void {
        console.warn("MainAssetLoader.onGroupLoadError: ", "Group " + e.groupName + " has failed to load.");
        this.onGroupLoadCompleted(e);
    }

    private onGroupProgress(e: RES.ResourceEvent): void {
        if (this.isHide_ || e.groupName === "home") {
            this.loadingStateData_.stateName = "进入游戏...";
            this.loadingStateData_.loaded = 20 + e.itemsLoaded / e.itemsTotal * 80;
            ApplicationFacade.getInstance().sendNotification(ApplicationFacade.CHANGE_LOADING, this.loadingStateData_, UIConfig.SHOW_LOADING);
        }
    }

    private onItemLoadError(e: RES.ResourceEvent): void {
        console.warn("MainAssetLoader.onItemLoadError: ", "Url " + e.resItem.url + " has failed to load.");
    }
}