interface TextureOptions {
    italic?: string;
    bold?: string;
    size?: number;
    fontFamily?: string;
    width?: number;
    textColor?: number;
    strokeColor?: number;
    stroke?: number;
}

class TextTextureCaches {
    private static instance_: TextTextureCaches;

    private loadedCache_: Array<any>;
    private caches_: Dictionary;
    private canvas_: any;
    private context_: any;
    private pixelRatio_: number;

    constructor() {
        this.loadedCache_ = new Array<any>();
    }

    public static getInstance(): TextTextureCaches {
        if (!this.instance_) {
            this.instance_ = new TextTextureCaches();
        }

        return this.instance_;
    }

    public init(): void {
        this.caches_ = new Dictionary();
        this.createHiDPICanvas();
        egret.startTick(this.onTicker, this);
    }

    public cacheTexture(name: string, options?: TextureOptions): void {
        if (name.length === 0) {
            // AuxiliaryUtil.getInstance().
            return;
        }

        if (!options) {
            options = {};
        }

        this.remove(name);

        try {
            options.italic = options.italic || "normal";
            options.bold = options.bold || "normal";
            options.size = options.size || egret.TextField.default_size;
            options.fontFamily = options.fontFamily || egret.TextField.default_fontFamily;
            const context: any = this.context_;
            const format: string = this.getFontStringWithFormat(options);
            context.font = format;

            if (!options.width) {
                options.width = context.measureText(name).width;
                options.width = Math.ceil(options.width);
            }

            this.resizeCanvas(options.width, options.size);
            const textColor: number = options.textColor || egret.TextField.default_textColor;
            const strokeColor: number = options.strokeColor || 0;
            context.textAlign = "left";
            context.textBaseline = "middle";
            context.lineJoin = "round";
            context.fillStyle = egret.toColorString(textColor);
            context.strokeStyle = egret.toColorString(strokeColor);

            if (options.stroke) {
                context.lineWidth = options.stroke * 2;
                context.strokeText(name, 0, 0);
            }

            context.fillText(name, 0, options.size / 2);
            const image: any = new Image();
            this.onLoadImage(name, image, options, options.width, options.size);
            image.src = this.canvas_.toDataURL("image/png");

            if (image.src.indexOf("data:image/png") !== 0) {
                // AuxiliaryUtil.getInstance().
            }
        }
        catch (e) {
            // const length: number = name ? name.length : 0;
            // AuxiliaryUtil.getInstance().
        }
    }

    public getChacheTexture(name: string, cb: Function, thisObject?: any, size?: number): void {
        if (!thisObject) {
            thisObject = null;
        }

        if (!size) {
            size = egret.TextField.default_size;
        }

        if (this.caches_[name]) {
            const textureCacheItem: TextCacheItem = this.caches_[name];

            if (!textureCacheItem.wait) {
                cb.call(thisObject, textureCacheItem.textureData);
                return;
            }

            textureCacheItem.listen(cb, thisObject);
        }
        else {
            this.cacheTexture(name, {
                size,
            });

            const textureCacheItem: TextCacheItem = this.caches_[name];

            if (textureCacheItem) {
                textureCacheItem.listen(cb, thisObject);
            } 
        }
    }

    public dispose(): void {
        const keys: Array<string> = this.caches_.keys;

        for (let i = 0, len = keys.length; i < len; ++i) {
            this.remove(keys[i]);
        }

        this.caches_.clear();
        this.caches_ = new Dictionary();
    }

    private createHiDPICanvas(): void {
        this.canvas_ = document.createElement("canvas");
        this.canvas_.id = "canvasText";
        this.context_ = this.canvas_.getContext("2d");
        this.pixelRatio_ = this.calcPixelRatio();
    }

    private calcPixelRatio(): number {
        const context: any = this.context_;
        const devicePixelRatio: number = window.devicePixelRatio || 1;
        const pixelRatio: number = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio
            || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;

        return devicePixelRatio / pixelRatio;
    }

    private resizeCanvas(width: number, size: number): void {
    }

    private remove(name: string): void {
        if (this.caches_[name]) {
            const texture: egret.Texture = this.caches_[name];
            texture.dispose();
            this.caches_.remove(name);
        }
    }

    private getFontStringWithFormat(options: TextureOptions) {
        let format: string = "";
        format += options.italic === "italic" ? "italic " : "normal ";
        format += options.bold === "bold" ? "bold " : "normal ";
        format += options.size + "px " + options.fontFamily;

        return format;
    }

    private onTicker(timestamp: number): boolean {
        if (this.loadedCache_.length === 0) {
            return false;
        }

        for (let i = 0, len = this.loadedCache_.length; i < len; ++i) {
            this.loadedCache_[i].exectue();
        }

        this.loadedCache_ = [];

        return false;
    }

    private onLoadImage(name: string, image: any, options: Object, width: number, height: number): void {
        const self = this;
        const textureCacheItem: TextCacheItem = new TextCacheItem(width, height);
        self.caches_.add(name, textureCacheItem);
        image.onload = () => {
            if (self.caches_[name]) {
                const bitmapData: egret.BitmapData = new egret.BitmapData(image);
                const texture: egret.Texture = new egret.Texture();
                texture.bitmapData = bitmapData;
                textureCacheItem.textureData.texture = texture;
                textureCacheItem.wait = false;
                self.loadedCache_.push(textureCacheItem);
            }
        };
    }
}