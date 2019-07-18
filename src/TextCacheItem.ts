interface TextureData {
    texture: any;
    width: number;
    height: number
}

class TextCacheItem {
    private textureData_: TextureData;
    private listeners_: Array<any>;
    private wait_: boolean;

    constructor(width: number, height: number) {
        this.textureData_ = {
            texture: null,
            width: width,
            height: height,
        }

        this.listeners_ = new Array<any>();
    }

    public listen(cb: Function, thisObject: any): void {
        this.listeners_.push({
            cb,
            thisObject,
        });
    }

    public execute(): void {
        for (let i = 0, len = this.listeners_.length; i < len; ++i) {
            const listener: any = this.listeners_[i];

            if (listener.cb) {
                listener.cb.call(listener.thisObject, this.textureData_);
            }
        }

        this.listeners_ = [];
    }

    public dispose(): void {
        if (this.textureData_ !== null) {
            if (this.textureData_.texture !== null) {
                this.textureData_.texture = null;
            }
        }
    }

    set textureData(value) {
        this.textureData_ = value;
    }

    get textureData() {
        return this.textureData_;
    }

    set wait(value) {
        this.wait_ = value;
    }

    get wait() {
        return this.wait_;
    }
}