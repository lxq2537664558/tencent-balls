class ConnectServerCommand extends SimpleCommand {
    public static NAME: string = "ConnectServerCommand";

    public execute(notification: CustomNotification): void {
        if (!BattleManager.getInstance().isInGame || !BattleManager.getInstance().isBattlePlaying) {
            this.sendNotification(ApplicationFacade.CHANGE_LOADING, "connecting server...", UIConfig.SHOW_LOADING);
        }

        GamePauseCommand.pause = false;
        SocketServer.getInstance().close();
        HeartBeatSystem.getInstance().stopHeartBeat();
        SocketServer.getInstance().initServer(SocketConfig.getInstance().hallSocket, new ByteArrayMsgByProtobuf(SocketServer.getInstance()));
        SocketServer.getInstance().connect();
    }
}