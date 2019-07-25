(function() {
    function _createUUID() {
        let d = new Date().getTime();
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    //platform stat
    function _stat(args = {}) {
        let item = 'wxa_ad_stat_old';
        switch (args.type) {
            case 1:
                item = 'wxa_ad_stat_new';
                break;
            case 2:
                item = 'wxa_ad_stat_like';
                break;
            case 3:
                item = 'wxa_ad_stat_wall';
                break;
        }
        if (args.item) {
            item = args.item;
        }
        if (args.ad) {
            args.subitem.push({
                stat: this.device
            }, {
                stat: `gameid_${this.gameid}`
            })
            if (args.data) {
                args.subitem.push({
                    stat: `id_${args.data.id}`
                })
            }
        }
        let data = {
            cmd: 'combineStat',
            uid: this.uid,
            item: item,
            subItem: JSON.stringify(args.subitem),
            v: Date.now()
        }
        if (args.click) {
            data.gameid = this.gameid
        }
        wx.request({
            url: `${this.baseurl}comstat/stat`,
            data: data,
            method: 'POST',
            complete: (e) => {
                console.log('stat', data, e.data)
            }
        })
    }

    function _replace(url) {
        return this.domain == '11h5.com' ? url : url.replace(/11h5.com/g, this.domain)
    }

    function _adHandle(data, type = 0) {
        data.iconurl = _replace.call(this, data.iconurl);
        data.imgurl = _replace.call(this, data.imgurl);
        let icon = data.iconurl.split('|'),
            _data = {
                type: 1,
                data: {
                    appid: data.appid,
                    title: data.title,
                    icon: icon[0],
                    type: type
                }
            };
        if (icon.length > 1) {
            _data.type = 2;
            _data.data.icon = icon;
            _data.data.intervals = data.intervals || 150;
        }
        return _data;
    }

    function _checkCpsUser(callback) {
        if (this.token) {
            wx.request({
                url: `${this.baseurl}stat/stat?cmd=isCpsUser`,
                data: {
                    token: this.token,
                    gameid: this.gameid
                },
                complete: (res) => {
                    if (res && res.data) {
                        if (res.data.isCps) {
                            this.config.isCps = res.data.isCps;
                        }
                    }
                    callback && callback()
                }
            })
        } else {
            callback && callback()
        }
    }

    function _getConfig(callback) {
        if (this.config) {
            return callback && callback();
        }
        wx.request({
            url: `${this.configurl}wxa_config.json`,
            data: {
                v: Date.now()
            },
            complete: (res) => {
                this.config = res.data;
                _checkCpsUser.call(this, () => {
                    callback && callback();
                })
            }
        })
    }

    function _previewImage(url, data = {}) {
        if (this.device == 'iOS') {
            if (data.iosImg) {
                url = data.iosImg
            }
        } else {
            if (data.androidImg) {
                url = data.androidImg
            }
        }
        if (arguments[2] == 3) {
            _setGameWallStatus.call(this, data)
        }
        wx.previewImage({
            urls: [url],
        });
    }

    function _refreshAd(type, callback) {
        let cfg = this.config;
        if (type == 1) {
            this.getRandAd({}, (res) => {
                callback(res)
            })
        }
        if (cfg.autoChangeAd) {
            if (!type) {
                clearTimeout(this.changeAlone);
                this.changeAlone = setTimeout(() => {
                    this.getRandAd({}, (res) => {
                        callback(res)
                    })
                }, cfg.autoChangeInterval)
            }
            if (type == 2) {
                clearTimeout(this.changeGuess);
                this.changeGuess = setTimeout(() => {
                    this.getRandAd({
                        type: type
                    }, (res) => {
                        callback(res)
                    })
                }, cfg.autoChangeInterval)
            }
        }
    }

    function _sortData(res) {
        if (this.device == 'iOS') {
            res.sort((a, b) => {
                return a[arguments[1]] < b[arguments[1]];
            })
        } else {
            res.sort((a, b) => {
                return a[arguments[2]] < b[arguments[2]];
            })
        }
    }

    function _setGameWallStatus(data) {
        wx.request({
            url: `${this.pointurl}setPlayerWallInfo`,
            data: {
                token: this.token,
                channel: this.gameid,
                gameid: data ? data.gameid : 0,
                stopid: 1,
                v: Date.now()
            },
            complete: (res) => {
                if (res && res.data && res.data.error) {
                    wx.showModal({
                        title: '错误提示',
                        content: `积分墙设置错误--${res.data.error}`,
                        showCancel: false
                    })
                }
                try {
                    if (data) {
                        if (!wx.getStorageSync('walltime') && !data.isReady) {
                            wx.setStorageSync('walltime', `${Date.parse(new Date()) / 1000}_${data.title}`)
                        }
                    }
                } catch (e) {}
            }
        })
    }

    class Sdk {
        version = '0.0.4';
        domain = '11h5.com';
        appid = 'wx661c48766cd0ef5f'; //Don't change

        constructor(opt = {}) {
            for (let i in opt) {
                this[i] = opt[i]
            }

            this.baseurl = `https://adapi.${this.domain}/`
            this.configurl = `https://act.${this.domain}/adResource/`
            this.qrcodeurl = `https://api.${this.domain}/common?cmd=getwxacodeunlimit`
            this.pointurl = this.wallTest ? 'http://dev6.11h5.com:3061/wall/?cmd=' : `https://integral-wall.${this.domain}/wall?cmd=`

            try {
                let systemInfo = wx.getSystemInfoSync();
                this.device = systemInfo.system.indexOf('iOS') != -1 ? 'iOS' : 'Android';
                this.screenWidth = systemInfo.screenWidth;
                this.screenHeight = systemInfo.screenHeight;
            } catch (e) {}
            if (!this.uid) {
                try {
                    this.uid = wx.getStorageSync('yg_uid') || _createUUID()
                    wx.setStorageSync('yg_uid', this.uid);
                } catch (e) {
                    this.uid = 1000
                }
            }
            if (!this.gameid) {
                throw new Error('params: invalid gameid')
            }
        }

        showShareImg(args = {
            x: 375,
            y: 1080,
            spaceWidth: 320
        }, callback) {
            let key = args.key || 'shareImg';
            try {
                let image = wx.getStorageSync(key)
                if (image) {
                    return wx.previewImage({
                        urls: [image],
                    })
                }
            } catch (e) {}
            wx.showLoading({
                title: '加载中',
            })
            let canvas = wx.createCanvas(),
                ctx = canvas.getContext('2d'),
                bg = wx.createImage(),
                scale = this.screenWidth / 750,
                center = {
                    x: parseInt(args.x * scale),
                    y: parseInt(args.y * scale)
                },
                spaceWidth = parseInt(args.spaceWidth * scale),
                half = spaceWidth / 2;
            bg.src = args.bgImg;
            bg.onerror = () => {
                console.log('大图加载出错，背景地址---->', args.bgImg)
            }
            bg.onload = () => {
                ctx.drawImage(bg, 0, 0, this.screenWidth, this.screenHeight == 812 ? 667 : this.screenHeight);
                ctx.save();
                ctx.arc(center.x, center.y, half, 0, 2 * Math.PI);
                ctx.clip();
                let params = JSON.stringify({
                    scene: args.query,
                    width: 400
                })
                wx.downloadFile({
                    url: `${this.qrcodeurl}&appid=${args.appid}&param=${params}`,
                    complete: (res) => {
                        wx.hideLoading();
                        let qrcode = wx.createImage();
                        qrcode.src = res.tempFilePath;
                        qrcode.onload = () => {
                            ctx.drawImage(qrcode, center.x - half, center.y - half, spaceWidth, spaceWidth)
                            let image = canvas.toDataURL('image/jpeg', .7);
                            wx.previewImage({
                                urls: [image],
                                success: () => {
                                    wx.setStorageSync(key, image);
                                }
                            })
                        }
                    }
                })
            }
        }

        checkFocus(callback) {
            if (this.config.isCps || !this.config.showFocus) {
                return callback()
            } else {
                if (wx.navigateToMiniProgram) {
                    callback({
                        error: 0
                    })
                }
            }
        }

        focusBox(args = {}) {
            let scene = `focus:${this.gameid}`;
            if (args.type) {
                scene += `,type:${args.type}`
            }
            wx.navigateToMiniProgram({
                appId: this.appid,
                path: 'pages/index/index',
                extraData: {
                    scene: scene //关注参数
                }
            })
        }

        setShareStat(params = {}) {
            let args = {
                item: 'wxa_share_stat'
            }
            if (params.key) {
                args.subitem = [{
                    ad: params.key
                }, {
                    stat: `gameid_${this.gameid}`
                }, {
                    stat: `shareid_${params.shareId}`
                }]
                _stat.call(this, args)
            }
        }

        getShareInfo(params = {}, callback) {
            // params = {type: type, id: id}  optional
            params.gameid = this.gameid;
            wx.request({
                url: `${this.baseurl}share/api?cmd=getRandShare`,
                data: params,
                complete: (res) => {
                    if (res && res.data) {
                        res = res.data.share;
                        this.shareInfo = res;
                        return callback && callback({
                            desc: res.content,
                            imgurl: _replace.call(this, res.imgurl),
                            id: res.id
                        })
                    }
                    callback && callback();
                }
            })
        }

        clearAutoEvent() {
            clearTimeout(this.changeAlone)
            clearTimeout(this.changeGuess)
        }

        checkAdModeStatus(callback) {
            let status = {
                hasGameWall: false,
                hasRecommend: false
            };
            this.getGameWallList((res) => {
                if (res) {
                    status.hasGameWall = true
                }
                this.getRandAd({
                    type: 1
                }, (res) => {
                    if (res) {
                        status.hasRecommend = true
                    }
                    callback && callback(status)
                })
            })
        }

        checkWallTip(callback) {
            try {
                let walltime = wx.getStorageSync('walltime');
                if (walltime) {
                    walltime = walltime.split('_');
                    wx.removeStorageSync('walltime');
                    if (Date.parse(new Date()) / 1000 - parseInt(walltime[0]) < 60) {
                        wx.showModal({
                            title: '提醒',
                            content: `您在[${walltime[1]}]中体验未满1分钟，继续即可领取奖励！`,
                            showCancel: false,
                            confirmText: '知道了'
                        })
                        _setGameWallStatus.call(this);
                    } else {
                        return callback && callback({
                            isReady: true
                        })
                    }
                }
                callback && callback({
                    isReady: false
                })
            } catch (e) {}
        }

        navigateToMiniProgram(params = {}, callback) {
            let appid = params.appid;
            let type = params.type;
            if (appid) {
                if (typeof type == 'number') {
                    let adInfo;
                    let _args = {
                        ad: true,
                        click: true
                    }
                    switch (type) {
                        case 1:
                            adInfo = this.recommend
                            _args.type = type;
                            break;
                        case 2:
                            adInfo = this.guess;
                            _args.type = type;
                            break;
                        case 3:
                            adInfo = this.gameWall;
                            _args.type = type
                            break;
                        default:
                            adInfo = this.alone;
                    }
                    for (let i = 0; i < adInfo.length; i++) {
                        if (appid == adInfo[i].appid) {
                            adInfo = adInfo[i];
                            break;
                        }
                    }

                    if (type != 3) {
                        _args.data = adInfo;
                    }
                    let channel = adInfo.outChannel,
                        path = '/?',
                        chid = adInfo.chid,
                        subchid = adInfo.subchid;
                    if (chid == 1967) {
                        subchid += `__`
                    }
                    subchid += this.device
                    let query = {
                        chid: chid,
                        subchid: subchid
                    };
                    if (channel) {
                        let extra = channel.split('|');
                        for (let i = 0; i < extra.length; i++) {
                            let _extra = extra[i].split('=');
                            query[_extra[0]] = _extra[1]
                        }
                    }
                    for (let i in query) {
                        if (query[i]) {
                            path += `${i}=${query[i]}&`
                        }
                    }
                    console.log('path', path)
                    _args.subitem = [{
                        ad: 'click'
                    }]
                    _stat.call(this, _args)
                    if ([0, 1].indexOf(adInfo.directMode) != -1 && wx.navigateToMiniProgram) {
                        let extra = {};
                        if (adInfo.directMode == 0) {
                            path = 'pages/index/index';
                            appid = this.appid;
                            extra = {
                                scene: `s:${adInfo.id}`
                            }
                        }
                        wx.navigateToMiniProgram({
                            appId: appid,
                            path: path,
                            extraData: extra,
                            complete: (e) => {
                                let ad = 'click_cancel';
                                if (e.errMsg == 'navigateToMiniProgram:ok') {
                                    ad = 'click_ok';
                                    if (type == 3) {
                                        _setGameWallStatus.call(this, adInfo)
                                    }
                                }
                                _args.subitem = [{
                                    ad: ad
                                }]
                                _stat.call(this, _args)
                                if (!type) {
                                    _refreshAd.call(this, 1, (data) => {
                                        callback && callback(data)
                                    })
                                }
                            }
                        })
                    } else {
                        _previewImage.call(this, adInfo.imgurl, adInfo, type);
                        if (!type) {
                            _refreshAd.call(this, 1, (data) => {
                                callback && callback(data)
                            })
                        }
                    }
                } else {
                    wx.showModal({
                        title: '参数错误',
                        content: '缺少type参数',
                        showCancel: false
                    })
                }
            }
        }

        getGameWallAward(gameid, callback) {
            if (!gameid) {
                return wx.showModal({
                    title: '错误提示',
                    content: '领取奖励gameid不能为空'
                })
            }
            wx.request({
                url: `${this.pointurl}getAward`,
                data: {
                    token: this.token,
                    channel: this.gameid,
                    gameid: gameid,
                    v: Date.now()
                },
                complete: (res) => {
                    if (res && res.data) {
                        callback && callback(res.data);
                    }
                }
            })
        }

        getGameWallList(callback) {
            if (this.token) {
                wx.request({
                    url: `${this.pointurl}getWallGameList`,
                    data: {
                        token: this.token,
                        channel: this.gameid,
                        device: this.device == 'iOS' ? 'IOS' : this.device,
                        v: Date.now()
                    },
                    complete: (res) => {
                        if (res && res.data) {
                            res = res.data;
                            if (!res) {
                                return callback && callback();
                            }
                            if (res.error) {
                                wx.showModal({
                                    title: '错误提示',
                                    content: res.error,
                                    showCancel: false
                                })
                            } else {
                                let game = res.gamelist;
                                let info = res.WallInfo;
                                let arr = [],
                                    _arr = [];
                                game.sort((a, b) => {
                                    return a.sort < b.sort
                                })

                                for (let i = 0; i < game.length; i++) {
                                    let _args = {
                                        appid: game[i].appid,
                                        imgurl: _replace.call(this, game[i].poster),
                                        gameid: game[i].gameid,
                                        chid: game[i].chid,
                                        subchid: game[i].subchid,
                                        title: game[i].gname,
                                        directMode: game[i].isdirect == 1 ? 1 : 3,
                                        type: 3,
                                        isReady: 0
                                    };
                                    let icon = _replace.call(this, game[i].icon);
                                    icon = icon.split('|');
                                    let _info = info[game[i]['gameid']],
                                        _obj = {
                                            title: game[i].gname,
                                            appid: game[i].appid,
                                            gameid: game[i].gameid,
                                            slogan: game[i].slogan,
                                            icon: icon,
                                            type: 3,
                                            cate: game[i].cate,
                                            quantity: game[i].quantity,
                                            access: 0,
                                            hasgot: 0,
                                            isReady: 0
                                        };
                                    if (_info) {
                                        _obj.access = _info.access;
                                        _obj.hasgot = _info.hasgot;
                                        if (Date.parse(new Date()) / 1000 - _info.time > 60) {
                                            _obj.isReady = 1;
                                            _args.isReady = 1;
                                        }
                                    }
                                    _arr.push({
                                        type: icon.length > 1 ? 2 : 1,
                                        data: _obj
                                    })
                                    arr.push(_args);
                                }
                                this.gameWall = arr;
                                if (_arr.length) {
                                    callback && callback(_arr);
                                    _stat.call(this, {
                                        ad: true,
                                        type: 3,
                                        subitem: [{
                                            ad: 'show'
                                        }]
                                    })
                                } else {
                                    callback && callback();
                                }
                            }
                        }
                    }
                })
            } else {
                wx.showModal({
                    title: '错误提示',
                    content: '请在sdk初始化时传入token',
                    showCancel: false
                })
            }
        }

        getRandAd(params = {}, callback) {
            _getConfig.call(this, () => {
                let cfg = this.config;
                if (!callback || cfg.isCps || !cfg.showAd) {
                    return callback && callback()
                }
                let cmd = 'getRandAd',
                    _url = '';
                if (params.type) {
                    cmd = 'getFloatAd';
                    _url = `&adtype=${params.type}`;
                }
                let url = `${this.baseurl}api?cmd=${cmd}${_url}`;
                let args = {
                    gameid: this.gameid,
                    device: this.device == 'iOS' ? 1 : 0,
                    v: Date.now()
                };
                if (this.alone && !params.type) {
                    args.lastAdId = this.alone[0].id
                }
                wx.request({
                    url: url,
                    data: args,
                    complete: (res) => {
                        if (res && res.data) {
                            res = res.data;
                            if (((res.ad instanceof Array) && !res.ad.length) || !res.ad) {
                                return callback && callback();
                            }
                            res = res.ad;
                            let _args = {
                                ad: true,
                                data: null,
                                subitem: [{
                                    ad: 'show'
                                }]
                            }
                            switch (params.type) {
                                case 1:
                                    _sortData.call(this, res, 'weight', 'aweight');
                                    this.recommend = res;
                                    _args.type = 1;
                                    break;
                                case 2:
                                    _args.type = 2;
                                    _sortData.call(this, res, 'guess_iweight', 'guess_aweight');
                                    this.guess = res;
                                    break;
                                default:
                                    res = [res];
                                    this.alone = res;
                                    _args.data = this.alone[0];
                            }
                            _stat.call(this, _args)
                            if (params.type != 1) {
                                _refreshAd.call(this, params.type, (data) => {
                                    callback(data)
                                })
                            }
                            let data = [];
                            for (let i = 0; i < res.length; i++) {
                                data.push(_adHandle.call(this, res[i], params.type))
                            }
                            return callback(data)
                        }
                    }
                })
            })
        }
    }
    module.exports = Sdk;
}())