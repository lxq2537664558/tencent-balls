class StarSystem {
    private static instance_: StarSystem;

    public static getInstance(): StarSystem {
        if (!this.instance_) {
            this.instance_ = new StarSystem();
        }

        return this.instance_;
    }

    public initStarPool(): void {
        
    }
}