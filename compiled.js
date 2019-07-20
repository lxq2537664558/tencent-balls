/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.HLCmd = (function() {

    /**
     * Namespace HLCmd.
     * @exports HLCmd
     * @namespace
     */
    var HLCmd = {};

    HLCmd.BallRoomUserInfo = (function() {

        /**
         * Properties of a BallRoomUserInfo.
         * @memberof HLCmd
         * @interface IBallRoomUserInfo
         * @property {number|null} [uid] BallRoomUserInfo uid
         * @property {string|null} [name] BallRoomUserInfo name
         * @property {number|null} [country] BallRoomUserInfo country
         * @property {number|null} [province] BallRoomUserInfo province
         * @property {number|null} [level] BallRoomUserInfo level
         * @property {number|null} [relationFlag] BallRoomUserInfo relationFlag
         * @property {number|null} [index] BallRoomUserInfo index
         * @property {number|null} [teamId] BallRoomUserInfo teamId
         * @property {number|null} [initLife] BallRoomUserInfo initLife
         * @property {number|null} [currLife] BallRoomUserInfo currLife
         * @property {number|null} [killCount] BallRoomUserInfo killCount
         * @property {string|null} [teamName] BallRoomUserInfo teamName
         * @property {string|null} [headImg] BallRoomUserInfo headImg
         * @property {number|null} [charId] BallRoomUserInfo charId
         * @property {number|null} [tail] BallRoomUserInfo tail
         * @property {number|null} [ring] BallRoomUserInfo ring
         * @property {number|null} [bead] BallRoomUserInfo bead
         * @property {number|null} [watcher] BallRoomUserInfo watcher
         * @property {number|null} [realCharId] BallRoomUserInfo realCharId
         * @property {number|null} [sex] BallRoomUserInfo sex
         */

        /**
         * Constructs a new BallRoomUserInfo.
         * @memberof HLCmd
         * @classdesc Represents a BallRoomUserInfo.
         * @implements IBallRoomUserInfo
         * @constructor
         * @param {HLCmd.IBallRoomUserInfo=} [properties] Properties to set
         */
        function BallRoomUserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BallRoomUserInfo uid.
         * @member {number} uid
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.uid = 0;

        /**
         * BallRoomUserInfo name.
         * @member {string} name
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.name = "";

        /**
         * BallRoomUserInfo country.
         * @member {number} country
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.country = 0;

        /**
         * BallRoomUserInfo province.
         * @member {number} province
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.province = 0;

        /**
         * BallRoomUserInfo level.
         * @member {number} level
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.level = 0;

        /**
         * BallRoomUserInfo relationFlag.
         * @member {number} relationFlag
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.relationFlag = 0;

        /**
         * BallRoomUserInfo index.
         * @member {number} index
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.index = 0;

        /**
         * BallRoomUserInfo teamId.
         * @member {number} teamId
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.teamId = 0;

        /**
         * BallRoomUserInfo initLife.
         * @member {number} initLife
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.initLife = 0;

        /**
         * BallRoomUserInfo currLife.
         * @member {number} currLife
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.currLife = 0;

        /**
         * BallRoomUserInfo killCount.
         * @member {number} killCount
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.killCount = 0;

        /**
         * BallRoomUserInfo teamName.
         * @member {string} teamName
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.teamName = "";

        /**
         * BallRoomUserInfo headImg.
         * @member {string} headImg
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.headImg = "";

        /**
         * BallRoomUserInfo charId.
         * @member {number} charId
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.charId = 0;

        /**
         * BallRoomUserInfo tail.
         * @member {number} tail
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.tail = 0;

        /**
         * BallRoomUserInfo ring.
         * @member {number} ring
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.ring = 0;

        /**
         * BallRoomUserInfo bead.
         * @member {number} bead
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.bead = 0;

        /**
         * BallRoomUserInfo watcher.
         * @member {number} watcher
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.watcher = 0;

        /**
         * BallRoomUserInfo realCharId.
         * @member {number} realCharId
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.realCharId = 0;

        /**
         * BallRoomUserInfo sex.
         * @member {number} sex
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         */
        BallRoomUserInfo.prototype.sex = 0;

        /**
         * Creates a new BallRoomUserInfo instance using the specified properties.
         * @function create
         * @memberof HLCmd.BallRoomUserInfo
         * @static
         * @param {HLCmd.IBallRoomUserInfo=} [properties] Properties to set
         * @returns {HLCmd.BallRoomUserInfo} BallRoomUserInfo instance
         */
        BallRoomUserInfo.create = function create(properties) {
            return new BallRoomUserInfo(properties);
        };

        /**
         * Encodes the specified BallRoomUserInfo message. Does not implicitly {@link HLCmd.BallRoomUserInfo.verify|verify} messages.
         * @function encode
         * @memberof HLCmd.BallRoomUserInfo
         * @static
         * @param {HLCmd.IBallRoomUserInfo} message BallRoomUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BallRoomUserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.country != null && message.hasOwnProperty("country"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.country);
            if (message.province != null && message.hasOwnProperty("province"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.province);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.level);
            if (message.relationFlag != null && message.hasOwnProperty("relationFlag"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.relationFlag);
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.index);
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.teamId);
            if (message.initLife != null && message.hasOwnProperty("initLife"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.initLife);
            if (message.currLife != null && message.hasOwnProperty("currLife"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.currLife);
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.killCount);
            if (message.teamName != null && message.hasOwnProperty("teamName"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.teamName);
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.headImg);
            if (message.charId != null && message.hasOwnProperty("charId"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.charId);
            if (message.tail != null && message.hasOwnProperty("tail"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.tail);
            if (message.ring != null && message.hasOwnProperty("ring"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.ring);
            if (message.bead != null && message.hasOwnProperty("bead"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.bead);
            if (message.watcher != null && message.hasOwnProperty("watcher"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.watcher);
            if (message.realCharId != null && message.hasOwnProperty("realCharId"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.realCharId);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.sex);
            return writer;
        };

        /**
         * Encodes the specified BallRoomUserInfo message, length delimited. Does not implicitly {@link HLCmd.BallRoomUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HLCmd.BallRoomUserInfo
         * @static
         * @param {HLCmd.IBallRoomUserInfo} message BallRoomUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BallRoomUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BallRoomUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof HLCmd.BallRoomUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HLCmd.BallRoomUserInfo} BallRoomUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BallRoomUserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HLCmd.BallRoomUserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.country = reader.int32();
                    break;
                case 4:
                    message.province = reader.int32();
                    break;
                case 5:
                    message.level = reader.int32();
                    break;
                case 6:
                    message.relationFlag = reader.uint32();
                    break;
                case 7:
                    message.index = reader.int32();
                    break;
                case 8:
                    message.teamId = reader.uint32();
                    break;
                case 9:
                    message.initLife = reader.int32();
                    break;
                case 10:
                    message.currLife = reader.int32();
                    break;
                case 11:
                    message.killCount = reader.int32();
                    break;
                case 12:
                    message.teamName = reader.string();
                    break;
                case 13:
                    message.headImg = reader.string();
                    break;
                case 14:
                    message.charId = reader.int32();
                    break;
                case 15:
                    message.tail = reader.int32();
                    break;
                case 16:
                    message.ring = reader.int32();
                    break;
                case 17:
                    message.bead = reader.int32();
                    break;
                case 18:
                    message.watcher = reader.int32();
                    break;
                case 19:
                    message.realCharId = reader.int32();
                    break;
                case 20:
                    message.sex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BallRoomUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HLCmd.BallRoomUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HLCmd.BallRoomUserInfo} BallRoomUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BallRoomUserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BallRoomUserInfo message.
         * @function verify
         * @memberof HLCmd.BallRoomUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BallRoomUserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isInteger(message.country))
                    return "country: integer expected";
            if (message.province != null && message.hasOwnProperty("province"))
                if (!$util.isInteger(message.province))
                    return "province: integer expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.relationFlag != null && message.hasOwnProperty("relationFlag"))
                if (!$util.isInteger(message.relationFlag))
                    return "relationFlag: integer expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                if (!$util.isInteger(message.teamId))
                    return "teamId: integer expected";
            if (message.initLife != null && message.hasOwnProperty("initLife"))
                if (!$util.isInteger(message.initLife))
                    return "initLife: integer expected";
            if (message.currLife != null && message.hasOwnProperty("currLife"))
                if (!$util.isInteger(message.currLife))
                    return "currLife: integer expected";
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                if (!$util.isInteger(message.killCount))
                    return "killCount: integer expected";
            if (message.teamName != null && message.hasOwnProperty("teamName"))
                if (!$util.isString(message.teamName))
                    return "teamName: string expected";
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                if (!$util.isString(message.headImg))
                    return "headImg: string expected";
            if (message.charId != null && message.hasOwnProperty("charId"))
                if (!$util.isInteger(message.charId))
                    return "charId: integer expected";
            if (message.tail != null && message.hasOwnProperty("tail"))
                if (!$util.isInteger(message.tail))
                    return "tail: integer expected";
            if (message.ring != null && message.hasOwnProperty("ring"))
                if (!$util.isInteger(message.ring))
                    return "ring: integer expected";
            if (message.bead != null && message.hasOwnProperty("bead"))
                if (!$util.isInteger(message.bead))
                    return "bead: integer expected";
            if (message.watcher != null && message.hasOwnProperty("watcher"))
                if (!$util.isInteger(message.watcher))
                    return "watcher: integer expected";
            if (message.realCharId != null && message.hasOwnProperty("realCharId"))
                if (!$util.isInteger(message.realCharId))
                    return "realCharId: integer expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            return null;
        };

        /**
         * Creates a BallRoomUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HLCmd.BallRoomUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HLCmd.BallRoomUserInfo} BallRoomUserInfo
         */
        BallRoomUserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.HLCmd.BallRoomUserInfo)
                return object;
            var message = new $root.HLCmd.BallRoomUserInfo();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.country != null)
                message.country = object.country | 0;
            if (object.province != null)
                message.province = object.province | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.relationFlag != null)
                message.relationFlag = object.relationFlag >>> 0;
            if (object.index != null)
                message.index = object.index | 0;
            if (object.teamId != null)
                message.teamId = object.teamId >>> 0;
            if (object.initLife != null)
                message.initLife = object.initLife | 0;
            if (object.currLife != null)
                message.currLife = object.currLife | 0;
            if (object.killCount != null)
                message.killCount = object.killCount | 0;
            if (object.teamName != null)
                message.teamName = String(object.teamName);
            if (object.headImg != null)
                message.headImg = String(object.headImg);
            if (object.charId != null)
                message.charId = object.charId | 0;
            if (object.tail != null)
                message.tail = object.tail | 0;
            if (object.ring != null)
                message.ring = object.ring | 0;
            if (object.bead != null)
                message.bead = object.bead | 0;
            if (object.watcher != null)
                message.watcher = object.watcher | 0;
            if (object.realCharId != null)
                message.realCharId = object.realCharId | 0;
            if (object.sex != null)
                message.sex = object.sex | 0;
            return message;
        };

        /**
         * Creates a plain object from a BallRoomUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HLCmd.BallRoomUserInfo
         * @static
         * @param {HLCmd.BallRoomUserInfo} message BallRoomUserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BallRoomUserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.name = "";
                object.country = 0;
                object.province = 0;
                object.level = 0;
                object.relationFlag = 0;
                object.index = 0;
                object.teamId = 0;
                object.initLife = 0;
                object.currLife = 0;
                object.killCount = 0;
                object.teamName = "";
                object.headImg = "";
                object.charId = 0;
                object.tail = 0;
                object.ring = 0;
                object.bead = 0;
                object.watcher = 0;
                object.realCharId = 0;
                object.sex = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.province != null && message.hasOwnProperty("province"))
                object.province = message.province;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.relationFlag != null && message.hasOwnProperty("relationFlag"))
                object.relationFlag = message.relationFlag;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                object.teamId = message.teamId;
            if (message.initLife != null && message.hasOwnProperty("initLife"))
                object.initLife = message.initLife;
            if (message.currLife != null && message.hasOwnProperty("currLife"))
                object.currLife = message.currLife;
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                object.killCount = message.killCount;
            if (message.teamName != null && message.hasOwnProperty("teamName"))
                object.teamName = message.teamName;
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                object.headImg = message.headImg;
            if (message.charId != null && message.hasOwnProperty("charId"))
                object.charId = message.charId;
            if (message.tail != null && message.hasOwnProperty("tail"))
                object.tail = message.tail;
            if (message.ring != null && message.hasOwnProperty("ring"))
                object.ring = message.ring;
            if (message.bead != null && message.hasOwnProperty("bead"))
                object.bead = message.bead;
            if (message.watcher != null && message.hasOwnProperty("watcher"))
                object.watcher = message.watcher;
            if (message.realCharId != null && message.hasOwnProperty("realCharId"))
                object.realCharId = message.realCharId;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            return object;
        };

        /**
         * Converts this BallRoomUserInfo to JSON.
         * @function toJSON
         * @memberof HLCmd.BallRoomUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BallRoomUserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BallRoomUserInfo;
    })();

    HLCmd.Cmd_CS = (function() {

        /**
         * Properties of a Cmd_CS.
         * @memberof HLCmd
         * @interface ICmd_CS
         * @property {number|null} [id] Cmd_CS id
         * @property {Uint8Array|null} [data] Cmd_CS data
         * @property {number|null} [seq] Cmd_CS seq
         */

        /**
         * Constructs a new Cmd_CS.
         * @memberof HLCmd
         * @classdesc Represents a Cmd_CS.
         * @implements ICmd_CS
         * @constructor
         * @param {HLCmd.ICmd_CS=} [properties] Properties to set
         */
        function Cmd_CS(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cmd_CS id.
         * @member {number} id
         * @memberof HLCmd.Cmd_CS
         * @instance
         */
        Cmd_CS.prototype.id = 0;

        /**
         * Cmd_CS data.
         * @member {Uint8Array} data
         * @memberof HLCmd.Cmd_CS
         * @instance
         */
        Cmd_CS.prototype.data = $util.newBuffer([]);

        /**
         * Cmd_CS seq.
         * @member {number} seq
         * @memberof HLCmd.Cmd_CS
         * @instance
         */
        Cmd_CS.prototype.seq = 0;

        /**
         * Creates a new Cmd_CS instance using the specified properties.
         * @function create
         * @memberof HLCmd.Cmd_CS
         * @static
         * @param {HLCmd.ICmd_CS=} [properties] Properties to set
         * @returns {HLCmd.Cmd_CS} Cmd_CS instance
         */
        Cmd_CS.create = function create(properties) {
            return new Cmd_CS(properties);
        };

        /**
         * Encodes the specified Cmd_CS message. Does not implicitly {@link HLCmd.Cmd_CS.verify|verify} messages.
         * @function encode
         * @memberof HLCmd.Cmd_CS
         * @static
         * @param {HLCmd.ICmd_CS} message Cmd_CS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cmd_CS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            if (message.seq != null && message.hasOwnProperty("seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.seq);
            return writer;
        };

        /**
         * Encodes the specified Cmd_CS message, length delimited. Does not implicitly {@link HLCmd.Cmd_CS.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HLCmd.Cmd_CS
         * @static
         * @param {HLCmd.ICmd_CS} message Cmd_CS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cmd_CS.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Cmd_CS message from the specified reader or buffer.
         * @function decode
         * @memberof HLCmd.Cmd_CS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HLCmd.Cmd_CS} Cmd_CS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cmd_CS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HLCmd.Cmd_CS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.seq = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Cmd_CS message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HLCmd.Cmd_CS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HLCmd.Cmd_CS} Cmd_CS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cmd_CS.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Cmd_CS message.
         * @function verify
         * @memberof HLCmd.Cmd_CS
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Cmd_CS.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            return null;
        };

        /**
         * Creates a Cmd_CS message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HLCmd.Cmd_CS
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HLCmd.Cmd_CS} Cmd_CS
         */
        Cmd_CS.fromObject = function fromObject(object) {
            if (object instanceof $root.HLCmd.Cmd_CS)
                return object;
            var message = new $root.HLCmd.Cmd_CS();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            if (object.seq != null)
                message.seq = object.seq >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Cmd_CS message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HLCmd.Cmd_CS
         * @static
         * @param {HLCmd.Cmd_CS} message Cmd_CS
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Cmd_CS.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.data = options.bytes === String ? "" : [];
                object.seq = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            return object;
        };

        /**
         * Converts this Cmd_CS to JSON.
         * @function toJSON
         * @memberof HLCmd.Cmd_CS
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Cmd_CS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Cmd_CS;
    })();

    HLCmd.Cmd_SC = (function() {

        /**
         * Properties of a Cmd_SC.
         * @memberof HLCmd
         * @interface ICmd_SC
         * @property {number|null} [id] Cmd_SC id
         * @property {Uint8Array|null} [data] Cmd_SC data
         * @property {number|null} [seq] Cmd_SC seq
         */

        /**
         * Constructs a new Cmd_SC.
         * @memberof HLCmd
         * @classdesc Represents a Cmd_SC.
         * @implements ICmd_SC
         * @constructor
         * @param {HLCmd.ICmd_SC=} [properties] Properties to set
         */
        function Cmd_SC(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cmd_SC id.
         * @member {number} id
         * @memberof HLCmd.Cmd_SC
         * @instance
         */
        Cmd_SC.prototype.id = 0;

        /**
         * Cmd_SC data.
         * @member {Uint8Array} data
         * @memberof HLCmd.Cmd_SC
         * @instance
         */
        Cmd_SC.prototype.data = $util.newBuffer([]);

        /**
         * Cmd_SC seq.
         * @member {number} seq
         * @memberof HLCmd.Cmd_SC
         * @instance
         */
        Cmd_SC.prototype.seq = 0;

        /**
         * Creates a new Cmd_SC instance using the specified properties.
         * @function create
         * @memberof HLCmd.Cmd_SC
         * @static
         * @param {HLCmd.ICmd_SC=} [properties] Properties to set
         * @returns {HLCmd.Cmd_SC} Cmd_SC instance
         */
        Cmd_SC.create = function create(properties) {
            return new Cmd_SC(properties);
        };

        /**
         * Encodes the specified Cmd_SC message. Does not implicitly {@link HLCmd.Cmd_SC.verify|verify} messages.
         * @function encode
         * @memberof HLCmd.Cmd_SC
         * @static
         * @param {HLCmd.ICmd_SC} message Cmd_SC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cmd_SC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            if (message.seq != null && message.hasOwnProperty("seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.seq);
            return writer;
        };

        /**
         * Encodes the specified Cmd_SC message, length delimited. Does not implicitly {@link HLCmd.Cmd_SC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HLCmd.Cmd_SC
         * @static
         * @param {HLCmd.ICmd_SC} message Cmd_SC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cmd_SC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Cmd_SC message from the specified reader or buffer.
         * @function decode
         * @memberof HLCmd.Cmd_SC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HLCmd.Cmd_SC} Cmd_SC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cmd_SC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HLCmd.Cmd_SC();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.seq = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Cmd_SC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HLCmd.Cmd_SC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HLCmd.Cmd_SC} Cmd_SC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cmd_SC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Cmd_SC message.
         * @function verify
         * @memberof HLCmd.Cmd_SC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Cmd_SC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            return null;
        };

        /**
         * Creates a Cmd_SC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HLCmd.Cmd_SC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HLCmd.Cmd_SC} Cmd_SC
         */
        Cmd_SC.fromObject = function fromObject(object) {
            if (object instanceof $root.HLCmd.Cmd_SC)
                return object;
            var message = new $root.HLCmd.Cmd_SC();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            if (object.seq != null)
                message.seq = object.seq >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Cmd_SC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HLCmd.Cmd_SC
         * @static
         * @param {HLCmd.Cmd_SC} message Cmd_SC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Cmd_SC.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.data = options.bytes === String ? "" : [];
                object.seq = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            return object;
        };

        /**
         * Converts this Cmd_SC to JSON.
         * @function toJSON
         * @memberof HLCmd.Cmd_SC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Cmd_SC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Cmd_SC;
    })();

    HLCmd.CmdBall_EnterRoom_SC = (function() {

        /**
         * Properties of a CmdBall_EnterRoom_SC.
         * @memberof HLCmd
         * @interface ICmdBall_EnterRoom_SC
         * @property {number|null} [errorCode] CmdBall_EnterRoom_SC errorCode
         * @property {number|null} [uid] CmdBall_EnterRoom_SC uid
         * @property {number|null} [x] CmdBall_EnterRoom_SC x
         * @property {number|null} [y] CmdBall_EnterRoom_SC y
         * @property {number|null} [remainTime] CmdBall_EnterRoom_SC remainTime
         */

        /**
         * Constructs a new CmdBall_EnterRoom_SC.
         * @memberof HLCmd
         * @classdesc Represents a CmdBall_EnterRoom_SC.
         * @implements ICmdBall_EnterRoom_SC
         * @constructor
         * @param {HLCmd.ICmdBall_EnterRoom_SC=} [properties] Properties to set
         */
        function CmdBall_EnterRoom_SC(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CmdBall_EnterRoom_SC errorCode.
         * @member {number} errorCode
         * @memberof HLCmd.CmdBall_EnterRoom_SC
         * @instance
         */
        CmdBall_EnterRoom_SC.prototype.errorCode = 0;

        /**
         * CmdBall_EnterRoom_SC uid.
         * @member {number} uid
         * @memberof HLCmd.CmdBall_EnterRoom_SC
         * @instance
         */
        CmdBall_EnterRoom_SC.prototype.uid = 0;

        /**
         * CmdBall_EnterRoom_SC x.
         * @member {number} x
         * @memberof HLCmd.CmdBall_EnterRoom_SC
         * @instance
         */
        CmdBall_EnterRoom_SC.prototype.x = 0;

        /**
         * CmdBall_EnterRoom_SC y.
         * @member {number} y
         * @memberof HLCmd.CmdBall_EnterRoom_SC
         * @instance
         */
        CmdBall_EnterRoom_SC.prototype.y = 0;

        /**
         * CmdBall_EnterRoom_SC remainTime.
         * @member {number} remainTime
         * @memberof HLCmd.CmdBall_EnterRoom_SC
         * @instance
         */
        CmdBall_EnterRoom_SC.prototype.remainTime = 0;

        /**
         * Creates a new CmdBall_EnterRoom_SC instance using the specified properties.
         * @function create
         * @memberof HLCmd.CmdBall_EnterRoom_SC
         * @static
         * @param {HLCmd.ICmdBall_EnterRoom_SC=} [properties] Properties to set
         * @returns {HLCmd.CmdBall_EnterRoom_SC} CmdBall_EnterRoom_SC instance
         */
        CmdBall_EnterRoom_SC.create = function create(properties) {
            return new CmdBall_EnterRoom_SC(properties);
        };

        /**
         * Encodes the specified CmdBall_EnterRoom_SC message. Does not implicitly {@link HLCmd.CmdBall_EnterRoom_SC.verify|verify} messages.
         * @function encode
         * @memberof HLCmd.CmdBall_EnterRoom_SC
         * @static
         * @param {HLCmd.ICmdBall_EnterRoom_SC} message CmdBall_EnterRoom_SC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdBall_EnterRoom_SC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uid);
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.y);
            if (message.remainTime != null && message.hasOwnProperty("remainTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.remainTime);
            return writer;
        };

        /**
         * Encodes the specified CmdBall_EnterRoom_SC message, length delimited. Does not implicitly {@link HLCmd.CmdBall_EnterRoom_SC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HLCmd.CmdBall_EnterRoom_SC
         * @static
         * @param {HLCmd.ICmdBall_EnterRoom_SC} message CmdBall_EnterRoom_SC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdBall_EnterRoom_SC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CmdBall_EnterRoom_SC message from the specified reader or buffer.
         * @function decode
         * @memberof HLCmd.CmdBall_EnterRoom_SC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HLCmd.CmdBall_EnterRoom_SC} CmdBall_EnterRoom_SC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdBall_EnterRoom_SC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HLCmd.CmdBall_EnterRoom_SC();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorCode = reader.int32();
                    break;
                case 2:
                    message.uid = reader.uint32();
                    break;
                case 3:
                    message.x = reader.int32();
                    break;
                case 4:
                    message.y = reader.int32();
                    break;
                case 5:
                    message.remainTime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CmdBall_EnterRoom_SC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HLCmd.CmdBall_EnterRoom_SC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HLCmd.CmdBall_EnterRoom_SC} CmdBall_EnterRoom_SC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdBall_EnterRoom_SC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CmdBall_EnterRoom_SC message.
         * @function verify
         * @memberof HLCmd.CmdBall_EnterRoom_SC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CmdBall_EnterRoom_SC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isInteger(message.errorCode))
                    return "errorCode: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.remainTime != null && message.hasOwnProperty("remainTime"))
                if (!$util.isInteger(message.remainTime))
                    return "remainTime: integer expected";
            return null;
        };

        /**
         * Creates a CmdBall_EnterRoom_SC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HLCmd.CmdBall_EnterRoom_SC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HLCmd.CmdBall_EnterRoom_SC} CmdBall_EnterRoom_SC
         */
        CmdBall_EnterRoom_SC.fromObject = function fromObject(object) {
            if (object instanceof $root.HLCmd.CmdBall_EnterRoom_SC)
                return object;
            var message = new $root.HLCmd.CmdBall_EnterRoom_SC();
            if (object.errorCode != null)
                message.errorCode = object.errorCode | 0;
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.remainTime != null)
                message.remainTime = object.remainTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a CmdBall_EnterRoom_SC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HLCmd.CmdBall_EnterRoom_SC
         * @static
         * @param {HLCmd.CmdBall_EnterRoom_SC} message CmdBall_EnterRoom_SC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CmdBall_EnterRoom_SC.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errorCode = 0;
                object.uid = 0;
                object.x = 0;
                object.y = 0;
                object.remainTime = 0;
            }
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.remainTime != null && message.hasOwnProperty("remainTime"))
                object.remainTime = message.remainTime;
            return object;
        };

        /**
         * Converts this CmdBall_EnterRoom_SC to JSON.
         * @function toJSON
         * @memberof HLCmd.CmdBall_EnterRoom_SC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CmdBall_EnterRoom_SC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CmdBall_EnterRoom_SC;
    })();

    return HLCmd;
})();

module.exports = $root;
