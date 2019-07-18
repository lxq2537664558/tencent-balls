class View {
    private static instance_: View;
    private mediatorMap_: { [key: string]: Mediator };
    private observerMap_: { [key: string]: Array<any> };

    constructor() {
        this.mediatorMap_ = {};
        this.observerMap_ = {};
        this.initializeView();
    }

    public static getInstance(): View {
        if (!this.instance_) {
            this.instance_ = new View();
        }

        return this.instance_;
    }

    public regeistObserver(name: string, observer: Observer): void {
        const observers: Array<Observer> = this.observerMap_[name];

        if (observers) {
            observers.push(observer);
        }
        else {
            this.observerMap_[name] = [observer];
        }
    }

    public removeObserver(name: string, context: any): void {
        let contexts = this.observerMap_[name] || [];

        for (let len = contexts.length; len > 0; --len) {
            if (contexts[len].isSameContext(context)) {
                contexts.splice(len, 1);
                break;
            }
        }

        if (0 >= contexts.length) {
            delete this.observerMap_[name];
        }
    }

    public notifyObservers(notification: CustomNotification): void {
        const name: string = notification.name;
        const observers = this.observerMap_[name];

        if (observers) {
            for (let array = observers.slice(0), i = 0, len = array.length; i < len; ++i) {
                array[i].notifyObserver(notification);
            }
        }
    }

    public registerMediator(mediator: Mediator): void {
        const name: string = mediator.name;

        if (!this.mediatorMap_[name]) {
            this.mediatorMap_[name] = mediator;
            const array = mediator.listNotificationInterests();

            if (array.length > 0) {
                for (let observer = new Observer(mediator.handleNotification, mediator), i = 0, len = array.length; i < len; ++i) {
                    this.regeistObserver(array[i], observer);
                }
            }

            mediator.onRegister();
        }
    }

    public retrieveMediator(name: string): Mediator {
        return this.mediatorMap_[name] || null;
    }

    public removeMediator(name: string): Mediator {
        const mediator = this.mediatorMap_[name];

        if (!mediator) {
            return null;
        }

        const array = mediator.listNotificationInterests();

        if (array.length > 0) {
            for (let len = array.length; len > 0; --len) {
                this.removeObserver(array[len], mediator);
            }

            delete this.mediatorMap_[name];
            mediator.onRemove();
        }

        return mediator;
    }

    public hasMediator(name: string): boolean {
        return this.mediatorMap_[name] !== null;
    }

    private initializeView(): void {

    }
}