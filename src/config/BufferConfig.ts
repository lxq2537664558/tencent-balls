interface BufferInfo {
    id: number;
    name: string;
    effect: string;
    effectType: number;
    effectSize: number;
}

class BufferConfig {
    private rawJson_: any;
    private bufferMap_: { [key: number]: BufferInfo };

    constructor() {
        this.rawJson_ = RES.getRes("res_buff_json").Buff;
        this.parse();
    }

    public getBufferConfig(id: number) {
        return this.bufferMap_[id];
    }

    private parse(): void {
        this.bufferMap_ = {};

        for (const id in this.rawJson_) {
            const rawConfig: any = this.rawJson_[id];
            const config: BufferInfo = {
                id: Number(rawConfig.id),
                name: rawConfig.name,
                effect: rawConfig.effect,
                effectType: Number(rawConfig.effect_type),
                effectSize: Number(rawConfig.effect_size),
            }

            this.bufferMap_[config.id] = config;
        }
    }
}