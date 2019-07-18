var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/*v1.0.3_1*/ if (typeof GameGlobal !== "undefined" && !GameGlobal.window)
    GameGlobal.window = GameGlobal;
!function (e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.MGOBE = t() : e.MGOBE = t(); }(window, function () { return function (e) { var t = {}; function s(_) { if (t[_])
    return t[_].exports; var n = t[_] = { i: _, l: !1, exports: {} }; return e[_].call(n.exports, n, n.exports, s), n.l = !0, n.exports; } return s.m = e, s.c = t, s.d = function (e, t, _) { s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: _ }); }, s.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, s.t = function (e, t) { if (1 & t && (e = s(e)), 8 & t)
    return e; if (4 & t && "object" == typeof e && e && e.__esModule)
    return e; var _ = Object.create(null); if (s.r(_), Object.defineProperty(_, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
    for (var n in e)
        s.d(_, n, function (t) { return e[t]; }.bind(null, n)); return _; }, s.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return s.d(t, "a", t), t; }, s.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, s.p = "", s(s.s = 11); }([function (e, t, s) {
        "use strict";
        var _ = s(1);
        var n = s(2), o = s(3);
        s.d(t, "j", function () { return i; }), s.d(t, "l", function () { return E; }), s.d(t, "k", function () { return a; }), s.d(t, "d", function () { return R; }), s.d(t, "h", function () { return c; }), s.d(t, "i", function () { return C; }), s.d(t, "a", function () { return d; }), s.d(t, "e", function () { return l; }), s.d(t, "f", function () { return O; }), s.d(t, "g", function () { return S; }), s.d(t, "c", function () { return n.a; }), s.d(t, "b", function () { return o.a; });
        s(8);
        var r = s(6), i = { pingTimeout: 5e3, reconnectInterval: 500, reconnectMaxTimes: 15, resendInterval: 1e3, resendTimeout: 2e4, url: void 0 }, E = { version: r.version, appName: void 0, cmd: "", seq: void 0, clientIp: void 0, serviceIp: void 0, business: void 0, authKey: void 0, authType: void 0, authIp: void 0, gameId: void 0, uid: void 0, playerId: void 0, body: void 0 }, a = { gameId: void 0, openId: void 0, secretKey: void 0 };
        var R, c, C, d;
        !function (e) { var t = {}; e.getInfo = (function () { return t; }), e.setInfo = (function (e) { return t = e; }); }(R || (R = {})), function (e) { var t; !function (e) { e[e.INITED = 1] = "INITED", e[e.INITING = 2] = "INITING", e[e.UNINIT = 3] = "UNINIT"; }(t = e.StatusType || (e.StatusType = {})); var s = t.UNINIT; e.isInited = (function () { return s === t.INITED; }), e.isIniting = (function () { return s === t.INITING; }), e.isUnInit = (function () { return s === t.UNINIT; }), e.setStatus = (function (e) { return s = e; }); }(c || (c = {})), function (e) { var t; !function (e) { e[e.LOGIN = 1] = "LOGIN", e[e.LOGINING = 2] = "LOGINING", e[e.LOGOUT = 3] = "LOGOUT", e[e.LOGOUTING = 4] = "LOGOUTING"; }(t = e.StatusType || (e.StatusType = {})); var s = t.LOGOUT, _ = 0, n = ""; e.isStatus = (function (e) { return s === e; }), e.setStatus = (function (e) { s = e, e === t.LOGIN && (_ = 0); }), e.setErrCode = (function (e, t) { _ = e, n = t; }), e.getErrCode = (function () { return _; }), e.getErrMsg = (function () { return n; }); }(C || (C = {})), function (e) { var t; !function (e) { e[e.CHECKING = 1] = "CHECKING", e[e.CHECKED = 2] = "CHECKED", e[e.OFFLINE = 3] = "OFFLINE"; }(t = e.StatusType || (e.StatusType = {})); var s = t.CHECKING; e.isChecked = (function () { return s === t.CHECKED; }), e.isOffline = (function () { return s === t.OFFLINE; }), e.setStatus = (function (e) { return s = e; }); }(d || (d = {}));
        var l = _.a.ClientSendServerReqWrap2Cmd, O = _.a.ServerSendClientBstWrap2Type, S = 5443;
    }, function (e, t, s) {
        "use strict";
        var _;
        s.d(t, "a", function () { return _; }), function (e) { var t, s, _, n, o, r, i, E, a, R, c; !function (e) { e[e.COMMON = 0] = "COMMON", e[e.RELAY = 1] = "RELAY"; }(t = e.ConnectionType || (e.ConnectionType = {})), function (e) { e[e.E_PUSH_TYPE_TEST = 0] = "E_PUSH_TYPE_TEST", e[e.E_PUSH_TYPE_RELAY = 1] = "E_PUSH_TYPE_RELAY", e[e.E_PUSH_TYPE_GAMESVR = 2] = "E_PUSH_TYPE_GAMESVR", e[e.E_PUSH_TYPE_JOIN_ROOM = 100] = "E_PUSH_TYPE_JOIN_ROOM", e[e.E_PUSH_TYPE_LEAVE_ROOM = 101] = "E_PUSH_TYPE_LEAVE_ROOM", e[e.E_PUSH_TYPE_DISMISS_ROOM = 102] = "E_PUSH_TYPE_DISMISS_ROOM", e[e.E_PUSH_TYPE_REMOVE_PLAYER = 103] = "E_PUSH_TYPE_REMOVE_PLAYER", e[e.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY = 104] = "E_PUSH_TYPE_MODIFY_ROOM_PROPERTY", e[e.E_PUSH_TYPE_NETWORK_STATE = 105] = "E_PUSH_TYPE_NETWORK_STATE", e[e.E_PUSH_TYPE_ROOM_CHAT = 106] = "E_PUSH_TYPE_ROOM_CHAT", e[e.E_PUSH_TYPE_PLAYER_STATE = 107] = "E_PUSH_TYPE_PLAYER_STATE", e[e.E_PUSH_TYPE_START_GAME = 108] = "E_PUSH_TYPE_START_GAME", e[e.E_PUSH_TYPE_STOP_GAME = 109] = "E_PUSH_TYPE_STOP_GAME", e[e.E_PUSH_TYPE_CREATE_ROOM = 110] = "E_PUSH_TYPE_CREATE_ROOM", e[e.E_PUSH_TYPE_DESTROY_ROOM = 111] = "E_PUSH_TYPE_DESTROY_ROOM", e[e.E_PUSH_TYPE_MATCH_SUCCESS = 200] = "E_PUSH_TYPE_MATCH_SUCCESS", e[e.E_PUSH_TYPE_MATCH_TIMEOUT = 201] = "E_PUSH_TYPE_MATCH_TIMEOUT"; }(s = e.ServerSendClientBstWrap2Type || (e.ServerSendClientBstWrap2Type = {})), function (e) { e[e.E_CMD_INVALID = 0] = "E_CMD_INVALID", e[e.E_CMD_HEART_BEAT_REQ = 100] = "E_CMD_HEART_BEAT_REQ", e[e.E_CMD_CHECK_LOGIN_REQ = 101] = "E_CMD_CHECK_LOGIN_REQ", e[e.E_CMD_LOGIN_TO_ROOM_REQ = 102] = "E_CMD_LOGIN_TO_ROOM_REQ", e[e.E_CMD_FORWARD_TO_RELAY_REQ = 103] = "E_CMD_FORWARD_TO_RELAY_REQ", e[e.E_CMD_LOGIN_REQ = 1e3] = "E_CMD_LOGIN_REQ", e[e.E_CMD_LOGOUT_REQ = 1001] = "E_CMD_LOGOUT_REQ", e[e.E_CMD_AUTH_REQ = 1002] = "E_CMD_AUTH_REQ", e[e.E_CMD_QUERY_BY_PLAYER_ID_REQ = 1003] = "E_CMD_QUERY_BY_PLAYER_ID_REQ", e[e.E_CMD_QUERY_BY_GAME_ID_REQ = 1004] = "E_CMD_QUERY_BY_GAME_ID_REQ", e[e.E_CMD_GET_ROOM_DETAIL_REQ = 2001] = "E_CMD_GET_ROOM_DETAIL_REQ", e[e.E_CMD_JOIN_ROOM_REQ = 2002] = "E_CMD_JOIN_ROOM_REQ", e[e.E_CMD_QUIT_ROOM_REQ = 2003] = "E_CMD_QUIT_ROOM_REQ", e[e.E_CMD_CREATE_ROOM_REQ = 2004] = "E_CMD_CREATE_ROOM_REQ", e[e.E_CMD_DESTORY_ROOM_REQ = 2005] = "E_CMD_DESTORY_ROOM_REQ", e[e.E_CMD_REMOVE_MEMBER_REQ = 2006] = "E_CMD_REMOVE_MEMBER_REQ", e[e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ = 2007] = "E_CMD_CHANGE_ROOM_PROPERTIS_REQ", e[e.E_CMD_DISSMISS_ROOM_REQ = 2008] = "E_CMD_DISSMISS_ROOM_REQ", e[e.E_CMD_CHANGE_PLAYER_STATE_REQ = 2009] = "E_CMD_CHANGE_PLAYER_STATE_REQ", e[e.E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ = 2010] = "E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ", e[e.E_CMD_ROOM_CHAT_REQ = 2011] = "E_CMD_ROOM_CHAT_REQ", e[e.E_CMD_START_FRAME_SYNC_REQ = 2012] = "E_CMD_START_FRAME_SYNC_REQ", e[e.E_CMD_STOP_FRAME_SYNC_REQ = 2013] = "E_CMD_STOP_FRAME_SYNC_REQ", e[e.E_CMD_GET_ROOM_LIST_REQ = 2014] = "E_CMD_GET_ROOM_LIST_REQ", e[e.E_CMD_MATCH_ROOM_SIMPLE_REQ = 3001] = "E_CMD_MATCH_ROOM_SIMPLE_REQ", e[e.E_CMD_MATCH_USER_SIMPLE_REQ = 3002] = "E_CMD_MATCH_USER_SIMPLE_REQ", e[e.E_CMD_MATCH_CANCEL_MATCH_REQ = 3003] = "E_CMD_MATCH_CANCEL_MATCH_REQ", e[e.E_CMD_MATCH_ROOM_COMPLEX_REQ = 3004] = "E_CMD_MATCH_ROOM_COMPLEX_REQ", e[e.E_CMD_MATCH_PLAYER_COMPLEX_REQ = 3005] = "E_CMD_MATCH_PLAYER_COMPLEX_REQ", e[e.E_CMD_RELAY_SEND_FRAME_REQ = 4e3] = "E_CMD_RELAY_SEND_FRAME_REQ", e[e.E_CMD_RELAY_REQUEST_FRAME_REQ = 4001] = "E_CMD_RELAY_REQUEST_FRAME_REQ", e[e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ = 4002] = "E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ", e[e.E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ = 4003] = "E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ", e[e.E_CMD_NOTIFY_JOIN_ROOM = 5e3] = "E_CMD_NOTIFY_JOIN_ROOM", e[e.E_CMD_NOTIFY_QUIT_ROOM = 5001] = "E_CMD_NOTIFY_QUIT_ROOM", e[e.E_CMD_NOTIFY_DESTORY_ROOM = 5002] = "E_CMD_NOTIFY_DESTORY_ROOM", e[e.E_CMD_NOTIFY_NET_STATE = 5003] = "E_CMD_NOTIFY_NET_STATE", e[e.E_CMD_NOTIFY_KICK_MEMBER = 5004] = "E_CMD_NOTIFY_KICK_MEMBER", e[e.E_CMD_GET_ADDR_BY_ROUTER_ID_REQ = 6e3] = "E_CMD_GET_ADDR_BY_ROUTER_ID_REQ"; }(_ = e.ClientSendServerReqWrap2Cmd || (e.ClientSendServerReqWrap2Cmd = {})), function (e) { e[e.EC_OK = 0] = "EC_OK", e[e.EC_REQ_BAD_PKG = 1] = "EC_REQ_BAD_PKG", e[e.EC_CMD_INVALID = 2] = "EC_CMD_INVALID", e[e.EC_PARAMS_INVALID = 3] = "EC_PARAMS_INVALID", e[e.EC_INNER_ERROR = 4] = "EC_INNER_ERROR", e[e.EC_TIME_OUT = 5] = "EC_TIME_OUT", e[e.EC_SERVER_BUSY = 6] = "EC_SERVER_BUSY", e[e.EC_NO_RIGHT = 7] = "EC_NO_RIGHT", e[e.EC_ACCESS_CMD_INVALID_ERR = 200] = "EC_ACCESS_CMD_INVALID_ERR", e[e.EC_ACCESS_CMD_GET_TOKEN_ERR = 201] = "EC_ACCESS_CMD_GET_TOKEN_ERR", e[e.EC_ACCESS_CMD_TOKEN_PRE_EXPIRE = 202] = "EC_ACCESS_CMD_TOKEN_PRE_EXPIRE", e[e.EC_ACCESS_CMD_INVALID_TOKEN = 203] = "EC_ACCESS_CMD_INVALID_TOKEN", e[e.EC_ACCESS_PUSH_SERIALIZE_ERR = 204] = "EC_ACCESS_PUSH_SERIALIZE_ERR", e[e.EC_ACCESS_LOGIN_BODY_PARSE_ERR = 205] = "EC_ACCESS_LOGIN_BODY_PARSE_ERR", e[e.EC_ACCESS_CONN_ERR = 206] = "EC_ACCESS_CONN_ERR", e[e.EC_ACCESS_GET_RS_IP_ERR = 207] = "EC_ACCESS_GET_RS_IP_ERR", e[e.EC_ACCESS_ADD_COMM_CONN_ERR = 208] = "EC_ACCESS_ADD_COMM_CONN_ERR", e[e.EC_ACCESS_ADD_HEART_CONN_ERR = 209] = "EC_ACCESS_ADD_HEART_CONN_ERR", e[e.EC_ACCESS_ADD_RELAY_CONN_ERR = 210] = "EC_ACCESS_ADD_RELAY_CONN_ERR", e[e.EC_ACCESS_HEART_BODY_PARSE_ERR = 211] = "EC_ACCESS_HEART_BODY_PARSE_ERR", e[e.EC_ACCESS_GET_COMM_CONNECT_ERR = 212] = "EC_ACCESS_GET_COMM_CONNECT_ERR", e[e.EC_ACCESS_GET_RELAY_CONNECT_ERR = 213] = "EC_ACCESS_GET_RELAY_CONNECT_ERR", e[e.EC_PLAYER_GAME_NOT_EXIST = 1e4] = "EC_PLAYER_GAME_NOT_EXIST", e[e.EC_PLAYER_SECRET_KEY_FAIL = 10001] = "EC_PLAYER_SECRET_KEY_FAIL", e[e.EC_PLAYER_SIGN_ERR = 10002] = "EC_PLAYER_SIGN_ERR", e[e.EC_PLAYER_DUPLICATE_REQ = 10003] = "EC_PLAYER_DUPLICATE_REQ", e[e.EC_PLAYER_TIMESTAMP_INVALID = 10004] = "EC_PLAYER_TIMESTAMP_INVALID", e[e.EC_PLAYER_QUERY_PLAYER_FAIL = 10005] = "EC_PLAYER_QUERY_PLAYER_FAIL", e[e.EC_PLAYER_ADD_PLAYER_FAIL = 10006] = "EC_PLAYER_ADD_PLAYER_FAIL", e[e.EC_PLAYER_QUERY_GAME_FAIL = 10007] = "EC_PLAYER_QUERY_GAME_FAIL", e[e.EC_PLAYER_RECORD_NUM_ERR = 10008] = "EC_PLAYER_RECORD_NUM_ERR", e[e.EC_PLAYER_GET_TOKEN_FAIL = 10009] = "EC_PLAYER_GET_TOKEN_FAIL", e[e.EC_PLAYER_TOKEN_NOT_EXIST = 10010] = "EC_PLAYER_TOKEN_NOT_EXIST", e[e.EC_PLAYER_TOKEN_INVALID = 10011] = "EC_PLAYER_TOKEN_INVALID", e[e.EC_PLAYER_CLEAR_TOKEN_FAIL = 10012] = "EC_PLAYER_CLEAR_TOKEN_FAIL", e[e.EC_PLAYER_LOCK_FAIL = 10013] = "EC_PLAYER_LOCK_FAIL", e[e.EC_PLAYER_UNLOCK_FAIL = 10014] = "EC_PLAYER_UNLOCK_FAIL", e[e.EC_PLAYER_SAVE_TOKEN_FAIL = 10015] = "EC_PLAYER_SAVE_TOKEN_FAIL", e[e.EC_ROOM_CREATE_NO_PERMISSION = 2e4] = "EC_ROOM_CREATE_NO_PERMISSION", e[e.EC_ROOM_DESTORY_NO_PERMISSION = 20001] = "EC_ROOM_DESTORY_NO_PERMISSION", e[e.EC_ROOM_JOIN_NO_PERMISSION = 20002] = "EC_ROOM_JOIN_NO_PERMISSION", e[e.EC_ROOM_REMOVE_PLAYER_NO_PERMISSION = 20003] = "EC_ROOM_REMOVE_PLAYER_NO_PERMISSION", e[e.EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION = 20004] = "EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION", e[e.EC_ROOM_DISSMISS_NO_PERMISSION = 20005] = "EC_ROOM_DISSMISS_NO_PERMISSION", e[e.EC_ROOM_REMOVE_SELF_NO_PERMISSION = 20006] = "EC_ROOM_REMOVE_SELF_NO_PERMISSION", e[e.EC_ROOM_CHECK_LOGIN_SESSION_ERR = 20007] = "EC_ROOM_CHECK_LOGIN_SESSION_ERR", e[e.EC_ROOM_PLAYER_ALREADY_IN_ROOM = 20010] = "EC_ROOM_PLAYER_ALREADY_IN_ROOM", e[e.EC_ROOM_PLAYER_NOT_IN_ROOM = 20011] = "EC_ROOM_PLAYER_NOT_IN_ROOM", e[e.EC_ROOM_PLAYERS_EXCEED_LIMIT = 20012] = "EC_ROOM_PLAYERS_EXCEED_LIMIT", e[e.EC_ROOM_JOIN_NOT_ALLOW = 20013] = "EC_ROOM_JOIN_NOT_ALLOW", e[e.EC_ROOM_MAX_PLAYERS_INVALID = 20014] = "EC_ROOM_MAX_PLAYERS_INVALID", e[e.EC_ROOM_CREATE_FAIL = 20015] = "EC_ROOM_CREATE_FAIL", e[e.EC_ROOM_PLAYER_OFFLINE = 20016] = "EC_ROOM_PLAYER_OFFLINE", e[e.EC_ROOM_PARAM_PAGE_INVALID = 20017] = "EC_ROOM_PARAM_PAGE_INVALID", e[e.EC_ROOM_GET_PLAYER_INFO_ERR = 20050] = "EC_ROOM_GET_PLAYER_INFO_ERR", e[e.EC_ROOM_GET_ROOM_INFO_ERR = 20051] = "EC_ROOM_GET_ROOM_INFO_ERR", e[e.EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR = -20052] = "EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR", e[e.EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR = -20053] = "EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR", e[e.EC_ROOM_REDIS_UPDATE_ERR = -20054] = "EC_ROOM_REDIS_UPDATE_ERR", e[e.EC_ROOM_REDIS_GET_LOCK_ERR = -20055] = "EC_ROOM_REDIS_GET_LOCK_ERR", e[e.EC_ROOM_REDIS_CHECK_LOCK_ERR = -20056] = "EC_ROOM_REDIS_CHECK_LOCK_ERR", e[e.EC_ROOM_REDIS_DEL_LOCK_ERR = -20057] = "EC_ROOM_REDIS_DEL_LOCK_ERR", e[e.EC_ROOM_QUERY_PLAYER_ERR = 20060] = "EC_ROOM_QUERY_PLAYER_ERR", e[e.EC_ROOM_QUERY_GAME_ERR = 20061] = "EC_ROOM_QUERY_GAME_ERR", e[e.EC_ROOM_PLAYER_INFO_NOT_EXIST = 20062] = "EC_ROOM_PLAYER_INFO_NOT_EXIST", e[e.EC_ROOM_GAME_INFO_NOT_EXIST = 20063] = "EC_ROOM_GAME_INFO_NOT_EXIST", e[e.EC_ROOM_HISTORY_INFO_INSERT_ERR = -20064] = "EC_ROOM_HISTORY_INFO_INSERT_ERR", e[e.EC_ROOM_REGION_INFO_NOT_EXIST = 20065] = "EC_ROOM_REGION_INFO_NOT_EXIST", e[e.EC_ROOM_QUERY_REGION_ERR = 20066] = "EC_ROOM_QUERY_REGION_ERR", e[e.EC_ROOM_INFO_UNEXIST = 20080] = "EC_ROOM_INFO_UNEXIST", e[e.EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR = 20090] = "EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR", e[e.EC_ROOM_INVALID_PARAMS_TEAM_ID = 20100] = "EC_ROOM_INVALID_PARAMS_TEAM_ID", e[e.EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED = 20101] = "EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED", e[e.EC_MATCH_NO_ROOM = 3e4] = "EC_MATCH_NO_ROOM", e[e.EC_MATCH_TIMEOUT = 30001] = "EC_MATCH_TIMEOUT", e[e.EC_MATCH_LOGIC_ERR = 30002] = "EC_MATCH_LOGIC_ERR", e[e.EC_MATCH_ERR = 30010] = "EC_MATCH_ERR", e[e.EC_MATCH_PLAYER_IS_IN_MATCH = 30011] = "EC_MATCH_PLAYER_IS_IN_MATCH", e[e.EC_MATCH_PLAYER_NOT_IN_MATCH = 30012] = "EC_MATCH_PLAYER_NOT_IN_MATCH", e[e.EC_MATCH_GET_MATCH_INFO_ERR = 30013] = "EC_MATCH_GET_MATCH_INFO_ERR", e[e.EC_MATCH_UPDATE_MATCH_INFO_ERR = 30014] = "EC_MATCH_UPDATE_MATCH_INFO_ERR", e[e.EC_MATCH_CANCEL_FAILED = 30015] = "EC_MATCH_CANCEL_FAILED", e[e.EC_MATCH_GET_PLAYER_LIST_INFO_ERR = 30016] = "EC_MATCH_GET_PLAYER_LIST_INFO_ERR", e[e.EC_MATCH_CREATE_ROOM_ERR = 30041] = "EC_MATCH_CREATE_ROOM_ERR", e[e.EC_MATCH_JOIN_ROOM_ERR = 30042] = "EC_MATCH_JOIN_ROOM_ERR", e[e.EC_MATCH_QUERY_PLAYER_ERR = 30100] = "EC_MATCH_QUERY_PLAYER_ERR", e[e.EC_MATCH_PLAYER_INFO_NOT_EXIST = 30101] = "EC_MATCH_PLAYER_INFO_NOT_EXIST", e[e.EC_MATCH_QUERY_GAME_ERR = 30102] = "EC_MATCH_QUERY_GAME_ERR", e[e.EC_MATCH_GAME_INFO_NOT_EXIST = 30103] = "EC_MATCH_GAME_INFO_NOT_EXIST", e[e.EC_MATCH_QUERY_REGION_ERR = 30104] = "EC_MATCH_QUERY_REGION_ERR", e[e.EC_MATCH_REGION_INFO_NOT_EXIST = 30105] = "EC_MATCH_REGION_INFO_NOT_EXIST", e[e.EC_MATCH_TEAM_FAIL = 30106] = "EC_MATCH_TEAM_FAIL", e[e.EC_MATCH_PLAY_RULE_NOT_RUNNING = 30107] = "EC_MATCH_PLAY_RULE_NOT_RUNNING", e[e.EC_MATCH_PLAY_ATTR_NOT_FOUND = 30108] = "EC_MATCH_PLAY_ATTR_NOT_FOUND", e[e.EC_MATCH_PLAY_RULE_NOT_FOUND = 30109] = "EC_MATCH_PLAY_RULE_NOT_FOUND", e[e.EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND = 30110] = "EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND", e[e.EC_MATCH_PLAY_RULE_FUNC_ERR = 30111] = "EC_MATCH_PLAY_RULE_FUNC_ERR", e[e.EC_MATCH_GET_PLAYER_ATTR_FAIL = 30112] = "EC_MATCH_GET_PLAYER_ATTR_FAIL", e[e.EC_MATCH_GET_TEAM_ATTR_FAIL = 30113] = "EC_MATCH_GET_TEAM_ATTR_FAIL", e[e.EC_MATCH_INNER_LOGIC_ERR = -30150] = "EC_MATCH_INNER_LOGIC_ERR", e[e.EC_RELAY_ALREADY_EXISTS = 4e4] = "EC_RELAY_ALREADY_EXISTS", e[e.EC_RELAY_NOT_EXISTS = 40001] = "EC_RELAY_NOT_EXISTS", e[e.EC_RELAY_DATA_EXCEED_LIMITED = 40002] = "EC_RELAY_DATA_EXCEED_LIMITED", e[e.EC_RELAY_MEMBER_ALREADY_EXISTS = 40003] = "EC_RELAY_MEMBER_ALREADY_EXISTS", e[e.EC_RELAY_MEMBER_NOT_EXISTS = 40004] = "EC_RELAY_MEMBER_NOT_EXISTS", e[e.EC_RELAY_STATE_INVALID = 40005] = "EC_RELAY_STATE_INVALID", e[e.EC_RELAY_INVALID_FRAME_RATE = 40006] = "EC_RELAY_INVALID_FRAME_RATE", e[e.EC_RELAY_SET_FRAME_RATE_FORBIDDEN = 40007] = "EC_RELAY_SET_FRAME_RATE_FORBIDDEN", e[e.EC_RELAY_NO_MEMBERS = 40008] = "EC_RELAY_NO_MEMBERS", e[e.EC_RELAY_GAMESVR_SERVICE_NOT_OPEN = 40009] = "EC_RELAY_GAMESVR_SERVICE_NOT_OPEN", e[e.EC_RELAY_REQ_POD_FAIL = 40010] = "EC_RELAY_REQ_POD_FAIL", e[e.EC_RELAY_LOGIC_ERROR = 40014] = "EC_RELAY_LOGIC_ERROR", e[e.EC_RELAY_HKV_CACHE_ERROR = 40015] = "EC_RELAY_HKV_CACHE_ERROR", e[e.EC_RELAY_REDIS_CACHE_ERROR = 40016] = "EC_RELAY_REDIS_CACHE_ERROR", e[e.EC_RELAY_CACHE_ERROR = 40017] = "EC_RELAY_CACHE_ERROR", e[e.EC_RELAY_NOTIFY_RELAYWORKER_FAIL = 40018] = "EC_RELAY_NOTIFY_RELAYWORKER_FAIL", e[e.EC_RELAY_RESET_RELAY_ROOM_FAIL = 40019] = "EC_RELAY_RESET_RELAY_ROOM_FAIL", e[e.EC_RELAY_CLEAN_RELAY_ROOM_FAIL = 40020] = "EC_RELAY_CLEAN_RELAY_ROOM_FAIL", e[e.EC_RELAY_NO_PERMISSION = 40100] = "EC_RELAY_NO_PERMISSION", e[e.EC_RELAY_NOTIFY_GAMESVR_FAIL = 40200] = "EC_RELAY_NOTIFY_GAMESVR_FAIL", e[e.EC_RELAY_FORWARD_TO_GAMESVR_FAIL = 40201] = "EC_RELAY_FORWARD_TO_GAMESVR_FAIL", e[e.EC_RELAY_FORWARD_TO_CLIENT_FAIL = 40202] = "EC_RELAY_FORWARD_TO_CLIENT_FAIL", e[e.EC_INVALID_PARAMS = 6e4] = "EC_INVALID_PARAMS", e[e.EC_INVALID_PARAMS_PLAY_MODE_VERSION = 60001] = "EC_INVALID_PARAMS_PLAY_MODE_VERSION", e[e.EC_INVALID_PARAMS_PLAY_MODE_RULETYPE = 60002] = "EC_INVALID_PARAMS_PLAY_MODE_RULETYPE", e[e.EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION = 60003] = "EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION", e[e.EC_INVALID_PARAMS_PLAY_MODE_TEAM = 60004] = "EC_INVALID_PARAMS_PLAY_MODE_TEAM", e[e.EC_INVALID_PARAMS_GAME_ID = 61e3] = "EC_INVALID_PARAMS_GAME_ID", e[e.EC_INVALID_PARAMS_PLAYER_INFO = 61001] = "EC_INVALID_PARAMS_PLAYER_INFO", e[e.EC_INVALID_PARAMS_MAX_PLAYERS = 61002] = "EC_INVALID_PARAMS_MAX_PLAYERS", e[e.EC_INVALID_PARAMS_ROOM_TYPE = 61003] = "EC_INVALID_PARAMS_ROOM_TYPE", e[e.EC_INVALID_PARAMS_PLAYER_ID = 61004] = "EC_INVALID_PARAMS_PLAYER_ID", e[e.EC_INVALID_PARAMS_MATCH_TYPE = 61005] = "EC_INVALID_PARAMS_MATCH_TYPE", e[e.EC_INVALID_PARAMS_MATCH_CODE = 61006] = "EC_INVALID_PARAMS_MATCH_CODE", e[e.EC_INVALID_PARAMS_OPEN_ID = 61007] = "EC_INVALID_PARAMS_OPEN_ID", e[e.EC_INVALID_PARAMS_PLATFORM = 61008] = "EC_INVALID_PARAMS_PLATFORM", e[e.EC_INVALID_PARAMS_TIMESTAMP = 61009] = "EC_INVALID_PARAMS_TIMESTAMP", e[e.EC_INVALID_PARAMS_SIGN = 61010] = "EC_INVALID_PARAMS_SIGN", e[e.EC_INVALID_PARAMS_NONCE = 61011] = "EC_INVALID_PARAMS_NONCE", e[e.EC_INVALID_PARAMS_TOKEN = 61012] = "EC_INVALID_PARAMS_TOKEN", e[e.EC_INVALID_PARAMS_NETWORK_STATE = 61013] = "EC_INVALID_PARAMS_NETWORK_STATE", e[e.EC_INVALID_PARAMS_ROOM_NAME = 61014] = "EC_INVALID_PARAMS_ROOM_NAME", e[e.EC_INVALID_PARAMS_CREATE_ROOM_TYPE = 61015] = "EC_INVALID_PARAMS_CREATE_ROOM_TYPE", e[e.EC_REDIS_KEY_NOT_EXIST = -66e3] = "EC_REDIS_KEY_NOT_EXIST", e[e.EC_REDIS_SET_OP_ERR = -66001] = "EC_REDIS_SET_OP_ERR", e[e.EC_REDIS_GET_OP_ERR = -66002] = "EC_REDIS_GET_OP_ERR", e[e.EC_REDIS_DEL_OP_ERR = -66003] = "EC_REDIS_DEL_OP_ERR", e[e.EC_REDIS_EXPIRE_OP_ERR = -66004] = "EC_REDIS_EXPIRE_OP_ERR", e[e.EC_REDIS_LOCK_OP_ERR = -66005] = "EC_REDIS_LOCK_OP_ERR", e[e.EC_REDIS_LOCK_ALREADY_EXIST = -66006] = "EC_REDIS_LOCK_ALREADY_EXIST", e[e.EC_REDIS_LIST_OP_ERR = -66020] = "EC_REDIS_LIST_OP_ERR", e[e.EC_REDIS_LIST_POP_EMPTY = -66021] = "EC_REDIS_LIST_POP_EMPTY", e[e.EC_MYSQL_NO_ROW_FOUND = -66100] = "EC_MYSQL_NO_ROW_FOUND", e[e.EC_MYSQL_MULTI_ROW_FOUND = -66101] = "EC_MYSQL_MULTI_ROW_FOUND", e[e.EC_MYSQL_INSERT_FAIL = -66102] = "EC_MYSQL_INSERT_FAIL", e[e.EC_MYSQL_DELETE_FAIL = -66103] = "EC_MYSQL_DELETE_FAIL", e[e.EC_MYSQL_UPDATE_FAIL = -66104] = "EC_MYSQL_UPDATE_FAIL", e[e.EC_MYSQL_QUERYS_FAIL = -66105] = "EC_MYSQL_QUERYS_FAIL", e[e.EC_PB_SERIALIZE_TO_STR_ERR = -66200] = "EC_PB_SERIALIZE_TO_STR_ERR", e[e.EC_PB_PARSE_FROM_STR_ERR = -66201] = "EC_PB_PARSE_FROM_STR_ERR", e[e.EC_DATA_FORMAT_ERR = -66210] = "EC_DATA_FORMAT_ERR", e[e.EC_JSON_FORMAT_ERR = -66211] = "EC_JSON_FORMAT_ERR", e[e.EC_JSON_PLAY_MODE_FORMAT_ERR = -66212] = "EC_JSON_PLAY_MODE_FORMAT_ERR", e[e.EC_JSON_PLAY_MODE_PARISE_ERR = -66213] = "EC_JSON_PLAY_MODE_PARISE_ERR", e[e.EC_INVALID_PARAMS_RECORE_ID = -66601] = "EC_INVALID_PARAMS_RECORE_ID", e[e.EC_HASHID_ERR = -66700] = "EC_HASHID_ERR", e[e.EC_HASHID_ENCODE_ERR = -66701] = "EC_HASHID_ENCODE_ERR", e[e.EC_HASHID_DECODE_ERR = -66702] = "EC_HASHID_DECODE_ERR", e[e.EC_CONF_ROOM_ID_BUCKET_ERR = -66801] = "EC_CONF_ROOM_ID_BUCKET_ERR", e[e.EC_SDK_SEND_FAIL = 90001] = "EC_SDK_SEND_FAIL", e[e.EC_SDK_UNINIT = 90002] = "EC_SDK_UNINIT", e[e.EC_SDK_RES_TIMEOUT = 90003] = "EC_SDK_RES_TIMEOUT", e[e.EC_SDK_NO_LOGIN = 90004] = "EC_SDK_NO_LOGIN", e[e.EC_SDK_NO_CHECK_LOGIN = 90005] = "EC_SDK_NO_CHECK_LOGIN", e[e.EC_SDK_SOCKET_ERROR = 90006] = "EC_SDK_SOCKET_ERROR", e[e.EC_SDK_SOCKET_CLOSE = 90007] = "EC_SDK_SOCKET_CLOSE", e[e.EC_SDK_NO_ROOM = 90008] = "EC_SDK_NO_ROOM"; }(n = e.QAppProtoErrCode || (e.QAppProtoErrCode = {})), function (e) { e[e.COMMON_OFFLINE = 0] = "COMMON_OFFLINE", e[e.COMMON_ONLINE = 1] = "COMMON_ONLINE", e[e.RELAY_OFFLINE = 2] = "RELAY_OFFLINE", e[e.RELAY_ONLINE = 3] = "RELAY_ONLINE"; }(o = e.NetworkState || (e.NetworkState = {})), function (e) { e[e.COMMON_CREATE = 0] = "COMMON_CREATE", e[e.MATCH_CREATE = 1] = "MATCH_CREATE"; }(r = e.CreateRoomType || (e.CreateRoomType = {})), function (e) { e[e.STOP = 0] = "STOP", e[e.START = 1] = "START"; }(i = e.FrameSyncState || (e.FrameSyncState = {})), function (e) { e[e.COMMON_JOIN = 0] = "COMMON_JOIN", e[e.MATCH_JOIN = 1] = "MATCH_JOIN"; }(E = e.JoinRoomType || (e.JoinRoomType = {})), function (e) { e[e.PENDING = 0] = "PENDING", e[e.MATCHING = 1] = "MATCHING", e[e.SUCCESS = 3] = "SUCCESS", e[e.TIMEOUT = 4] = "TIMEOUT"; }(a = e.MatchStatus || (e.MatchStatus = {})), function (e) { e[e.ROOM_SIMPLE = 1] = "ROOM_SIMPLE", e[e.PLAYER_COMPLEX = 2] = "PLAYER_COMPLEX"; }(R = e.MatchType || (e.MatchType = {})), function (e) { e[e.E_GS_FORWARDTYPE_DEFAULT = 0] = "E_GS_FORWARDTYPE_DEFAULT", e[e.E_GS_FORWARDTYPE_NOTIFY_CONNECTION = 1] = "E_GS_FORWARDTYPE_NOTIFY_CONNECTION", e[e.E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT = 2] = "E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT", e[e.E_GS_FORWARDTYPE_NOTIFY_COM_EVENT = 3] = "E_GS_FORWARDTYPE_NOTIFY_COM_EVENT", e[e.E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR = 4] = "E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR"; }(c = e.GameSvrForwardType || (e.GameSvrForwardType = {})); }(_ || (_ = {}));
    }, function (e, t, s) {
        "use strict";
        var _ = s(1).a.QAppProtoErrCode;
        var n;
        !function (e) { e.EC_SDK_SEND_FAIL = "发送失败", e.EC_SDK_UNINIT = "未初始化", e.EC_SDK_RES_TIMEOUT = "发送超时", e.EC_SDK_NO_LOGIN = "未登录", e.EC_SDK_NO_CHECK_LOGIN = "CheckLogin失败", e.EC_SDK_SOCKET_ERROR = "Socket错误", e.EC_SDK_SOCKET_CLOSE = "Socket断开", e.EC_SDK_NO_ROOM = "无房间信息"; }(n || (n = {}));
        var o = {};
        o[_.EC_SDK_SEND_FAIL] = n.EC_SDK_SEND_FAIL, o[_.EC_SDK_UNINIT] = n.EC_SDK_UNINIT, o[_.EC_SDK_RES_TIMEOUT] = n.EC_SDK_RES_TIMEOUT, o[_.EC_SDK_NO_LOGIN] = n.EC_SDK_NO_LOGIN, o[_.EC_SDK_NO_CHECK_LOGIN] = n.EC_SDK_NO_CHECK_LOGIN, o[_.EC_SDK_SOCKET_ERROR] = n.EC_SDK_SOCKET_ERROR, o[_.EC_SDK_SOCKET_CLOSE] = n.EC_SDK_SOCKET_CLOSE, o[_.EC_SDK_NO_ROOM] = n.EC_SDK_NO_ROOM, t.a = _;
    }, function (e, t, s) {
        "use strict";
        var _, n = s(1);
        !function (e) { var t, s, _, n, o; !function (e) { e[e.ROOM_ALL = 1] = "ROOM_ALL", e[e.ROOM_OTHERS = 2] = "ROOM_OTHERS", e[e.ROOM_SOME = 3] = "ROOM_SOME"; }(t = e.RecvType || (e.RecvType = {})), function (e) { e[e.ROOM_SIMPLE = 1] = "ROOM_SIMPLE", e[e.PLAYER_COMPLEX = 2] = "PLAYER_COMPLEX"; }(s = e.MatchType || (e.MatchType = {})), function (e) { e[e.COMMON_CREATE = 0] = "COMMON_CREATE", e[e.MATCH_CREATE = 1] = "MATCH_CREATE"; }(_ = e.CreateRoomType || (e.CreateRoomType = {})), function (e) { e[e.COMMON_OFFLINE = 0] = "COMMON_OFFLINE", e[e.COMMON_ONLINE = 1] = "COMMON_ONLINE", e[e.RELAY_OFFLINE = 2] = "RELAY_OFFLINE", e[e.RELAY_ONLINE = 3] = "RELAY_ONLINE"; }(n = e.NetworkState || (e.NetworkState = {})), function (e) { e[e.STOP = 0] = "STOP", e[e.START = 1] = "START"; }(o = e.FrameSyncState || (e.FrameSyncState = {})); }(_ || (_ = {}));
        var o = { get CreateRoomType() { return n.a.CreateRoomType; }, get MatchType() { return n.a.MatchType; }, get NetworkState() { return n.a.NetworkState; }, get FrameSyncState() { return n.a.FrameSyncState; }, get RecvType() { return _.RecvType; } };
        t.a = o;
    }, function (e, t, s) { var _; e.exports = (_ = _ || function (e, t) { var s = Object.create || function () { function e() { } return function (t) { var s; return e.prototype = t, s = new e, e.prototype = null, s; }; }(), _ = {}, n = _.lib = {}, o = n.Base = { extend: function (e) { var t = s(this); return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () { t.$super.init.apply(this, arguments); }), t.init.prototype = t, t.$super = this, t; }, create: function () { var e = this.extend(); return e.init.apply(e, arguments), e; }, init: function () { }, mixIn: function (e) { for (var t in e)
            e.hasOwnProperty(t) && (this[t] = e[t]); e.hasOwnProperty("toString") && (this.toString = e.toString); }, clone: function () { return this.init.prototype.extend(this); } }, r = n.WordArray = o.extend({ init: function (e, t) { e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length; }, toString: function (e) { return (e || E).stringify(this); }, concat: function (e) { var t = this.words, s = e.words, _ = this.sigBytes, n = e.sigBytes; if (this.clamp(), _ % 4)
            for (var o = 0; o < n; o++) {
                var r = s[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                t[_ + o >>> 2] |= r << 24 - (_ + o) % 4 * 8;
            }
        else
            for (var o = 0; o < n; o += 4)
                t[_ + o >>> 2] = s[o >>> 2]; return this.sigBytes += n, this; }, clamp: function () { var t = this.words, s = this.sigBytes; t[s >>> 2] &= 4294967295 << 32 - s % 4 * 8, t.length = e.ceil(s / 4); }, clone: function () { var e = o.clone.call(this); return e.words = this.words.slice(0), e; }, random: function (t) { for (var s, _ = [], n = function (t) { var t = t, s = 987654321, _ = 4294967295; return function () { var n = ((s = 36969 * (65535 & s) + (s >> 16) & _) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & _) & _; return n /= 4294967296, (n += .5) * (e.random() > .5 ? 1 : -1); }; }, o = 0; o < t; o += 4) {
            var i = n(4294967296 * (s || e.random()));
            s = 987654071 * i(), _.push(4294967296 * i() | 0);
        } return new r.init(_, t); } }), i = _.enc = {}, E = i.Hex = { stringify: function (e) { for (var t = e.words, s = e.sigBytes, _ = [], n = 0; n < s; n++) {
            var o = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
            _.push((o >>> 4).toString(16)), _.push((15 & o).toString(16));
        } return _.join(""); }, parse: function (e) { for (var t = e.length, s = [], _ = 0; _ < t; _ += 2)
            s[_ >>> 3] |= parseInt(e.substr(_, 2), 16) << 24 - _ % 8 * 4; return new r.init(s, t / 2); } }, a = i.Latin1 = { stringify: function (e) { for (var t = e.words, s = e.sigBytes, _ = [], n = 0; n < s; n++) {
            var o = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
            _.push(String.fromCharCode(o));
        } return _.join(""); }, parse: function (e) { for (var t = e.length, s = [], _ = 0; _ < t; _++)
            s[_ >>> 2] |= (255 & e.charCodeAt(_)) << 24 - _ % 4 * 8; return new r.init(s, t); } }, R = i.Utf8 = { stringify: function (e) { try {
            return decodeURIComponent(escape(a.stringify(e)));
        }
        catch (e) {
            throw new Error("Malformed UTF-8 data");
        } }, parse: function (e) { return a.parse(unescape(encodeURIComponent(e))); } }, c = n.BufferedBlockAlgorithm = o.extend({ reset: function () { this._data = new r.init, this._nDataBytes = 0; }, _append: function (e) { "string" == typeof e && (e = R.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes; }, _process: function (t) { var s = this._data, _ = s.words, n = s.sigBytes, o = this.blockSize, i = 4 * o, E = n / i, a = (E = t ? e.ceil(E) : e.max((0 | E) - this._minBufferSize, 0)) * o, R = e.min(4 * a, n); if (a) {
            for (var c = 0; c < a; c += o)
                this._doProcessBlock(_, c);
            var C = _.splice(0, a);
            s.sigBytes -= R;
        } return new r.init(C, R); }, clone: function () { var e = o.clone.call(this); return e._data = this._data.clone(), e; }, _minBufferSize: 0 }), C = (n.Hasher = c.extend({ cfg: o.extend(), init: function (e) { this.cfg = this.cfg.extend(e), this.reset(); }, reset: function () { c.reset.call(this), this._doReset(); }, update: function (e) { return this._append(e), this._process(), this; }, finalize: function (e) { e && this._append(e); var t = this._doFinalize(); return t; }, blockSize: 16, _createHelper: function (e) { return function (t, s) { return new e.init(s).finalize(t); }; }, _createHmacHelper: function (e) { return function (t, s) { return new C.HMAC.init(e, s).finalize(t); }; } }), _.algo = {}); return _; }(Math), _); }, function (e, t, s) {
        "use strict";
        var _ = s(6);
        var n = (function () {
            function n() {
            }
            return n;
        }());
        n.enable = !1, n.exclude = [], n.callback = (function (e) { return console.log.apply(console, e); }), n.log = (function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            if (!n.enable)
                return;
            if (Array.isArray(n.exclude) && n.exclude.findIndex(function (t) { return t === e[0]; }) >= 0)
                return;
            var t = ["DEBUGGER_v" + _.version + "_" + _.sdkType + " " + Date.now()].concat(e);
            "function" == typeof n.callback && n.callback(t);
        }), Object.defineProperty(n, "log", { enumerable: !1, configurable: !1, writable: !1, value: n.log }), t.a = n;
    }, function (e) { e.exports = { sdkType: 1, version: "1.0.3" }; }, function (e, t, s) {
        "use strict";
        var _ = {};
        s.r(_), s.d(_, "DebuggerLog", function () { return c.a; }), s.d(_, "getSequenceStr", function () { return u; }), s.d(_, "Base64", function () { return d; }), s.d(_, "HmacSHA1", function () { return l; }), s.d(_, "errCodeConvert", function () { return A; }), s.d(_, "getPlatform", function () { return I; }), s.d(_, "getChannel", function () { return T; });
        var n = {};
        s.r(n), s.d(n, "_string", function () { return K; }), s.d(n, "_bytes", function () { return B; }), s.d(n, "_bool", function () { return x; }), s.d(n, "_uint64", function () { return q; }), s.d(n, "_uint32", function () { return V; }), s.d(n, "_int32", function () { return W; }), s.d(n, "_varint", function () { return j; });
        var o = {};
        s.r(o), s.d(o, "_string", function () { return $; }), s.d(o, "_bytes", function () { return Z; }), s.d(o, "_bool", function () { return ee; }), s.d(o, "_uint64", function () { return te; }), s.d(o, "_uint32", function () { return se; }), s.d(o, "_int32", function () { return _e; }), s.d(o, "_varint", function () { return ne; });
        var r = s(0);
        var i = (function () {
            function i(e) {
                if (e === void 0) { e = -1; }
                this.id = e;
            }
            return i;
        }());
        var E = function (e, t, s) { clearTimeout(e.id), e.id = setTimeout(t, s); }, a = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            e.forEach(function (e) { return e && clearTimeout(e.id); });
        };
        var R, c = s(5);
        function C() { if ("undefined" == typeof wx)
            return !1; if (void 0 === wx.onHide)
            return !1; if (void 0 === wx.offHide)
            return !1; if (void 0 === wx.onShow)
            return !1; if (void 0 === wx.offShow)
            return !1; if (void 0 === wx.getSystemInfoSync)
            return !1; try {
            if (!wx.getSystemInfoSync())
                return !1;
        }
        catch (e) {
            return !1;
        } return !0; }
        !function (e) { e[e.UNKNOWN = 0] = "UNKNOWN", e[e.ANDROID = 1] = "ANDROID", e[e.IOS = 2] = "IOS"; }(R || (R = {}));
        var d = s(13), l = s(14), O = new (0, s(17).default)(function () { var e = Date.now().toString(36); for (var s_1 = 0; s_1 < 6; s_1++)
            e += (t = 1e6, Math.ceil((Math.random() + 1) * t)).toString(36); var t; return e; }(), 16);
        var S = 1;
        function u() { var e = O.encode(S++); return S >= Number.MAX_SAFE_INTEGER && (S = 1), e; }
        var A = function (e, t) { return e < 0 && (t = "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF[" + e + "]", e = r.c.EC_INNER_ERROR), { errCode: e, errMsg: t }; };
        function I() { var e = R.UNKNOWN; return C() && (e = function () { if (!C())
            return R.UNKNOWN; var e = wx.getSystemInfoSync(), t = e ? e.system + "" : ""; return t.includes("Android") ? R.ANDROID : t.includes("iOS") ? R.IOS : R.UNKNOWN; }()), e; }
        function T() { var e = 0; return C() && (e = 1), e; }
        var p = { connect: "connect", connectClose: "connectClose", connectClosing: "connectClosing", connectError: "connectError", connecting: "connecting", message: "message", autoAuth: "autoAuth" }, h = Object.keys(p);
        var M = (function () {
            function class_1(e, t) {
                this.isMsgBind = !1, this.forceClose = !1, this.init(t), this.id = e;
            }
            class_1.prototype.init = function (e) {
                var _this = this;
                this.url = e, this.eventCallbacks = [], this.eventOnceCallbacks = new Map, this.socketTask = null;
                var t = new i;
                var s = 0;
                var _ = function () { c.a.log("SOCKET_OPEN", _this.id, _this.isConnect()), s = 0, O(), a(t); }, n = function (e) { c.a.log("SOCKET_CLOSE", e, _this.id), l(), E(t, function () { return R("close"); }, r.j.reconnectInterval), _this.forceClose && (s = 0, _this.forceClose = !1, a(t)); }, o = function (e) { c.a.log("SOCKET_ERROR", e, _this.id, _this.socketTask && _this.socketTask.readyState), d(p.connectError, { msg: "socket connectError", data: e }), E(t, function () { return R("error"); }, r.j.reconnectInterval); }, R = function (e) { if (!_this.url)
                    throw new Error("socket.url = " + _this.url); if (!_this.isConnect() && !_this.isClose())
                    return E(t, function () { return R("open"); }, r.j.reconnectInterval); if (!_this.isClose())
                    return; if (c.a.log("SOCKET_TRY_OPEN", _this.id, e, _this.socketTask && _this.socketTask.readyState, s, r.j.reconnectMaxTimes), ++s > r.j.reconnectMaxTimes)
                    return s = 0, void c.a.log("SOCKET_RECONNECT_TIMEOUT"); var i = "wss://" + _this.url.replace("wss://", "").replace("ws://", ""); a(t), _this.forceClose = !1, _this.socketTask = wx.connectSocket({ url: i, fail: function () { return console.error("connectSocket fail"); } }), _this.socketTask.onOpen(_.bind(_this)), _this.socketTask.onClose(n.bind(_this)), _this.socketTask.onError(o.bind(_this)), _this.socketTask.onMessage((function (e) { d(p.message, { msg: "socket message", data: e.data }); }).bind(_this)); }, C = function (e) { c.a.log("SOCKET_CONNECT", _this.id, e), !_this.isConnect() && s > 0 && s < r.j.reconnectMaxTimes || (s = 0, R(e + " connect")); }, d = function (e, t) {
                    if (t === void 0) { t = {}; }
                    t.tag = e, _this.eventCallbacks.forEach(function (_a) {
                        var s = _a[0], _ = _a[1];
                        s !== e && "*" !== s || _(t);
                    });
                    var s = _this.eventOnceCallbacks.get(e);
                    s && (s(t), _this.eventOnceCallbacks.delete(e));
                }, l = function () { return d(p.connectClose, { msg: "socket is closed" }); }, O = function () { return d(p.connect, { msg: "socket is connected" }); };
                this.connect = C, this.connectNewSocket = (function (e) { c.a.log("SOCKET_CONNECT_NEW", _this.id, _this.isClose()), _this.url = e, s = 0; var t = function () { C("connectNewSocket"); }; _this.close(t, t); }), this.send = (function (e, _a) {
                    var t = _a.fail, s = _a.success;
                    if (!_this.isConnect())
                        return t({ data: e }), void C("send");
                    _this.socketTask.send({ data: e.buffer, fail: function (s) { c.a.log("SOCKET_SEND_FAIL", _this.id, s), t({ data: e }); }, success: function () { s({ data: e }); } });
                }), this.close = (function (e, t) { if (_this.forceClose = !0, !_this.socketTask)
                    return e && e(), l(); _this.socketTask.close({ success: function (t) { c.a.log("SOCKET_CLOSE_SUCCESS", _this.id, t), _this.socketTask = null, e && e(); }, fail: function (e) { c.a.log("SOCKET_CLOSE_ERROR", _this.id, e), _this.socketTask = null, t && t(); } }); }), this.destory = (function () { a(t), !_this.isClose() && _this.close(), _this.eventCallbacks = [], _this.isMsgBind = !1; }), this.isConnect = (function () { return _this.socketTask && _this.socketTask.readyState === _this.socketTask.OPEN; }), this.isConnecting = (function () { return _this.socketTask && _this.socketTask.readyState === _this.socketTask.CONNECTING; }), this.isClose = (function () { return !_this.socketTask || _this.socketTask && _this.socketTask.readyState === _this.socketTask.CLOSED; }), this.isClosing = (function () { return _this.socketTask && _this.socketTask.readyState === _this.socketTask.CLOSING; }), this.on = (function (e, t) { (h.includes(e) || "*" === e) && "function" == typeof t && (_this.eventCallbacks.push([e, t]), e === p.message && (_this.isMsgBind = !0)); }), this.once = (function (e, t) { h.includes(e) && "function" == typeof t && _this.eventOnceCallbacks.set(e, t); }), this.emit = d;
            };
            return class_1;
        }()), m = s(1);
        var f = [r.e.E_CMD_LOGIN_REQ, r.e.E_CMD_LOGOUT_REQ], N = [r.e.E_CMD_RELAY_SEND_FRAME_REQ, r.e.E_CMD_RELAY_REQUEST_FRAME_REQ, r.e.E_CMD_HEART_BEAT_REQ], L = { FAIL: !1, SUCCESS: !0 };
        var y;
        !function (e) { e[e.CLIENT_PRE = parseInt("0x2", 16)] = "CLIENT_PRE", e[e.CLIENT_END = parseInt("0x3", 16)] = "CLIENT_END", e[e.SERVER_PRE = parseInt("0x28", 16)] = "SERVER_PRE", e[e.SERVER_END = parseInt("0x29", 16)] = "SERVER_END"; }(y || (y = {}));
        var g = (function () {
            function g() {
                this.queue = new Set, this.bdHandlers = new Set, this.socket = null;
            }
            g.startQueueLoop = function () { E(g.timer, function () { return (Array.from(g.sendQueue).forEach(function (_a) {
                var e = _a[0], t = _a[1];
                if (Date.now() - t.time > r.j.resendTimeout) {
                    var e_1, s_2 = "";
                    r.i.isStatus(r.i.StatusType.LOGIN) ? e_1 = r.c.EC_SDK_RES_TIMEOUT : r.i.getErrCode() === r.c.EC_OK ? (e_1 = r.c.EC_SDK_NO_LOGIN, s_2 = "登录失败") : (e_1 = r.i.getErrCode(), s_2 = "登录失败，" + r.i.getErrMsg()), t.sendFail(e_1, s_2);
                }
                else
                    !t.isSocketSend && t.resend();
            }), g.startQueueLoop()); }, r.j.resendInterval); };
            g.stopQueueLoop = function () { a(g.timer), Array.from(g.sendQueue).forEach(function (_a) {
                var e = _a[0], t = _a[1];
                t.remove();
            }), g.sendQueue.clear(); };
            g.prototype.bindSocket = function (e, t, s) {
                var _this = this;
                if (this.socket || !e)
                    return !1;
                this.socket = e;
                return !this.socket.isMsgBind && this.socket.on(p.message, (function (e) { if (!e.data)
                    return; var _a = _this.unpackBody(new Uint8Array(e.data)), _ = _a.body, n = _a.pre, o = _a.end; n === y.CLIENT_PRE && o === y.CLIENT_END && t(_), n === y.SERVER_PRE && o === y.SERVER_END && s(_); }).bind(this)), !0;
            };
            g.prototype.unbindSocket = function () { this.socket = null, this.clearQueue(), this.clearBdHandlers(); };
            g.prototype.clearQueue = function () {
                var _this = this;
                Array.from(this.queue).forEach(function (e) { _this.deleteSeqQueue(e); });
            };
            g.prototype.clearBdHandlers = function () {
                var _this = this;
                Array.from(this.bdHandlers).forEach(function (e) { g.broadcastHandlers.delete(e), _this.bdHandlers.delete(e); });
            };
            g.prototype.deleteSeqQueue = function (e) { g.sendQueue.delete(e), this.queue.delete(e); };
            g.prototype.addSeqQueue = function (e, t) { g.sendQueue.set(e, t), this.queue.add(e); };
            g.prototype.setBroadcastHandler = function (e, t) { g.broadcastHandlers.set(e, t), this.bdHandlers.add(e); };
            g.prototype.handleErrCode = function (e) { return !1; };
            g.prototype.send = function (e, t, s) {
                var _this = this;
                var _ = this.getReadyCode(s);
                return g.sendQueue.size > 10 && c.a.log("SENDQUEUE_size", g.sendQueue.size), 0 !== _ ? this.handleSendFail(t, _) : this.socket.send(e, { fail: function (e) { return _this.handleSendFail(t, e); }, success: function () { return _this.handleSendSuccess(t); } }), t;
            };
            g.prototype.buildData = function (e, t, s) { var _ = 5 + t.length + 1, n = new Uint8Array(function (e, t) { var s = []; for (; e > 255;)
                s.push(255 & e), e >>= 8; 0 !== e && s.push(e); s = s.slice(0, t); for (; s.length < t;)
                s.push(0); return s.reverse(); }(_, 4)), o = new Uint8Array(_); return o.set(e), o.set(n, e.length), o.set(t, e.length + n.length), o.set(s, e.length + n.length + t.length), o; };
            g.prototype.unpackBody = function (e) { var t = e.slice(1, 5), s = function (e) { var t = 0; var s = e.length; for (var _1 = s - 1; _1 >= 0; _1--)
                t += e[_1] * Math.pow(2, 8 * (s - 1 - _1)); return t; }(Array.from(t)) - 6; return { body: e.slice(5, 5 + s), pre: e[0], end: e[e.length - 1] }; };
            g.prototype.handleSendFail = function (e, t) { var s = g.sendQueue.get(e); if (s)
                return Date.now() - s.time > r.j.resendTimeout ? s.sendFail(r.i.getErrCode() || t) : t === r.c.EC_SDK_UNINIT ? s.sendFail(t) : t === r.c.EC_SDK_NO_LOGIN ? this.socket.emit(p.autoAuth, {}) : t === r.c.EC_SDK_NO_CHECK_LOGIN ? this.socket.emit(p.autoAuth, {}) : void 0; };
            g.prototype.handleSendSuccess = function (e) { if (!g.sendQueue.has(e))
                return; g.sendQueue.get(e).sendSuccess(); };
            g.prototype.getReadyCode = function (e) { return r.h.isInited() || e === r.e.E_CMD_LOGIN_REQ ? this.socket && this.socket.url ? r.i.isStatus(r.i.StatusType.LOGIN) || f.includes(e) ? this.socket.id === m.a.ConnectionType.RELAY && !r.a.isChecked() && N.includes(e) ? r.c.EC_SDK_NO_CHECK_LOGIN : 0 : r.c.EC_SDK_NO_LOGIN : r.c.EC_SDK_SEND_FAIL : (console.error("MGOBE.Listener 未初始化"), r.c.EC_SDK_UNINIT); };
            return g;
        }());
        g.sendQueue = new Map, g.broadcastHandlers = new Map, g.timer = new i;
        var P = g;
        function D(e, t) { if (F(t >= 32, "无符号左移不能大于32位！", { value: e, offset: t }), 0 === e)
            return 0; var s = e << t; return s <= 0 && (s = e * Math.pow(2, t)), s; }
        function Y(e, t) { if (F(t >= 32, "无符号右移不能大于32位！", { value: e, offset: t }), e >= k) {
            var s_3 = e >>> 0, _2 = (e - s_3) / k;
            return s_3 = Y(s_3, t), (_2 = D(_2, 32 - t)) + s_3;
        } return e >>> t; }
        function v(e, t) {
            if (t === void 0) { t = ""; }
            throw "object" == typeof t && (t = JSON.stringify(t)), new Error(e + "\n" + t);
        }
        function F(e, t, s) {
            if (s === void 0) { s = ""; }
            e && v(t, s);
        }
        function U(e, t) { Array.isArray(t) || (t = [t]); var s = t.length; for (var _3 = 0; _3 < s; _3++)
            e.push(t[_3]); }
        function H(e, t) { if (e)
            return Array.isArray(e) ? e.forEach(function (s, _) { return t(s, _, e); }) : b(e) ? Object.keys(e).forEach(function (s) { return b(e[s]) || Array.isArray(e[s]) ? t(e[s], s, e) && H(e[s], t) : t(e[s], s, e); }) : null; }
        function b(e) { return "[object Object]" === Object.prototype.toString.apply(e); }
        function G(e, t, s) { Object.defineProperty(e, t, { enumerable: !1, value: s }); }
        var k = Math.pow(2, 32), Q = Math.pow(2, 53), w = 2147483647;
        function K(e, t, s) { var _, n, o, r, i; for (_ = "", n = t; n < t + s;)
            switch ((o = e[n++]) >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    _ += String.fromCharCode(o);
                    break;
                case 12:
                case 13:
                    r = e[n++], _ += String.fromCharCode((31 & o) << 6 | 63 & r);
                    break;
                case 14: r = e[n++], i = e[n++], _ += String.fromCharCode((15 & o) << 12 | (63 & r) << 6 | (63 & i) << 0);
            } return { cursor: t += s, value: _ }; }
        function B(e, t, s) { var _ = [].slice.call(e, t, t + s); return { cursor: t += s, value: _ }; }
        function x(e, t) { var s = j(e, t); F(s.value.length > 1, "bool 溢出"); var _ = !!s.value[0]; return { cursor: s.cursor, value: _ }; }
        function q(e, t) { var s = j(e, t); var _ = s.value; return F(_.length > 2, "uint64 溢出"), _.length < 2 ? _ = s.value[0] : 2 === _.length && (_ = _[0] * k + _[1]) >= Q && (_ = s.value), { cursor: s.cursor, value: _ }; }
        function V(e, t) { var s = j(e, t); return F(s.value.length > 1, "uint32 溢出"), { cursor: s.cursor, value: s.value[0] }; }
        function W(e, t) { var s = j(e, t); if (F(s.value.length > 2, "int32 溢出"), 2 === s.value.length) {
            if (0 != ~s.value[0])
                return v("int32 溢出");
            s.value[0] = s.value[1];
        } return s.value[0] > w && (s.value[0] = -(1 + ~s.value[0])), { cursor: s.cursor, value: s.value[0] }; }
        function j(e, t) { var s = function (e, t) { var s = 1; for (; t < e.length && e[t] >= 128;)
            s++, t++; return s; }(e, t), _ = []; var n = 0, o = 0; if (1 === s && 0 === e[t])
            return { value: [0], cursor: t + 1 }; for (var r_1 = t; r_1 < t + s; r_1++) {
            var t_1 = 127 & e[r_1], s_4 = 7;
            for (; s_4 > 0;)
                if (o + s_4 <= 32)
                    n += D(t_1, o), o += s_4, s_4 = 0;
                else {
                    var e_2 = o + s_4 - 32, r_2 = s_4 - e_2;
                    n += D(t_1 & Math.pow(2, r_2) - 1, o), _.unshift(n), t_1 = Y(t_1, r_2), s_4 = e_2, o = 0, n = 0;
                }
        } return 0 !== n && _.unshift(n), { value: _, cursor: t + s }; }
        function X(e, t) { var s, _; var n = j(e, t); F(n.value.length > 1, "key字段长度不能大于32位！"); var o = n.value[0]; return t = n.cursor, _ = 7 & o, { id: s = Y(o, 3), writeType: _, cursor: t }; }
        function J(e, t, s) { return F(!["int32", "uint32", "uint64", "bool"].includes(s), "\u65E0\u6CD5\u89E3\u6790 " + s + " \u7C7B\u578B"), n["_" + s](e, t); }
        function z(e, t, s) { var _ = j(e, t), n = []; var o = _; if (F(_.value.length > 1, "目前只支持长度为小于 32位 的数据 ！"), "string" === s)
            return K(e, o.cursor, o.value[0]); if ("bytes" === s)
            return B(e, o.cursor, o.value[0]); for (var t_2 = 0; t_2 < _.value[0]; t_2++)
            o = q(e, o.cursor), n.push(o.value); return { value: n, cursor: o.cursor }; }
        function $(e) { e += ""; var t = new Array; for (var s_5 = 0; s_5 < e.length; s_5++) {
            var _4 = e.charCodeAt(s_5);
            if (_4 < 128)
                t.push(_4);
            else if (_4 < 2048)
                t.push(_4 >> 6 | 192), t.push(63 & _4 | 128);
            else if (_4 < 65536)
                if (_4 >= 55296 && _4 <= 56319 && s_5 + 1 < e.length) {
                    var n_1 = e.charCodeAt(s_5 + 1);
                    n_1 >= 56320 && n_1 <= 57343 && (_4 = 1024 * (_4 - 55296) + n_1 - 56320 + 65536, t.push(_4 >> 18 | 240), t.push(_4 >> 12 & 63 | 128), t.push(_4 >> 6 & 63 | 128), t.push(63 & _4 | 128), s_5++);
                }
                else
                    t.push(_4 >> 12 | 224), t.push(_4 >> 6 & 63 | 128), t.push(63 & _4 | 128);
        } var s = t.length; return F(s >= Math.pow(2, 32), "数组长度过大"), t = ne(s).concat(t); }
        function Z(e) { e.forEach(function (e) { return e >= 256 && v("byte 溢出"); }); var t = ne(e.length), s = e.length; for (var _5 = 0; _5 < s; _5++)
            t.push(e[_5]); return t; }
        function ee(e) { return ne(e = e ? 1 : 0); }
        function te(e) { var t, s; return Array.isArray(e) ? (s = (Math.round(Math.abs(Number(e[0]))) || 0) >>> 0, t = (Math.round(Math.abs(Number(e[1]))) || 0) >>> 0) : s = ((e = Math.round(Math.abs(Number(e))) || 0) - (t = e >>> 0)) / k, ne([s, t]); }
        function se(e) { return (e = Math.round(Math.abs(Number(e))) || 0) >= k && (e = k - 1), ne(e); }
        function _e(e) { return ne(e = Math.round(Number(e)) || 0); }
        function ne(e) { Array.isArray(e) || (e = [e]); var t = []; var s = e.length; var _ = 0, n = 0; return e.reverse().forEach(function (e, o) { for (e = Number(e) || 0, n = D(e, _) + n, _ += 32; _ > 7;) {
            var e_3 = n - D(Y(n, 7), 7);
            if (t.push(e_3), n = Y(n, 7), _ -= 7, 0 === n && o === s - 1)
                break;
        } }), 0 !== n && t.push(n), t = t.map(function (e, s) { return s === t.length - 1 ? e : e + 128; }); }
        function oe(e, t) { return F(e > Math.pow(2, 29) - 1, "key字段长度不能大于32位！"), ne([D(e, 3) + t]); }
        function re(e, t) { return o["_" + t](e); }
        var ie = [["int32", "int64", "uint32", "uint64", "sint32", "sint64", "bool", "enum"], ["fixed64", "sfixed64", "double"], ["string", "bytes"], ["_deprecated_"], ["_deprecated_"], ["fixed32", "sfixed32", "float"]], Ee = ["int64", "sint32", "sint64", "enum", "fixed64", "sfixed64", "double", "fixed32", "sfixed32", "float"], ae = ["int32", "int64", "uint32", "uint64"], Re = "repeated", ce = "__parent", Ce = "__typeof", de = "__keyname", le = "__primitive", Oe = "__message", Se = "__enum", ue = "bytes", Ae = "uint32", Ie = ".";
        function Te(e) { return ie.findIndex(function (t) { return t.includes(e); }); }
        function pe(e) { return Ee.includes(e); }
        function he(e, t) { var s; return H(e.fields, function (e) { e.id === t && (s = e); }), F(!s, "无法获取到类型", { id: t, fields: e.fields }), s; }
        function Me(e, t) { var s = e; var _ = t.split(Ie); var n = null; for (; s !== s[ce];) {
            if (s.nested && s.nested.hasOwnProperty(_[0])) {
                n = _.reduce(function (e, t) { return e.nested[t]; }, s);
                break;
            }
            s = s[ce];
        } return s !== s[ce] || n || s.nested && s.nested.hasOwnProperty(_[0]) && (n = _.reduce(function (e, t) { return e.nested[t]; }, s)), F(!n, "没有嵌套类型，无法查询！", { message: e, paths: _ }), n; }
        var me = (function () {
            function class_2(e, t) {
                if (t === void 0) { t = ""; }
                var s;
                this.proto = (s = function (e, t) { F(!b(e.nested), "没有嵌套类型，无法移除！", { proto: e, packageName: t }); var s = t.split(Ie); return "" === t ? e : s.reduce(function (e, t) { return e.nested[t]; }, e); }(e, t), JSON.parse(JSON.stringify(s))), G(this.proto, ce, this.proto), H(this.proto, function (e, t, s) { return !(t === ce || !b(e) || (G(e, ce, s), G(e, de, t), 0)); }), H(this.proto, function (e, t, s) { if (!b(e))
                    return !1; if ("fields" === t)
                    return !0; if (!e.hasOwnProperty("type"))
                    return !0; var _ = le; return function (e) { return ie.findIndex(function (t) { return t.includes(e); }) >= 0; }(e.type) || (_ = Oe, Me(e, e.type).values && (_ = Se)), G(e, Ce, _), G(e, de, t), !1; });
            }
            class_2.prototype.getConverter = function (e, t) { var s = Me(t = t || this.proto, e), _ = this.getConverter.bind(this); return { decode: function (e) { return (function (e, t, s, _) { var n = function (e) { var t = {}; for (var s_6 in e.fields) {
                    var _6 = e.fields[s_6];
                    if (_6[Ce] === Se) {
                        t[s_6] = 0;
                        continue;
                    }
                    if (_6.rule === Re && _6[Ce] === Oe) {
                        t[s_6] = [];
                        continue;
                    }
                    if (_6[Ce] !== le)
                        continue;
                    var n_2 = Te(_6.type);
                    switch (0 === n_2 && (t[s_6] = 0), _6.type) {
                        case "string":
                            t[s_6] = "";
                            break;
                        case "bytes":
                            t[s_6] = [];
                            break;
                        case "bool": t[s_6] = !1;
                    }
                } return t; }(e), o = function (e, t) { var s = e[de]; e.rule === Re && n[s] ? n[s].push(t) : e.rule !== Re || n[s] ? n[s] = t : (n[s] = [], U(n[s], t)); }, r = new Uint8Array(_); var i = 0; return (function () { for (; i < r.length;) {
                    var t_3 = X(r, i);
                    var _7 = void 0;
                    i = t_3.cursor;
                    var n_3 = he(e, t_3.id);
                    var E_1 = n_3.type;
                    var a_1 = 0 === t_3.writeType, R_1 = n_3[Ce] === Se, c_1 = n_3[Ce] === le, C_1 = 2 === t_3.writeType;
                    if (F(pe(E_1), "\u7C7B\u578B\u9519\u8BEF\uFF1A " + E_1 + " \u4E0D\u652F\u6301"), C_1 && c_1)
                        _7 = z(r, i, E_1);
                    else if (C_1 && !c_1) {
                        var e_4 = (_7 = J(r, i, Ae)).cursor, t_4 = _7.cursor + _7.value, o_1 = s(E_1, n_3);
                        _7.value = o_1.decode(r.slice(e_4, t_4)), _7.cursor = t_4;
                    }
                    else {
                        if (!a_1)
                            return v("不支持该类型", { keyInfo: t_3, field: n_3 });
                        R_1 && (E_1 = Ae), _7 = J(r, i, E_1);
                    }
                    i = _7.cursor, o(n_3, _7.value);
                } })(), n; })(s, 0, _, e); }, encode: function (t) { return (function (e, t, s, _) { var n = function (e, t) { var s = [], _ = e.type, n = e.id, r = e.rule, i = Te(_), E = -1 !== i, a = r === Re, R = function (e) { return ae.findIndex(function (t) { return t === e; }) >= 0; }(_); if (F(pe(_), "\u7C7B\u578B\u9519\u8BEF\uFF1A " + _ + " \u4E0D\u652F\u6301"), F(a && !Array.isArray(t), "repeated 类型值应该为数组", e), !E && a)
                    H(t, function (e) { U(s, oe(n, 2)), U(s, re(o(e, _), ue)); });
                else if (E && a && R) {
                    var e_5 = [];
                    U(s, oe(n, 2)), H(t, function (t) { return U(e_5, re(t, _)); }), U(s, re(e_5, ue));
                }
                else if (E && a && !R)
                    H(t, function (e) { U(s, oe(n, 2)), U(s, re(e, _)); });
                else if (E || a) {
                    if (!E || a)
                        return v("字段编码失败", { writeType: i, rule: r });
                    U(s, oe(n, i)), U(s, re(t, _));
                }
                else
                    e[Ce] === Se ? (U(s, oe(n, 0)), U(s, re(t, Ae))) : (t = o(t, _), U(s, oe(n, 2)), U(s, re(t, ue))); return s; }, o = function (t, s) { var _ = [], o = Me(e, s).fields; return H(t, function (e, t, s) { if (null == e || !o[t])
                    return !1; var r = n(o[t], e); U(_, r); }), _; }, r = o(_, t); return new Uint8Array(r); })(s, e, 0, t); } }; };
            return class_2;
        }());
        var fe = _.errCodeConvert, Ne = new me(s(8));
        function Le(e) { return Ne.getConverter.bind(Ne)(e); }
        var ye = new Map, ge = new Map, Pe = new Map;
        var De = Le("lagame.ClientSendServerReqWrap1"), Ye = Le("lagame.ClientSendServerReqWrap2"), ve = Le("lagame.ClientSendServerRspWrap1"), Fe = Le("lagame.ClientSendServerRspWrap2"), Ue = Le("lagame.ServerSendClientBstWrap1"), He = Le("lagame.ServerSendClientBstWrap2");
        ye.set(r.e.E_CMD_LOGIN_REQ, Le("lagame.LoginReq")), ge.set(r.e.E_CMD_LOGIN_REQ, Le("lagame.LoginRsp")), ye.set(r.e.E_CMD_LOGOUT_REQ, Le("lagame.LogoutReq")), ge.set(r.e.E_CMD_LOGOUT_REQ, Le("lagame.LogoutRsp")), ye.set(r.e.E_CMD_CHANGE_PLAYER_STATE_REQ, Le("lagame.ChangeCustomPlayerStatusReq")), ge.set(r.e.E_CMD_CHANGE_PLAYER_STATE_REQ, Le("lagame.ChangeCustomPlayerStatusRsp")), ye.set(r.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ, Le("lagame.SendToGameSvrReq")), ge.set(r.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ, Le("lagame.SendToGameSvrRsp")), ye.set(r.e.E_CMD_RELAY_SEND_FRAME_REQ, Le("lagame.SendFrameReq")), ge.set(r.e.E_CMD_RELAY_SEND_FRAME_REQ, Le("lagame.SendFrameRsp")), ye.set(r.e.E_CMD_ROOM_CHAT_REQ, Le("lagame.SendToClientReq")), ge.set(r.e.E_CMD_ROOM_CHAT_REQ, Le("lagame.SendToClientRsp")), ye.set(r.e.E_CMD_CHECK_LOGIN_REQ, Le("lagame.CheckLoginReq")), ge.set(r.e.E_CMD_CHECK_LOGIN_REQ, Le("lagame.CheckLoginRsp")), ye.set(r.e.E_CMD_RELAY_REQUEST_FRAME_REQ, Le("lagame.RequestFrameReq")), ge.set(r.e.E_CMD_RELAY_REQUEST_FRAME_REQ, Le("lagame.RequestFrameRsp")), ye.set(r.e.E_CMD_START_FRAME_SYNC_REQ, Le("lagame.StartFrameSyncReq")), ge.set(r.e.E_CMD_START_FRAME_SYNC_REQ, Le("lagame.StartFrameSyncRsp")), ye.set(r.e.E_CMD_STOP_FRAME_SYNC_REQ, Le("lagame.StopFrameSyncReq")), ge.set(r.e.E_CMD_STOP_FRAME_SYNC_REQ, Le("lagame.StopFrameSyncRsp")), ye.set(r.e.E_CMD_CREATE_ROOM_REQ, Le("lagame.CreateRoomReq")), ge.set(r.e.E_CMD_CREATE_ROOM_REQ, Le("lagame.CreateRoomRsp")), ye.set(r.e.E_CMD_JOIN_ROOM_REQ, Le("lagame.JoinRoomReq")), ge.set(r.e.E_CMD_JOIN_ROOM_REQ, Le("lagame.JoinRoomRsp")), ye.set(r.e.E_CMD_QUIT_ROOM_REQ, Le("lagame.LeaveRoomReq")), ge.set(r.e.E_CMD_QUIT_ROOM_REQ, Le("lagame.LeaveRoomRsp")), ye.set(r.e.E_CMD_DISSMISS_ROOM_REQ, Le("lagame.DismissRoomReq")), ge.set(r.e.E_CMD_DISSMISS_ROOM_REQ, Le("lagame.DismissRoomRsp")), ye.set(r.e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ, Le("lagame.ChangeRoomReq")), ge.set(r.e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ, Le("lagame.ChangeRoomRsp")), ye.set(r.e.E_CMD_REMOVE_MEMBER_REQ, Le("lagame.RemovePlayerReq")), ge.set(r.e.E_CMD_REMOVE_MEMBER_REQ, Le("lagame.RemovePlayerRsp")), ye.set(r.e.E_CMD_GET_ROOM_DETAIL_REQ, Le("lagame.GetRoomByRoomIdReq")), ge.set(r.e.E_CMD_GET_ROOM_DETAIL_REQ, Le("lagame.GetRoomByRoomIdRsp")), ye.set(r.e.E_CMD_GET_ROOM_LIST_REQ, Le("lagame.GetRoomListReq")), ge.set(r.e.E_CMD_GET_ROOM_LIST_REQ, Le("lagame.GetRoomListRsp")), ye.set(r.e.E_CMD_HEART_BEAT_REQ, Le("lagame.HeartBeatReq")), ge.set(r.e.E_CMD_HEART_BEAT_REQ, Le("lagame.HeartBeatRsp")), ye.set(r.e.E_CMD_MATCH_PLAYER_COMPLEX_REQ, Le("lagame.MatchPlayersReq")), ge.set(r.e.E_CMD_MATCH_PLAYER_COMPLEX_REQ, Le("lagame.MatchPlayersRsp")), ye.set(r.e.E_CMD_MATCH_ROOM_SIMPLE_REQ, Le("lagame.MatchRoomSimpleReq")), ge.set(r.e.E_CMD_MATCH_ROOM_SIMPLE_REQ, Le("lagame.MatchRoomSimpleRsp")), ye.set(r.e.E_CMD_MATCH_CANCEL_MATCH_REQ, Le("lagame.CancelPlayerMatchReq")), ge.set(r.e.E_CMD_MATCH_CANCEL_MATCH_REQ, Le("lagame.CancelPlayerMatchRsp")), Pe.set(r.f.E_PUSH_TYPE_GAMESVR, Le("lagame.RecvFromGameSvrBst")), Pe.set(r.f.E_PUSH_TYPE_ROOM_CHAT, Le("lagame.RecvFromClientBst")), Pe.set(r.f.E_PUSH_TYPE_START_GAME, Le("lagame.StartFrameSyncBst")), Pe.set(r.f.E_PUSH_TYPE_STOP_GAME, Le("lagame.StopFrameSyncBst")), Pe.set(r.f.E_PUSH_TYPE_RELAY, Le("lagame.RecvFrameBst")), Pe.set(r.f.E_PUSH_TYPE_JOIN_ROOM, Le("lagame.JoinRoomBst")), Pe.set(r.f.E_PUSH_TYPE_LEAVE_ROOM, Le("lagame.LeaveRoomBst")), Pe.set(r.f.E_PUSH_TYPE_DISMISS_ROOM, Le("lagame.DismissRoomBst")), Pe.set(r.f.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY, Le("lagame.ChangeRoomBst")), Pe.set(r.f.E_PUSH_TYPE_REMOVE_PLAYER, Le("lagame.RemovePlayerBst")), Pe.set(r.f.E_PUSH_TYPE_PLAYER_STATE, Le("lagame.ChangeCustomPlayerStatusBst")), Pe.set(r.f.E_PUSH_TYPE_NETWORK_STATE, Le("lagame.ChangePlayerNetworkStateBst")), Pe.set(r.f.E_PUSH_TYPE_MATCH_TIMEOUT, Le("lagame.MatchTimeoutBst")), Pe.set(r.f.E_PUSH_TYPE_MATCH_SUCCESS, Le("lagame.MatchPlayersBst"));
        var be = Math.pow(2, 32) - 1 - 1 - 4 - 1;
        function Ge(e) { var t = !1; return [r.c.EC_ACCESS_CMD_GET_TOKEN_ERR, r.c.EC_ACCESS_CMD_TOKEN_PRE_EXPIRE, r.c.EC_ACCESS_CMD_INVALID_TOKEN, r.c.EC_ACCESS_GET_COMM_CONNECT_ERR].includes(e) && (t = !0), t; }
        function ke(e) { var t = !1; return [r.c.EC_ACCESS_GET_RELAY_CONNECT_ERR].includes(e) && (t = !0), t; }
        var Qe = (function (_super) {
            __extends(class_3, _super);
            function class_3(e) {
                var _this = this;
                _this = _super.call(this) || this, _this.responses = e;
                return _this;
            }
            class_3.prototype.sendRequest = function (e, t, s, _, n, o) {
                var _this = this;
                if (o === void 0) { o = ""; }
                if (!o) {
                    o = u();
                    var r_3 = { time: Date.now(), isSocketSend: !1, cmd: t, response: function (e) { s(L.SUCCESS, e, _), _this.deleteSeqQueue(o); }, resend: function () { return _this.sendRequest(e, t, s, _, n, o); }, sendSuccess: function () { this.isSocketSend = !0; }, sendFail: function (e, t) {
                            if (t === void 0) { t = ""; }
                            var n = { seq: o, body: null, errCode: e, errMsg: "\u6D88\u606F\u53D1\u9001\u5931\u8D25\uFF0C" + t + " [" + e + "]" };
                            s(L.FAIL, { RspWrap1: n, RspWrap2: null, body: null }, _), _this.deleteSeqQueue(o);
                        }, remove: function () { return _this.deleteSeqQueue(o); } };
                    this.addSeqQueue(o, r_3);
                }
                var i = function (e, t, s) { var _ = t.cmd, n = ye.get(_); if (!n || !n.encode)
                    throw new Error("找不到该 cmd 编码方法: " + _); var o = n.encode(s), r = Ye.encode(Object.assign({}, t, { body: o })); return De.encode(Object.assign({}, e, { body: r })); }(Object.assign({}, r.l, { cmd: n, seq: o, body: null }), { cmd: t, body: null }, e);
                if (i.length > be) {
                    var e_6 = P.sendQueue.get(o);
                    return setTimeout(function () { return e_6 && e_6.sendFail(r.c.EC_SDK_SEND_FAIL, "数据长度超限"); }), o;
                }
                var E = this.buildData(i);
                return this.send(E, o, t);
            };
            class_3.prototype.buildData = function (e) { var t = new Uint8Array(1), s = new Uint8Array(1); return t[0] = y.CLIENT_PRE, s[0] = y.CLIENT_END, _super.prototype.buildData.call(this, t, e, s); };
            class_3.prototype.handleMessage = function (e) { var t = null; var s = function (e, t) { var s = ve.decode(e), _ = Fe.decode(s.body), n = t(s.seq); if (!n)
                return null; var o = null, r = ge.get(n); if (!r || !r.decode)
                throw new Error("找不到该 cmd 解码方法: " + n); _.body && (o = r.decode(_.body)); var _a = fe(s.errCode, s.errMsg), i = _a.errCode, E = _a.errMsg; return s.errMsg = E, s.errCode = i, s.body = null, _.body = null, { RspWrap1: s, RspWrap2: _, body: o }; }(e, function (e) { if (t = P.sendQueue.get(e))
                return t.cmd; }); if (t && !this.handleErrCode(s.RspWrap1))
                return t.response(s); };
            class_3.prototype.handleResponse = function (e) { return this.handleMessage(e); };
            class_3.prototype.handleErrCode = function (e) { return Ge(e.errCode) ? (this.handleTokenErr(), c.a.log("TOKEN_ERROR", e), !0) : ke(e.errCode) && this.socket.id === m.a.ConnectionType.RELAY ? (this.handleRelayConnectErr(), c.a.log("RELAY_CONNECT_ERROR", e), !0) : (e.errCode !== r.c.EC_OK && this.responses.error({ code: e.errCode, msg: e.errMsg, seq: e.seq }), !1); };
            class_3.prototype.handleSuccess = function (e, t) { e === r.c.EC_OK && t(); };
            class_3.prototype.handleTokenErr = function () { r.i.setStatus(r.i.StatusType.LOGOUT), this.socket.emit(p.autoAuth, {}); };
            class_3.prototype.handleRelayConnectErr = function () { r.a.setStatus(r.a.StatusType.OFFLINE), this.socket.emit(p.autoAuth, {}); };
            return class_3;
        }(P));
        var we = (function (_super) {
            __extends(class_4, _super);
            function class_4() {
                return _super.call(this) || this;
            }
            class_4.prototype.buildData = function (e) { var t = new Uint8Array(1), s = new Uint8Array(1); return t[0] = y.SERVER_PRE, s[0] = y.SERVER_END, _super.prototype.buildData.call(this, t, e, s); };
            class_4.prototype.handleMessage = function (e) { var t = function (e) { var t = Ue.decode(e), s = He.decode(t.body), _ = null, n = Pe.get(s.type); if (!n || !n.decode)
                throw new Error("找不到该 cmd 解码方法: " + s.type); return s.msg && (_ = n.decode(s.msg)), t.body = null, s.msg = null, { BstWrap1: t, BstWrap2: s, body: _ }; }(e), s = P.broadcastHandlers.get(t.BstWrap2.type); s && s(t.body, t.BstWrap1.seq); };
            class_4.prototype.handleBroadcast = function (e) { return this.handleMessage(e); };
            return class_4;
        }(P));
        var Ke = [m.a.ClientSendServerReqWrap2Cmd.E_CMD_RELAY_SEND_FRAME_REQ, m.a.ClientSendServerReqWrap2Cmd.E_CMD_RELAY_REQUEST_FRAME_REQ, m.a.ClientSendServerReqWrap2Cmd.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ];
        var Be;
        !function (e) { e.comm = "comm_cmd", e.relay = "relay_cmd"; }(Be || (Be = {}));
        var xe = (function () {
            function class_5(e) {
                this.client = new Qe(e), this.server = new we, this.responses = e;
            }
            class_5.startQueueLoop = function () { P.startQueueLoop(); };
            class_5.stopQueueLoop = function () { P.stopQueueLoop(); };
            class_5.prototype.bindSocket = function (e) { var t = this.client.handleResponse.bind(this.client), s = this.server.handleBroadcast.bind(this.server); this.client.bindSocket(e, t, s), this.server.bindSocket(e, t, s); };
            class_5.prototype.unbindSocket = function () { this.client.unbindSocket(), this.server.unbindSocket(); };
            class_5.prototype.setBroadcastHandler = function (e, t) { this.server.setBroadcastHandler(e, t); };
            class_5.prototype.send = function (e, t, s, _) { var n = Be.comm; return Ke.includes(t) && (n = Be.relay), this.client.sendRequest(e, t, s, _, n); };
            return class_5;
        }());
        var qe = (function (_super) {
            __extends(class_6, _super);
            function class_6(e) {
                var _this = this;
                _this = _super.call(this, e) || this, _this.matchTimeoutBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MATCH_TIMEOUT, _this.matchUsersBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MATCH_SUCCESS, _this.setBroadcastHandler(_this.matchTimeoutBroadcastType, _this.matchUsersTimeoutBroadcast.bind(_this)), _this.setBroadcastHandler(_this.matchUsersBroadcastType, _this.matchUsersBroadcast.bind(_this));
                return _this;
            }
            class_6.prototype.matchUsersComplex = function (e, t) { var s = r.e.E_CMD_MATCH_PLAYER_COMPLEX_REQ, _ = this.send(e, s, this.matchUsersComplexResponse.bind(this), t); return c.a.log("MATCHUSERSCOMPLEX_Para", e, _), _; };
            class_6.prototype.matchRoom = function (e, t) { var s = r.e.E_CMD_MATCH_ROOM_SIMPLE_REQ, _ = this.send(e, s, this.matchRoomResponse.bind(this), t); return c.a.log("MATCHROOM_Para", e, _), _; };
            class_6.prototype.cancelMatch = function (e, t) { var s = r.e.E_CMD_MATCH_CANCEL_MATCH_REQ, _ = this.send(e, s, this.cancelMatchResponse.bind(this), t); return c.a.log("CANCELMATCH_Para", e, _), _; };
            class_6.prototype.matchUsersComplexResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.matchPlayersRsp(n); };
            class_6.prototype.matchRoomResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.matchRoomSimpleRsp(n); };
            class_6.prototype.cancelMatchResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.cancelPlayerMatchRsp(n); };
            class_6.prototype.matchUsersTimeoutBroadcast = function (e, t) { var s = { data: e, seq: t }; return this.responses.onMatchTimeout(s); };
            class_6.prototype.matchUsersBroadcast = function (e, t) { var s = { data: e, seq: t }; return this.responses.onMatchPlayers(s); };
            return class_6;
        }(xe));
        var Ve, We = (function (_super) {
            __extends(class_7, _super);
            function class_7(e) {
                var _this = this;
                _this = _super.call(this, e) || this, _this.joinRoomBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_JOIN_ROOM, _this.leaveRoomBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_LEAVE_ROOM, _this.dismissRoomBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_DISMISS_ROOM, _this.changeRoomBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY, _this.removeUserBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_REMOVE_PLAYER, _this.changeUserStateBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_PLAYER_STATE, _this.roomUserNetworkBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_NETWORK_STATE, _this.testBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_TEST, _this.setBroadcastHandler(_this.joinRoomBroadcastType, _this.onJoinRoom.bind(_this)), _this.setBroadcastHandler(_this.leaveRoomBroadcastType, _this.onLeaveRoom.bind(_this)), _this.setBroadcastHandler(_this.dismissRoomBroadcastType, _this.onDismissRoom.bind(_this)), _this.setBroadcastHandler(_this.changeRoomBroadcastType, _this.onChangeRoom.bind(_this)), _this.setBroadcastHandler(_this.removeUserBroadcastType, _this.onRemoveUser.bind(_this)), _this.setBroadcastHandler(_this.changeUserStateBroadcastType, _this.onChangeUserState.bind(_this)), _this.setBroadcastHandler(_this.roomUserNetworkBroadcastType, _this.onChangePlayerNetworkState.bind(_this)), _this.setBroadcastHandler(_this.testBroadcastType, _this.testBroadcast.bind(_this));
                return _this;
            }
            class_7.prototype.createRoom = function (e, t) { var s = r.e.E_CMD_CREATE_ROOM_REQ, _ = this.send(e, s, this.createRoomResponse.bind(this), t); return c.a.log("CREATEROOM_Para", e, _), _; };
            class_7.prototype.joinRoom = function (e, t) { var s = r.e.E_CMD_JOIN_ROOM_REQ, _ = this.send(e, s, this.joinRoomResponse.bind(this), t); return c.a.log("JOINROOM_Para", e, _), _; };
            class_7.prototype.leaveRoom = function (e, t) { var s = r.e.E_CMD_QUIT_ROOM_REQ, _ = this.send(e, s, this.leaveRoomResponse.bind(this), t); return c.a.log("LEAVEROOM_Para", e, _), _; };
            class_7.prototype.dismissRoom = function (e, t) { var s = r.e.E_CMD_DISSMISS_ROOM_REQ, _ = this.send(e, s, this.dismissRoomResponse.bind(this), t); return c.a.log("DISMISSROOM_Para", e, _), _; };
            class_7.prototype.changeRoom = function (e, t) { var s = r.e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ, _ = this.send(e, s, this.changeRoomResponse.bind(this), t); return c.a.log("CHANGEROOM_Para", e, _), _; };
            class_7.prototype.removeUser = function (e, t) { var s = r.e.E_CMD_REMOVE_MEMBER_REQ, _ = this.send(e, s, this.removeUserResponse.bind(this), t); return c.a.log("REMOVEUSER_Para", e, _), _; };
            class_7.prototype.getRoomByRoomId = function (e, t) { var s = r.e.E_CMD_GET_ROOM_DETAIL_REQ, _ = this.send(e, s, this.getRoomByRoomIdRsp().bind(this), t); return c.a.log("GETROOMBYROOMID_Para", e, _), _; };
            class_7.prototype.getRoomList = function (e, t) { var s = r.e.E_CMD_GET_ROOM_LIST_REQ, _ = this.send(e, s, this.getRoomListResponse.bind(this), t); return c.a.log("GETROOMLIST_Para", e, _), _; };
            class_7.prototype.createTeamRoom = function (e, t) { };
            class_7.prototype.joinTeamRoom = function (e, t) { };
            class_7.prototype.createRoomResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.createRoomRsp(n); };
            class_7.prototype.joinRoomResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.joinRoomRsp(n); };
            class_7.prototype.leaveRoomResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.leaveRoomRsp(n); };
            class_7.prototype.dismissRoomResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.dismissRoomRsp(n); };
            class_7.prototype.changeRoomResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.changeRoomRsp(n); };
            class_7.prototype.removeUserResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.removePlayerRsp(n); };
            class_7.prototype.getRoomByRoomIdRsp = function () {
                var _this = this;
                return function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; s && s(n), _this.responses.getRoomByRoomIdRsp(n); };
            };
            class_7.prototype.getRoomListResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.getRoomListRsp(n); };
            class_7.prototype.testBroadcast = function (e, t) { var s = { data: e, seq: t }; c.a.log("test 广播", s); };
            class_7.prototype.onJoinRoom = function (e, t) { var s = { data: e, seq: t }; return this.responses.onJoinRoom(s); };
            class_7.prototype.onLeaveRoom = function (e, t) { var s = { data: e, seq: t }; return this.responses.onLeaveRoom(s); };
            class_7.prototype.onDismissRoom = function (e, t) { var s = { data: e, seq: t }; return this.responses.onDismissRoom(s); };
            class_7.prototype.onChangeRoom = function (e, t) { var s = { data: e, seq: t }; return this.responses.onChangeRoom(s); };
            class_7.prototype.onRemoveUser = function (e, t) { var s = { data: e, seq: t }; return this.responses.onRemovePlayer(s); };
            class_7.prototype.onChangeUserState = function (e, t) { var s = { data: e, seq: t }; return this.responses.onChangeCustomPlayerStatus(s); };
            class_7.prototype.onChangePlayerNetworkState = function (e, t) { var s = { data: e, seq: t }; return this.responses.onChangePlayerNetworkState(s); };
            return class_7;
        }(xe));
        !function (e) { e.initSdk = "init_sdk", e.request = "request", e.ping = "ping", e.recFrame = "recFrame"; }(Ve || (Ve = {}));
        var je = s(6);
        var Xe = null, Je = !1, ze = [], $e = [], Ze = 1e4;
        setInterval(function () { if (Je) {
            if (0 !== ze.length) {
                var e_7 = JSON.stringify(ze);
                ze = [], st(Ve.request, { requests: e_7 });
            }
            if (0 !== $e.length) {
                var e_8 = JSON.stringify($e);
                $e = [], st(Ve.recFrame, { times: e_8 });
            }
        } }, Ze);
        var et = 0;
        function tt(e, t, _, n) { var o = ++et; c.a.log("EventUploader", "validate"), function (e, t, _) {
            if (_ === void 0) { _ = 1e4; }
            Ze = _, Xe || (Xe = s(18)), Xe.setOpenid(e || ""), Xe.setUnionid(t || ""), Xe.appLaunch(), Je = !0;
        }(e, t, _), st(Ve.initSdk, {}, !0, function (e) { o === et && n && n(e); }); }
        function st(e, t, s, _) {
            if (s === void 0) { s = !1; }
            t.sdkType = je.sdkType || "", t.sdkVersion = je.version || "", t.playerId = Xe.unid || "", (s || r.h.isInited()) && Xe.onEvent(e, t, function (e) { _ && _(e); });
        }
        var _t = { lastTime: Date.now(), frameRate: 0, callback: function () { }, run: function () { _t.callback && _t.callback(), requestAnimationFrame(_t.run); } };
        _t.callback = (function () { var e = Date.now(), t = Math.round(1e3 / (e - _t.lastTime + 1e-6)); _t.frameRate = t, _t.lastTime = e; }), _t.run();
        var nt = (function () {
            function class_8(e) {
                this.netUtil1 = null, this.netUtil2 = null, this.frameBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_RELAY, this.startGameBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_START_GAME, this.stopGameBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_STOP_GAME, this.sendMessageExtBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_GAMESVR, this.responses = e, this.netUtil1 = new xe(e), this.netUtil2 = new xe(e), this.netUtil1.setBroadcastHandler(this.startGameBroadcastType, this.onStartFrameSync.bind(this)), this.netUtil1.setBroadcastHandler(this.stopGameBroadcastType, this.onStopFrameSync.bind(this)), this.netUtil2.setBroadcastHandler(this.frameBroadcastType, this.onRecvFrame.bind(this)), this.netUtil2.setBroadcastHandler(this.sendMessageExtBroadcastType, this.onRecvFromGameSvr.bind(this));
            }
            class_8.prototype.setFrameRoom = function (e) { c.a.log("SETFRAMEROOM", e); var t = this.getFrameRoom(); this.roomInfo = e || { roomId: 0, routeId: "" }; var s = t.routeId, _ = this.roomInfo.routeId; return _ ? s !== _ ? (r.a.setStatus(r.a.StatusType.OFFLINE), this.autoCheckLogin()) : s === _ ? this.autoCheckLogin() : void 0 : this.netUtil2.client.socket && this.netUtil2.client.socket.close(); };
            class_8.prototype.getFrameRoom = function () { return this.roomInfo || { id: 0, routeId: "" }; };
            class_8.prototype.startFrameSync = function (e, t) { if (!this.roomInfo.id) {
                var e_9 = { RspWrap1: { seq: null, body: null, errCode: r.c.EC_SDK_NO_ROOM, errMsg: "无房间信息" }, RspWrap2: null, body: null };
                return void this.startFrameSyncResponse(!1, e_9, t);
            } var s = r.e.E_CMD_START_FRAME_SYNC_REQ, _ = this.netUtil1.send(e, s, this.startFrameSyncResponse.bind(this), t); return c.a.log("STARTFRAMESYNC_Para", e, _), _; };
            class_8.prototype.stopFrameSync = function (e, t) { if (!this.roomInfo.id) {
                var e_10 = { RspWrap1: { seq: null, body: null, errCode: r.c.EC_SDK_NO_ROOM, errMsg: "无房间信息" }, RspWrap2: null, body: null };
                return void this.stopFrameSyncResponse(!1, e_10, t);
            } var s = r.e.E_CMD_STOP_FRAME_SYNC_REQ, _ = this.netUtil1.send(e, s, this.stopFrameSyncResponse.bind(this), t); return c.a.log("STOPFRAMESYNC_Para", e, _), _; };
            class_8.prototype.sendFrame = function (e, t) { if (!this.roomInfo.id) {
                var e_11 = { RspWrap1: { seq: null, body: null, errCode: r.c.EC_SDK_NO_ROOM, errMsg: "无房间信息" }, RspWrap2: null, body: null };
                return void this.sendFrameResponse(!1, e_11, t);
            } this.autoCheckLogin(); var s = r.e.E_CMD_RELAY_SEND_FRAME_REQ, _ = this.netUtil2.send(e, s, this.sendFrameResponse.bind(this), t); return c.a.log("SENDFRAME_Para", e, _), _; };
            class_8.prototype.requestFrame = function (e, t) { if (!this.roomInfo.id) {
                var e_12 = { RspWrap1: { seq: null, body: null, errCode: r.c.EC_SDK_NO_ROOM, errMsg: "无房间信息" }, RspWrap2: null, body: null };
                return void this.requestFrameResponse(!1, e_12, t);
            } this.autoCheckLogin(); var s = r.e.E_CMD_RELAY_REQUEST_FRAME_REQ, _ = this.netUtil2.send(e, s, this.requestFrameResponse.bind(this), t); return c.a.log("REQUESTFRAME_Para", e, _), _; };
            class_8.prototype.checkLogin = function (e, t) { if (!this.roomInfo.id) {
                var t_5 = { RspWrap1: { seq: null, body: null, errCode: r.c.EC_SDK_NO_ROOM, errMsg: "无房间信息" }, RspWrap2: null, body: null };
                return void this.checkLoginResponse(!1, t_5, e);
            } r.a.setStatus(r.a.StatusType.CHECKING); var s = r.e.E_CMD_CHECK_LOGIN_REQ, _ = { token: r.l.authKey, routeId: this.roomInfo.routeId }, n = this.netUtil2.send(_, s, this.checkLoginResponse.bind(this), e); return c.a.log("CHECKLOGIN", n, t), n; };
            class_8.prototype.sendMessageExt = function (e, t) { if (!this.roomInfo.id) {
                var e_13 = { RspWrap1: { seq: null, body: null, errCode: r.c.EC_SDK_NO_ROOM, errMsg: "无房间信息" }, RspWrap2: null, body: null };
                return void this.sendMessageExtResponse(!1, e_13, t);
            } this.autoCheckLogin(); var s = r.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ, _ = this.netUtil2.send(e, s, this.sendMessageExtResponse.bind(this), t); return c.a.log("SENDTOGAMESVR_Para", e, _), _; };
            class_8.prototype.startFrameSyncResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.startFrameSyncRsp(n); };
            class_8.prototype.stopFrameSyncResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.stopFrameSyncRsp(n); };
            class_8.prototype.autoCheckLogin = function () { this.connect(), this.netUtil2.client.socket.isConnect() && r.a.isOffline() && this.netUtil2.client.socket.emit(p.autoAuth, {}); };
            class_8.prototype.connect = function () { !this.netUtil2.client.socket.isConnect() && this.roomInfo && (this.netUtil2.client.socket.url = r.j.url + ":" + r.g, this.netUtil2.client.socket.connect("framesender connect")); };
            class_8.prototype.sendFrameResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.sendFrameRsp(n); };
            class_8.prototype.checkLoginResponse = function (e, t, s) { r.a.setStatus(r.a.StatusType.OFFLINE); var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return n.code === r.c.EC_OK && r.a.setStatus(r.a.StatusType.CHECKED), c.a.log("RESPONSE_CheckLoginResponse", n), s && s(n); };
            class_8.prototype.requestFrameResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.requestFrameRsp(n); };
            class_8.prototype.sendMessageExtResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.sendToGameSvrRsp(n); };
            class_8.prototype.onRecvFrame = function (e, t) { var s = { data: { frame: Object.assign({}, e.frame, { roomId: this.getFrameRoom().id }) }, seq: t }; for (var _i = 0, _a = e.frame.items; _i < _a.length; _i++) {
                var t_6 = _a[_i];
                t_6.playerId === r.l.playerId && (_ = { time: Date.now() - t_6.timestamp }, Je && $e.push([_.time, _t.frameRate]));
            } var _; return this.responses.onRecvFrame(s); };
            class_8.prototype.onStartFrameSync = function (e, t) { var s = { data: Object.assign({}, e), seq: t }; return this.responses.onStartFrameSync(s); };
            class_8.prototype.onStopFrameSync = function (e, t) { var s = { data: Object.assign({}, e), seq: t }; return this.netUtil2 && this.netUtil2.client.clearQueue(), this.responses.onStopFrameSync(s); };
            class_8.prototype.onRecvFromGameSvr = function (e, t) { var s = {}; try {
                s = JSON.parse(e.data);
            }
            catch (t) {
                s = e.data;
            } var _ = { data: Object.assign({}, e, { data: s }, { roomId: e.roomId }), seq: t }; return this.responses.onRecvFromGameSvr(_); };
            return class_8;
        }());
        var ot = (function (_super) {
            __extends(class_9, _super);
            function class_9(e) {
                var _this = this;
                _this = _super.call(this, e) || this, _this.messageBroadcastType = m.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_ROOM_CHAT, _this.setBroadcastHandler(_this.messageBroadcastType, _this.onRecvFromClient.bind(_this));
                return _this;
            }
            class_9.prototype.sendMessage = function (e, t) { var s = r.e.E_CMD_ROOM_CHAT_REQ, _ = this.send(e, s, this.sendMessageResponse.bind(this), t); return c.a.log("SENDMESSAGE_Para", e, _), _; };
            class_9.prototype.sendMessageResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.sendToClientRsp(n); };
            class_9.prototype.onRecvFromClient = function (e, t) { var s = { data: e, seq: t }; return this.responses.onRecvFromClient(s); };
            return class_9;
        }(xe));
        var rt = (function (_super) {
            __extends(class_10, _super);
            function class_10(e) {
                return _super.call(this, e) || this;
            }
            class_10.prototype.login = function (e, t, s) { var _ = r.e.E_CMD_LOGIN_REQ, n = Math.floor(Date.now() / 1e3), o = Math.floor(Math.random() * (Math.pow(2, 32) - 1)), i = function (e, t, s, _, n) { var o = [["game_id", t], ["open_id", s], ["nonce", n], ["timestamp", _]].sort().map(function (e) { return e.join("="); }).join("&"), r = l(o, e || ""); return { sign: d.stringify(r), timestamp: _ }; }(t, e.gameId, e.openId, n, o).sign, E = I(), a = T(), R = Object.assign({}, e, { sign: i, timestamp: n, nonce: o, platform: E, channel: a }); r.i.setStatus(r.i.StatusType.LOGINING); var C = this.send(R, _, this.loginResponse.bind(this), s); return c.a.log("LOGIN_Para", R, C), r.i.setErrCode(0, ""), C; };
            class_10.prototype.logout = function (e, t) { var s = r.e.E_CMD_LOGOUT_REQ, _ = this.send(e, s, this.logoutResponse.bind(this), t); return c.a.log("LOGOUT_Para", e, _), r.i.setStatus(r.i.StatusType.LOGOUTING), _; };
            class_10.prototype.changeUserState = function (e, t) { var s = r.e.E_CMD_CHANGE_PLAYER_STATE_REQ, _ = this.send(e, s, this.changeUserStateResponse.bind(this), t); return c.a.log("CHANGEUSERSTATE_Para", e, _), _; };
            class_10.prototype.loginResponse = function (e, t, s) { e || r.i.setStatus(r.i.StatusType.LOGOUT); var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return c.a.log("RESPONSE_LoginResponse", n), this.client.handleSuccess(n.code, function () { r.l.authKey = t.body.token, r.l.playerId = t.body.playerId, r.i.setStatus(r.i.StatusType.LOGIN), r.d.setInfo({ id: n.data.playerId }); }), r.i.setErrCode(n.code, n.msg), s && s(n); };
            class_10.prototype.logoutResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq }; return c.a.log("RESPONSE_LogoutResponse", n), this.client.handleSuccess(n.code, function () { r.l.authKey = void 0, r.l.playerId = void 0, r.i.setStatus(r.i.StatusType.LOGOUT), r.d.setInfo({ id: void 0 }); }), s && s(n); };
            class_10.prototype.changeUserStateResponse = function (e, t, s) { var _ = t.RspWrap1, n = { code: _.errCode, msg: _.errMsg, seq: _.seq, data: t.body }; return s && s(n), this.responses.changeCustomPlayerStatusRsp(n); };
            return class_10;
        }(xe));
        var it = (function (_super) {
            __extends(class_11, _super);
            function class_11(e, t, s) {
                var _this = this;
                _this = _super.call(this, e) || this, _this.pingTimer = new i, _this.pongTimer = new i, _this.currentSeq = "", _this.id = t, _this.frameSender = s, _this.client.handleErrCode = _this.handleErrCode.bind(_this);
                return _this;
            }
            class_11.prototype.unbindSocket = function () { this.stop(), _super.prototype.unbindSocket.call(this); };
            class_11.prototype.handleErrCode = function (e) { return !1; };
            class_11.prototype.ping = function (e) {
                var _this = this;
                if (a(this.pingTimer), !r.l.authKey)
                    return;
                var t = Date.now(), s = this.frameSender && this.frameSender.roomInfo && this.frameSender.roomInfo.routeId ? this.frameSender.roomInfo.routeId : "", _ = { conType: this.id, routeId: s }, n = this.send(_, r.e.E_CMD_HEART_BEAT_REQ, function (e, s) { return _this.handlePong(e, s, t); }, e);
                this.currentSeq = n, c.a.log("PING", this.id, n), E(this.pongTimer, function () { return _this.handlePongTimeout(n); }, r.j.pingTimeout);
            };
            class_11.prototype.stop = function () { a(this.pingTimer, this.pongTimer); };
            class_11.prototype.handlePong = function (e, t, s) { var _; if (c.a.log("Pong", this.id, t.RspWrap1, "send", e), this.id === m.a.ConnectionType.RELAY && (_ = { type: this.id, time: Date.now() - s }, Je && st(Ve.ping, _)), a(this.pongTimer), !e)
                return this.handlePongTimeout(t.RspWrap1.seq); var n = t.RspWrap1.errCode; return Ge(n) ? (r.i.setStatus(r.i.StatusType.LOGOUT), this.client.socket.emit(p.autoAuth, {})) : ke(n) && this.client.socket.id === m.a.ConnectionType.RELAY ? (r.a.setStatus(r.a.StatusType.OFFLINE), this.client.socket.emit(p.autoAuth, {})) : void E(this.pingTimer, this.ping.bind(this), r.j.pingTimeout); };
            class_11.prototype.handlePongTimeout = function (e) { e === this.currentSeq && this.client.socket && (this.client.socket.connectNewSocket(this.client.socket.url), c.a.log("Pong_Timeout", this.id)); };
            return class_11;
        }(xe));
        function Et() { return C(); }
        var at = function (e, t) { return function (s) { if ("error" !== s && c.a.log(s, e), !s.startsWith("on") && s.includes("Rsp")) {
            var t_7 = e;
            !function (e) { Je && ze.push(e); }({ requestName: s.replace("Rsp", ""), seq: t_7.seq, errcode: t_7.code });
        } var _ = t.values(); for (var _i = 0, _8 = _; _i < _8.length; _i++) {
            var t_8 = _8[_i];
            t_8 && t_8[s] && t_8[s].call(t_8, e);
        } }; };
        var Rt = (function () {
            function Rt() {
                this.context = null, Rt.instance = this, this.context = new Set;
            }
            Rt.bindResponses = function (e) { Rt.instance.context.add(e); };
            Rt.unbindResponses = function (e) { Rt.instance.context.delete(e); };
            Rt.clearResponses = function () { Rt.instance.context.clear(); };
            Rt.prototype.onNetwork = function (e) { at(e, Rt.instance.context)("onNetwork"); };
            Rt.prototype.createRoomRsp = function (e) { at(e, Rt.instance.context)("createRoomRsp"); };
            Rt.prototype.joinRoomRsp = function (e) { at(e, Rt.instance.context)("joinRoomRsp"); };
            Rt.prototype.onJoinRoom = function (e) { at(e, Rt.instance.context)("onJoinRoom"); };
            Rt.prototype.leaveRoomRsp = function (e) { at(e, Rt.instance.context)("leaveRoomRsp"); };
            Rt.prototype.onLeaveRoom = function (e) { at(e, Rt.instance.context)("onLeaveRoom"); };
            Rt.prototype.dismissRoomRsp = function (e) { at(e, Rt.instance.context)("dismissRoomRsp"); };
            Rt.prototype.onDismissRoom = function (e) { at(e, Rt.instance.context)("onDismissRoom"); };
            Rt.prototype.changeRoomRsp = function (e) { at(e, Rt.instance.context)("changeRoomRsp"); };
            Rt.prototype.onChangeRoom = function (e) { at(e, Rt.instance.context)("onChangeRoom"); };
            Rt.prototype.removePlayerRsp = function (e) { at(e, Rt.instance.context)("removePlayerRsp"); };
            Rt.prototype.onRemovePlayer = function (e) { at(e, Rt.instance.context)("onRemovePlayer"); };
            Rt.prototype.getRoomByRoomIdRsp = function (e) { at(e, Rt.instance.context)("getRoomByRoomIdRsp"); };
            Rt.prototype.getRoomListRsp = function (e) { at(e, Rt.instance.context)("getRoomListRsp"); };
            Rt.prototype.matchPlayersSimpleRsp = function (e) { at(e, Rt.instance.context)("matchPlayersSimpleRsp"); };
            Rt.prototype.matchPlayersRsp = function (e) { at(e, Rt.instance.context)("matchPlayersRsp"); };
            Rt.prototype.matchRoomSimpleRsp = function (e) { at(e, Rt.instance.context)("matchRoomSimpleRsp"); };
            Rt.prototype.onMatchTimeout = function (e) { at(e, Rt.instance.context)("onMatchTimeout"); };
            Rt.prototype.onMatchPlayers = function (e) { at(e, Rt.instance.context)("onMatchPlayers"); };
            Rt.prototype.cancelPlayerMatchRsp = function (e) { at(e, Rt.instance.context)("cancelPlayerMatchRsp"); };
            Rt.prototype.startFrameSyncRsp = function (e) { at(e, Rt.instance.context)("startFrameSyncRsp"); };
            Rt.prototype.stopFrameSyncRsp = function (e) { at(e, Rt.instance.context)("stopFrameSyncRsp"); };
            Rt.prototype.sendFrameRsp = function (e) { at(e, Rt.instance.context)("sendFrameRsp"); };
            Rt.prototype.sendToClientRsp = function (e) { at(e, Rt.instance.context)("sendToClientRsp"); };
            Rt.prototype.onRecvFromClient = function (e) { at(e, Rt.instance.context)("onRecvFromClient"); };
            Rt.prototype.onRecvFromGameSvr = function (e) { at(e, Rt.instance.context)("onRecvFromGameSvr"); };
            Rt.prototype.onChangePlayerNetworkState = function (e) { at(e, Rt.instance.context)("onChangePlayerNetworkState"); };
            Rt.prototype.onRecvFrame = function (e) { at(e, Rt.instance.context)("onRecvFrame"); };
            Rt.prototype.requestFrameRsp = function (e) { at(e, Rt.instance.context)("requestFrameRsp"); };
            Rt.prototype.sendToGameSvrRsp = function (e) { at(e, Rt.instance.context)("sendToGameSvrRsp"); };
            Rt.prototype.changeCustomPlayerStatusRsp = function (e) { at(e, Rt.instance.context)("changeCustomPlayerStatusRsp"); };
            Rt.prototype.onChangeCustomPlayerStatus = function (e) { at(e, Rt.instance.context)("onChangeCustomPlayerStatus"); };
            Rt.prototype.onStartFrameSync = function (e) { at(e, Rt.instance.context)("onStartFrameSync"); };
            Rt.prototype.onStopFrameSync = function (e) { at(e, Rt.instance.context)("onStopFrameSync"); };
            Rt.prototype.error = function (e) { at(e, Rt.instance.context)("error"); };
            return Rt;
        }());
        var ct;
        Rt.instance = null;
        var Ct, dt = null, lt = null, Ot = null, St = null, ut = null, At = null, It = null;
        function Tt() { var e, t, s; r.h.isUnInit() && (Ot && pt(), r.h.setStatus(r.h.StatusType.INITING), Ot = new rt(mt.responses), ut = new qe(mt.responses), At = new ot(mt.responses), St = new We(mt.responses), It = new nt(mt.responses), ct = new M(m.a.ConnectionType.COMMON), Ct = new M(m.a.ConnectionType.RELAY), dt = new it(mt.responses, m.a.ConnectionType.COMMON, null), lt = new it(mt.responses, m.a.ConnectionType.RELAY, It), e = [dt, Ot, St, ut, At, It.netUtil1], t = [lt, It.netUtil2], e.forEach(function (e) { return e.bindSocket(ct); }), t.forEach(function (e) { return e.bindSocket(Ct); }), xe.stopQueueLoop(), xe.startQueueLoop(), ct.url = r.j.url, ct.on(p.connect, function () { r.i.isStatus(r.i.StatusType.LOGINING) || ht.login(), ct.url && mt.responses.onNetwork({ code: r.c.EC_OK, data: { type: ct.id } }); }), Ct.on(p.connect, function () { It.checkLogin(null, "connect " + !!Ct.isConnect()), Ct.url && mt.responses.onNetwork({ code: r.c.EC_OK, data: { type: Ct.id } }), lt.ping(); }), ct.on(p.connectClose, function () { Mt(!1, { code: r.c.EC_SDK_SOCKET_CLOSE }), r.h.isInited() && (r.i.setStatus(r.i.StatusType.LOGOUT), ct.url && mt.responses.onNetwork({ code: r.c.EC_SDK_SOCKET_CLOSE, msg: "Socket断开", seq: null })); }), Ct.on(p.connectClose, function () { r.h.isInited() && (r.a.setStatus(r.a.StatusType.OFFLINE), Ct.url && mt.responses.onNetwork({ code: r.c.EC_SDK_SOCKET_CLOSE, msg: "Socket断开", seq: null }), lt.stop()); }), ct.on(p.connectError, function (e) { r.h.isInited() && ct.url && mt.responses.onNetwork({ code: r.c.EC_SDK_SOCKET_ERROR, msg: "Socket错误", seq: null }); }), Ct.on(p.connectError, function (e) { r.h.isInited() && Ct.url && mt.responses.onNetwork({ code: r.c.EC_SDK_SOCKET_ERROR, msg: "Socket错误", seq: null }); }), ct.on(p.autoAuth, function () { r.h.isInited() && setTimeout(function () { var e = r.i.isStatus(r.i.StatusType.LOGOUT); ct.url && e && ht.login(); }, 1e3); }), Ct.on(p.autoAuth, function () { r.h.isInited() && setTimeout(function () { Ct.url && r.i.isStatus(r.i.StatusType.LOGOUT) && ht.login(), Ct.url && r.a.isOffline() && It.checkLogin(function (e) { e.code === r.c.EC_OK && lt.ping(); }, "autoAuth"); }, 1e3); }), ct.connect("init sdk"), s = mt.instance.onHide, Et() && wx.onHide(s), function (e) { Et() && wx.onShow(e); }(mt.instance.onShow)); }
        function pt() { var e; mt.instance.clearResponses(), ct && ct.destory(), Ct && Ct.destory(), (function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            e.forEach(function (e) { return e && e.unbindSocket(); });
        })(Ot, St, ut, At, It.netUtil1, It.netUtil2, dt, lt), e = mt.instance.onHide, Et() && wx.offHide(e), function (e) { Et() && wx.offShow(e); }(mt.instance.onShow), r.h.setStatus(r.h.StatusType.UNINIT), r.i.setStatus(r.i.StatusType.LOGOUT); }
        var ht = { login: function (e) { var t = Object.assign({}, r.k); return Ot && Ot.login(t, r.k.secretKey, function (t) { e && e(t), ht.loginRsp(t); }); }, loginRsp: function (e) { if (r.h.isIniting()) {
                if (e.code !== r.c.EC_OK)
                    return Mt(!1, e);
                var t_9 = 5e3, s_7 = 1e4;
                return e.data.sdkConfig && (e.data.sdkConfig.pingInterval && (t_9 = e.data.sdkConfig.pingInterval), e.data.sdkConfig.reportInterval && (s_7 = e.data.sdkConfig.reportInterval)), tt(r.k.openId, r.l.playerId, s_7), r.j.pingTimeout = t_9, Mt(!0, { code: r.c.EC_OK }), dt.ping();
            } e.code === r.c.EC_OK && dt.ping(); }, logout: function () { return Ot && Ot.logout({}, ht.logoutRsp); }, logoutRsp: function (e) { e.code === r.c.EC_OK && dt.stop(); } };
        function Mt(e, t) { if (r.h.isIniting()) {
            e && r.h.setStatus(r.h.StatusType.INITED), !e && r.h.setStatus(r.h.StatusType.UNINIT);
            var s_8 = r.h.isInited() ? r.c.EC_OK : r.c.EC_SDK_UNINIT, _9 = r.h.isInited() ? "初始化成功" : "初始化失败。请确认域名是否正确配置，以及网络是否顺畅。";
            !e && t && t.code !== r.c.EC_OK && (s_8 = t.code), mt.instance.initRsp && mt.instance.initRsp({ code: s_8, msg: _9, seq: null });
        } }
        var mt = (function () {
            function mt(e, t) {
                if (this.ErrCode = mt.ErrCode, this.ENUM = mt.ENUM, mt.instance instanceof mt)
                    return mt.instance;
                mt.instance = this, !e.openId && (e.openId = ""), e.openId = e.openId + "", Object.assign(r.k, e), Object.assign(r.j, t, { pingTimeout: r.j.pingTimeout }), r.l.gameId = r.k.gameId, c.a.log("CONSTRUCTOR", e, t);
            }
            mt.prototype.bindResponses = function (e) { Rt.bindResponses(e); };
            mt.prototype.unbindResponses = function (e) { Rt.unbindResponses(e); };
            mt.prototype.clearResponses = function () { Rt.clearResponses(); };
            mt.prototype.onHide = function () { r.i.setStatus(r.i.StatusType.LOGOUT), r.a.setStatus(r.a.StatusType.OFFLINE), dt && dt.stop(), lt && lt.stop(), c.a.log("SDK_onHide"); };
            mt.prototype.onShow = function () { dt && dt.stop(), lt && lt.stop(), dt && dt.client.socket.url && dt.ping(), lt && lt.client.socket.url && lt.ping(), c.a.log("SDK_onShow", dt.client.socket.url, lt.client.socket.url); };
            mt.prototype.getSocket = function (e) { return e === m.a.ConnectionType.COMMON ? ct : e === m.a.ConnectionType.RELAY ? Ct : void 0; };
            mt.prototype.init = function (e) { this.initRsp = (function (t) { e(t); }), Tt(); };
            mt.prototype.initRsp = function (e) { };
            mt.prototype.uninit = function () { ht.logout(), r.i.setStatus(r.i.StatusType.LOGOUT), xe.stopQueueLoop(), pt(); };
            mt.prototype.isInited = function () { return r.h.isInited(); };
            mt.prototype.changeCustomPlayerStatus = function (e, t, s) { var _ = Object.assign({}, e); return Ot.changeUserState(_, s); };
            mt.prototype.createRoom = function (e, t) { return this.createTeamRoom(Object.assign({}, e, { teamNumber: 1 }), t); };
            mt.prototype.createTeamRoom = function (e, t) { "object" != typeof e && (e = {}); var s = [], _ = (e = JSON.parse(JSON.stringify(e))).maxPlayers || 0, n = e.teamNumber || 0; if (_ % n != 0) {
                var e_14 = "";
                return t && t({ seq: e_14, code: r.c.EC_PARAMS_INVALID, msg: "参数错误，最大玩家数无法被队伍数量整除", data: null }), e_14;
            } var o = Object.assign({ commonNetworkState: void 0, relayNetworkState: void 0, teamId: void 0, id: r.l.playerId }, e.playerInfo); if (delete e.teamNumber, !("number" == typeof _ && "number" == typeof n && _ >= n && n >= 1)) {
                var e_15 = "";
                return t && t({ seq: "", code: r.c.EC_PARAMS_INVALID, msg: "参数错误，请检查最大玩家数量和队伍数量", data: null }), e_15;
            } {
                _ = Math.floor(_), n = Math.floor(n);
                var e_16 = Math.floor(_ / n);
                for (var t_10 = 0; t_10 < n; t_10++) {
                    var r_4 = { id: t_10 + "", maxPlayers: e_16, minPlayers: 1, name: "" };
                    !o.teamId && (o.teamId = r_4.id), t_10 === n - 1 && (r_4.maxPlayers = _ - (n - 1) * e_16), s.push(r_4);
                }
            } var i = Object.assign({ region: void 0, owner: void 0, playerList: void 0 }, e, { teamList: s, createType: r.b.CreateRoomType.COMMON_CREATE, playerInfo: o }); return St.createRoom(i, t); };
            mt.prototype.joinRoom = function (e, t, s) { var _ = Object.assign({}, e, { teamId: "0", joinType: m.a.JoinRoomType.COMMON_JOIN, roomId: t, playerInfo: Object.assign({ commonNetworkState: void 0, relayNetworkState: void 0, teamId: void 0, id: r.l.playerId }, e.playerInfo) }); return St.joinRoom(_, s); };
            mt.prototype.joinTeamRoom = function (e, t, s) { var _ = Object.assign({}, e, { joinType: m.a.JoinRoomType.COMMON_JOIN, roomId: t, playerInfo: Object.assign({ commonNetworkState: void 0, relayNetworkState: void 0, teamId: void 0, id: r.l.playerId }, e.playerInfo) }); return St.joinRoom(_, s); };
            mt.prototype.leaveRoom = function (e) { return St.leaveRoom({}, e); };
            mt.prototype.dismissRoom = function (e, t, s) { return St.dismissRoom({}, s); };
            mt.prototype.changeRoom = function (e, t) { return St.changeRoom(e, t); };
            mt.prototype.removePlayer = function (e, t) { var s = Object.assign({}, e); return St.removeUser(s, t); };
            mt.prototype.getRoomByRoomId = function (e, t) { var s = Object.assign({}, e); return St.getRoomByRoomId(s, t); };
            mt.prototype.getRoomList = function (e, t) { var s = Object.assign({}, e, { gameId: r.k.gameId }); return St.getRoomList(s, t); };
            mt.prototype.matchPlayers = function (e, t) { var s = Object.assign({}, e, { playerInfo: Object.assign({ matchStatus: void 0, id: r.l.playerId, teamId: "", region: "", teamLeader: "" }, e.playerInfo) }); return ut.matchUsersComplex(s, t); };
            mt.prototype.matchRoom = function (e, t) { var s = Object.assign({}, e, { playerInfo: Object.assign({ commonNetworkState: void 0, relayNetworkState: void 0, teamId: void 0, id: r.l.playerId }, e.playerInfo) }); return ut.matchRoom(s, t); };
            mt.prototype.cancelMatch = function (e, t) { var s = Object.assign({}, e); return ut.cancelMatch(s, t); };
            mt.prototype.setFrameRoom = function (e) { return !(!e || !Array.isArray(e.playerList) || e.playerList.findIndex(function (e) { return e.id === r.l.playerId; }) < 0) && (It.setFrameRoom(e), !0); };
            mt.prototype.startFrameSync = function (e) { var t = It.roomInfo; function s(t) { e && e(t), mt.responses.startFrameSyncRsp(t); } if (!t)
                return c.a.log("STARTFRAMESYNC", "fail at roomInfo === null"), s({ code: mt.ErrCode.EC_SDK_NO_ROOM, msg: "无房间信息", seq: null }); c.a.log("STARTFRAMESYNC", It.roomInfo), c.a.log("STARTFRAMESYNC", "socket2 isConnect", Ct.isConnect(), Ct.socketTask); var _ = function () { It.checkLogin(function (_) { if (_.code === r.c.EC_OK) {
                c.a.log("STARTFRAMESYNC", "start");
                var s_9 = { roomId: t.id, gameId: r.k.gameId };
                return It.startFrameSync(s_9, e);
            } return c.a.log("STARTFRAMESYNC", "fail at CheckLogin", t), s({ code: mt.ErrCode.EC_SDK_NO_CHECK_LOGIN, msg: "CheckLogin失败", seq: null }); }, "sdk startFrame"); }; Ct.url = r.j.url + ":" + r.g, Ct.isConnect() ? _() : (Ct.connect("sdk startFrameSync"), Ct.eventOnceCallbacks.clear(), Ct.once(p.connect, function () { Ct.eventOnceCallbacks.clear(), _(); }), Ct.once(p.connectClose, function () { c.a.log("STARTFRAMESYNC", "fail at SocketEventType.connectClose"), Ct.eventOnceCallbacks.clear(), s({ code: mt.ErrCode.EC_SDK_SOCKET_ERROR, msg: "Socket错误", seq: null }); }), Ct.once(p.connectError, function () { c.a.log("STARTFRAMESYNC", "fail at SocketEventType.connectError"), Ct.eventOnceCallbacks.clear(), s({ code: mt.ErrCode.EC_SDK_SOCKET_ERROR, msg: "Socket错误", seq: null }); })); };
            mt.prototype.stopFrameSync = function (e) { var t = { roomId: It.roomInfo.id, gameId: r.k.gameId }; It.stopFrameSync(t, function (t) { t.code === r.c.EC_OK && e && e(t); }); };
            mt.prototype.sendFrame = function (e, t) { var s = { roomId: It.roomInfo.id, item: { playerId: r.l.playerId, data: JSON.stringify(e.data), timestamp: Date.now() } }; return It.sendFrame(s, t); };
            mt.prototype.requestFrame = function (e, t) { var s = It.roomInfo, _ = Object.assign({}, e, { roomId: s.id }); return It.requestFrame(_, t); };
            mt.prototype.sendToClient = function (e, t, s) { var _ = Object.assign({}, e, { roomId: t }); return At.sendMessage(_, s); };
            mt.prototype.sendToGameSvr = function (e, t, s) { var _ = Object.assign({}, e, { playerId: r.l.playerId, roomId: t, data: JSON.stringify(e.data) }); return It.sendMessageExt(_, s); };
            return mt;
        }());
        mt.instance = null, mt.responses = new Rt, mt.ErrCode = r.c, mt.ENUM = r.b;
        var ft = (function () {
            function ft(e, t) {
                this.frameIdFill = 0, this.frameIdSent = 0, this.autoReqFrameErrTimes = 0, this.lastFrameTime = 0, this.beginFrameId = -1, this.endFrameId = -1, this.fillCache = {}, this.timer = new Nt(e), this.callback = t;
            }
            ft.prototype.reset = function (e) {
                if (e === void 0) { e = 0; }
                this.timer.init(), this.frameIdSent = e, this.frameIdFill = e, this.lastFrameTime = 0;
            };
            ft.prototype.send = function (e) { var t = e.data.frame.id; t <= this.frameIdSent || (e.data.frame.time = this.timer.time(t), this.frameIdSent = t, this.callback(e), !this.lastFrameTime && (this.lastFrameTime = e.data.frame.time), Math.abs(this.lastFrameTime - e.data.frame.time) > 300 && this.reset(t), this.lastFrameTime = e.data.frame.time); };
            ft.prototype.push = function (e, t) { var s = e.data.frame.id; 1 === s && this.reset(), this.timer.push(s, Date.now()); var _ = this.frameIdSent, n = this.frameIdFill; return this.frameIdFill = s, r.j.isAutoRequestFrame ? s <= _ + 1 ? this.send(e) : (this.fillCache[s] = { endFrameId: s, data: [e.data.frame] }, void (s > n + 1 && this.fill(n + 1, s - 1, t))) : this.send(e); };
            ft.prototype.fillSend = function (e) {
                var _this = this;
                if (e <= this.frameIdSent + 1 && this.fillCache[e]) {
                    var t_11 = this.fillCache[e];
                    delete this.fillCache[e], t_11.data.forEach(function (e) { return _this.send({ data: { frame: e }, seq: "" }); }), this.fillSend(t_11.endFrameId + 1);
                }
            };
            ft.prototype.fill = function (e, t, s) {
                var _this = this;
                s.requestFrame({ beginFrameId: e, endFrameId: t }, function (_) { if (_this.beginFrameId = e, _this.endFrameId = t, _.code !== m.a.QAppProtoErrCode.EC_OK) {
                    if (_this.autoReqFrameErrTimes++, _this.autoReqFrameErrTimes <= 5)
                        return _this.fill(e, t, s);
                    s.onAutoRequestFrameError && s.onAutoRequestFrameError({ data: _, seq: "" });
                }
                else
                    _this.beginFrameId = -1, _this.endFrameId = -1, _this.autoReqFrameErrTimes = 0, _this.fillCache[e] = { endFrameId: t, data: _.data.frames.map(function (e) { return Object.assign({}, e, { roomId: s.roomInfo.id, isReplay: !0 }); }) }, _this.fillSend(e); });
            };
            ft.prototype.retryFill = function (e) { this.beginFrameId === this.endFrameId && this.beginFrameId < 0 || (this.autoReqFrameErrTimes = 0, this.fill(this.beginFrameId, this.endFrameId, e)); };
            return ft;
        }());
        var Nt = (function () {
            function Nt(e) {
                this._a1 = e, this.init();
            }
            Nt.prototype.init = function () { this.n = 0, this.S_xi = 0, this.S_yi = 0, this.S_xiyi = 0, this.S_xixi = 0; };
            Nt.prototype.push = function (e, t) { this.n++, this.S_xi += e, this.S_yi += t, this.S_xiyi += e * t, this.S_xixi += e * e; };
            Nt.prototype.a0 = function (e) { return void 0 === e && (e = this.a1()), this.S_yi / this.n - this.a1() * this.S_xi / this.n; };
            Nt.prototype.a1 = function () { return (this.n * this.S_xiyi - this.S_xi * this.S_yi) / (this.n * this.S_xixi - this.S_xi * this.S_xi); };
            Nt.prototype.ap = function () { var e = this.a1(); return { a0: this.a0(e), a1: e }; };
            Nt.prototype.time = function (e) { if (0 === this.n)
                return 0; var t = this.n >= 2 ? this.ap() : { a0: this.S_yi - this.S_xi * this._a1, a1: this._a1 }; return Math.round(t.a0 + e * t.a1); };
            return Nt;
        }());
        var Lt = (function () {
            function Lt(e) {
                var _this = this;
                this.frameBroadcastFrameId = 0, this.room = e, this._frameBroadcast = new ft(this.room.roomInfo.frameRate ? Math.floor(1e3 / this.room.roomInfo.frameRate) : 66, function (e) { e && e.data && e.data.frame && e.data.frame.items && e.data.frame.items.forEach(function (e) { return e.data = "object" == typeof e.data ? e.data : JSON.parse(e.data); }), _this.matchFrameBstAndInvoke("onRecvFrame", e); });
            }
            Lt.prototype.matchRoomInfo = function (e) { return this.room.roomInfo.id === e.data.roomInfo.id; };
            Lt.prototype.matchID = function (e) { return this.room.roomInfo.id === e.data.roomId; };
            Lt.prototype.invoke = function (e, t) { this.room[e] && this.room[e].call(this.room, t); };
            Lt.prototype.saveAndInvoke = function (e, t) { this.matchRoomInfo(t) && (this.room.roomUtil.setRoomInfo(t.data.roomInfo), this.invoke(e, t)); };
            Lt.prototype.matchFrameBstAndInvoke = function (e, t, s) { this.matchID({ data: t.data.frame, seq: "" }) && (s && s(t), this.invoke(e, t)); };
            Lt.prototype.matchIDAndInvoke = function (e, t, s) { this.matchID(t) && (s && s(t), this.invoke(e, t)); };
            Lt.prototype.matchRoomInfoAndInvoke = function (e, t, s) { this.matchRoomInfo(t) && (s && s(t), this.invoke(e, t)); };
            Lt.prototype.onNetwork = function (e) { this.room.onUpdate && this.room.onUpdate(this.room); };
            Lt.prototype.onJoinRoom = function (e) { this.saveAndInvoke("onJoinRoom", e); };
            Lt.prototype.onLeaveRoom = function (e) { this.saveAndInvoke("onLeaveRoom", e); };
            Lt.prototype.onDismissRoom = function (e) {
                var _this = this;
                this.matchRoomInfoAndInvoke("onDismissRoom", e, function () { return _this.room.roomInfo = {}; });
            };
            Lt.prototype.onChangeRoom = function (e) { this.saveAndInvoke("onChangeRoom", e); };
            Lt.prototype.onRemovePlayer = function (e) { this.saveAndInvoke("onRemovePlayer", e); };
            Lt.prototype.onRecvFromClient = function (e) { this.matchIDAndInvoke("onRecvFromClient", e); };
            Lt.prototype.onRecvFromGameSvr = function (e) { this.matchIDAndInvoke("onRecvFromGameSvr", e, null); };
            Lt.prototype.onMatchPlayers = function (e) { var t; this.room.roomUtil.setRoomInfo(e.data.roomInfo), e.data.roomInfo && e.data.roomInfo.playerList && e.data.roomInfo.playerList.find(function (e) { return vt.isMe(e.id); }) && this.room.roomUtil.activeFrame(), e.data.matchType === m.a.MatchType.PLAYER_COMPLEX && (t = yt.TAG.PLAYER_COMPLEX, gt.once(t, { code: m.a.QAppProtoErrCode.EC_OK, msg: "", seq: "", data: e.data })); };
            Lt.prototype.onMatchTimeout = function (e) { var t; if (e.data.matchType !== m.a.MatchType.PLAYER_COMPLEX)
                return; t = yt.TAG.PLAYER_COMPLEX; var s = e.data.errCode || m.a.QAppProtoErrCode.EC_MATCH_TIMEOUT, _a = A(s, ""), _ = _a.errCode, n = _a.errMsg; gt.once(t, { code: _, msg: n, seq: "", data: {} }); };
            Lt.prototype.onChangePlayerNetworkState = function (e) { this.saveAndInvoke("onChangePlayerNetworkState", e); };
            Lt.prototype.onChangeCustomPlayerStatus = function (e) { this.saveAndInvoke("onChangeCustomPlayerStatus", e); };
            Lt.prototype.onStartFrameSync = function (e) { this.saveAndInvoke("onStartFrameSync", e); };
            Lt.prototype.onStopFrameSync = function (e) { this._frameBroadcast.reset(), this.saveAndInvoke("onStopFrameSync", e); };
            Lt.prototype.onRecvFrame = function (e) { this.room.roomInfo.frameSyncState !== m.a.FrameSyncState.STOP && this._frameBroadcast.push(e, this.room); };
            Lt.prototype.frameBroadcastFrameIdReset = function (e) {
                if (e === void 0) { e = 0; }
                return this._frameBroadcast.reset(e);
            };
            return Lt;
        }());
        var yt = (function () {
            function yt() {
                this.callbacks = {};
            }
            yt.prototype.push = function (e, t) { !this.callbacks[e] && (this.callbacks[e] = []), this.callbacks[e].push(t); };
            yt.prototype.once = function (e, t) { (this.callbacks[e] || []).forEach(function (e) { return e && e(t); }), e && delete this.callbacks[e]; };
            return yt;
        }());
        yt.TAG = { PLAYER_SIMPLE: "PLAYER_SIMPLE", PLAYER_COMPLEX: "PLAYER_COMPLEX" };
        var gt = new yt;
        var Pt = (function () {
            function Pt(e) {
                this.room = e;
            }
            Pt.prototype.setRoomInfo = function (e) { !e && (e = {}), this.room.roomInfo = JSON.parse(JSON.stringify(e || {})), this.room.roomInfo.playerList = this.room.roomInfo.playerList || [], this.room.onUpdate && this.room.onUpdate(this.room), this.room.isInRoom() && r.d.setInfo(this.room.roomInfo.playerList.find(function (e) { return e.id === r.l.playerId; })); };
            Pt.prototype.saveRoomInfo = function (e) { e.code === m.a.QAppProtoErrCode.EC_OK && (this.setRoomInfo(e.data.roomInfo), this.room.roomInfo.playerList.find(function (e) { return vt.isMe(e.id); }) && this.activeFrame()); };
            Pt.prototype.setParam = function (e) { this.room.roomInfo.id && (e.roomId = this.room.roomInfo.id); };
            Pt.prototype.addRoomParam = function () { return { roomId: this.room.roomInfo.id || "" }; };
            Pt.prototype.initBroadcast = function () { this.room.roomBroadcast || (this.room.roomBroadcast = new Lt(this.room)); };
            Pt.prototype.activeFrame = function () { return mt.instance.setFrameRoom(this.room.roomInfo); };
            return Pt;
        }());
        s.d(t, "b", function () { return Yt; }), s.d(t, "a", function () { return vt; });
        var Dt = (function () {
            function Dt() {
            }
            return Dt;
        }());
        var Yt = (function (_super) {
            __extends(Yt, _super);
            function Yt(e) {
                var _this = this;
                _this = _super.call(this) || this, _this.onUpdate = null, _this.roomUtil = new Pt(_this), _this.roomUtil.setRoomInfo(e || null);
                return _this;
            }
            Yt.getRoomList = function (e, t) { mt.instance.getRoomList(e, t); };
            Yt.getRoomByRoomId = function (e, t) { mt.instance.getRoomByRoomId(e, t); };
            Yt.prototype.isInRoom = function () { return !!this.roomInfo.playerList.find(function (e) { return e.id === r.l.playerId; }); };
            Yt.prototype.initRoom = function (e) { this.roomUtil.setRoomInfo(e); var t = e; t && t.id && t.routeId && Array.isArray(t.playerList) && t.playerList.find(function (e) { return e.id && vt.isMe(e.id); }) && this.roomUtil.activeFrame(); };
            Object.defineProperty(Yt.prototype, "networkState", {
                get: function () { var e = !1, t = !1; var s = mt.instance.getSocket(m.a.ConnectionType.COMMON), _ = mt.instance.getSocket(m.a.ConnectionType.RELAY); return { COMMON: e = !(!s || !s.isConnect()), RELAY: t = !(!_ || !_.isConnect()) }; },
                enumerable: true,
                configurable: true
            });
            Yt.prototype.createRoom = function (e, t) {
                var _this = this;
                mt.instance.createRoom(e, function (e) { _this.roomUtil.saveRoomInfo(e), t && t(e); });
            };
            Yt.prototype.createTeamRoom = function (e, t) {
                var _this = this;
                mt.instance.createTeamRoom(e, function (e) { _this.roomUtil.saveRoomInfo(e), t && t(e); });
            };
            Yt.prototype.joinRoom = function (e, t) {
                var _this = this;
                mt.instance.joinRoom(Object.assign({}, e), this.roomInfo.id, function (e) { _this.roomUtil.saveRoomInfo(e), t && t(e); });
            };
            Yt.prototype.joinTeamRoom = function (e, t) {
                var _this = this;
                mt.instance.joinTeamRoom(Object.assign({}, e), this.roomInfo.id, function (e) { _this.roomUtil.saveRoomInfo(e), t && t(e); });
            };
            Yt.prototype.leaveRoom = function (e, t) {
                var _this = this;
                this.roomUtil.setParam(e), mt.instance.leaveRoom(function (e) { _this.roomUtil.saveRoomInfo(e), t && t(e); });
            };
            Yt.prototype.dismissRoom = function (e, t) {
                var _this = this;
                mt.instance.dismissRoom(e, this.roomInfo.id, function (e) { e.code === m.a.QAppProtoErrCode.EC_OK && _this.roomUtil.setRoomInfo(null), t && t(e); });
            };
            Yt.prototype.changeRoom = function (e, t) {
                var _this = this;
                var s = { roomName: this.roomInfo.name, owner: this.roomInfo.owner, customProperties: this.roomInfo.customProperties, isPrivate: this.roomInfo.isPrivate };
                mt.instance.changeRoom(Object.assign({}, s, e, this.roomUtil.addRoomParam()), function (e) { _this.roomUtil.saveRoomInfo(e), t && t(e); });
            };
            Yt.prototype.changeCustomPlayerStatus = function (e, t) {
                var _this = this;
                mt.instance.changeCustomPlayerStatus(Object.assign({}, e), this.roomInfo.id, function (e) { _this.roomUtil.saveRoomInfo(e), t && t(e); });
            };
            Yt.prototype.removePlayer = function (e, t) {
                var _this = this;
                mt.instance.removePlayer(e, function (e) { _this.roomUtil.saveRoomInfo(e), t && t(e); });
            };
            Yt.prototype.getRoomDetail = function (e) {
                var _this = this;
                mt.instance.getRoomByRoomId(Object.assign({}, this.roomUtil.addRoomParam()), function (t) { _this.roomUtil.saveRoomInfo(t), e && e(t); });
            };
            Yt.prototype.matchPlayers = function (e, t) { var s = gt.push(yt.TAG.PLAYER_COMPLEX, t); var _ = Object.assign(e, { flowId: s }); mt.instance.matchPlayers(_, function (e) { if (e.code !== m.a.QAppProtoErrCode.EC_OK)
                return e.data = null, gt.once(yt.TAG.PLAYER_COMPLEX, e); }); };
            Yt.prototype.matchRoom = function (e, t) {
                var _this = this;
                mt.instance.matchRoom(e, function (e) { _this.roomUtil.saveRoomInfo(e), t && t(e); });
            };
            Yt.prototype.cancelPlayerMatch = function (e, t) { mt.instance.cancelMatch(e, t); };
            Yt.prototype.startFrameSync = function (e, t) { this.roomUtil.activeFrame(), mt.instance.startFrameSync(t); };
            Yt.prototype.stopFrameSync = function (e, t) { this.roomUtil.activeFrame(), mt.instance.stopFrameSync(t); };
            Yt.prototype.sendFrame = function (e, t) { this.roomUtil.activeFrame(), mt.instance.sendFrame(e, t); };
            Yt.prototype.requestFrame = function (e, t) { this.roomUtil.activeFrame(), mt.instance.requestFrame(e, t); };
            Yt.prototype.retryAutoRequestFrame = function () { this.roomBroadcast._frameBroadcast.retryFill(this); };
            Yt.prototype.sendToClient = function (e, t) { var s = e.recvPlayerList; e.recvType === r.b.RecvType.ROOM_ALL ? s = this.roomInfo.playerList.map(function (e) { return e.id; }) : e.recvType === r.b.RecvType.ROOM_OTHERS && (s = this.roomInfo.playerList.filter(function (e) { return e.id !== r.l.playerId; }).map(function (e) { return e.id; })); var _ = { recvType: void 0, recvPlayerList: s, msg: e.msg }; mt.instance.sendToClient(_, this.roomInfo.id, t); };
            Yt.prototype.sendToGameSvr = function (e, t) { mt.instance.sendToGameSvr(e, this.roomInfo.id, t); };
            return Yt;
        }(Dt));
        var vt = (function () {
            function vt() {
            }
            vt.isMe = function (e) { return r.l.playerId === e; };
            Object.defineProperty(vt, "isInited", {
                get: function () { return mt.instance.isInited(); },
                enumerable: true,
                configurable: true
            });
            vt.init = function (e, t, s) { mt.instance = new mt(e, t), mt.instance.init(s); };
            vt.add = function (e) { e.roomUtil.initBroadcast(), mt.instance.bindResponses(e.roomBroadcast); };
            vt.remove = function (e) { mt.instance.unbindResponses(e.roomBroadcast); };
            vt.clear = function () { mt.instance.clearResponses(); };
            return vt;
        }());
    }, function (e) { e.exports = { nested: { lagame: { nested: { ClientSendServerReqWrap1: { fields: { version: { type: "string", id: 1 }, appName: { type: "string", id: 2 }, cmd: { type: "string", id: 3 }, seq: { type: "string", id: 4 }, clientIp: { type: "string", id: 5 }, serviceIp: { type: "string", id: 6 }, business: { type: "string", id: 7 }, authKey: { type: "string", id: 8 }, authType: { type: "uint32", id: 9 }, authIp: { type: "string", id: 10 }, gameId: { type: "string", id: 11 }, uid: { type: "uint64", id: 12 }, playerId: { type: "string", id: 13 }, body: { type: "bytes", id: 14 } } }, ServerSendClientBstWrap1: { fields: { version: { type: "string", id: 1 }, appName: { type: "string", id: 2 }, cmd: { type: "string", id: 3 }, seq: { type: "string", id: 4 }, clientIp: { type: "string", id: 5 }, serviceIp: { type: "string", id: 6 }, business: { type: "string", id: 7 }, authKey: { type: "string", id: 8 }, authType: { type: "uint32", id: 9 }, authIp: { type: "string", id: 10 }, gameId: { type: "string", id: 11 }, uid: { type: "uint64", id: 12 }, playerId: { type: "string", id: 13 }, body: { type: "bytes", id: 14 } } }, ClientSendServerRspWrap1: { fields: { seq: { type: "string", id: 1 }, errCode: { type: "int32", id: 2 }, errMsg: { type: "string", id: 3 }, body: { type: "bytes", id: 4 } } }, ClientSendServerReqWrap2: { fields: { cmd: { type: "ClientSendServerReqWrap2Cmd", id: 1 }, body: { type: "bytes", id: 2 } } }, ClientSendServerRspWrap2: { fields: { body: { type: "bytes", id: 1 } } }, ConnectionType: { values: { COMMON: 0, RELAY: 1 } }, HeartBeatReq: { fields: { conType: { type: "ConnectionType", id: 1 }, routeId: { type: "string", id: 2 } } }, HeartBeatRsp: { fields: {} }, ServerSendClientBstWrap2: { fields: { type: { type: "ServerSendClientBstWrap2Type", id: 1 }, msg: { type: "bytes", id: 2 } } }, NOUSEServerSendClientBstRspWrap2: { fields: {} }, CheckLoginReq: { fields: { token: { type: "string", id: 1 }, routeId: { type: "string", id: 2 } } }, CheckLoginRsp: { fields: {} }, ServerSendClientBstWrap2Type: { values: { E_PUSH_TYPE_TEST: 0, E_PUSH_TYPE_RELAY: 1, E_PUSH_TYPE_GAMESVR: 2, E_PUSH_TYPE_JOIN_ROOM: 100, E_PUSH_TYPE_LEAVE_ROOM: 101, E_PUSH_TYPE_DISMISS_ROOM: 102, E_PUSH_TYPE_REMOVE_PLAYER: 103, E_PUSH_TYPE_MODIFY_ROOM_PROPERTY: 104, E_PUSH_TYPE_NETWORK_STATE: 105, E_PUSH_TYPE_ROOM_CHAT: 106, E_PUSH_TYPE_PLAYER_STATE: 107, E_PUSH_TYPE_START_GAME: 108, E_PUSH_TYPE_STOP_GAME: 109, E_PUSH_TYPE_CREATE_ROOM: 110, E_PUSH_TYPE_DESTROY_ROOM: 111, E_PUSH_TYPE_MATCH_SUCCESS: 200, E_PUSH_TYPE_MATCH_TIMEOUT: 201 } }, PushBodyType: { fields: { pushMsg: { type: "string", id: 1 } } }, ClientSendServerReqWrap2Cmd: { values: { E_CMD_INVALID: 0, E_CMD_HEART_BEAT_REQ: 100, E_CMD_CHECK_LOGIN_REQ: 101, E_CMD_LOGIN_TO_ROOM_REQ: 102, E_CMD_FORWARD_TO_RELAY_REQ: 103, E_CMD_LOGIN_REQ: 1e3, E_CMD_LOGOUT_REQ: 1001, E_CMD_AUTH_REQ: 1002, E_CMD_QUERY_BY_PLAYER_ID_REQ: 1003, E_CMD_QUERY_BY_GAME_ID_REQ: 1004, E_CMD_GET_ROOM_DETAIL_REQ: 2001, E_CMD_JOIN_ROOM_REQ: 2002, E_CMD_QUIT_ROOM_REQ: 2003, E_CMD_CREATE_ROOM_REQ: 2004, E_CMD_DESTORY_ROOM_REQ: 2005, E_CMD_REMOVE_MEMBER_REQ: 2006, E_CMD_CHANGE_ROOM_PROPERTIS_REQ: 2007, E_CMD_DISSMISS_ROOM_REQ: 2008, E_CMD_CHANGE_PLAYER_STATE_REQ: 2009, E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ: 2010, E_CMD_ROOM_CHAT_REQ: 2011, E_CMD_START_FRAME_SYNC_REQ: 2012, E_CMD_STOP_FRAME_SYNC_REQ: 2013, E_CMD_GET_ROOM_LIST_REQ: 2014, E_CMD_MATCH_ROOM_SIMPLE_REQ: 3001, E_CMD_MATCH_USER_SIMPLE_REQ: 3002, E_CMD_MATCH_CANCEL_MATCH_REQ: 3003, E_CMD_MATCH_ROOM_COMPLEX_REQ: 3004, E_CMD_MATCH_PLAYER_COMPLEX_REQ: 3005, E_CMD_RELAY_SEND_FRAME_REQ: 4e3, E_CMD_RELAY_REQUEST_FRAME_REQ: 4001, E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ: 4002, E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ: 4003, E_CMD_NOTIFY_JOIN_ROOM: 5e3, E_CMD_NOTIFY_QUIT_ROOM: 5001, E_CMD_NOTIFY_DESTORY_ROOM: 5002, E_CMD_NOTIFY_NET_STATE: 5003, E_CMD_NOTIFY_KICK_MEMBER: 5004, E_CMD_GET_ADDR_BY_ROUTER_ID_REQ: 6e3 } }, QAppProtoErrCode: { values: { EC_OK: 0, EC_REQ_BAD_PKG: 1, EC_CMD_INVALID: 2, EC_PARAMS_INVALID: 3, EC_INNER_ERROR: 4, EC_TIME_OUT: 5, EC_SERVER_BUSY: 6, EC_NO_RIGHT: 7, EC_ACCESS_CMD_INVALID_ERR: 200, EC_ACCESS_CMD_GET_TOKEN_ERR: 201, EC_ACCESS_CMD_TOKEN_PRE_EXPIRE: 202, EC_ACCESS_CMD_INVALID_TOKEN: 203, EC_ACCESS_PUSH_SERIALIZE_ERR: 204, EC_ACCESS_LOGIN_BODY_PARSE_ERR: 205, EC_ACCESS_CONN_ERR: 206, EC_ACCESS_GET_RS_IP_ERR: 207, EC_ACCESS_ADD_COMM_CONN_ERR: 208, EC_ACCESS_ADD_HEART_CONN_ERR: 209, EC_ACCESS_ADD_RELAY_CONN_ERR: 210, EC_ACCESS_HEART_BODY_PARSE_ERR: 211, EC_ACCESS_GET_COMM_CONNECT_ERR: 212, EC_ACCESS_GET_RELAY_CONNECT_ERR: 213, EC_PLAYER_GAME_NOT_EXIST: 1e4, EC_PLAYER_SECRET_KEY_FAIL: 10001, EC_PLAYER_SIGN_ERR: 10002, EC_PLAYER_DUPLICATE_REQ: 10003, EC_PLAYER_TIMESTAMP_INVALID: 10004, EC_PLAYER_QUERY_PLAYER_FAIL: 10005, EC_PLAYER_ADD_PLAYER_FAIL: 10006, EC_PLAYER_QUERY_GAME_FAIL: 10007, EC_PLAYER_RECORD_NUM_ERR: 10008, EC_PLAYER_GET_TOKEN_FAIL: 10009, EC_PLAYER_TOKEN_NOT_EXIST: 10010, EC_PLAYER_TOKEN_INVALID: 10011, EC_PLAYER_CLEAR_TOKEN_FAIL: 10012, EC_PLAYER_LOCK_FAIL: 10013, EC_PLAYER_UNLOCK_FAIL: 10014, EC_PLAYER_SAVE_TOKEN_FAIL: 10015, EC_ROOM_CREATE_NO_PERMISSION: 2e4, EC_ROOM_DESTORY_NO_PERMISSION: 20001, EC_ROOM_JOIN_NO_PERMISSION: 20002, EC_ROOM_REMOVE_PLAYER_NO_PERMISSION: 20003, EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION: 20004, EC_ROOM_DISSMISS_NO_PERMISSION: 20005, EC_ROOM_REMOVE_SELF_NO_PERMISSION: 20006, EC_ROOM_CHECK_LOGIN_SESSION_ERR: 20007, EC_ROOM_PLAYER_ALREADY_IN_ROOM: 20010, EC_ROOM_PLAYER_NOT_IN_ROOM: 20011, EC_ROOM_PLAYERS_EXCEED_LIMIT: 20012, EC_ROOM_JOIN_NOT_ALLOW: 20013, EC_ROOM_MAX_PLAYERS_INVALID: 20014, EC_ROOM_CREATE_FAIL: 20015, EC_ROOM_PLAYER_OFFLINE: 20016, EC_ROOM_PARAM_PAGE_INVALID: 20017, EC_ROOM_GET_PLAYER_INFO_ERR: 20050, EC_ROOM_GET_ROOM_INFO_ERR: 20051, EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR: -20052, EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR: -20053, EC_ROOM_REDIS_UPDATE_ERR: -20054, EC_ROOM_REDIS_GET_LOCK_ERR: -20055, EC_ROOM_REDIS_CHECK_LOCK_ERR: -20056, EC_ROOM_REDIS_DEL_LOCK_ERR: -20057, EC_ROOM_QUERY_PLAYER_ERR: 20060, EC_ROOM_QUERY_GAME_ERR: 20061, EC_ROOM_PLAYER_INFO_NOT_EXIST: 20062, EC_ROOM_GAME_INFO_NOT_EXIST: 20063, EC_ROOM_HISTORY_INFO_INSERT_ERR: -20064, EC_ROOM_REGION_INFO_NOT_EXIST: 20065, EC_ROOM_QUERY_REGION_ERR: 20066, EC_ROOM_INFO_UNEXIST: 20080, EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR: 20090, EC_ROOM_INVALID_PARAMS_TEAM_ID: 20100, EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED: 20101, EC_MATCH_NO_ROOM: 3e4, EC_MATCH_TIMEOUT: 30001, EC_MATCH_LOGIC_ERR: 30002, EC_MATCH_ERR: 30010, EC_MATCH_PLAYER_IS_IN_MATCH: 30011, EC_MATCH_PLAYER_NOT_IN_MATCH: 30012, EC_MATCH_GET_MATCH_INFO_ERR: 30013, EC_MATCH_UPDATE_MATCH_INFO_ERR: 30014, EC_MATCH_CANCEL_FAILED: 30015, EC_MATCH_GET_PLAYER_LIST_INFO_ERR: 30016, EC_MATCH_CREATE_ROOM_ERR: 30041, EC_MATCH_JOIN_ROOM_ERR: 30042, EC_MATCH_QUERY_PLAYER_ERR: 30100, EC_MATCH_PLAYER_INFO_NOT_EXIST: 30101, EC_MATCH_QUERY_GAME_ERR: 30102, EC_MATCH_GAME_INFO_NOT_EXIST: 30103, EC_MATCH_QUERY_REGION_ERR: 30104, EC_MATCH_REGION_INFO_NOT_EXIST: 30105, EC_MATCH_TEAM_FAIL: 30106, EC_MATCH_PLAY_RULE_NOT_RUNNING: 30107, EC_MATCH_PLAY_ATTR_NOT_FOUND: 30108, EC_MATCH_PLAY_RULE_NOT_FOUND: 30109, EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND: 30110, EC_MATCH_PLAY_RULE_FUNC_ERR: 30111, EC_MATCH_GET_PLAYER_ATTR_FAIL: 30112, EC_MATCH_GET_TEAM_ATTR_FAIL: 30113, EC_MATCH_INNER_LOGIC_ERR: -30150, EC_RELAY_ALREADY_EXISTS: 4e4, EC_RELAY_NOT_EXISTS: 40001, EC_RELAY_DATA_EXCEED_LIMITED: 40002, EC_RELAY_MEMBER_ALREADY_EXISTS: 40003, EC_RELAY_MEMBER_NOT_EXISTS: 40004, EC_RELAY_STATE_INVALID: 40005, EC_RELAY_INVALID_FRAME_RATE: 40006, EC_RELAY_SET_FRAME_RATE_FORBIDDEN: 40007, EC_RELAY_NO_MEMBERS: 40008, EC_RELAY_GAMESVR_SERVICE_NOT_OPEN: 40009, EC_RELAY_REQ_POD_FAIL: 40010, EC_RELAY_LOGIC_ERROR: 40014, EC_RELAY_HKV_CACHE_ERROR: 40015, EC_RELAY_REDIS_CACHE_ERROR: 40016, EC_RELAY_CACHE_ERROR: 40017, EC_RELAY_NOTIFY_RELAYWORKER_FAIL: 40018, EC_RELAY_RESET_RELAY_ROOM_FAIL: 40019, EC_RELAY_CLEAN_RELAY_ROOM_FAIL: 40020, EC_RELAY_NO_PERMISSION: 40100, EC_RELAY_NOTIFY_GAMESVR_FAIL: 40200, EC_RELAY_FORWARD_TO_GAMESVR_FAIL: 40201, EC_RELAY_FORWARD_TO_CLIENT_FAIL: 40202, EC_INVALID_PARAMS: 6e4, EC_INVALID_PARAMS_PLAY_MODE_VERSION: 60001, EC_INVALID_PARAMS_PLAY_MODE_RULETYPE: 60002, EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION: 60003, EC_INVALID_PARAMS_PLAY_MODE_TEAM: 60004, EC_INVALID_PARAMS_GAME_ID: 61e3, EC_INVALID_PARAMS_PLAYER_INFO: 61001, EC_INVALID_PARAMS_MAX_PLAYERS: 61002, EC_INVALID_PARAMS_ROOM_TYPE: 61003, EC_INVALID_PARAMS_PLAYER_ID: 61004, EC_INVALID_PARAMS_MATCH_TYPE: 61005, EC_INVALID_PARAMS_MATCH_CODE: 61006, EC_INVALID_PARAMS_OPEN_ID: 61007, EC_INVALID_PARAMS_PLATFORM: 61008, EC_INVALID_PARAMS_TIMESTAMP: 61009, EC_INVALID_PARAMS_SIGN: 61010, EC_INVALID_PARAMS_NONCE: 61011, EC_INVALID_PARAMS_TOKEN: 61012, EC_INVALID_PARAMS_NETWORK_STATE: 61013, EC_INVALID_PARAMS_ROOM_NAME: 61014, EC_INVALID_PARAMS_CREATE_ROOM_TYPE: 61015, EC_REDIS_KEY_NOT_EXIST: -66e3, EC_REDIS_SET_OP_ERR: -66001, EC_REDIS_GET_OP_ERR: -66002, EC_REDIS_DEL_OP_ERR: -66003, EC_REDIS_EXPIRE_OP_ERR: -66004, EC_REDIS_LOCK_OP_ERR: -66005, EC_REDIS_LOCK_ALREADY_EXIST: -66006, EC_REDIS_LIST_OP_ERR: -66020, EC_REDIS_LIST_POP_EMPTY: -66021, EC_MYSQL_NO_ROW_FOUND: -66100, EC_MYSQL_MULTI_ROW_FOUND: -66101, EC_MYSQL_INSERT_FAIL: -66102, EC_MYSQL_DELETE_FAIL: -66103, EC_MYSQL_UPDATE_FAIL: -66104, EC_MYSQL_QUERYS_FAIL: -66105, EC_PB_SERIALIZE_TO_STR_ERR: -66200, EC_PB_PARSE_FROM_STR_ERR: -66201, EC_DATA_FORMAT_ERR: -66210, EC_JSON_FORMAT_ERR: -66211, EC_JSON_PLAY_MODE_FORMAT_ERR: -66212, EC_JSON_PLAY_MODE_PARISE_ERR: -66213, EC_INVALID_PARAMS_RECORE_ID: -66601, EC_HASHID_ERR: -66700, EC_HASHID_ENCODE_ERR: -66701, EC_HASHID_DECODE_ERR: -66702, EC_CONF_ROOM_ID_BUCKET_ERR: -66801, EC_SDK_SEND_FAIL: 90001, EC_SDK_UNINIT: 90002, EC_SDK_RES_TIMEOUT: 90003, EC_SDK_NO_LOGIN: 90004, EC_SDK_NO_CHECK_LOGIN: 90005, EC_SDK_SOCKET_ERROR: 90006, EC_SDK_SOCKET_CLOSE: 90007, EC_SDK_NO_ROOM: 90008 } }, LoginReq: { fields: { gameId: { type: "string", id: 1 }, openId: { type: "string", id: 2 }, platform: { type: "uint64", id: 3 }, channel: { type: "uint64", id: 4 }, nonce: { type: "uint64", id: 5 }, timestamp: { type: "uint64", id: 6 }, sign: { type: "string", id: 7 } } }, LoginRsp: { fields: { token: { type: "string", id: 1 }, playerId: { type: "string", id: 2 }, expireTime: { type: "uint64", id: 3 }, sdkConfig: { type: "SdkConfig", id: 4 } } }, SdkConfig: { fields: { pingInterval: { type: "uint32", id: 1 }, reportInterval: { type: "uint32", id: 2 } } }, LogoutReq: { fields: {} }, LogoutRsp: { fields: {} }, StartFrameSyncReq: { fields: {} }, StartFrameSyncRsp: { fields: {} }, StopFrameSyncReq: { fields: {} }, StopFrameSyncRsp: { fields: {} }, FrameItem: { fields: { playerId: { type: "string", id: 1 }, data: { type: "string", id: 2 }, timestamp: { type: "uint64", id: 3 } } }, SendFrameReq: { fields: { roomId: { type: "string", id: 1 }, item: { type: "FrameItem", id: 2 } } }, SendFrameRsp: { fields: {} }, FrameExtInfo: { fields: { seed: { type: "uint64", id: 1 } } }, Frame: { fields: { id: { type: "uint64", id: 1 }, items: { rule: "repeated", type: "FrameItem", id: 2 }, ext: { type: "FrameExtInfo", id: 3 } } }, RequestFrameReq: { fields: { roomId: { type: "string", id: 1 }, beginFrameId: { type: "uint64", id: 2 }, endFrameId: { type: "uint64", id: 3 } } }, RequestFrameRsp: { fields: { frames: { rule: "repeated", type: "Frame", id: 1 } } }, NetworkState: { values: { COMMON_OFFLINE: 0, COMMON_ONLINE: 1, RELAY_OFFLINE: 2, RELAY_ONLINE: 3 } }, PlayerInfo: { fields: { id: { type: "string", id: 1 }, name: { type: "string", id: 2 }, teamId: { type: "string", id: 3 }, customPlayerStatus: { type: "uint64", id: 4 }, customProfile: { type: "string", id: 5 }, commonNetworkState: { type: "NetworkState", id: 6 }, relayNetworkState: { type: "NetworkState", id: 7 } } }, TeamInfo: { fields: { id: { type: "string", id: 1 }, name: { type: "string", id: 2 }, minPlayers: { type: "uint32", id: 3 }, maxPlayers: { type: "uint32", id: 4 } } }, CreateRoomType: { values: { COMMON_CREATE: 0, MATCH_CREATE: 1 } }, FrameSyncState: { values: { STOP: 0, START: 1 } }, RoomInfo: { fields: { id: { type: "string", id: 1 }, name: { type: "string", id: 2 }, type: { type: "string", id: 3 }, createType: { type: "CreateRoomType", id: 4 }, maxPlayers: { type: "uint64", id: 5 }, owner: { type: "string", id: 6 }, isPrivate: { type: "bool", id: 9 }, customProperties: { type: "string", id: 10 }, playerList: { rule: "repeated", type: "PlayerInfo", id: 11 }, teamList: { rule: "repeated", type: "TeamInfo", id: 13 }, frameSyncState: { type: "FrameSyncState", id: 14 }, frameRate: { type: "uint32", id: 15 }, routeId: { type: "string", id: 16 }, createTime: { type: "uint64", id: 17 }, startGameTime: { type: "uint64", id: 18 } } }, CreateRoomReq: { fields: { roomName: { type: "string", id: 1 }, roomType: { type: "string", id: 2 }, createType: { type: "CreateRoomType", id: 3 }, maxPlayers: { type: "uint64", id: 4 }, isPrivate: { type: "bool", id: 7 }, customProperties: { type: "string", id: 8 }, playerInfo: { type: "PlayerInfo", id: 9 }, region: { type: "string", id: 11 }, owner: { type: "string", id: 12 }, playerList: { rule: "repeated", type: "PlayerInfo", id: 13 }, teamList: { rule: "repeated", type: "TeamInfo", id: 14 } } }, CreateRoomRsp: { fields: { roomInfo: { type: "RoomInfo", id: 1 } } }, JoinRoomType: { values: { COMMON_JOIN: 0, MATCH_JOIN: 1 } }, JoinRoomReq: { fields: { roomId: { type: "string", id: 1 }, teamId: { type: "string", id: 2 }, joinType: { type: "JoinRoomType", id: 3 }, playerInfo: { type: "PlayerInfo", id: 4 } } }, JoinRoomRsp: { fields: { roomInfo: { type: "RoomInfo", id: 1 } } }, LeaveRoomReq: { fields: {} }, LeaveRoomRsp: { fields: { roomInfo: { type: "RoomInfo", id: 1 } } }, DismissRoomReq: { fields: {} }, DismissRoomRsp: { fields: {} }, ChangeRoomReq: { fields: { roomName: { type: "string", id: 1 }, owner: { type: "string", id: 2 }, isPrivate: { type: "bool", id: 5 }, customProperties: { type: "string", id: 6 } } }, ChangeRoomRsp: { fields: { roomInfo: { type: "RoomInfo", id: 4 } } }, RemovePlayerReq: { fields: { removePlayerId: { type: "string", id: 3 } } }, RemovePlayerRsp: { fields: { roomInfo: { type: "RoomInfo", id: 1 } } }, GetRoomByRoomIdReq: { fields: { roomId: { type: "string", id: 1 } } }, GetRoomByRoomIdRsp: { fields: { roomInfo: { type: "RoomInfo", id: 1 } } }, SendToClientReq: { fields: { roomId: { type: "string", id: 1 }, recvPlayerList: { rule: "repeated", type: "string", id: 2 }, msg: { type: "string", id: 3 } } }, SendToClientRsp: { fields: {} }, ChangeCustomPlayerStatusReq: { fields: { customPlayerStatus: { type: "uint64", id: 1 } } }, ChangeCustomPlayerStatusRsp: { fields: { roomInfo: { type: "RoomInfo", id: 1 } } }, ChangePlayerNetworkStateReq: { fields: { networkState: { type: "NetworkState", id: 1 } } }, ChangePlayerNetworkStateRsp: { fields: { roomInfo: { type: "RoomInfo", id: 1 } } }, GetRoomListReq: { fields: { gameId: { type: "string", id: 1 }, pageNo: { type: "uint32", id: 2 }, pageSize: { type: "uint32", id: 3 } } }, GetRoomListRsp: { fields: { gameId: { type: "string", id: 1 }, roomList: { rule: "repeated", type: "RoomInfo", id: 2 }, total: { type: "uint64", id: 3 } } }, MatchRoomSimpleReq: { fields: { roomType: { type: "string", id: 1 }, maxPlayers: { type: "uint64", id: 2 }, playerInfo: { type: "PlayerInfo", id: 3 } } }, MatchRoomSimpleRsp: { fields: { roomInfo: { type: "RoomInfo", id: 1 } } }, MatchRoomComplexReq: { fields: {} }, MatchRoomComplexRsp: { fields: {} }, MatchPlayersSimpleReq: { fields: {} }, MatchPlayersSimpleRsp: { fields: {} }, MatchStatus: { values: { PENDING: 0, MATCHING: 1, SUCCESS: 3, TIMEOUT: 4 } }, MatchAttribute: { fields: { name: { type: "string", id: 1 }, value: { type: "int32", id: 2 } } }, MatchPlayerInfo: { fields: { id: { type: "string", id: 1 }, name: { type: "string", id: 2 }, customPlayerStatus: { type: "uint64", id: 3 }, customProfile: { type: "string", id: 4 }, matchAttributes: { rule: "repeated", type: "MatchAttribute", id: 5 }, matchStatus: { type: "MatchStatus", id: 6 }, teamId: { type: "string", id: 7 }, region: { type: "string", id: 8 }, teamLeader: { type: "string", id: 9 } } }, MatchTeamInfo: { fields: { teamId: { type: "string", id: 1 }, teamName: { type: "string", id: 2 }, teamLeader: { type: "string", id: 3 }, members: { rule: "repeated", type: "string", id: 4 }, matchAttributes: { rule: "repeated", type: "MatchAttribute", id: 5 } } }, MatchPlayersReq: { fields: { matchCode: { type: "string", id: 2 }, playerInfo: { type: "MatchPlayerInfo", id: 3 } } }, MatchPlayersRsp: { fields: { matchCode: { type: "string", id: 1 } } }, MatchType: { values: { ROOM_SIMPLE: 1, PLAYER_COMPLEX: 2 } }, CancelPlayerMatchReq: { fields: { matchType: { type: "MatchType", id: 3 } } }, CancelPlayerMatchRsp: { fields: {} }, CreateRoomBst: { fields: { roomInfo: { type: "RoomInfo", id: 1 } } }, DestroyRoomBst: { fields: { roomInfo: { type: "RoomInfo", id: 1 } } }, JoinRoomBst: { fields: { roomInfo: { type: "RoomInfo", id: 1 }, joinPlayerId: { type: "string", id: 2 } } }, LeaveRoomBst: { fields: { roomInfo: { type: "RoomInfo", id: 1 }, leavePlayerId: { type: "string", id: 2 } } }, RemovePlayerBst: { fields: { roomInfo: { type: "RoomInfo", id: 1 }, removePlayerId: { type: "string", id: 2 } } }, DismissRoomBst: { fields: { roomInfo: { type: "RoomInfo", id: 1 } } }, ChangeRoomBst: { fields: { roomInfo: { type: "RoomInfo", id: 1 } } }, RecvFromClientBst: { fields: { roomId: { type: "string", id: 1 }, sendPlayerId: { type: "string", id: 2 }, msg: { type: "string", id: 3 } } }, ChangeCustomPlayerStatusBst: { fields: { changePlayerId: { type: "string", id: 1 }, customPlayerStatus: { type: "uint64", id: 2 }, roomInfo: { type: "RoomInfo", id: 3 } } }, ChangePlayerNetworkStateBst: { fields: { changePlayerId: { type: "string", id: 1 }, networkState: { type: "NetworkState", id: 2 }, roomInfo: { type: "RoomInfo", id: 3 } } }, MatchTimeoutBst: { fields: { matchType: { type: "MatchType", id: 1 }, errCode: { type: "int32", id: 2 } } }, MatchPlayersBst: { fields: { matchType: { type: "MatchType", id: 1 }, roomInfo: { type: "RoomInfo", id: 2 } } }, StartFrameSyncBst: { fields: { roomInfo: { type: "RoomInfo", id: 1 } } }, StopFrameSyncBst: { fields: { roomInfo: { type: "RoomInfo", id: 1 } } }, RecvFrameBst: { fields: { frame: { type: "Frame", id: 1 } } }, GameSvrForwardType: { values: { E_GS_FORWARDTYPE_DEFAULT: 0, E_GS_FORWARDTYPE_NOTIFY_CONNECTION: 1, E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT: 2, E_GS_FORWARDTYPE_NOTIFY_COM_EVENT: 3, E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR: 4 } }, GameSvrCommunication: { fields: { type: { type: "GameSvrForwardType", id: 1 }, body: { type: "bytes", id: 2 } } }, NotifyRelayConnectionReq: { fields: { roomId: { type: "string", id: 1 }, ip: { type: "string", id: 2 }, port: { type: "uint32", id: 3 } } }, NotifyRoomEventReq: { fields: { cmd: { type: "ServerSendClientBstWrap2Type", id: 1 }, msg: { type: "bytes", id: 2 } } }, SendToGameSvrReq: { fields: { roomId: { type: "string", id: 1 }, playerId: { type: "string", id: 2 }, data: { type: "string", id: 3 } } }, SendToGameSvrRsp: { fields: {} }, RecvFromGameSvrBst: { fields: { roomId: { type: "string", id: 1 }, playerIdList: { rule: "repeated", type: "string", id: 2 }, data: { type: "string", id: 3 } } }, ClientRecvFromGameSvrRsp: { fields: {} } } } } }; }, function (e, t, s) {
        "use strict";
        var _ = 0, n = Math.pow(2, 32) - 1;
        var o = { init: function (e) { _ = e; }, random: function () { var e = (1103515245 * _ + 123456789) % n; return _ = e, e / n; } };
        t.a = o;
    }, function (e, t, s) {
        "use strict";
        var _ = s(0);
        var n = { get id() { return _.d.getInfo().id; }, get openId() { return _.k.openId; }, get name() { return _.d.getInfo().name; }, get teamId() { return _.d.getInfo().teamId; }, get customPlayerStatus() { return _.d.getInfo().customPlayerStatus; }, get customProfile() { return _.d.getInfo().customProfile; }, get commonNetworkState() { return _.d.getInfo().commonNetworkState; }, get relayNetworkState() { return _.d.getInfo().relayNetworkState; } };
        t.a = n;
    }, function (e, t, s) {
        "use strict";
        s.r(t), function (e) { var _ = s(7), n = s(3), o = s(2), r = s(5), i = s(9), E = s(10);
            var a = (function () {
                function a() {
                }
                return a;
            }());  a.Listener = _.a, a.Room = _.b, a.ENUM = n.a, a.ErrCode = o.a, a.RandomUtil = i.a, a.DebuggerLog = r.a, a.Player = E.a, (window || e).MGOBE = a, a.types = n.a, t.default = a; }.call(this, s(12));
    }, function (e, t) { var s; s = function () { return this; }(); try {
        s = s || new Function("return this")();
    }
    catch (e) {
        "object" == typeof window && (s = window);
    } e.exports = s; }, function (e, t, s) { var _, n, o; e.exports = (_ = s(4), o = (n = _).lib.WordArray, n.enc.Base64 = { stringify: function (e) { var t = e.words, s = e.sigBytes, _ = this._map; e.clamp(); for (var n = [], o = 0; o < s; o += 3)
            for (var r = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, i = 0; i < 4 && o + .75 * i < s; i++)
                n.push(_.charAt(r >>> 6 * (3 - i) & 63)); var E = _.charAt(64); if (E)
            for (; n.length % 4;)
                n.push(E); return n.join(""); }, parse: function (e) { var t = e.length, s = this._map, _ = this._reverseMap; if (!_) {
            _ = this._reverseMap = [];
            for (var n = 0; n < s.length; n++)
                _[s.charCodeAt(n)] = n;
        } var r = s.charAt(64); if (r) {
            var i = e.indexOf(r);
            -1 !== i && (t = i);
        } return function (e, t, s) { for (var _ = [], n = 0, r = 0; r < t; r++)
            if (r % 4) {
                var i = s[e.charCodeAt(r - 1)] << r % 4 * 2, E = s[e.charCodeAt(r)] >>> 6 - r % 4 * 2;
                _[n >>> 2] |= (i | E) << 24 - n % 4 * 8, n++;
            } return o.create(_, n); }(e, t, _); }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" }, _.enc.Base64); }, function (e, t, s) { var _; e.exports = (_ = s(4), s(15), s(16), _.HmacSHA1); }, function (e, t, s) { var _, n, o, r, i, E, a, R; e.exports = (_ = s(4), o = (n = _).lib, r = o.WordArray, i = o.Hasher, E = n.algo, a = [], R = E.SHA1 = i.extend({ _doReset: function () { this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]); }, _doProcessBlock: function (e, t) { for (var s = this._hash.words, _ = s[0], n = s[1], o = s[2], r = s[3], i = s[4], E = 0; E < 80; E++) {
            if (E < 16)
                a[E] = 0 | e[t + E];
            else {
                var R = a[E - 3] ^ a[E - 8] ^ a[E - 14] ^ a[E - 16];
                a[E] = R << 1 | R >>> 31;
            }
            var c = (_ << 5 | _ >>> 27) + i + a[E];
            c += E < 20 ? 1518500249 + (n & o | ~n & r) : E < 40 ? 1859775393 + (n ^ o ^ r) : E < 60 ? (n & o | n & r | o & r) - 1894007588 : (n ^ o ^ r) - 899497514, i = r, r = o, o = n << 30 | n >>> 2, n = _, _ = c;
        } s[0] = s[0] + _ | 0, s[1] = s[1] + n | 0, s[2] = s[2] + o | 0, s[3] = s[3] + r | 0, s[4] = s[4] + i | 0; }, _doFinalize: function () { var e = this._data, t = e.words, s = 8 * this._nDataBytes, _ = 8 * e.sigBytes; return t[_ >>> 5] |= 128 << 24 - _ % 32, t[14 + (_ + 64 >>> 9 << 4)] = Math.floor(s / 4294967296), t[15 + (_ + 64 >>> 9 << 4)] = s, e.sigBytes = 4 * t.length, this._process(), this._hash; }, clone: function () { var e = i.clone.call(this); return e._hash = this._hash.clone(), e; } }), n.SHA1 = i._createHelper(R), n.HmacSHA1 = i._createHmacHelper(R), _.SHA1); }, function (e, t, s) { var _, n, o, r, i, E, a; e.exports = (_ = s(4), o = (n = _).lib, r = o.Base, i = n.enc, E = i.Utf8, a = n.algo, void (a.HMAC = r.extend({ init: function (e, t) { e = this._hasher = new e.init, "string" == typeof t && (t = E.parse(t)); var s = e.blockSize, _ = 4 * s; t.sigBytes > _ && (t = e.finalize(t)), t.clamp(); for (var n = this._oKey = t.clone(), o = this._iKey = t.clone(), r = n.words, i = o.words, a = 0; a < s; a++)
            r[a] ^= 1549556828, i[a] ^= 909522486; n.sigBytes = o.sigBytes = _, this.reset(); }, reset: function () { var e = this._hasher; e.reset(), e.update(this._iKey); }, update: function (e) { return this._hasher.update(e), this; }, finalize: function (e) { var t = this._hasher, s = t.finalize(e); t.reset(); var _ = t.finalize(this._oKey.clone().concat(s)); return _; } }))); }, function (e, t, s) { var _, n, o; n = [t], void 0 === (o = "function" == typeof (_ = function (e) {
        "use strict";
        function t(e, t) { for (var s = 0; s < t.length; s++) {
            var _ = t[s];
            _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(e, _.key, _);
        } }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var s = function () { function e() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, _ = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"; !function (e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }(this, e); var n, o, r = ""; this.escapeRegExp = function (e) { return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"); }, this.parseInt = function (e, t) { return /^(-|\+)?([0-9]+|Infinity)$/.test(e) ? parseInt(e, t) : NaN; }, this.seps = "cfhistuCFHISTU", this.minLength = 0 < parseInt(s, 10) ? s : 0, this.salt = "string" == typeof t ? t : "", "string" == typeof _ && (this.alphabet = _); for (var i = 0; i !== this.alphabet.length; i++)
            -1 === r.indexOf(this.alphabet.charAt(i)) && (r += this.alphabet.charAt(i)); if (this.alphabet = r, this.alphabet.length < 16)
            throw "error: alphabet must contain at least X unique characters".replace("X", 16); if (-1 !== this.alphabet.search(" "))
            throw "error: alphabet cannot contain spaces"; for (var E = 0; E !== this.seps.length; E++) {
            var a = this.alphabet.indexOf(this.seps.charAt(E));
            -1 === a ? this.seps = this.seps.substr(0, E) + " " + this.seps.substr(E + 1) : this.alphabet = this.alphabet.substr(0, a) + " " + this.alphabet.substr(a + 1);
        } this.alphabet = this.alphabet.replace(/ /g, ""), this.seps = this.seps.replace(/ /g, ""), this.seps = this._shuffle(this.seps, this.salt), (!this.seps.length || 3.5 < this.alphabet.length / this.seps.length) && (n = Math.ceil(this.alphabet.length / 3.5)) > this.seps.length && (o = n - this.seps.length, this.seps += this.alphabet.substr(0, o), this.alphabet = this.alphabet.substr(o)), this.alphabet = this._shuffle(this.alphabet, this.salt); var R = Math.ceil(this.alphabet.length / 12); this.alphabet.length < 3 ? (this.guards = this.seps.substr(0, R), this.seps = this.seps.substr(R)) : (this.guards = this.alphabet.substr(0, R), this.alphabet = this.alphabet.substr(R)); } var s, _; return s = e, (_ = [{ key: "encode", value: function () { for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                    t[s] = arguments[s]; if (!t.length)
                    return ""; if (t[0] && t[0].constructor === Array && !(t = t[0]).length)
                    return ""; for (var _ = 0; _ !== t.length; _++)
                    if (t[_] = this.parseInt(t[_], 10), !(0 <= t[_]))
                        return ""; return this._encode(t); } }, { key: "decode", value: function (e) { return e && e.length && "string" == typeof e ? this._decode(e, this.alphabet) : []; } }, { key: "encodeHex", value: function (e) { if (e = e.toString(), !/^[0-9a-fA-F]+$/.test(e))
                    return ""; for (var t = e.match(/[\w\W]{1,12}/g), s = 0; s !== t.length; s++)
                    t[s] = parseInt("1" + t[s], 16); return this.encode.apply(this, t); } }, { key: "decodeHex", value: function (e) { for (var t = [], s = this.decode(e), _ = 0; _ !== s.length; _++)
                    t += s[_].toString(16).substr(1); return t; } }, { key: "_encode", value: function (e) { for (var t, s = this.alphabet, _ = 0, n = 0; n !== e.length; n++)
                    _ += e[n] % (n + 100); for (var o = t = s.charAt(_ % s.length), r = 0; r !== e.length; r++) {
                    var i = e[r], E = o + this.salt + s;
                    s = this._shuffle(s, E.substr(0, s.length));
                    var a = this._toAlphabet(i, s);
                    if (t += a, r + 1 < e.length) {
                        var R = (i %= a.charCodeAt(0) + r) % this.seps.length;
                        t += this.seps.charAt(R);
                    }
                } if (t.length < this.minLength) {
                    var c = (_ + t[0].charCodeAt(0)) % this.guards.length, C = this.guards[c];
                    (t = C + t).length < this.minLength && (c = (_ + t[2].charCodeAt(0)) % this.guards.length, t += C = this.guards[c]);
                } for (var d = parseInt(s.length / 2, 10); t.length < this.minLength;) {
                    var l = (t = (s = this._shuffle(s, s)).substr(d) + t + s.substr(0, d)).length - this.minLength;
                    0 < l && (t = t.substr(l / 2, this.minLength));
                } return t; } }, { key: "_decode", value: function (e, t) { var s = [], _ = 0, n = new RegExp("[".concat(this.escapeRegExp(this.guards), "]"), "g"), o = e.replace(n, " "), r = o.split(" "); if (3 !== r.length && 2 !== r.length || (_ = 1), void 0 !== (o = r[_])[0]) {
                    var i = o[0];
                    o = o.substr(1), n = new RegExp("[".concat(this.escapeRegExp(this.seps), "]"), "g"), r = (o = o.replace(n, " ")).split(" ");
                    for (var E = 0; E !== r.length; E++) {
                        var a = r[E], R = i + this.salt + t;
                        t = this._shuffle(t, R.substr(0, t.length)), s.push(this._fromAlphabet(a, t));
                    }
                    this.encode(s) !== e && (s = []);
                } return s; } }, { key: "_shuffle", value: function (e, t) { var s; if (!t.length)
                    return e; for (var _ = (e = e.split("")).length - 1, n = 0, o = 0, r = 0; 0 < _; _--, n++) {
                    n %= t.length, o += s = t.charCodeAt(n);
                    var i = e[r = (s + n + o) % _];
                    e[r] = e[_], e[_] = i;
                } return e = e.join(""); } }, { key: "_toAlphabet", value: function (e, t) { for (var s = ""; s = t.charAt(e % t.length) + s, e = parseInt(e / t.length, 10);)
                    ; return s; } }, { key: "_fromAlphabet", value: function (e, t) { return e.split("").map(function (e) { return t.indexOf(e); }).reduce(function (e, s) { return e * t.length + s; }, 0); } }]) && t(s.prototype, _), e; }();
        e.default = s;
    }) ? _.apply(t, n) : _) || (e.exports = o); }, function (e, t, s) { if ("undefined" == typeof wx || wx.setStorageSync || (wx.setStorageSync = (function () { return ""; })), "undefined" == typeof wx || wx.getStorageSync || (wx.getStorageSync = (function () { return ""; })), "undefined" == typeof wx || wx.getSystemInfoSync || (wx.getSystemInfoSync = (function () { return ({}); })), "undefined" == typeof wx || wx.getNetworkType || (wx.getNetworkType = (function (_a) {
        var e = _a.success;
        return e && e({});
    })), void 0 === _)
        var _ = function () { return [{ __route__: "" }]; }; function n() { return (new Date).getTime(); } function o(e) { return (1e6 * new Date + Math.floor(1e6 * Math.random())).toString(e) || ""; } function r() { c.conf.getLocation && wx.getLocation({ type: c.conf.locationType || "wgs84", success: function (e) { wx.setStorageSync(c.prefix + c.lt, JSON.stringify(e)); } }); } function i() { c.conf.getUserInfo && wx.getUserInfo({ withCredentials: !1, success: function (e) { var t = e.userInfo; t.nickName = encodeURIComponent(t.nickName), wx.setStorageSync(c.prefix + c.ui, JSON.stringify(t)), console.log("userInfo---\x3e" + JSON.stringify(e.userInfo)); }, fail: function (e) { console.log("userInfo fail---\x3e" + e); } }); } function E() { null != c.conf.channelId && "" != c.conf.channelId || null == c.options || void 0 === c.options.query || !c.options.query.hasOwnProperty("bea_channel_id") || (c.conf.channelId = c.options.query.bea_channel_id), c.serverUrl = "https://" + (c.conf.isDebug ? "jrlts" : "report") + ".wxlagame.com/analytics/upload?tp=weapp", r(), i(), wx.getNetworkType({ success: function (e) { wx.setStorageSync(c.prefix + c.nt, e.networkType); } }), c.opid = wx.getStorageSync(c.prefix + c.oik), c.unid = wx.getStorageSync(c.prefix + c.uik); } function a(e, t, s, n) { (!t || void 0 === t || 0 >= t) && (t = (new Date).getTime()); var o = _(), r = 0, i = []; o && o.length > 0 && (r = 0 === s ? 0 : t - s, i = [{ name: o.pop().__route__, start: t, duration: r, refer: "" }]), R(e, t, r, i, n); } function R(e, t, s, _, n, r, i) { (!t || void 0 === t || 0 >= t) && (t = (new Date).getTime()); var E = [{ type: 2, data: { id: o(32), start: t, status: e, duration: s || 0, pages: _ || [], events: n || [] } }], a = wx.getSystemInfoSync(), R = function () { var e = wx.getStorageSync(c.prefix + c.u); return "" == e && (e = o(36), wx.setStorageSync(c.prefix + c.u, e)), e; }(); r && void 0 !== r && "" != r || c.options && (r = c.options.scene); var C = { deviceId: R, appkey: c.conf.appKey, versionCode: c.conf.version, initTime: t, scene: r, channelID: c.conf.channelId, sdkVersion: c.sdkVersion, pixel: a.screenWidth + "*" + a.screenHeight + "*" + a.pixelRatio, language: a.language, model: encodeURIComponent(a.model), wxVersion: a.version, networkType: wx.getStorageSync(c.prefix + c.nt) || "4g", system: encodeURIComponent(a.system), platform: encodeURIComponent(a.platform), windowArea: a.windowWidth + "*" + a.windowHeight + "*" + a.pixelRatio, query: JSON.stringify(c.options), opid: c.opid, unid: c.unid, userInfo: c.conf.getUserInfo && wx.getStorageSync(c.prefix + c.ui) || "", location: c.conf.getLocation && wx.getStorageSync(c.prefix + c.lt) || "", msgs: E }; wx.request({ url: c.serverUrl, data: C, method: "POST", success: function () { return i && i(!0); }, fail: function () { return i && i(!1); } }); } var c = { options: null, serverUrl: null, opid: null, unid: null, conf: s(19), prefix: "beacon_", sdkVersion: "weapp_v1.0.7", u: "u", ui: "ui", lt: "lt", nt: "nt", oik: "oik", uik: "uik", atl: 0, ats: 0, ptl: 0, pts: 0, appLaunch: function () { arguments.length > 0 && null != arguments[0] && (c.options = arguments[0]), c.conf.beforeLoad(c.options), c.conf.appKey && void 0 !== c.conf.appKey && c.conf.appKey.length > 0 && c.conf.version && void 0 !== c.conf.version && c.conf.version.length > 0 ? (E(), this.atl = n(), a(1, this.atl, 0, [])) : console.log("beacon_error:init data invalid"); }, appShow: function () { arguments.length > 0 && null != arguments[0] && (c.options = arguments[0]), E(), this.ats = n(); }, appHide: function () { }, pageLoad: function () { var e, t = _().pop(); this.ptl = n(), a(5, this.ptl, 0, []), c.conf.onPullDownRefresh && (e = t.onPullDownRefresh, t.onPullDownRefresh = function () { c.onEvent("beacon_pulldownrefresh"), e.call(this, arguments); }), c.conf.onReachBottom && function () { var e = t.onReachBottom; t.onReachBottom = function () { c.onEvent("beacon_reachbottom"), e.call(this, arguments); }; }(); }, pageUnload: function () { a(6, 0, this.ptl, []); }, pageShow: function () { this.pts = n(), a(2, this.pts, 0, []); }, pageHide: function () { a(4, 0, this.pts, []); }, onEvent: function (e, t, s) { var n = (new Date).getTime(); R(4, n, 0, [], [{ weappPageName: _().pop().__route__, count: 1, start: n, name: e, params: t || {} }], null, s); }, setAppKey: function (e) { c.conf.appKey = e; }, setChannelId: function (e) { c.conf.channelId = e; }, setOpenid: function (e) { e && e.length > 0 && (c.opid = e, wx.setStorageSync(c.prefix + c.oik, e)); }, setUnionid: function (e) { e && e.length > 0 && (c.unid = e, wx.setStorageSync(c.prefix + c.uik, e)); }, setGetLocation: function (e) { c.conf.getLocation = !0 === e, !0 === e && r(); }, setGetUserInfo: function (e) { c.conf.getUserInfo = !0 === e, !0 === e && i(); } }; e.exports = c; }, function (e, t) { e.exports = { appKey: "MA0NCELB39H5S6", version: "1.0.0", channelId: "", getLocation: !1, getUserInfo: !1, onPullDownRefresh: !1, onReachBottom: !1, isDebug: !1, beforeLoad: function () { } }; }]).default; });
