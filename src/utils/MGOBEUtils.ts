class MGOBEUtils {
    private static instance_: MGOBEUtils;
    public static GAME_ID: string = "obg-1xprd62z";
    public static SECRET_KEY: string = "1cc06502968c6ef53c6dce24fa9749d15902cd02";
    public static DOMAIN:string = "obg-1xprd62z-1.wxlagame.com";
    public static MAX_RECONNECT_TIMES: number = 5;
    public static RECONNECT_INTERVAL: number = 1000;
    public static RESEND_INTERVAL: number = 1000;
    public static RESEND_TIMEOUT: number = 10000;
    public static ErrCode: Object = MGOBE.ErrCode;
    public static ENUM: Object = MGOBE.ENUM;

    private gameInfo_: MGOBEGameInfo;
    private gameConfig_: MGOBEGameConfig;
    private room_: MGOBE.Room;

    constructor() {
    }

    public static getInstance(): MGOBEUtils {
        if (!this.instance_) {
            this.instance_ = new MGOBEUtils();
        }

        return this.instance_;
    }

    public init(): void {
        if (this.gameConfig_ && this.gameInfo_) {
            return;
        }

        this.gameInfo_ = new MGOBEGameInfo();
        this.gameInfo_.openId = "";
        this.gameInfo_.gameId = MGOBEUtils.GAME_ID;
        this.gameInfo_.secretKey = MGOBEUtils.SECRET_KEY;
        this.gameConfig_ = new MGOBEGameConfig();
        this.gameConfig_.url = MGOBEUtils.DOMAIN;
        this.gameConfig_.reconnectMaxTimes = MGOBEUtils.MAX_RECONNECT_TIMES;
        this.gameConfig_.reconnectInterval = MGOBEUtils.RECONNECT_INTERVAL;
        this.gameConfig_.resendInterval = MGOBEUtils.RESEND_INTERVAL;
        this.gameConfig_.resendTimeout = MGOBEUtils.RESEND_TIMEOUT;
        this.gameConfig_.autoRequestFrame = true;

        const self = this;

        MGOBE.Listener.init(this.gameInfo_, this.gameConfig_, e => {
            if (e && e.code === 0) {
                self.room = new MGOBE.Room();
                MGOBE.Listener.add(self.room);
            }
        });
    }

    set room(value) {
        this.room_ = value;
    }

    get room() {
        return this.room_;
    }
}

declare class MGOBEGameInfo {
    openId: string;
    gameId: string;
    secretKey: string;
}

declare class MGOBEGameConfig {
    url: string;
    reconnectMaxTimes: number;
    reconnectInterval: number;
    resendInterval: number;
    resendTimeout: number;
    autoRequestFrame: boolean;
}