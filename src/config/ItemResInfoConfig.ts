interface ItemResInfo {
    id: number;
    simpleRes: string;
    lowRes: string;
    highRes: string;
    rotate: number;
    lowFace: string;
    highFace: string;
    isIdleAnimation: boolean;
    idleAnimationInterval: number;
    idleAnimationDuration: number;
}

class ItemResInfoConfig {
    private rawJson_: any;
    private itemMap_: { [key: number]: ItemResInfo };

    constructor() {
        this.rawJson_ = RES.getRes("res_item_res_json");
    }

    public getItemResConfig(id: number): ItemResInfo {
        if (!this.itemMap_[id]) {
            const rawConfig: any = this.rawJson_[id.toString()];
            const config: ItemResInfo = {
                id: +rawConfig.id,
                simpleRes: rawConfig.simple_res,
                lowRes: rawConfig.low_res,
                highRes: rawConfig.high_res,
                rotate: +rawConfig.rotate,
                lowFace: rawConfig.low_face,
                highFace: rawConfig.high_face,
                isIdleAnimation: (+rawConfig.is_idle_animation) !== 0,
                idleAnimationInterval: +rawConfig.idle_animation_interval,
                idleAnimationDuration: +rawConfig.idle_animation_duration,
            };
            this.itemMap_[config.id] = config;
        }

        return this.itemMap_[id];
    }
}