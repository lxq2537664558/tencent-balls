class HLMsg {
    private id_: number;
    private msg_: MessageProtoBufModel;
    private protoPath_: string;

    constructor(id: number, msg: MessageProtoBufModel, protoPath: string) {
        this.id = id;
        this.msg = msg;
        this.protoPath = protoPath;
    }

    set id(value) {
        this.id_ = value;
    }

    get id() {
        return this.id_;
    }

    set msg(value) {
        this.msg_ = value;
    }

    get msg() {
        return this.msg_;
    }

    set protoPath(value) {
        this.protoPath_ = value;
    }

    get protoPath() {
        return this.protoPath_;
    }
}