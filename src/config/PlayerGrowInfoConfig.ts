interface PlayerLevelExpInfo {
    level: number;
    nextLevelExp: number;
    unlockType1: string;
    unlockType2: string;
    rewardId1: number;
    rewardNum1: number;
    rewardId2: number;
    rewardNum2: number;
    rewardId3: number;
    rewardNum3: number;
}

interface ActivePointRewardInfo {
    id: number;
    activePoint: number;
    rewardId1: number;
    rewardNum1: number;
    rewardId2: number;
    rewardNum2: number;
    rewardId3: number;
    rewardNum3: number;
}

interface UnionActivePointRewardInfo {
    id: number;
    activePoint: number;
    rewardId1: number;
    rewardNum1: number;
    rewardId2: number;
    rewardNum2: number;
    rewardId3: number;
    rewardNum3: number;
}

class PlayerGrowInfoConfig {
    private rawJsonByLevelExp_: any;
    private rawJsonByActivePointReward_: any;
    private rawJsonByUnionActivePointReward_: any;

    private levelExpMap_: { [key: number]: PlayerLevelExpInfo };
    private levelExpTable_: Array<number>;
    private maxPlayerLevel_: number;
    private activePointRewardMap_: { [key: number]: ActivePointRewardInfo };
    private unionActivePointRewardMap_: { [key: number]: UnionActivePointRewardInfo };

    constructor() {
        this.rawJsonByLevelExp_ = RES.getRes("res_player_level_exp_json").PlayerGrow;
        this.rawJsonByActivePointReward_ = RES.getRes("res_active_point_reward_json").ActivePointReward;
        this.rawJsonByUnionActivePointReward_ = RES.getRes("res_union_active_point_reward_json").UnionActivePointReward;

        this.parse();
    }

    public getLevelExpConfig(level: number): PlayerLevelExpInfo {
        return this.levelExpMap_[level];
    }

    public convertExpToPlayerLevel(exp: number): number {
        for (let i = 0, len = this.levelExpTable_.length; i < len; ++i) {
            if (exp < this.levelExpTable_[i]) {
                return Math.max(1, i);
            }
        }

        return this.maxPlayerLevel;
    }

    public getNextLevelExp(level: number): number {
        if (level > 0 && level <= this.maxPlayerLevel) {
            return this.levelExpTable_[level - 1];
        }

        return 0;
    }

    public getNextLevelNeedlExp(exp: number): number {
        const currLevel: number = this.convertExpToPlayerLevel(exp);

        if (0 > currLevel || currLevel > this.maxPlayerLevel) {
            return 0;
        }

        const totalExp: number = this.getNextLevelExp(currLevel) + this.getNextLevelExp(currLevel);

        return totalExp - exp;
    }

    public getActivePointRewardConfig(id: number): ActivePointRewardInfo {
        return this.activePointRewardMap_[id];
    }

    public getUnionActivePointRewardConfig(id: number): UnionActivePointRewardInfo {
        return this.unionActivePointRewardMap_[id];
    }

    private parse(): void {
        this.parsePlayerLevelExp();
        this.parseActivePointReward();
        this.parseUnionActivePointReward();
    }

    private parsePlayerLevelExp(): void {
        this.levelExpMap_ = {};
        this.maxPlayerLevel = 0;
        this.levelExpTable_ = new Array<number>();
        let maxLevel: number = 0;

        for (const id in this.rawJsonByLevelExp_) {
            ++maxLevel;
            const rawConfig: any = this.rawJsonByLevelExp_[id];
            const config: PlayerLevelExpInfo = {
                level: Number(rawConfig.level),
                nextLevelExp: Number(rawConfig.next_level_exp),
                unlockType1: rawConfig.unlock_type1,
                unlockType2: rawConfig.unlock_type2,
                rewardId1: Number(rawConfig.reward_id_1),
                rewardNum1: Number(rawConfig.reward_num_1),
                rewardId2: Number(rawConfig.reward_id_2),
                rewardNum2: Number(rawConfig.reward_num_2),
                rewardId3: Number(rawConfig.reward_id_3),
                rewardNum3: Number(rawConfig.reward_num_3),
            };

            this.levelExpMap_[config.level] = config;
            this.levelExpTable_.push(config.nextLevelExp);

            if (config.level > this.maxPlayerLevel) {
                this.maxPlayerLevel = config.level;
            }
        }

        if (this.levelExpTable_.length !== this.maxPlayerLevel || maxLevel != this.maxPlayerLevel) {
            egret.warn("PlayerGrowInfoConfig.parsePlayerLevelExp: 请检查配置<res_player_level_exp_json>表信息");
        }
    }

    private parseActivePointReward(): void {
        this.activePointRewardMap_ = {};

        for (const id in this.rawJsonByActivePointReward_) {
            const rawConfig: any = this.rawJsonByActivePointReward_[id];
            const config: ActivePointRewardInfo = {
                id: Number(rawConfig.id),
                activePoint: Number(rawConfig.active_point),
                rewardId1: Number(rawConfig.reward_id_1),
                rewardNum1: Number(rawConfig.reward_num_1),
                rewardId2: Number(rawConfig.reward_id_2),
                rewardNum2: Number(rawConfig.reward_num_2),
                rewardId3: Number(rawConfig.reward_id_3),
                rewardNum3: Number(rawConfig.reward_num_3),
            };

            this.activePointRewardMap_[config.id] = config;
        }
    }

    private parseUnionActivePointReward(): void {
        this.unionActivePointRewardMap_ = {};

        for (const id in this.rawJsonByActivePointReward_) {
            const rawConfig: any = this.rawJsonByActivePointReward_[id];
            const config: UnionActivePointRewardInfo = {
                id: Number(rawConfig.id),
                activePoint: Number(rawConfig.active_point),
                rewardId1: Number(rawConfig.reward_id_1),
                rewardNum1: Number(rawConfig.reward_num_1),
                rewardId2: Number(rawConfig.reward_id_2),
                rewardNum2: Number(rawConfig.reward_num_2),
                rewardId3: Number(rawConfig.reward_id_3),
                rewardNum3: Number(rawConfig.reward_num_3),
            };

            this.unionActivePointRewardMap_[config.id] = config;
        }
    }

    set maxPlayerLevel(value) {
        this.maxPlayerLevel_ = value;
    }

    get maxPlayerLevel() {
        return this.maxPlayerLevel_;
    }
}