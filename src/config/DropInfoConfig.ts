interface DropInfo {
    id: number;
    poolId: number;
    itemId: number;
    itemNum: number;
}

class DropInfoConfig {
    private rawJson_: any;

    private dropMap_: {[key: number]: DropInfo};

    constructor() {
        this.rawJson_ = RES.getRes("res_drop_json").DropTable;
        this.dropMap_ = {};
    }

    public getDropInfoConfig(id: number): DropInfo {
        if (!this.dropMap_[id]) {
            const rawConfig: any = this.rawJson_[id.toString()];

            if (!rawConfig) {
                return null;
            }

            const config: DropInfo = {
                id: +rawConfig.id,
                poolId: +rawConfig.pool_id,
                itemId: +rawConfig.item_id,
                itemNum: +rawConfig.item_num,
            }

            this.dropMap_[config.id] = config;
        }

        return this.dropMap_[id];
    }
}