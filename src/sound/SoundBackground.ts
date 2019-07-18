class SoundBackground extends SoundBase {
    constructor() {
        super();
    }

    public play(url: string): void {
        if (this.url !== url) {
            this.cleanup();
            this.url = url;
            const sound: egret.Sound = this.getSound(url);

            if (sound) {
                this.playSound(sound);
            }
        }
    }

    public stop(): void {
        if (this.soundChannel) {
            this.soundChannel.volume = 0;
            this.cleanup();
        }
    }

    protected playSound(sound: egret.Sound): void {
        this.sound = sound;
        this.doPlaySound();
    }

    private doPlaySound(): boolean {
        if (this.sound) {
            this.soundChannel = this.sound.play(0, 0);
            this.soundChannel.volume = this.volume;

            const self = this;

            if (egret.is(self.soundChannel, "egret.web.WebAudioSoundChannel")) {
                const loops: number = self.soundChannel["$loops"];

                self.soundChannel["onPlayEnd"] = () => {
                    if (loops === 1) {
                        self.soundChannel.stop();
                        self.soundChannel["dispatchEventWith"](egret.Event.SOUND_COMPLETE);
                    }
                    else {
                        if (loops > 0) {
                            --self.soundChannel["$loops"];
                        }

                        if (!this.soundChannel["$isStopped"]) {
                            this.soundChannel["$play"]();
                        }
                    }
                };
            }

            return true;
        }
    }

    private cleanup(): void {
        if (this.soundChannel) {
            this.soundChannel.stop();
        }

        this.soundChannel = null;
        this.sound = null;
        this.url = "";
    }

    protected loadedPlay(url: string, sound: egret.Sound): void {
        if (this.url === url) {
            this.playSound(sound);
        }
    }

    protected checkCanCleanup(url: string): boolean {
        return this.url !== url;
    }
}