class SocketConfig {
    private static instance_: SocketConfig;

    private static ServerList: Object = {
        dev: {
            name: "开发服务器",
            hallHost: "wss://obg-1xprd62z-1.wxlagame.com",
            area: 901,
            wxLogin: "https://test.agent.hlxqh5.qq.com/901/",
        },
    };

    private hostBusId_: string;
    private battleBusId_: string;
    private hallHost_: string;
    private battleHost_: string;
    private area_: string;
    private wxLoginUrl_: string;
    private serverName_: string;

    constructor() {
        this.hostBusId = "";
        this.battleBusId = "";
        this.init();
    }

    public static getInstance(): SocketConfig {
        if (!this.instance_) {
            this.instance_ = new SocketConfig();
        }

        return this.instance_;
    }

    private init(): void {
        const env: string = GameEnvInfo.getInstance().env;
        const serverList: Object = SocketConfig.ServerList;

        if (env && env.length > 0 && serverList) {
            this.hallHost = SocketConfig.ServerList[env].hallHost;
            this.battleHost = SocketConfig.ServerList[env].battleHost;
            this.area = SocketConfig.ServerList[env].area;
            this.wxLoginUrl = SocketConfig.ServerList[env].wxLoginUrl;
            this.serverName = SocketConfig.ServerList[env].serverName;
        }
        else {
            egret.error("SocketConfig.init:", "init error.");
        }
    }

    set hostBusId(value) {
        this.hostBusId_ = value;
    }

    get hostBusId() {
        return this.hostBusId_;
    }

    set battleBusId(value) {
        this.battleBusId_ = value;
    }

    get battleBusId() {
        return this.battleBusId_;
    }    

    set hallHost(value) {
        this.hallHost_ = value;
    }

    get hallHost() {
        return this.hallHost_;
    }

    set battleHost(value) {
        this.battleHost_ = value;
    }

    get battleHost() {
        return this.battleHost_;
    }

    set area(value) {
        this.area_ = value;
    }    

    get area() {
        return this.area_;
    }

    set wxLoginUrl(value) {
        this.wxLoginUrl_ = value;
    }

    get wxLoginUrl() {
        return this.wxLoginUrl_;
    }

    set serverName(value) {
        this.serverName_ = value;
    }

    get serverName() {
        return this.serverName_;
    }

    get hallSocket() {
        if (this.hostBusId.length > 0) {
            return this.hallHost + "/" + this.area + "/hall/" + this.hostBusId;
        }

        return this.hallHost + "/" + this.area + "/hall";
    }

    get battleSocket() {
        return this.battleHost + "/" + this.area + "/hall/" + this.battleBusId;
    }

    get httpsWxLogin() {
        return this.wxLoginUrl + "wxmp/login";
    } 

    get httpsServiceState() {
        return this.wxLoginUrl + "status";
    }
}