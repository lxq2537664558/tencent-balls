declare class wx {
    public static onShareAppMessage(callback: Function);
    public static getLaunchOptionsSync(): any;
    public static shareAppMessage(object: any): void;
    public static createUserInfoButton(object: any): any;
    public static createGameClubButton(object: any): void;
    public static getSystemInfo(object: any): void;
    public static showShareMenu(object: any): void;
    public static onShareAppMessage(callback: Function): void;
    public static getSetting(object: any): void;
    public static showModal(object: any): void;
    public static onHide(callback: Function): void;
    public static onShow(callback: Function): void;
    public static getUserInfo(object: any): void;
    public static showLoading(object: any): void;
    public static openTencentGameContract(): void;
    public static openTencentPrivacyContract(): void;
    public static login(object: any): void;
}