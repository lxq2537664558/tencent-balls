class SoundManager {
    public static MAX_CACHE_TIME: number = 180000;
    private static instance_: SoundManager;

    private delaySounds_: any;
    private musicEnabled_: boolean; // 背景音乐
    private musicVolume_: number;
    private url_: string;
    private effectEnabled_: boolean; // 音效
    private effectVolume_: number;
    private music_: SoundBackground;
    private effect_: SoundEffect; // 音效

    constructor() {
        this.musicEnabled = true;
        this.effectEnabled = true;
        this.musicVolume = .5;
        this.effectVolume = .5;
        this.music_ = new SoundBackground();
        this.music_.volume = this.musicVolume;
        this.effect_ = new SoundEffect();
        this.effect_.volume = this.effectVolume;
    }

    public static getInstance(): SoundManager {
        if (!this.instance_) {
            this.instance_ = new SoundManager();
        }

        return this.instance_;
    }

    public playEffect(url: string): void {
        if (this.effectEnabled) {
            this.effect_.play(url);
        }
    }

    public playSound(url: string): void {
        this.url = url;

        if (this.musicEnabled) {
            this.music_.play(url);
        }
    }

    public stopSound(): void {
        this.music_.stop();
    }

    public cleanup(): void {
        this.music_.dealSoundTimer();
        this.effect_.dealSoundTimer();
    }

    set musicEnabled(value) {
        this.musicEnabled_ = value;

        if (this.musicEnabled) {
            if (this.url && this.url.length > 0) {
                this.playSound(this.url);
            }
        }
        else {
            this.stopSound();
        }
    }

    get musicEnabled() {
        return this.musicEnabled_;
    }

    set musicVolume(value) {
        value = Math.min(value, 1);
        value = Math.max(value, 0);
        this.musicVolume_ = value;
        this.music_.volume = value;
    }

    get musicVolume() {
        return this.musicVolume_;
    }

    set url(value) {
        this.url_ = value;
    }

    get url() {
        return this.url_;
    }

    set effectEnabled(value) {
        this.effectEnabled_ = value;
    }

    get effectEnabled() {
        return this.effectEnabled_;
    }

    set effectVolume(value) {
        value = Math.min(value, 1);
        value = Math.max(value, 0);
        this.effectVolume_ = value;
        this.effect_.volume = value;
    }

    get effectVolume() {
        return this.effectVolume_;
    }
}