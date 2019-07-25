interface ItemAttrInfo {
    id: number;
    name: string;
    desc: string;
    icon: string;
    starLevel: number;
    starMaxLevel: number;
    quality: number;
    qualityMax: number;
    resource: string;
    resourceId: number;
    type: number;
    subType: number;
    useEffectParam: number;
    directUse: number;
    overlay: number;
    price: number;
    getWay: string;
    baseId: number;
    compoundId: number;
    evolutionId: number;
    isLucky: boolean;
    checkId: number;
    limitTime: number;
}

class ItemAttrInfoConfig {
    private rawJson_: any;
    private itemAttrInfoMap_: { [key: number]: ItemAttrInfo };

    constructor() {
        this.rawJson_ = RES.getRes("res_item_attr_json").ResItemAttr;
        this.itemAttrInfoMap_ = {};
    }

    public getItemAttrInfo(id: number): ItemAttrInfo {
        if (!this.itemAttrInfoMap_[id]) {
            const rawConfig: any = this.rawJson_[id.toString()];
            const config: ItemAttrInfo = {
                id: +rawConfig.id,
                name: rawConfig.name,
                desc: rawConfig.desc,
                icon: rawConfig.icon,
                starLevel: +rawConfig.star_level,
                starMaxLevel: +rawConfig.star_maxlevel,
                quality: +rawConfig.quality,
                qualityMax: +rawConfig.quality_max,
                resource: rawConfig.resource,
                resourceId: +rawConfig.res_id,
                type: +rawConfig.type,
                subType: +rawConfig.sub_type,
                useEffectParam: +rawConfig.use_effect_param,
                directUse: +rawConfig.direct_use,
                overlay: +rawConfig.overlay,
                price: +rawConfig.price,
                getWay: rawConfig.get_way,
                baseId: +rawConfig.base_id,
                compoundId: +rawConfig.compound_id,
                evolutionId: +rawConfig.evolution_id,
                isLucky: (+rawConfig.is_lucky) !== 0,
                checkId: +rawConfig.check_id,
                limitTime: +rawConfig.limit_time,
            };

            this.itemAttrInfoMap_[id] = config;
        }

        return this.itemAttrInfoMap_[id];
    }

    public getItemsAttrConfig(filter?: Function, thisObject?: any): Array<ItemAttrInfo> {
        const itemArr: Array<ItemAttrInfo> = new Array<ItemAttrInfo>();

        for (const id in this.rawJson_) {
            const rawConfig: any = this.rawJson_[id];
            const config: ItemAttrInfo = {
                id: +rawConfig.id,
                name: rawConfig.name,
                desc: rawConfig.desc,
                icon: rawConfig.icon,
                starLevel: +rawConfig.star_level,
                starMaxLevel: +rawConfig.star_maxlevel,
                quality: +rawConfig.quality,
                qualityMax: +rawConfig.quality_max,
                resource: rawConfig.resource,
                resourceId: +rawConfig.res_id,
                type: +rawConfig.type,
                subType: +rawConfig.sub_type,
                useEffectParam: +rawConfig.use_effect_param,
                directUse: +rawConfig.direct_use,
                overlay: +rawConfig.overlay,
                price: +rawConfig.price,
                getWay: rawConfig.get_way,
                baseId: +rawConfig.base_id,
                compoundId: +rawConfig.compound_id,
                evolutionId: +rawConfig.evolution_id,
                isLucky: (+rawConfig.is_lucky) !== 0,
                checkId: +rawConfig.check_id,
                limitTime: +rawConfig.limit_time,
            };

            if (filter && thisObject) {
                const result: boolean = filter.call(thisObject, config);

                if (result) {
                    itemArr.push(config);
                }
            }
            else {
                itemArr.push(config);
            }
        }

        return itemArr;
    }

    public getItemIconUrl(id: number): string {
        const config: ItemAttrInfo = this.getItemAttrInfo(id);
        const url: string = URLConstant.AsyncAssetsUrl + "item/" + config.icon + ".png";

        return url;
    }
}