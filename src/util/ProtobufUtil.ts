class ProtoBufUtil {
    private root_: any;

    constructor() {
        protobuf.util.Long = Long;
        protobuf.configure();
        this.root_ = protobuf.Root.fromJSON("bundle_json");
    }
}