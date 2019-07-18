class SceneBattleMediator extends Mediator {
    public static readonly NAME: string = "SceneBattleMediator";

    constructor(view: any) {
        super(SceneBattleMediator.NAME, view);
    }
}