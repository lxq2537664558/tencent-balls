interface ServerInfo {
    name: string;
    hallHost: string;
    battleHost: string;
    area: number;
    loginUrl: string;
}

class ServerInfoConfig {
    private rawJson_: any;
    private serverMap_: { [key: string]: ServerInfo };

    constructor() {
        this.rawJson_ = RES.getRes("res_server_info_json");
        this.serverMap_ = {};
    }

    public getServerInfoConfig(env: string): ServerInfo {
        if (!this.serverMap_[env]) {
            const rawConfig: any = this.rawJson_[env];
            
            if (!rawConfig) {
                return null;
            }

            const config: ServerInfo = {
                name: rawConfig.name,
                hallHost: rawConfig.hall_host,
                battleHost: rawConfig.battle_host,
                area: +rawConfig.area,
                loginUrl: rawConfig.login_url,
            }
            this.serverMap_[env] = config;
        }

        return this.serverMap_[env];
    }
}