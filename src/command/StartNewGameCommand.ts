class StartNewGameCommand extends puremvc.SimpleCommand {
    constructor() {
        super();
    }

    public execute(notification: puremvc.INotification): void {
        this.beforeStartGame();
        const id: number = notification.params;
        const enterGameProxy: EnterGameProxy = <EnterGameProxy>(this.facade().retrieveProxy(EnterGameProxy.NAME));
        const playerProxy: PlayerProxy = <PlayerProxy>(this.facade().retrieveProxy(PlayerProxy.NAME));

        switch (id) {
            
        }
    }

    private reqStartMatch(id: number): void {
        const proxy: MatchProxy = <MatchProxy>(this.facade().retrieveProxy(MatchProxy.NAME));
        proxy.requestStartMatch(id);
    }

    private beforeStartGame(): void {
        SoundManager.getInstance().cleanup();
    }
}