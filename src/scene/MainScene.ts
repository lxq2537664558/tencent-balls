class MainScene extends SceneBase {
    public static readonly NAME: string = "MainScene";
    public static firstEnter: boolean = true;

    private enterOnce_: boolean;
    private topMenu_: Array<any>;
    private rightMenu_: Array<any>;
    private bottomMenu_: Array<any>;
    private rightSideMenuList_: eui.List;
    private bottomSideMenuList_: eui.List;
    private rankEntryGroup_: eui.Group;
    private rankBoard_: eui.Group;

    constructor() {
        super(MainScene.NAME);

        this.addCustomEventListener(this, egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.enterOnce = false;
        this.topMenu_ = [];
        this.rightMenu_ = [];
        this.bottomMenu_ = [];

        this.addEventListener(eui.UIEvent.COMPLETE, this.onLoadUICompleted, this);
        this.skinName = "resource/custom_skins/MainSceneSkin.exml";
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.initMenuData();
    }

    public enterScene(): void {
        const self = this;
        super.enterScene();
        // ApplicationFacade.getInstance().sendNotification("OnHallMainSystemShow");
        ApplicationFacade.getInstance().registerMediator(new MainSceneMediator(this));

        if (MainScene.firstEnter) {
            setTimeout(() => {
                MainScene.firstEnter = false;
                self.refreshMainMenu();
            }, 3000);
        }
    }

    public leaveScene(): void {
        super.leaveScene();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        ApplicationFacade.getInstance().removeMediator(MainSceneMediator.NAME);
    }

    public refreshMainMenu(): void {
        const rightSideMenu: eui.ArrayCollection = <eui.ArrayCollection>(this.rightSideMenuList_.dataProvider);
        rightSideMenu.refresh();
        const bottomSideMenu: eui.ArrayCollection = <eui.ArrayCollection>(this.bottomSideMenuList_.dataProvider);
        bottomSideMenu.refresh();
    }

    private initMenuData(): void {
        this.initRightMenu();
        this.initBottomMenu();
    }

    private initRightMenu(): void {
        const active: any = new FirstClassMenuData();
        active.id = FirstClassMenuType.Activity;
        active.iconName = "home_btn_huodng_png";
        this.rightMenu_.push(active);
        const invite: any = new FirstClassMenuData();
        invite.id = FirstClassMenuType.Invite;
        invite.iconName = "home_btn_yaoqing_png";
        this.rightMenu_.push(invite);
    }

    private initBottomMenu(): void {
        const shop: any = new FirstClassMenuData();
        shop.id = FirstClassMenuType.Shop;
        shop.iconName = "home_btn_shangdian_png";
        this.bottomMenu_.push(shop);
        const rank: any = new FirstClassMenuData();
        rank.id = FirstClassMenuType.Rank;
        rank.iconName = "home_btn_paihang_png";
        this.bottomMenu_.push(rank);
    }

    private onLoadUICompleted(e: eui.UIEvent): void {
        console.log("MainScene.onLoadUICompleted");
        const url: string = URLConst.ASYNC_ASSETS_URL + "NoAtlas/home_BG.jpg";
        ResourceUtils.getResByUrlRelative(ResourceUtils.getResUrl(url), this.onLoadBackgroundCompleted, this, RES.ResourceItem.TYPE_IMAGE);
        this.removeEventListener(eui.UIEvent.COMPLETE, this.onLoadUICompleted, this);
        this.rightSideMenuList_.itemRenderer = FirstClassMenuRenderer;
        this.rightSideMenuList_.dataProvider = new eui.ArrayCollection(this.rightMenu_);
        this.bottomSideMenuList_.itemRenderer = FirstClassMenuRenderer;
        this.bottomSideMenuList_.dataProvider = new eui.ArrayCollection(this.bottomMenu_);

        if (wxsdk.enabled) {
            this.rankEntryGroup_.addChild(new RankEntryPanel());
            this.rankBoard_.visible = true;
        }
        else {
            this.rankBoard_.visible = false;
        }
    }

    private onEnterFrame(e: egret.Event): void {
        if (!this.enterOnce) {
            this.enterOnce = true;
        }
    }

    private onAddToStage(e: egret.Event): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onLoadBackgroundCompleted(texture: egret.Texture): void {

    }

    set enterOnce(value) {
        this.enterOnce_ = value;
    }

    get enterOnce() {
        return this.enterOnce_;
    }
}