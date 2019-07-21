interface StarStaticInfo {
    index: number;
    x: number;
    y: number;
    active: boolean;
}

class StarStaticInfoConfig {
    private rawJson_: any;
    private starArr_: Array<StarStaticInfo>;

    constructor() {
        this.rawJson_ = RES.getRes("res_stars_config_json").Stars;
        this.parse();
    }

    public resetStarArray(): void {
        for (let i = 0, len = this.starArr_.length; i < len; ++i) {
            this.starArr_[i].active = true;
        }
    }

    private parse(): void {
        this.starArr_ = new Array<StarStaticInfo>();

        for (let i = 0, len = this.rawJson_.length; i < len; ++i) {
            const rawConfig: any = this.rawJson_[i];
            const config: StarStaticInfo = {
                index: i,
                x: rawConfig.x,
                y: rawConfig.y,
                active: true,
            }

            this.starArr_.push(config);
        }
    }

    get starArr() {
        return this.starArr_;
    }
}