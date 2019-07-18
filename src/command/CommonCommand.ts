class CommonCommand extends SimpleCommand {
    public static readonly NAME: string = "CommonCommand";
    public static readonly LOADING: string = "Loading";
    public static readonly LOGIN: string = "login";
    public static readonly START_ENTER_GAME: string = "StartEnterGame";
    public static readonly TO_SHARE: string = "ToShare";

    public register(): void {
        this.facade.registerCommand(DebugCommand.NAME, DebugCommand);
        this.facade.registerCommand(ShowDebugPanelCommand.NAME, ShowDebugPanelCommand);
        this.facade.registerCommand(CommonCommand.START_ENTER_GAME, StartEnterGameCommand);
        this.facade.registerCommand(CommonCommand.TO_SHARE, ShareCommand);
        this.facade.registerCommand(LoginResultCommand.NAME, LoginResultCommand);
        this.facade.registerCommand(LogoutCommand.NAME, LogoutCommand);
        this.facade.registerCommand(ReconnectCommand.NAME, ReconnectCommand);
        this.facade.registerCommand(OpenBeInviteCommand.NAME, OpenBeInviteCommand);
        this.facade.registerCommand(OpenTeamOnceCommand.NAME, OpenTeamOnceCommand);
        this.facade.registerCommand(OpenTeamSceneCommand.NAME, OpenTeamSceneCommand);
        this.facade.registerCommand(CreateTeamReadyCommand.NAME, CreateTeamReadyCommand);
        this.facade.registerCommand(UpdateUnionMemberDetailCommand.NAME, UpdateUnionMemberDetailCommand);
        this.facade.registerCommand(ServerErrorCommand.NAME, ServerErrorCommand);
        this.facade.registerCommand(UINotifyCommand.NAME, UINotifyCommand);
    }

    public execute(notification: CustomNotification): void {
    }
}