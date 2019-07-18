class ProtobufUtils {
    private root_: any;

    constructor() {
        this.root_ = protobuf.Root.fromJSON(RES.getRes("bundle_json"));
    }

    get root() {
        return this.root_;
    }
}