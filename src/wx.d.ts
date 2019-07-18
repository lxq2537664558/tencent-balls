declare class wx {
    static getLaunchOptionsSync(): LaunchOptions;
    static getSettings(object: Object): void;
    static showModal(object: Object): void;
    static login(object: Object): void;
    static getUserInfo(object: Object): void;
    static showLoading(object: ShowLoadingOptions): void;
    static hideLoading(object: HideLoadingOptions): void;
}

declare class LaunchOptions {
    path: string;
    scene: number;
    query: Object;
    shareTicket: string;
    referrerInfo: ReferrerInfo;
}

declare class ReferrerInfo {
    appId: string;
    extraData: Object;
}

declare class ShowLoadingOptions {
    title: string;
    mask?: boolean;
    success?: Function;
    fail?: Function;
    complete?: Function;
}

declare class HideLoadingOptions {
    success?: Function;
    fail?: Function;
    complete?: Function;
}

// declare class AuthSetting {

// }

// declare class UserInfo {
//     nickName: string;
//     avatarUrl: string;
//     gender: number;
//     country: string;
//     province: string;
//     city: string;
//     language: string;
// }