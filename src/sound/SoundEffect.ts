class SoundEffect extends SoundBase {
    constructor() {
        super();
    }

    public play(url: string): void {
        const sound: egret.Sound = this.getSound(url);

        if (sound) {
            this.playSound(sound);
        }
    }

    protected playSound(sound: egret.Sound): void {
        const channel: egret.SoundChannel = sound.play(0, 1);
        channel.volume = this.volume;
    }

    protected loadedPlay(url: string, sound: egret.Sound): void {
        CustomLogger.info("SoundEffect.loadedPlay: ", url);
        this.playSound(sound);
    }
}