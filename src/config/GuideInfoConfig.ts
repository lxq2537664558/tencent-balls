interface GuideWeakInfo {
    id: number;
    showType: number;
    content: string;
    showTime: number;
    battleType: number;
    dir: number;
    guestType: number;
    continueDelay: number;
    isPause: boolean;
    showBattleTime: number;
    startSound: string;
    endSound: string;
}

interface GuideClientInfo {
    id: number;
    preId: number;
    showType: number;
    content: string;
    size: number;
    isForce: boolean;
    isBattle: boolean;
    delayTime: number;
    dir: number;
    module: number;
    tellServer: boolean;
    isRepeat: boolean;
    depth: number;
    keyStep: number;
    targetUI: string;
    order: number;
    priority: number;
    startCondition_1: number;
    startCondition_1_param: string;
    startCondition_2: number;
    startCondition_2_param: string;
    startCondition_3: number;
    startCondition_3_param: string;
    endCondition: number;
    endConditionParam: string;
    random: number;
    trigger: number;
    offsetX: number;
    offsetY: number;
    offset: number;
    scale: number;
}

interface GuideRewardItemInfo {
    id: number;
    count: number;
}

interface GuideRewardInfo {
    id: number;
    rewardItems_: Array<GuideRewardItemInfo>;
}

interface GuideServerInfo {
    id: number;
    showType: number;
    content: string;
    showTime: number;
    target: string;
    isForce: boolean;
    dir: number;
    size: number;
    isHideRank: boolean;
    isShowSpit: boolean;
    isShowSplit: boolean;
}

class GuideInfoConfig {
    private rawGuideWeakJson_: any;
    private guideWeakMap_: { [key: number]: GuideWeakInfo };
    private rawGuideClientJson_: any;
    private guideClientMap_: { [key: number]: GuideClientInfo };
    private rawGuideRewardJson_: any;
    private guideRewardMap_: { [key: number]: GuideRewardInfo };
    private rawGuideServerJson_: any;
    private guideServerMap_: { [key: number]: GuideServerInfo };

    constructor() {
        this.rawGuideWeakJson_ = RES.getRes("res_guide_weak_json").GuideWeak;
        this.rawGuideClientJson_ = RES.getRes("res_guide_client_json").GuideClient;
        this.rawGuideRewardJson_ = RES.getRes("res_guide_reward_json").GuideReward;
        this.rawGuideServerJson_ = RES.getRes("res_guide_server_json").GuideServer;
    }

    public getGuideWeakConfig(id: number): GuideWeakInfo {
        if (!this.guideWeakMap_[id]) {
            const rawConfig: any = this.rawGuideWeakJson_[id.toString()];

            if (!rawConfig) {
                return null;
            }

            const config: GuideWeakInfo = {
                id: +rawConfig.id,
                showType: +rawConfig.show_type,
                content: rawConfig.content,
                showTime: +rawConfig.show_time,
                battleType: +rawConfig.battle_type,
                dir: +rawConfig.dir,
                guestType: +rawConfig.guest_type,
                continueDelay: +rawConfig.continue_delay,
                isPause: (+rawConfig.is_pause) !== 0 ? true : false,
                showBattleTime: +rawConfig.show_battle_time,
                startSound: rawConfig.start_sound,
                endSound: rawConfig.end_sound,
            };

            this.guideWeakMap_[id] = config;
        }

        return this.guideWeakMap_[id];
    }

    public getGuideClientConfig(id: number): GuideClientInfo {
        if (!this.guideClientMap_[id]) {
            const rawConfig: any = this.rawGuideClientJson_[id.toString()];

            if (!rawConfig) {
                return null;
            }

            const config: GuideClientInfo = {
                id: +rawConfig.id,
                preId: +rawConfig.pre_id,
                showType: +rawConfig.show_type,
                content: rawConfig.content,
                size: +rawConfig.size,
                isForce: (+rawConfig.is_force) !== 0 ? true : false,
                isBattle: (+rawConfig.is_battle) !== 0 ? true : false,
                delayTime: +rawConfig.delay_time,
                dir: +rawConfig.dir,
                module: +rawConfig.module,
                tellServer: (+rawConfig.tell_server) !== 0 ? true : false,
                isRepeat: (+rawConfig.is_repeat) !== 0 ? true : false,
                depth: +rawConfig.depth,
                keyStep: +rawConfig.key_step,
                targetUI: rawConfig.target_ui,
                order: +rawConfig.order,
                priority: +rawConfig.priority,
                startCondition_1: +rawConfig.start_condition_1,
                startCondition_1_param: rawConfig.start_condition_1_param,
                startCondition_2: +rawConfig.start_condition_2,
                startCondition_2_param: rawConfig.start_condition_2_param,
                startCondition_3: +rawConfig.start_condition_3,
                startCondition_3_param: rawConfig.start_condition_3_param,
                endCondition: +rawConfig.end_condition,
                endConditionParam: rawConfig.end_condition_param,
                random: +rawConfig.random,
                trigger: +rawConfig.trigger,
                offsetX: +rawConfig.offsetX,
                offsetY: +rawConfig.offsetY,
                offset: +rawConfig.offset,
                scale: +rawConfig.scale,
            };

            this.guideClientMap_[id] = config;
        }

        return this.guideClientMap_[id];
    }

    public getGuideRewardConfig(id: number): GuideRewardInfo {
        if (!this.guideRewardMap_[id]) {
            const rawConfig: any = this.rawGuideRewardJson_[id.toString()];

            if (!rawConfig) {
                return null;
            }

            const rewardItems: Array<GuideRewardItemInfo> = [];
            const rewardItemParts_: Array<string> = rawConfig.reward.split(";");

            for (let i = 0, len = rewardItemParts_.length; i < len; ++i) {
                const rewardParts: Array<string> = rewardItemParts_[i].split(",");

                if (rewardParts.length !== 2) {
                    console.log("GuideInfoConfig.getGuideRewardConfig: ", rawConfig.id + " has an error to parse reward field.");
                    continue;
                }

                rewardItems.push({
                    id: +rewardParts[0],
                    count: +rewardParts[1],
                });
            }

            const config: GuideRewardInfo = {
                id: +rawConfig.id,
                rewardItems_: rewardItems,
            }

            this.guideRewardMap_[id] = config;
        }

        return this.guideRewardMap_[id];
    }

    public getGuideServerConfig(id: number): GuideServerInfo {
        if (!this.guideServerMap_[id]) {
            const rawConfig: any = this.rawGuideServerJson_[id.toString()];

            if (!rawConfig) {
                return null;
            }

            const config: GuideServerInfo = {
                id: +rawConfig.id,
                showType: +rawConfig.show_type,
                content: rawConfig.content,
                showTime: +rawConfig.show_time,
                target: rawConfig.target,
                isForce: (+rawConfig.is_force) !== 0 ? true : false,
                dir: +rawConfig.dir,
                size: +rawConfig.size,
                isHideRank: (+rawConfig.hide_rank) !== 0 ? true : false,
                isShowSpit: (+rawConfig.show_spit) !== 0 ? true : false,
                isShowSplit: (+rawConfig.show_split) !== 0 ? true : false,
            };

            this.guideServerMap_[id] = config;
        }

        return this.guideServerMap_[id];
    }
}