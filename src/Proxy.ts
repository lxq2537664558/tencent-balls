class Proxy extends Notifier {
    public static NAME: string = "Proxy";
    private name_: string;
    private data_: any;

    constructor(name?: string, data?: any) {
        super();
        
        this.name = name !== null ? name : Proxy.NAME;
        this.data = data !== null ? data : null;
    }

    public onRegister(): void {
    }

    public onRemove(): void {
    }

    set name(value) {
        this.name_ = value;
    }

    get name() {
        return this.name_;
    }

    set data(value) {
        this.data_ = value;
    }

    get data() {
        return this.data_;
    }
}