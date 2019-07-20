class H5SDKCommand extends puremvc.SimpleCommand {
    public static readonly NAME: string = "H5SDKCommand";
    public static readonly LOGIN_SUCCESS: string = "LoginSuccess";

    public register(): void {
        this.facade().registerCommand(H5SDKCommand.LOGIN_SUCCESS, H5SDKCommand);
    }

    public execute(notification: puremvc.INotification): void {
        console.log("H5SDKCommand.execute:");
    }
}