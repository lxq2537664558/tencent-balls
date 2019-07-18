class SoundBase {
    private caches_: any;
    private loadedCaches_: Array<string>;
    private url_: string;
    protected volume_: number;
    protected sound_: egret.Sound;
    protected soundChannel_: egret.SoundChannel;

    constructor() {
        this.caches_ = {};
        this.loadedCaches_ = new Array<string>();
    }

    public play(url: string): void {
        CustomLogger.warn("SoundBase.play:");
    }

    public dealSoundTimer(): void {
        let elapsedTimestamp: number = egret.getTimer();
        const keys: Array<string> = Object.keys(this.caches_);

        for (let i = 0, len = keys.length; i < len; ++i) {
            const name: string = keys[i];

            if (this.checkCanCleanup(name)) {
                if ((elapsedTimestamp - this.caches_[name]) >= SoundManager.MAX_CACHE_TIME) {
                    delete this.caches_[name];
                    RES.destroyRes(name);
                }
            }
        }
    }

    public getSound(url: string): egret.Sound {
        const sound: egret.Sound = RES.getRes(url);

        if (sound) {
            if (this.caches_[url]) {
                this.caches_[url] = egret.getTimer();
            }
        }
        else {
            if (this.loadedCaches_.indexOf(url) !== -1) {
                return null;
            }

            this.loadedCaches_.push(url);
            CustomLogger.info("SoundBase.getSound: ", "load file " + name);
            ResourceUtils.getResByUrlRelative(url, this.onLoadResourceCompleted, this, RES.ResourceItem.TYPE_SOUND);
        }

        return sound;
    }

    protected playSound(sound: egret.Sound): void {
        CustomLogger.warn("SoundBase.playSound:");
    }

    protected loadedPlay(url: string, sound: egret.Sound): void {
        CustomLogger.warn("SoundBase.loadedPlay:");
    }

    protected checkCanCleanup(url: string): boolean {
        return true;
    }

    private onLoadResourceCompleted(sound: egret.Sound, url: string): void {
        CustomLogger.info("SoundBase.onLoadResourceCompleted: " + url);
        const index: number = this.loadedCaches_.indexOf(url);

        if (index !== -1) {
            this.loadedCaches_.splice(index, 1);
            this.caches_[url] = egret.getTimer();
            this.loadedPlay(url, sound);
        }
    }

    set url(value) {
        this.url_ = value;
    }

    get url() {
        return this.url_;
    }

    set volume(value) {
        this.volume_ = value;

        if (this.soundChannel) {
            this.soundChannel.volume = this.volume;
        }
    }

    get volume() {
        return this.volume_;
    }

    set sound(value) {
        this.sound_ = value;
    }

    get sound() {
        return this.sound_;
    }

    set soundChannel(value) {
        this.soundChannel_ = value;
    }

    get soundChannel() {
        return this.soundChannel_;
    }
}