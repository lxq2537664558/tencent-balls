class Controller {
    private static instance_: Controller;
    private view_: View;
    private commandMap_: any;

    constructor() {
        this.commandMap_ = {};
        this.initializeController();
    }

    public static getInstance(): Controller {
        if (!this.instance_) {
            this.instance_ = new Controller();
        }

        return this.instance_;
    }

    public initializeController(): void {
        this.view = View.getInstance();
    }

    public executeCommand(notification: CustomNotification): void {
        const Ctor = this.commandMap_[notification.name];

        if (Ctor && Ctor.prototype.constructor) {
            new Ctor().execute(notification);
        }
    }

    public registerCommand(name: string, executor: any): void {
        if (!this.commandMap_[name]) {
            this.view.regeistObserver(name, new Observer(this.executeCommand, this));
        }

        this.commandMap_[name] = executor;
    }

    public hasCommand(name: string): boolean {
        return this.commandMap_[name] !== null;
    }

    public removeCommand(name: string): void {
        if (this.hasCommand(name)) {
            this.view.removeObserver(name, this);
            delete this.commandMap_[name];
        }
    }

    set view(value) {
        this.view_ = value;
    }

    get view() {
        return this.view_;
    }
}