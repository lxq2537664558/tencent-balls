class TextTextureCaches {
    private static instance_: TextTextureCaches;

    public static getInstance(): TextTextureCaches {
        if (!this.instance_) {
            this.instance_ = new TextTextureCaches();
        }

        return this.instance_;
    }

    public dispose(): void {
        
    }
}