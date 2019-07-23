interface MeleeInfo {
    id: number;
    modeId: number;
    itemReward: Array<number>;
}

class MeleeInfoConfig {
    private rawJson_: any;
    private meleeMap_: { [key: number]: MeleeInfo };

    constructor() {
        this.rawJson_ = RES.getRes("res_melee_mode_json").Melee_Mode;
    }

    public getMeleeInfoConfig(id: number): MeleeInfo {
        if (!this.meleeMap_[id]) {
            const rawConfig: any = this.rawJson_[id.toString()];

            if (!rawConfig) {
                return null;
            }

            const itemReward: Array<number> = [];
            const itemRewardConfig: Array<string> = rawConfig.items.splite(";");

            for (let i = 0, len = itemRewardConfig.length; i < len; ++i) {
                itemReward.push(+itemRewardConfig[i]);
            }

            const config: MeleeInfo = {
                id: +rawConfig.id,
                modeId: +rawConfig.mode_id,
                itemReward: itemReward,
            }
        }

        return this.meleeMap_[id];
    }
}