class ProtobufUtils {
    private root_: any;

    constructor() {
        protobuf.util.Long = Long;
        protobuf.configure();
        this.root_ = protobuf.Root.fromJSON(RES.getRes("bundle_json"));
    }

    get root() {
        return this.root_;
    }
}