class TextTextureCaches {
    private static instance_: TextTextureCaches;

    private loadedCache_: Array<any>;
    private caches_: Dictionary;
    private canvasText_: any;
    private contextText_: any;
    private contextRatio_: number;

    constructor() {
        this.loadedCache_ = new Array();
        this.caches_ = new Dictionary();
    }

    public static getInstance(): TextTextureCaches {
        if (!this.instance_) {
            this.instance_ = new TextTextureCaches();
        }

        return this.instance_;
    }

    public init(): void {
        this.createHiDPICanvas();
        egret.startTick(this.onTick, this);
    }

    public cacheText(text: string, options?: any): void {
        if (text === null || text === "") {
            return;
        }

        if (options === void 0 || options === null) {
            options = {};
        }

        this.remove(text);

        try {
            options.italic = options.italic || "normal";
            options.bold = options.bold || "normal";
            options.size = options.size || egret.TextField.default_size;
            options.fontFamily = options.fontFamily || egret.TextField.default_fontFamily;
            const fontStyle: string = this.fontStyleFormat(options);
            this.contextText_.font = fontStyle;

            if (options.width === void 0 || options.width === null) {
                options.width = this.contextText_.measureText(text).width;
                options.width = Math.ceil(options.width);
            }

            this.resizeCanvas(options.width, options.size);
            const textColor: number = options.textColor || egret.TextField.default_textColor;
            const strokeColor: number = options.strokeColor || 0;
            options.stroke = options.stroke || 0;
            this.contextText_.textAlign = "left";
            this.contextText_.textBaseLine = "middle";
            this.contextText_.lineJoin = "round";
            this.contextText_.font = fontStyle;
            this.contextText_.fillStyle = egret.toColorString(textColor);
            this.contextText_.strokeStyle = egret.toColorString(strokeColor);

            if (options.stroke) {
                this.contextText_.lineWidth = options.stroke * 2;
                this.contextText_.strokeText(text, 0, 0);
            }

            this.contextText_.fillText(text, 0, options.size / 2);
            const image: any = new Image();
            this.waitImageOnLoad(text, image, options, options.width, options.size);
            image.src = this.canvasText_.toDataURL("image/png");

            if (image.src.indexOf("data:image/png") !== 0) {

            }
        }
        catch (e) {
        }
    }

    public getCacheTexture(text: string, listener: Function, thisObject?: any, size?: number): void {
        if (size === void 0 || size === null) {
            size = egret.TextField.default_size;
        }

        if (thisObject === void 0) {
            thisObject = null;
        }

        if (listener === null) {
            return;
        }

        if (this.caches_[text]) {
            const item: TextCacheItem = this.caches_[text];

            if (!item.isWait) {
                listener.call(thisObject, item.textureData);
                return;
            }

            item.addListener(listener, thisObject);
        }
        else {
            this.cacheText(text, {
                size,
            });
            const item: TextCacheItem = this.caches_[text];
            item.addListener(listener, thisObject);
        }
    }

    public dispose(): void {
        const keys: Array<string> = this.caches_.keys;

        for (let i = 0, len = keys.length; i < len; ++i) {
            this.remove(keys[i]);
        }

        this.caches_.reset();
        this.caches_ = null;
        this.caches_ = new Dictionary();
    }

    private waitImageOnLoad(text: string, image: any, options: any, width: number, size: number): void {
        const self = this;
        const item: TextCacheItem = new TextCacheItem(width, size);
        self.caches_.add(text, item);
        image.onload = () => {
            if (self.caches_[text]) {
                const bitmapData: egret.BitmapData = new egret.BitmapData(image);
                const texture: egret.Texture = new egret.Texture();
                texture.bitmapData = bitmapData;
                item.textureData.texture = texture;
                item.isWait = false;
                self.loadedCache_.push(item);
            }
        };
    }

    private createHiDPICanvas(): void {
        this.canvasText_ = document.createElement("canvas");
        this.canvasText_.id = "canvasText";
        this.contextText_ = this.canvasText_.getContext("2d");
        this.contextRatio = this.calcPixelRatio();
    }

    private calcPixelRatio(): number {
        const devicePixelRatio: number = window.devicePixelRatio;
        const pixelRatio: number = this.contextText_.webkitBackingStorePixelRatio || this.contextText_.mozBackingStorePixelRatio
            || this.contextText_.msBackingStorePixelRatio || this.contextText_.oBackingStorePixelRatio || this.contextText_.backingStorePixelRatio || 1;
        
        return devicePixelRatio / pixelRatio;
    }

    private resizeCanvas(width: number, size: number): void {
        if (0 >= width || 0 >= size) {
        }

        const adjustWidth: number = width * this.contextRatio;

        if (this.canvasText_.width !== adjustWidth) {
            this.canvasText_.width = adjustWidth;
        }

        const adjustHeight: number = size * this.contextRatio;

        if (this.canvasText_.height !== adjustHeight) {
            this.canvasText_.height = adjustHeight;
        }

        this.canvasText_.style.width = width + "px";
        this.canvasText_.style.height = size + "px";
        this.contextText_.setTransform(this.contextRatio, 0, 0, this.contextRatio, 0, 0);
        this.contextText_.save();
        this.contextText_.setTransform(1, 0, 0, 1, 0, 0);
        this.contextText_.clearRect(0, 0, this.canvasText_.width, this.canvasText_.height);
        this.contextText_.restore();
    }

    private fontStyleFormat(options: any): string {
        let format: string = options.italic === "italic" ? "italic " : "normal ";
        format += options.bold === "bold" ? "bold " : "normal ";
        format += options.size + "px " + options.fontFamily;

        return format;
    }

    private remove(text: string): void {
        if (!this.caches_[text]) {
            return;
        }

        const item: TextCacheItem = this.caches_[text];
        item.dispose();
        this.caches_.remove(text);
    }

    private onTick(timestamp: number): boolean {
        if (this.loadedCache_.length === 0) {
            return false;
        }

        for (let i = 0, len = this.loadedCache_.length; i < len; ++i) {
            this.loadedCache_[i].execute();
        }

        this.loadedCache_ = [];

        return false;
    }

    set contextRatio(value) {
        this.contextRatio_ = value;
    }

    get contextRatio() {
        return this.contextRatio_;
    }
}