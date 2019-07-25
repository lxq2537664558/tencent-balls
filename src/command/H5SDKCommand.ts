class H5SDKCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "H5SDKCommand";

    constructor() {
        super();

        this.initializeNotifier(H5SDKCommand.NAME);
    }

    public register(): void {
    }    
}