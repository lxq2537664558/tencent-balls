class Facade {
    protected static instance_: any;
    private model_: Model;
    private view_: View;
    private controller_: Controller;

    constructor() {
        this.initializeFacade();
    }

    public static getInstance(): Facade {
        if (!this.instance_) {
            this.instance_ = new Facade();
        }

        return this.instance_;
    }

    public initializeFacade(): void {
        this.initializeModel();
        this.initializeController();
        this.initializeView();
    }

    public registerCommand(name: string, executor: any): void {
        if (this.controller) {
            this.controller.registerCommand(name, executor);
        }
    }

    public removeCommand(name: string): void {
        if (this.controller) {
            this.controller.removeCommand(name);
        }
    }

    public hasCommand(name: string): boolean {
        if (this.controller) {
            return this.controller.hasCommand(name);
        }

        return false;
    }

    public registerProxy(proxy: Proxy): void {
        if (this.model) {
            return this.model.registerProxy(proxy);
        }

        return null;
    }

    public retrieveProxy(name: string): Proxy {
        if (this.model) {
            return this.model.retrieveProxy(name);
        }

        return null;
    }

    public removeProxy(name: string): Proxy {
        let proxy;

        if (this.model) {
            proxy = this.model.removeProxy(name);
        }

        return proxy;
    }

    public hasProxy(name: string): boolean {
        if (this.model) {
            return this.model.hasProxy(name);
        }

        return false;
    }

    public registerMediator(mediator: Mediator): void {
        if (this.view) {
            this.view.registerMediator(mediator);
        }
    }

    public removeMediator(name: string): Mediator {
        if (this.view) {
            return this.view.removeMediator(name);
        }

        return null;
    }

    public retrieveMediator(name: string): Mediator {
        if (this.view) {
            return this.view.retrieveMediator(name);
        }

        return null;
    }

    public hasMediator(name: string): boolean {
        if (this.view) {
            return this.view.hasMediator(name);
        }

        return false;
    }

    public sendNotification(name: string, params?: any, action?: string): void {
        this.notifyObservers(new CustomNotification(name, params, action));
    }

    private notifyObservers(notification: CustomNotification): void {
        if (this.view) {
            this.view.notifyObservers(notification);
        }
    }

    protected initializeModel(): void {
        if (!this.model) {
            this.model = Model.getInstance();
        }
    }

    protected initializeView(): void {
        if (!this.view) {
            this.view = View.getInstance();
        }
    }

    protected initializeController(): void {
        if (!this.controller) {
            this.controller = Controller.getInstance();
        }
    }        

    set model(value) {
        this.model_ = value;
    }

    get model() {
        return this.model_;
    }

    set view(value) {
        this.view_ = value;
    }

    get view() {
        return this.view_;
    }

    set controller(value) {
        this.controller_ = value;
    }

    get controller() {
        return this.controller_;
    }
}