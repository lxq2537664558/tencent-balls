class H5SDKCommand extends SimpleCommand {
    public static readonly NAME: string = "H5SDKCommand";
    public static readonly LOGIN_SUCCESS: string = "LoginSuccess";

    public register(): void {
        this.facade.registerCommand(H5SDKCommand.LOGIN_SUCCESS, this);
    }

    public execute(notification: CustomNotification): void {
        console.log("H5SDKCommand.execute:");
    }
}