interface ConstellationInfo {
    index: number;
    name: string;
    startMonth: number;
    startDay: number;
    endMonth: number;
    endDay: number;
}


class ConstellationInfoConfig {
    private rawJson_: any;
    private constellationArr_: Array<ConstellationInfo>;
    private constellationMap_: { [key: number]: ConstellationInfo };

    constructor() {
        this.rawJson_ = RES.getRes("res_constellation_json");
        this.constellationArr_ = new Array<ConstellationInfo>();
        this.constellationMap_ = {};
        this.parse();
    }

    public getConstellationConfigByDate(startMondth: number, startDay: number): ConstellationInfo {
        for (let i = 0, len = this.constellationArr_.length; i < len; ++i) {
            const config: ConstellationInfo = this.constellationArr_[i];

            if ((startMondth === config.startMonth && startDay >= config.startDay)
                || (startMondth === config.endMonth && startDay <= config.endDay)) {
                return config;
            }
        }

        return null;
    }

    public getConstellationIndexByDate(startMondth: number, startDay: number): number {
        const config: ConstellationInfo = this.getConstellationConfigByDate(startMondth, startDay);

        if (config) {
            return config.index;
        }

        return -1;
    }

    public getConstellationNameByIndex(index: number): string {
        const config: ConstellationInfo = this.constellationMap_[index];

        if (config) {
            return config.name;
        }

        return "";
    }

    private parse(): void {
        for (let i = 0, len = this.rawJson_.length; i < len; ++i) {
            const rawConstellationConfig: any = this.rawJson_[i];
            const config: ConstellationInfo = {
                index: rawConstellationConfig.index,
                name: rawConstellationConfig.name,
                startMonth: rawConstellationConfig.startMonth,
                startDay: rawConstellationConfig.startDay,
                endMonth: rawConstellationConfig.endMonth,
                endDay: rawConstellationConfig.endDay,
            }

            this.constellationArr_.push(config);
            this.constellationMap_[config.index] = config;
        }
    }
}