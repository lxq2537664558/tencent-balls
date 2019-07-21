interface SkillInfo {
    id: number;
    name: string;
    skin: number;
    releaseSkill: string;
    hitSkill: string;
    type: number;
    cdTime: number;
    useTimes: number;
    needDir: number;
    costDesc: string;
    buff: string;
    buffParams: string;
}

class SkillConfig {
    private rawJson_: any;
    private skillMap_: {[key: number]: SkillInfo};

    constructor() {
        this.rawJson_ = RES.getRes("res_skill_json").Skill;
        this.skillMap_ = {};
    }

    public getSkillConfig(id: number): SkillInfo {
        if (!this.skillMap_[id]) {
            const rawConfig: any = this.rawJson_[id];
            
            if (!rawConfig) {
                return null;
            }

            const config: SkillInfo = {
                id: Number(rawConfig.id),
                name: rawConfig.name,
                skin: rawConfig.skin,
                releaseSkill: rawConfig.release_skill,
                hitSkill: rawConfig.hit_skill,
                type: Number(rawConfig.type),
                cdTime: Number(rawConfig.cd_time),
                useTimes: Number(rawConfig.use_times),
                needDir: Number(rawConfig.need_dir),
                costDesc: rawConfig.cost_desc,
                buff: rawConfig.buff,
                buffParams: rawConfig.buff_param,
            }

            this.skillMap_[config.id] = config;

            return config;
        }

        return this.skillMap_[id];
    }
}