/**
 * 请在白鹭引擎的Main.ts中调用 platform.login() 方法调用至此处。
 */

import sdk_pay from "./lib/paysdk.js";
import sdk_wxa from "./lib/sdk_wxa.js";
import stat from "./stat/stat.js";

var inst = null;
var cache = require("./lib/cache.js");

class WxgamePlatform {
    constructor() {
        inst = this;

        inst.CONFIG = {
            "DEBUG": false,
            "SHARE_ENABLED": true,
            "TEST_TOKEN": "",
            "TEST_SERVER": "http://182.254.212.38:7601/",
            "SOCKET_SERVER": "118.89.152.18",
            "SOCKET_PORT": 11001,
        };

        inst.API_URL = "https://api.kxtoo.com/conf/";
        inst.WXLOGIN_URL = "https://wxlogin.kxtoo.com/wxlogin/";
        inst.LOGIN_KEY_URL = "https://wxlogin.kxtoo.com/api/";

        inst.APP_ID = "wxe9e787a78e6c9dcd";
        inst.GAME_ID = 558;
        inst.PLATFORM = "${PLATFORM}";
        inst.E_VERSION = "${E_VERSION}";
        inst.G_VERSION = "${G_VERSION}";

        inst.PAY_ERROR = {
            "0": "操作成功",
            "1": "系统错误",
            "3": "参数有误",
            "10001": "控制器未找到",
            "10002": "方法未找到",
            "10004": "登录状态失效，请重新登录",
            "10005": "程序出错",
            "26": "该appid未配置支付参数"
        };

        inst.BUY_ERROR = {
            "0": "操作成功",
            "1": "缺少参数",
            "2": "系统错误",
            "3": "token失效，请尝试重新登录",
            "4": "该appid未配置支付参数",
            "5": "商品不存在",
            "6": "游戏不存在",
            "7": "微信系统繁忙，请稍后再尝试购买",
            "8": "游戏币余额不足",
            "9": "缺少参数token",
            "10": "缺少参数appid",
            "11": "缺少参数product_id",
            "12": "购买数量错误，必须在1-1000之间"
        };

        inst._scene = wx.getLaunchOptionsSync().scene;
        inst._query = wx.getLaunchOptionsSync().query;
        inst._sceneData = {};
        inst._referrerInfo = wx.getLaunchOptionsSync().referrerInfo;
        inst._systemInfo = wx.getSystemInfoSync();

        if (inst._query.scene) {
            var sceneList = decodeURIComponent(inst._query.scene).split(",");

            for (var i = 0; i < sceneList.length; i++) {
                var sceneItem = sceneList[i];
                inst._sceneData[sceneItem.split(":")[0]] = sceneItem.split(":")[1];
            }
        }

        console.info("Query => " + JSON.stringify(inst._query));
        console.info("ReferrerInfo => " + JSON.stringify(inst._referrerInfo));
        console.info("SystemInfo => " + JSON.stringify(inst._systemInfo));

        inst._gameInfo = null;

        inst._initShow = null;
        inst._initHide = null;
        inst._initCbThis = null;

        inst._bannerAd = null;

        inst._getUserInfoCb = null;
        inst._getUserInfoCbThis = null;

        inst._isProcessing = false;

        inst._inviteCb = null;
        inst._inviteCbThis = null;
        inst._inviteConf = null;

        wx.onShow(function (res) {
            if (inst._initShow != null) {
                inst._initShow.call(inst._initCbThis, res);
            }
        });

        wx.onHide(function () {
            if (inst._initHide != null) {
                inst._initHide.call(inst._initCbThis);
            }
        });
    }

    isWXFavoriteOpen() {
        var str = inst._systemInfo['version'];
        var arr = str.split('.');
        if (parseInt(arr[0]) > 6) {
            return true;
        }
        if (parseInt(arr[0]) == 6 && parseInt(arr[1]) >= 7) {
            return true;
        }
        return false;
    }

    getScaleMode() {
        return egret.StageScaleMode.FIXED_WIDTH;
    }

    getTopOffset() {
        return -(egret.MainContext.instance.stage.stageHeight - 1334) / 2;
    }

    getBottomOffset() {
        return (egret.MainContext.instance.stage.stageHeight - 1334) / 2;
    }

    getTopHeight() {
        if (inst.getIsIphoneX()) {
            return 60;
        }
        return 0;
    }
    getUID()
    {
        return inst._uid;
    }

    getTopRightHeight() {
        return 70;
    }

    getIsIOS() {
        return inst._systemInfo.system.indexOf("iOS") >= 0;
    }

    getIsIphoneX() {
        let offset = 1;
        let info = wx.getSystemInfoSync();
        let sys = info['system'] ? info['system'] : '';

        // iPhone 6      : <iPhone7,2>
        // iPhone 6 Plus : <iPhone7,1>
        // iPhone 6s     : <iPhone8,1>
        // iPhone 6s Plus: <iPhone8,2>

        // iPhone 7      : <iPhone9,1>
        // iPhone 7 Plus : <iPhone9,2>
        // iPhone 7      : <iPhone9,3>
        // iPhone 7 Plus : <iPhone9,4>

        // iPhone 8      : <iPhone10,1>
        // iPhone 8 Plus : <iPhone10,2>
        // iPhone 8      : <iPhone10,4>
        // iPhone 8 Plus : <iPhone10,5>
        // iPhone x      : <iPhone10,3>
        // iPhone x      : <iPhone10,6>

        // iPhone XS     : <iPhone11,2>
        // iPhone XS Max : <iPhone11,4>
        // iPhone XS Max : <iPhone11,6>
        // iPhone XR     : <iPhone11,8>
        let model = info['model'] ? info['model'] : '';
        let brand = info['brand'] ? info['brand'] : '';
        // 刘海屏机型编码
        let iphoneTopOffset = [
            "iPhone10,3", "iPhone10,6", "iPhone11,2", "iPhone11,4", "iPhone11,6", "iPhone11,8"
        ]
        //

        console.log("iphone:::" + sys);
        console.log("iphone:::" + model);
        console.log("iphone:::" + brand);
        if (sys.indexOf('iOS') >= 0) {
            var rs = 0;
            var a, b = 0;
            var regex = /\<(.+?)\>/g;
            var result;

            while ((result = regex.exec(model)) != null) {
                var tmp = result[1];
                if (iphoneTopOffset.indexOf(tmp) >= 0) {
                    result = offset;
                }
            }
            // 微信开发者工具 iphone x机型标识处理
            if (result == 0 && model.indexOf("iPhone X") >= 0) {
                rs = offset;
            }
            return rs > 0;

        }
        else {
            if (brand.indexOf('OPPO') >= 0 && model.indexOf("PACT00") >= 0) {
                return true;
            }
            else if (brand.indexOf('vivo') >= 0 && model.indexOf("vivo X21") >= 0) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    checkModel(list){
        if ( !inst._systemInfo ) {
            inst._systemInfo = wx.getSystemInfoSync();
        }
        var model = inst._systemInfo.model;
        if ( !model ) {
            return false;
        }
        for ( let i = 0; i < list.length; ++i ) {
            var info = list[i];
            if (model.toLowerCase().indexOf(info.model.toLowerCase()) >= 0)
            {
                return true;
            }

        }
    }

    getIsWeixin() {
        return true;
    }

    getAppID() {
        return inst.APP_ID;
    }

    getGameID() {
        return inst.GAME_ID;
    }

    getPlatform() {
        return inst.PLATFORM;
    }

    getEngineVersion() {
        return inst.E_VERSION;
    }

    getGameVersion() {
        return inst.G_VERSION;
    }

    getConfig() {
        return inst.CONFIG;
    }

    getChid() {
        var chid = 0;

        if (inst.getExternalVar("chid") != null) {
            chid = inst.getExternalVar("chid");
        }
        else if (inst.getExternalSceneVar("chid") != null) {
            chid = inst.getExternalSceneVar("chid");
        }
        return chid;
    }

    getSubchid() {
        var subchid = "";

        if (inst.getExternalVar("subchid") != null) {
            subchid = inst.getExternalVar("subchid");
        }
        else if (inst.getExternalSceneVar("subchid") != null) {
            subchid = inst.getExternalSceneVar("subchid");
        }
        return subchid;
    }

    getToken() {
        return inst._token;
    }

    getOnoff(key) {
        return inst._gameInfo.onoff[key];
    }

    getIsAudit() {
        return parseInt(inst._gameInfo.onoff.audit) > 0;
    }

    getIsPayment() {
        return parseInt(inst._gameInfo.onoff.closePay) > 0 == false;
    }

    getServerUrl() {
        if (inst.getIsAudit()) {
            return inst._gameInfo.ext.auditServerURL;
        }
        else {
            return inst._gameInfo.ext.serverURL;
        }
    }

    getServerUrlSocket() {
        if (inst.getIsAudit()) {
            return inst._gameInfo.ext.auditNotifyServerURL;
        }
        else {
            return inst._gameInfo.ext.notifyServerURL;
        }
    }

    getSocketServer() {
        return inst.CONFIG.SOCKET_SERVER;
    }
    getSocketPort() {
        return inst.CONFIG.SOCKET_PORT;
    }

    getScene() {
        return inst._scene;
    }

    getExternalVar(key) {
        if (inst._query) {
            return inst._query[key];
        }
        return null;
    }

    getExternalSceneVar(key) {
        if (inst._sceneData) {
            return inst._sceneData[key];
        }
        return null;
    }

    getExternalReferrerInfo() {
        return inst._referrerInfo;
    }

    getWX() {
        return wx;
    }

    getWebchat() {
        return require("./lib/webchat.js");
    }

    //----------------------------------------//

    httpGet(url, data, cb, cbError, cbThis) {
        wx.request({

            url: url,
            data: data,
            method: "GET",

            success: function (res) {
                if (cb != null) {
                    cb.call(cbThis, res.data);
                }
            },
            fail: function (res) {
                if (cbError != null) {
                    cbError.call(cbThis, res);
                }
            }
        });
    }

    httpPost(url, data, cb, cbError, cbThis) {
        wx.request({

            url: url,
            data: data,
            method: "POST",

            success: function (res) {
                if (cb != null) {
                    cb.call(cbThis, res.data);
                }
            },
            fail: function (res) {
                if (cbError != null) {
                    cbError.call(cbThis, res);
                }
            }
        });
    }

    checkWxVersion(needVersion) {
        var version = parseInt(inst._systemInfo.version.split(".").join(""));

        if (version < 1000) {
            version = version * 10;
        }
        if (needVersion < 1000) {
            needVersion = needVersion * 10;
        }
        return version >= needVersion;
    }

    checkWxSdkVersion(needVersion) {
        var version = parseInt(inst._systemInfo.SDKVersion.split(".").join(""));

        if (version < 1000) {
            version = version * 10;
        }
        if (needVersion < 1000) {
            needVersion = needVersion * 10;
        }
        return version >= needVersion;
    }

    createInnerAudioContext() {
        var audio = wx.createInnerAudioContext();

        audio.__setSrc = function (src) {
            audio.src = src;
        };
        return audio;
    }

    init(initShow, initHide, initCBThis) {
        inst._initShow = initShow;
        inst._initHide = initHide;
        inst._initCBThis = initCBThis;
    }

    update() {
        if (wx.getUpdateManager != null) {
            var manager = wx.getUpdateManager();

            manager.onUpdateReady(function () {
                try {
                    cache.rmdir(wx.env.USER_DATA_PATH + "/" + cache.cacheDir + "/config", true, function () {
                        cache.rmdir(wx.env.USER_DATA_PATH + "/" + cache.cacheDir + "/cdn.kxtoo.com", true, function () {
                            manager.applyUpdate();
                        });
                    });
                }
                catch (error) {
                    console.info("Cache Clear: " + error.message);
                    manager.applyUpdate();
                }
            });
        }
    }

    openCache(cb, cbThis) {
        cache.openCache(cb, cbThis);
    }

    reload() {
        if (wx.getUpdateManager != null) {
            var manager = wx.getUpdateManager();
            manager.applyUpdate();
        }
        else {
            wx.exitMiniProgram();
        }
    }

    logout() {
        if (wx.getUpdateManager != null) {
            var manager = wx.getUpdateManager();
            manager.applyUpdate();
        }
        else {
            wx.exitMiniProgram();
        }
    }

    vibrateShort() {
        wx.vibrateShort();
    }

    vibrateLong() {
        wx.vibrateLong();
    }

    showAdVideo(cb, cbClose, cbThis) {
        inst.adVideocb = cb;
        inst.adVideocbClose = cbClose;
        inst.adVideocbThis = cbThis;

        if (wx.createRewardedVideoAd != null) {
            if (inst._videoAd == null) {
                inst._videoAd = wx.createRewardedVideoAd({adUnitId: "adunit-0230b53e402493b8"});

                inst._videoAd.onClose(function (res) {
                    if (res && res.isEnded || res === undefined) {
                        // 正常播放结束，可以下发游戏奖励
                        inst.adVideocb.call(inst.adVideocbThis, false);
                    }
                    else {
                        // 播放中途退出，不下发游戏奖励
                        inst.adVideocbClose.call(inst.adVideocbThis);
                    }
                });

                inst._videoAd.onError(function (error) {
                    inst.adVideocb.call(inst.adVideocbThis, true);
                    console.log("AD Vedio Error => " + JSON.stringify(error));
                });
            }

            inst._videoAd.load().then(function () {
                inst._videoAd.show();
            });

        }
        else {
            inst.adVideocb.call(inst.adVideocbThis, true);
            console.log("AD Vedio Error no api");
        }
    }

    showAdBanner() {
        var style;
        inst.hideAdBanner();

        style = {
            top: 0,
            left: 0,
            width: inst._systemInfo["screenWidth"]
        };

        inst._bannerAd = wx.createBannerAd({adUnitId: "adunit-717780fec3508e48", style: style});
        inst._bannerAd.onError(inst.onBannerError);
        inst._bannerAd.onResize(inst.onBannerResize);
        inst._bannerAd.show();
    }

    onBannerError(error) {
        console.log("Banner AD Error: " + JSON.stringify(error));
    }

    onBannerResize(res) {
        if (inst._bannerAd) {
            inst._bannerAd.style.top = inst._systemInfo["screenHeight"] - res["height"];
        }
    }

    hideAdBanner() {
        if (inst._bannerAd) {
            inst._bannerAd.destroy();
            inst._bannerAd = null;
        }
    }

    copyUID(uid) {
        wx.setClipboardData({

            data: uid.toString(),

            success: function (res) {
                wx.showToast({
                    title: "已复制",
                    icon: "success"
                });
            }
        });
    }

    hideLoading() {

    }

    showProcessing() {
        if (inst._isProcessing == false) {
            wx.showLoading({title: "通信中"});
            inst._isProcessing = true;
        }
    }

    hideProcessing() {
        wx.hideLoading();
        inst._isProcessing = false;
    }

    getServerInfo(cb, cbThis) {
        wx.request({

            url: inst.API_URL + "?cmd=getGameInfo&gameid=" + inst.GAME_ID + "&version=" + inst.G_VERSION,

            success: function (res) {
                inst._gameInfo = res.data;
                console.log(JSON.stringify(inst._gameInfo))
                if (cb != null) {
                    cb.call(cbThis);
                }
            },
            fail: function (res) {
                inst.getServerInfo(cb, cbThis);
            }
        });
    }

    weixinInit(cb, cbThis) {
        var count = 0;
        wx.login({

            success: function (res) {
                wx.request({

                    url: inst.WXLOGIN_URL + "?cmd=wxaLogin",
                    method: "POST",
                    data:
                        {
                            code: res.code,
                            chid: inst.getChid(),
                            subchid: inst.getSubchid(),
                            from: inst.getExternalVar("from"),
                            appid: inst.APP_ID,
                            gameid: inst.GAME_ID
                        },

                    success: function (res) {
                        if (res.data.token) {
                            console.log('weixinInit::' + JSON.stringify(res))
                            inst._token = res.data.token;
                            inst._uid = res.data.uid;
                            if (cb != null) {
                                cb.call(cbThis);
                            }
                        }
                        else {
                            count++;
                            if (count < 5) {
                                inst.weixinInit(cb, cbThis);
                            }
                        }

                    },
                    fail: function (res) {
                        inst.weixinInit(cb, cbThis);
                    }
                });
            },
            fail: function (res) {
            }
        });
    }

    getScreenWidth() {
        return inst._systemInfo.screenWidth;
    }

    getTokenByLogKey(cb, cbThis) {
        wx.request({

            url: inst.LOGIN_KEY_URL + "?cmd=getTokenByLogKey",
            method: "POST",
            data:
                {
                    logkey: inst.getExternalSceneVar("logkey")
                },

            success: function (res) {
                inst._token = res.data.token;

                if (cb != null) {
                    cb.call(cbThis);
                }

            },
            fail: function (res) {
                inst.getTokenByLogKey(cb, cbThis);
            }
        });
    }

    getUserInfo(cb, cbThis) {
        inst._getUserInfoCb = cb;
        inst._getUserInfoCbThis = cbThis;

        console.log('getUserInfo: 1')
        wx.login({
            fail: function (fail_info) {
                console.log('getUserInfo fail: ' + JSON.stringify(fail_info));
            },
            success: function (res_1) {
                console.log('getUserInfo success: ' + JSON.stringify(res_1));
                if (wx.createUserInfoButton == null) {
                    wx.getUserInfo({

                        success: function (res_2) {
                            inst.getUserInfoCallback(res_1, res_2);
                        },
                        fail: function () {
                            if (inst._getUserInfoCb != null) {
                                inst._getUserInfoCb.call(inst._getUserInfoCbThis, false);
                            }
                        }
                    });
                }
                else {
                    var posX = (inst._systemInfo.screenWidth - 500) / 2;
                    var posY = (inst._systemInfo.screenHeight - 1000) / 2;

                    var button = wx.createUserInfoButton({
                        type: "image",
                        image: inst.getResURL() + "assets/imgbg.png?v=" + (new Date().getTime()),
                        style:
                            {
                                top: posY,
                                left: posX,
                                width: 500,
                                height: 1000
                            }
                    });

                    button.onTap(function (res_2) {
                        button.hide();

                        if (res_2["errMsg"] == "getUserInfo:ok") {
                            inst.getUserInfoCallback(res_1, res_2);
                        }
                        else {
                            if (inst._getUserInfoCb != null) {
                                inst._getUserInfoCb.call(inst._getUserInfoCbThis, false);
                            }
                        }
                    });
                }
            }
        });
    }

    getUserInfoCallback(res_1, res_2) {
        console.log("res_1", res_1);
        console.log("res_2", res_2);
        wx.request({
            url: inst.WXLOGIN_URL + "?cmd=wxaLogin",
            method: "POST",
            data:
                {
                    code: res_1.code,
                    appid: inst.APP_ID,
                    gameid: inst.GAME_ID,
                    encryptedData: res_2.encryptedData,
                    iv: res_2.iv
                },
            success: function (res) {
                if (inst._getUserInfoCb != null) {
                    inst._getUserInfoCb.call(inst._getUserInfoCbThis, true);
                }
            },
            fail: function (res) {
                if (inst._getUserInfoCb != null) {
                    inst._getUserInfoCb.call(inst._getUserInfoCbThis, false);
                }
            }
        });
    }

    //----------------------------------------//

    pay(pid, price, zid, cb, cbThis)
    {
        var env = 0;

        if (inst._gameInfo) {
            if (parseInt(inst._gameInfo.ext.midasPayEnv) > 0) {
                env = 1;
            }
        }

        var isTest = 0;
        if(inst.getIsAudit())
        {
            isTest = 1;
        }

        console.log('tryPay:::zid::' + zid)
        // sdk_pay.pay({
        //     env: env, // 从getGameInfo中获取
        //     gameid: 547, // 爱微游游戏id
        //     offerId: 1450017694, // 米大师支付id
        //     productId: pid, // 本次购买的商品id
        //     token: inst._token, // 登录token
        //     userdata: zid + ';1*2*3', // 透传参数，支付回调时会原样返回
        //     test:isTest,
        // }, function (error, errmsg, transId) {
        //
        //     // error 错误码 0 表示支付成功 其他表示支付失败
        //     // errmsg 错误提示 错误码的详细提示
        //     // transId 如果error = 0时返回，本次支付的订单id
        //     console.log('PaySDK', error, errmsg);
        //     if (error == 0) {
        //         if (cb != null) {
        //             cb.call(cbThis, transId);
        //         }
        //     }
        //     else {
        //         wx.showModal({
        //             title: "提示",
        //             content: '支付失败：' + error + "   "+ JSON.stringify(errmsg),
        //             showCancel: false
        //         });
        //     }
        // })
    }

    showFocus(data) {

    }

    initInvite(cb, cbThis, conf, param) {
        inst._inviteCb = cb;
        inst._inviteCbThis = cbThis;
        inst._inviteConf = conf;

        var paramStr = "";

        if (param != null) {
            for (var key in param) {
                paramStr = paramStr + key + "=" + param[key] + "&";
            }
            paramStr = paramStr.substr(0, paramStr.length - 1);
        }

        inst._paramStr = paramStr;

        wx.showShareMenu();

        wx.onShareAppMessage(function () {
            return {

                title: inst._inviteConf["title"],
                imageUrl: inst.getResURL() + "eui/share/" + inst._inviteConf["png"] + ".png",
                query: paramStr,

                success: function (res) {
                    if (inst._inviteCb != null) {
                        inst._inviteCb.call(inst._inviteCbThis, inst._inviteConf);
                    }
                }
            };
        });
    }

    resetInvite() {
        wx.updateShareMenu({withShareTicket: false});
    }

    showInvite() {

        wx.updateShareMenu({

            success: function () {
                wx.shareAppMessage({

                    title: inst._inviteConf["title"],
                    imageUrl: inst.getResURL() + "eui/share/" + inst._inviteConf["png"] + ".png",
                    query: inst._paramStr,

                    cancel: function (res) {
                        console.log("action share cancel::" + JSON.stringify(res));
                    }
                });
            }
        });
    }

    //广告//
    initAwyAd(uid, cb, cbThis) {
        inst.ad_sdk = new sdk_wxa({
            gameid: inst.GAME_ID, //必填字段，传入游戏ID
            uid: uid, //必填字段，传入玩家的UID
            domain: 'kxtoo.com', //选填字段，SDK中相关11h5.com域名会替换成传入的domain，字段格式 xxx.com，例如 kxtoo.com
            token: inst.getToken(), //选填字段 (如果需要使用积分墙，需要传递此字段)
            wallTest: inst.getIsAudit() //选填字段 (积分墙内网接口测试专用，默认不传)
        })

        inst.ad_sdk.checkAdModeStatus((res)=>
        {
            console.log('checkAdModeStatus::' + JSON.stringify(res))
            cb.call(cbThis, res);
        });
    }

    getADWallData(cb, cbThis) {
        inst.ad_sdk.getGameWallList((res)=>
        {
            console.log('gameWall::' + JSON.stringify(res));
            cb.call(cbThis, res);
        });
    }

    ADWallNavigate(appid, type, cb, cbThis) {
        console.log('callNavigate:::' +  appid + '^^' + type)
        inst.ad_sdk.navigateToMiniProgram({appid:appid, type:type}, (res)=>
        {
            console.log('navigateBack::' + JSON.stringify(res))
            if(cb && cbThis)
            {
                cb.call(cbThis, res);
            }
        });
    }

    tryADWallTips() {
        console.log('call checkWallTip')
        inst.ad_sdk.checkWallTip();
    }

    getADWallReward(gameid, cb, cbThis) {
        inst.ad_sdk.getGameWallAward(gameid, (res)=>
        {
            // 返回空对象{} 奖励发放成功
            //
            // res.error = 1 //系统错误
            // res.error = 4 //参数有误
            // res.error = 6 //未参与该任务
            // res.error = 7 //任务未完成
            // res.error = 8 //已经领取该奖励
            cb.call(cbThis, res);
        });
    }

    getSingleAD(cb, cbThis)
    {
        inst.ad_sdk.getRandAd({}, (res) => {

            //此方法需传入一个空对象
            console.log('getRandAd::' + JSON.stringify(res))
            cb.call(cbThis, res);

        })
    }

    getRecommendAD(cb, cbThis)
    {
        inst.ad_sdk.getRandAd({type:1}, (res) => {

            //此方法需传入一个空对象
            console.log('getRecommendAD::' + JSON.stringify(res))
            cb.call(cbThis, res);

        })
    }

    sendADStatAlive(cb, cbThis)
    {
        console.log('sendADStatAlive:: send')
        wx.request({

            url: "https://adstat.kxtoo.com/stat/?cmd=alive&token=" + inst._token,
            method: "GET",
            success: function (res) {
                console.log('sendADStatAlive:: success');
                cb.call(cbThis);
            },
            fail: function (res) {
                console.log('sendADStatAlive:: fail' + res.errmsg)
                cb.call(cbThis);
            }
        });
    }

    sendADStatShare()
    {
        console.log('sendADStatShare:: send')
        wx.request({

            url: "https://adstat.kxtoo.com/stat/?cmd=share&token=" + inst._token,
            method: "GET",
            success: function (res) {
                console.log('sendADStatShare:: success');
            },
            fail: function (res) {
                console.log('sendADStatShare:: fail' + res.errmsg)
            }
        });
    }
//----------------------------------------//

    getResURL() {
        return "https://cdn.kxtoo.com/balls/" + inst.G_VERSION + "/";
    }

// ------------------------------------------------
// 微信关系链
// ------------------------------------------------

    canUseOpenData() {
        return inst.checkWxSdkVersion(1992);
    }

    postMsgToOpenData(now, cmd, data) {
        if (wx.getOpenDataContext != null) {
            data['now'] = now;
            wx.getOpenDataContext().postMessage({cmd: cmd, data: data});
        }
        else {
            wx.showModal({
                title: "提示",
                content: "不支持开放域功能！",
                showCancel: false
            });
        }
    }

    wxAlert(title, content, confirmText, cancelText, success) {
        wx.showModal({
            title: title,
            content: content,
            confirmText: confirmText,
            cancelText: cancelText,
            success: function (res) {
                success(res);
            },
        });
    }

    getStorage(key, cb) {
        wx.getStorage({
            key: key,
            success: function (res) {
                cb(res);
                console.log(JSON.stringify(res))
            },
            fail: function (res) {
                cb(null);
            },
        });
    }

    setStorage(key, data) {
        wx.setStorage({
            key: key,
            data: data,
            // success: function(res) {
            // },
            // fail: function(res) {
            // },
        });
    }

    getOnoffData() {
        return inst._gameInfo.onoff;
    }

    getWX()
    {
        return wx;
    }

    getScreenWidth()
    {
        return inst._systemInfo.screenWidth;
    }
}

window.platform = new WxgamePlatform();