import * as $protobuf from "protobufjs";

/** Namespace HLCmd. */
export namespace HLCmd {

    /** Properties of a BallRoomUserInfo. */
    interface IBallRoomUserInfo {

        /** BallRoomUserInfo uid */
        uid?: (number|null);

        /** BallRoomUserInfo name */
        name?: (string|null);

        /** BallRoomUserInfo country */
        country?: (number|null);

        /** BallRoomUserInfo province */
        province?: (number|null);

        /** BallRoomUserInfo level */
        level?: (number|null);

        /** BallRoomUserInfo relationFlag */
        relationFlag?: (number|null);

        /** BallRoomUserInfo index */
        index?: (number|null);

        /** BallRoomUserInfo teamId */
        teamId?: (number|null);

        /** BallRoomUserInfo initLife */
        initLife?: (number|null);

        /** BallRoomUserInfo currLife */
        currLife?: (number|null);

        /** BallRoomUserInfo killCount */
        killCount?: (number|null);

        /** BallRoomUserInfo teamName */
        teamName?: (string|null);

        /** BallRoomUserInfo headImg */
        headImg?: (string|null);

        /** BallRoomUserInfo charId */
        charId?: (number|null);

        /** BallRoomUserInfo tail */
        tail?: (number|null);

        /** BallRoomUserInfo ring */
        ring?: (number|null);

        /** BallRoomUserInfo bead */
        bead?: (number|null);

        /** BallRoomUserInfo watcher */
        watcher?: (number|null);

        /** BallRoomUserInfo realCharId */
        realCharId?: (number|null);

        /** BallRoomUserInfo sex */
        sex?: (number|null);
    }

    /** Represents a BallRoomUserInfo. */
    class BallRoomUserInfo implements IBallRoomUserInfo {

        /**
         * Constructs a new BallRoomUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: HLCmd.IBallRoomUserInfo);

        /** BallRoomUserInfo uid. */
        public uid: number;

        /** BallRoomUserInfo name. */
        public name: string;

        /** BallRoomUserInfo country. */
        public country: number;

        /** BallRoomUserInfo province. */
        public province: number;

        /** BallRoomUserInfo level. */
        public level: number;

        /** BallRoomUserInfo relationFlag. */
        public relationFlag: number;

        /** BallRoomUserInfo index. */
        public index: number;

        /** BallRoomUserInfo teamId. */
        public teamId: number;

        /** BallRoomUserInfo initLife. */
        public initLife: number;

        /** BallRoomUserInfo currLife. */
        public currLife: number;

        /** BallRoomUserInfo killCount. */
        public killCount: number;

        /** BallRoomUserInfo teamName. */
        public teamName: string;

        /** BallRoomUserInfo headImg. */
        public headImg: string;

        /** BallRoomUserInfo charId. */
        public charId: number;

        /** BallRoomUserInfo tail. */
        public tail: number;

        /** BallRoomUserInfo ring. */
        public ring: number;

        /** BallRoomUserInfo bead. */
        public bead: number;

        /** BallRoomUserInfo watcher. */
        public watcher: number;

        /** BallRoomUserInfo realCharId. */
        public realCharId: number;

        /** BallRoomUserInfo sex. */
        public sex: number;

        /**
         * Creates a new BallRoomUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BallRoomUserInfo instance
         */
        public static create(properties?: HLCmd.IBallRoomUserInfo): HLCmd.BallRoomUserInfo;

        /**
         * Encodes the specified BallRoomUserInfo message. Does not implicitly {@link HLCmd.BallRoomUserInfo.verify|verify} messages.
         * @param message BallRoomUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HLCmd.IBallRoomUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BallRoomUserInfo message, length delimited. Does not implicitly {@link HLCmd.BallRoomUserInfo.verify|verify} messages.
         * @param message BallRoomUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HLCmd.IBallRoomUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BallRoomUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BallRoomUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HLCmd.BallRoomUserInfo;

        /**
         * Decodes a BallRoomUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BallRoomUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HLCmd.BallRoomUserInfo;

        /**
         * Verifies a BallRoomUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BallRoomUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BallRoomUserInfo
         */
        public static fromObject(object: { [k: string]: any }): HLCmd.BallRoomUserInfo;

        /**
         * Creates a plain object from a BallRoomUserInfo message. Also converts values to other types if specified.
         * @param message BallRoomUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HLCmd.BallRoomUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BallRoomUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Cmd_CS. */
    interface ICmd_CS {

        /** Cmd_CS id */
        id?: (number|null);

        /** Cmd_CS data */
        data?: (Uint8Array|null);

        /** Cmd_CS seq */
        seq?: (number|null);
    }

    /** Represents a Cmd_CS. */
    class Cmd_CS implements ICmd_CS {

        /**
         * Constructs a new Cmd_CS.
         * @param [properties] Properties to set
         */
        constructor(properties?: HLCmd.ICmd_CS);

        /** Cmd_CS id. */
        public id: number;

        /** Cmd_CS data. */
        public data: Uint8Array;

        /** Cmd_CS seq. */
        public seq: number;

        /**
         * Creates a new Cmd_CS instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Cmd_CS instance
         */
        public static create(properties?: HLCmd.ICmd_CS): HLCmd.Cmd_CS;

        /**
         * Encodes the specified Cmd_CS message. Does not implicitly {@link HLCmd.Cmd_CS.verify|verify} messages.
         * @param message Cmd_CS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HLCmd.ICmd_CS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Cmd_CS message, length delimited. Does not implicitly {@link HLCmd.Cmd_CS.verify|verify} messages.
         * @param message Cmd_CS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HLCmd.ICmd_CS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Cmd_CS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Cmd_CS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HLCmd.Cmd_CS;

        /**
         * Decodes a Cmd_CS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Cmd_CS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HLCmd.Cmd_CS;

        /**
         * Verifies a Cmd_CS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Cmd_CS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Cmd_CS
         */
        public static fromObject(object: { [k: string]: any }): HLCmd.Cmd_CS;

        /**
         * Creates a plain object from a Cmd_CS message. Also converts values to other types if specified.
         * @param message Cmd_CS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HLCmd.Cmd_CS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Cmd_CS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Cmd_SC. */
    interface ICmd_SC {

        /** Cmd_SC id */
        id?: (number|null);

        /** Cmd_SC data */
        data?: (Uint8Array|null);

        /** Cmd_SC seq */
        seq?: (number|null);
    }

    /** Represents a Cmd_SC. */
    class Cmd_SC implements ICmd_SC {

        /**
         * Constructs a new Cmd_SC.
         * @param [properties] Properties to set
         */
        constructor(properties?: HLCmd.ICmd_SC);

        /** Cmd_SC id. */
        public id: number;

        /** Cmd_SC data. */
        public data: Uint8Array;

        /** Cmd_SC seq. */
        public seq: number;

        /**
         * Creates a new Cmd_SC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Cmd_SC instance
         */
        public static create(properties?: HLCmd.ICmd_SC): HLCmd.Cmd_SC;

        /**
         * Encodes the specified Cmd_SC message. Does not implicitly {@link HLCmd.Cmd_SC.verify|verify} messages.
         * @param message Cmd_SC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HLCmd.ICmd_SC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Cmd_SC message, length delimited. Does not implicitly {@link HLCmd.Cmd_SC.verify|verify} messages.
         * @param message Cmd_SC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HLCmd.ICmd_SC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Cmd_SC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Cmd_SC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HLCmd.Cmd_SC;

        /**
         * Decodes a Cmd_SC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Cmd_SC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HLCmd.Cmd_SC;

        /**
         * Verifies a Cmd_SC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Cmd_SC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Cmd_SC
         */
        public static fromObject(object: { [k: string]: any }): HLCmd.Cmd_SC;

        /**
         * Creates a plain object from a Cmd_SC message. Also converts values to other types if specified.
         * @param message Cmd_SC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HLCmd.Cmd_SC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Cmd_SC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CmdBall_EnterRoom_SC. */
    interface ICmdBall_EnterRoom_SC {

        /** CmdBall_EnterRoom_SC errorCode */
        errorCode?: (number|null);

        /** CmdBall_EnterRoom_SC uid */
        uid?: (number|null);

        /** CmdBall_EnterRoom_SC x */
        x?: (number|null);

        /** CmdBall_EnterRoom_SC y */
        y?: (number|null);

        /** CmdBall_EnterRoom_SC remainTime */
        remainTime?: (number|null);
    }

    /** Represents a CmdBall_EnterRoom_SC. */
    class CmdBall_EnterRoom_SC implements ICmdBall_EnterRoom_SC {

        /**
         * Constructs a new CmdBall_EnterRoom_SC.
         * @param [properties] Properties to set
         */
        constructor(properties?: HLCmd.ICmdBall_EnterRoom_SC);

        /** CmdBall_EnterRoom_SC errorCode. */
        public errorCode: number;

        /** CmdBall_EnterRoom_SC uid. */
        public uid: number;

        /** CmdBall_EnterRoom_SC x. */
        public x: number;

        /** CmdBall_EnterRoom_SC y. */
        public y: number;

        /** CmdBall_EnterRoom_SC remainTime. */
        public remainTime: number;

        /**
         * Creates a new CmdBall_EnterRoom_SC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdBall_EnterRoom_SC instance
         */
        public static create(properties?: HLCmd.ICmdBall_EnterRoom_SC): HLCmd.CmdBall_EnterRoom_SC;

        /**
         * Encodes the specified CmdBall_EnterRoom_SC message. Does not implicitly {@link HLCmd.CmdBall_EnterRoom_SC.verify|verify} messages.
         * @param message CmdBall_EnterRoom_SC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HLCmd.ICmdBall_EnterRoom_SC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdBall_EnterRoom_SC message, length delimited. Does not implicitly {@link HLCmd.CmdBall_EnterRoom_SC.verify|verify} messages.
         * @param message CmdBall_EnterRoom_SC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HLCmd.ICmdBall_EnterRoom_SC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdBall_EnterRoom_SC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdBall_EnterRoom_SC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HLCmd.CmdBall_EnterRoom_SC;

        /**
         * Decodes a CmdBall_EnterRoom_SC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdBall_EnterRoom_SC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HLCmd.CmdBall_EnterRoom_SC;

        /**
         * Verifies a CmdBall_EnterRoom_SC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdBall_EnterRoom_SC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdBall_EnterRoom_SC
         */
        public static fromObject(object: { [k: string]: any }): HLCmd.CmdBall_EnterRoom_SC;

        /**
         * Creates a plain object from a CmdBall_EnterRoom_SC message. Also converts values to other types if specified.
         * @param message CmdBall_EnterRoom_SC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HLCmd.CmdBall_EnterRoom_SC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdBall_EnterRoom_SC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
