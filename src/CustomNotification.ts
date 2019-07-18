class CustomNotification {
    private name_: string;
    private params_: any;
    private type_: string;

    constructor(name: string, params?: any, type?: string) {
        this.name = name;
        this.params = params;
        this.type = type || "";
    }

    public toString(): string {
        let str: string = "CustomNotification Name: " + this.name;
        str += "\Body:";

        if (!this.params) {
            str += "null";
        }
        else {
            str += this.params.toString();
        }

        str += "\nType:";

        if (!this.type) {
            str += "null";
        }
        else {
            str += this.type;
        }

        return str;
    }

    set name(value) {
        this.name_ = value;
    }

    get name() {
        return this.name_;
    }

    set params(value) {
        this.params_ = value;
    }

    get params() {
        return this.params_;
    }

    set type(value) {
        this.type_ = value;
    }

    get type() {
        return this.type_;
    }
}