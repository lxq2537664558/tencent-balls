class ConfigManager {
    private static instance_: ConfigManager;

    private versionInfo_: VersionInfo;
    private errorCodeInfo_: ErrorCodeInfo;
    private playerLevelRank_: PlayerLevelRank;
    private constellationInfo_: ConstellationInfoConfig;
    private playerGrowInfo_: PlayerGrowInfoConfig;
    private bufferInfo_: BufferConfig;
    private skillInfo_: SkillConfig;
    private missionInfo_: MissionInfoConfig;
    private dropInfo_: DropInfoConfig;
    private starInfo_: StarStaticInfoConfig;
    private itemAttrInfo_: ItemAttrInfoConfig;
    private itemResInfo_: ItemResInfoConfig;

    constructor() {
    }

    public static getInstance(): ConfigManager {
        if (!this.instance_) {
            this.instance_ = new ConfigManager();
        }

        return this.instance_;
    }

    public init(): void {
        this.versionInfo_ = new VersionInfo();
        this.errorCodeInfo_ = new ErrorCodeInfo();
        this.playerLevelRank_ = new PlayerLevelRank();
        this.constellationInfo_ = new ConstellationInfoConfig();
        this.playerGrowInfo_ = new PlayerGrowInfoConfig();
        this.bufferInfo_ = new BufferConfig();
        this.skillInfo_ = new SkillConfig();
        this.missionInfo_ = new MissionInfoConfig();
        this.dropInfo_ = new DropInfoConfig();
        this.starInfo_ = new StarStaticInfoConfig();
        this.itemAttrInfo_ = new ItemAttrInfoConfig();
        this.itemResInfo_ = new ItemResInfoConfig();
    }

    get versionInfo() {
        return this.versionInfo_;
    }

    get errorCodeInfo() {
        return this.errorCodeInfo_;
    }

    get playerLevelRank() {
        return this.playerLevelRank_;
    }

    get constellationInfo() {
        return this.constellationInfo_;
    }

    get playerGrowInfo() {
        return this.playerGrowInfo_;
    }

    get bufferInfo() {
        return this.bufferInfo_;
    }

    get skillInfo() {
        return this.skillInfo_;
    }

    get missionInfo() {
        return this.missionInfo_;
    }

    get dropInfo() {
        return this.dropInfo_;
    }

    get starInfo() {
        return this.starInfo_;
    }

    get itemAttrInfo() {
        return this.itemAttrInfo_;
    }

    get itemResInfo() {
        return this.itemResInfo_;
    }
}