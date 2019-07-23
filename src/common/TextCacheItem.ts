interface TextureData {
    texture: egret.Texture;
    width: number;
    height: number;
}

class TextCacheItem {
    private textureData_: TextureData;
    private listeners_: Array<any>;
    private isWait_: boolean;

    constructor(width: number, height: number) {
        this.textureData_ = {
            texture: null,
            width: width,
            height: height,
        };

        this.listeners_ = [];
        this.isWait = true;
    }

    public addListener(callback: Function, thisObject): void {
        this.listeners_.push({
            callback,
            thisObject,
        });
    }

    public execute(): void {
        for (let i = 0, len = this.listeners_.length; i < len; ++i) {
            const listener: any = this.listeners_[i];

            if (listener.callback) {
                listener.callback.call(listener.thisObject, this.textureData_);
            }        
        }

        this.listeners_ = [];
    }

    public dispose(): void {
        if (this.textureData_.texture !== null) {
            this.textureData_.texture = null;
        }
    }

    set isWait(value) {
        this.isWait_ = value;
    }

    get isWait() {
        return this.isWait_;
    }

    get textureData() {
        return this.textureData_;
    }
}