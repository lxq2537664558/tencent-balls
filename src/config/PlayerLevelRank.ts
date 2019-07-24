interface PlayerLevelRankConfig {
    minLevel: number;
    maxLevel: number;
    rank: number;
    name: string;
    desc: string;
    award: string;
}

class PlayerLevelRank {
    private rawJson_: any;
    private rankMap_: {[key: number]: PlayerLevelRankConfig};

    constructor() {
        this.rawJson_ = RES.getRes("res_grade_info_json").ResLevelRank;
        this.rankMap_ = {};
    }

    public getLevelRankByRank(rank: number): PlayerLevelRankConfig {
        if (this.rankMap_[rank]) {
            return this.rankMap_[rank];
        }

        const rawRankConfig: any = this.rawJson_[rank.toString()];
        const rankConfig: PlayerLevelRankConfig = {
            minLevel: Number(rawRankConfig.level),
            maxLevel: Number(rawRankConfig.maxlevel),
            rank: Number(rawRankConfig.rank),
            name: rawRankConfig.rankshow,
            award: rawRankConfig.award,
            desc: rawRankConfig.gradedesc,
        };
        rankConfig.desc.replace(/n/g, "\n");
        this.rankMap_[rank] = rawRankConfig;

        return rankConfig;
    }

    public getAllLevelRankConfigs(): Array<PlayerLevelRankConfig> {
        const configs: Array<PlayerLevelRankConfig> = new Array<PlayerLevelRankConfig>();

        for (const id in this.rawJson_) {
            configs.push(this.getLevelRankByRank(Number(id)));
        }

        return configs;
    }

    public getLevelRankConfigByLevel(level: number): PlayerLevelRankConfig {
        const configs: Array<PlayerLevelRankConfig> = this.getAllLevelRankConfigs();

        for (let i = 0, len = configs.length; i < len; ++i) {
            const config: PlayerLevelRankConfig = configs[i];

            if (level >= config.minLevel && level <= config.maxLevel) {
                return config;
            }
        }

        egret.error("PlayerLevelRank.getLevelRankByLevel:", "invalide level " + level);

        return null;
    }

    public getLevelRankNameByLevel(level: number): string {
        const config: PlayerLevelRankConfig = this.getLevelRankConfigByLevel(level);

        if (config) {
            return config.name;
        }

        return "";
    }

    public getLevelRankByLevel(level: number): number {
        const config: PlayerLevelRankConfig = this.getLevelRankConfigByLevel(level);

        if (config) {
            return config.rank;
        }

        return 0;
    }

    public getRankIconUrl(level: number): string {
        return ResourceUtil.getResUrl(URLConstant.AsyncAssetsUrl + "Player/player_LV" + level.toString() + ".png");
    }
}