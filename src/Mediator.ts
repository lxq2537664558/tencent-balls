class Mediator extends Notifier {
    public static NAME: string = "Mediator";
    private name_: string;
    private viewComponent_: any;

    constructor(name:string, viewComponent: any) {
        super();
        
        this.name_ = (name && name.length > 0 && name) || Mediator.NAME;
        this.viewComponent = viewComponent;
    }

    public listNotificationInterests(): Array<any> {
        return [];
    }

    public handleNotification(object: any): void {
    }

    public onRemove(): void {
    }

    public onRegister(): void {
    }

    get name() {
        return this.name_;
    }

    set viewComponent(value) {
        this.viewComponent_ = value;
    }

    get viewComponent() {
        return this.viewComponent_;
    }
}