class EnterGameProxy extends Proxy {
    public static NAME: string = "EnterGameProxy";

    private inviterJoinTeamOnce_: boolean;

    constructor() {
        super();

        this.inviterJoinTeamOnce = true;
    }

    public onRegister(): void {

    }

    set inviterJoinTeamOnce(value) {
        this.inviterJoinTeamOnce_ = value;
    }

    get inviterJoinTeamOnce() {
        return this.inviterJoinTeamOnce_;
    }
}