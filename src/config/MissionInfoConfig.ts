interface DailyMissionInfo {
    id: number;
    type: number;
    subType: number;
    title: string;
    desc: string;
    conditionDesc: string;
    icon: string;
    needTeamLevel: number;
    link: string;
    openDay: number;
    finishCondition: string;
    dailyCount: number;
    clientSet: number;
    isOpen: number;
    teamExp: number;
    rewardId1: number;
    rewardNum1: number;
    rewardId2: number;
    rewardNum2: number;
    rewardId3: number;
    rewardNum3: number;
    startTime: string;
    endTime: string;
}

interface PrimaryMissionInfo {
    id: number;
    type: number;
    title: string;
    desc: string;
    icon: string;
    link: string;
    teamExp: number;
    rewardId1: number;
    rewardNum1: number;
    rewardId2: number;
    rewardNum2: number;
    rewardId3: number;
    rewardNum3: number;
    level: number;
    finishCondition: string;
}

interface MissionOrderInfo {
    index: number;
    order: number;
    orderType: number;
    type: number;
}

class MissionInfoConfig {
    private rawJsonByDailyMission_: any;
    private rawJsonByPrimaryMission_: any;
    private rawJsonByMissionOrder_: any;

    private dailyMissionMap_: { [key: number]: DailyMissionInfo };
    private primaryMissionMap_: { [key: number]: PrimaryMissionInfo };
    private missionOrderArr_: Array<MissionOrderInfo>;
    private missionOrderMap_: { [key: number]: MissionOrderInfo };

    constructor() {
        this.rawJsonByDailyMission_ = RES.getRes("res_daily_mission_json").DailyMissionTable;
        this.rawJsonByPrimaryMission_ = RES.getRes("res_primary_mission_json").PrimaryMissionTable;
        this.rawJsonByMissionOrder_ = RES.getRes("res_mission_order_json").MissionOrderTable;

        this.dailyMissionMap_ = {};
        this.primaryMissionMap_ = {};
        this.missionOrderArr_ = new Array<MissionOrderInfo>();
        this.missionOrderMap_ = {};

        this.parse();
    }

    public getDailyMissionConfig(id: number): DailyMissionInfo {
        if (!this.dailyMissionMap_[id]) {
            const rawConfig: any = this.rawJsonByDailyMission_[id.toString()];

            if (!rawConfig) {
                return null;
            }

            const config: DailyMissionInfo = {
                id: Number(rawConfig.id),
                type: Number(rawConfig.type),
                subType: Number(rawConfig.subType),
                title: rawConfig.title,
                desc: rawConfig.desc,
                conditionDesc: rawConfig.conditionDesc,
                icon: rawConfig.icon,
                needTeamLevel: Number(rawConfig.need_team_level),
                link: rawConfig.link,
                openDay: Number(rawConfig.openDay),
                finishCondition: rawConfig.finishCondition,
                dailyCount: Number(rawConfig.daily_count),
                clientSet: Number(rawConfig.clientSet),
                isOpen: Number(rawConfig.isOpen),
                teamExp: Number(rawConfig.team_exp),
                rewardId1: Number(rawConfig.award1_id),
                rewardNum1: Number(rawConfig.award1_num),
                rewardId2: Number(rawConfig.award2_id),
                rewardNum2: Number(rawConfig.award2_num),
                rewardId3: Number(rawConfig.award3_id),
                rewardNum3: Number(rawConfig.award3_num),
                startTime: rawConfig.start_time,
                endTime: rawConfig.end_time,
            };

            this.dailyMissionMap_[config.id] = config;
        }

        return this.dailyMissionMap_[id];
    }

    public getPrimaryMissionConfig(id: number): PrimaryMissionInfo {
        if (!this.primaryMissionMap_[id]) {
            const rawConfig: any = this.rawJsonByPrimaryMission_[id.toString()];

            if (!rawConfig) {
                return null;
            }

            const config: PrimaryMissionInfo = {
                id: +rawConfig.id,
                type: +rawConfig.type,
                title: rawConfig.title,
                desc: rawConfig.desc,
                icon: rawConfig.icon,
                link: rawConfig.link,
                teamExp: +rawConfig.team_exp,
                rewardId1: +rawConfig.award1_id,
                rewardNum1: +rawConfig.award1_num,
                rewardId2: +rawConfig.award2_id,
                rewardNum2: +rawConfig.award2_num,
                rewardId3: +rawConfig.award3_id,
                rewardNum3: +rawConfig.award3_num,
                level: +rawConfig.level,
                finishCondition: rawConfig.finishCondition,
            }

            this.primaryMissionMap_[config.id] = config;
        }

        return this.primaryMissionMap_[id];
    }

    public getMissionOrderConfig(index: number): MissionOrderInfo {
        return this.missionOrderMap_[index];
    }

    private parse(): void {
        this.parseMissionOrder();
    }

    private parseMissionOrder(): void {
        for (const index in this.rawJsonByMissionOrder_) {
            const rawConfig: any = this.rawJsonByMissionOrder_[index];
            const config: MissionOrderInfo = {
                index: Number(rawConfig.index),
                order: Number(rawConfig.order),
                orderType: Number(rawConfig.order_type),
                type: Number(rawConfig.type),
            }

            this.missionOrderMap_[config.index] = config;
            this.missionOrderArr_.push(config);
        }
    }
}