class Battle {
    public static readonly InitViewScale: number = .83;

    public static getCharTexture(id: number, isShowHigh?: boolean): egret.Texture {
        if (isShowHigh === null || isShowHigh === void 0) {
            isShowHigh = false;
        }

        const config: ItemResInfo = ConfigManager.getInstance().itemResInfo.getItemResConfig(id);

        if (!config) {
            return null;
        }

        let path;

        if (isShowHigh) {
            path = config.highRes.slice(config.highRes.indexOf("/") + 1);
        }
        else {
            path = config.lowRes.slice(config.lowRes.indexOf("/") + 1);
        }

        const texture: egret.Texture = RES.getRes(path + "_png");

        return texture;
    }

    public static getCharResUrl(id: number, isShowHigh?: boolean): string {
        if (isShowHigh === null || isShowHigh === void 0) {
            isShowHigh = false;
        }

        const config: ItemResInfo = ConfigManager.getInstance().itemResInfo.getItemResConfig(id);

        if (!config) {
            return "";
        }

        let path;

        if (isShowHigh) {
            path = config.highRes
        }
        else {
            path = config.lowRes;
        }

        return URLConstant.ResBaseUrl + URLConstant.AsyncAssetsUrl + "battle/256" + path + ".png";
    }

    public static getItemResPath(id: number): string {
        const config: ItemAttrInfo = ConfigManager.getInstance().itemAttrInfo.getItemAttrInfo(id);

        if (!config) {
            return "";
        }

        const url: string = URLConstant.AsyncAssetsUrl + "battle/" + config.resource + ".png";

        return ResourceUtil.getResUrl(url);
    }

    public static getBeadTexture(id: number): egret.Texture {
        const config: ItemAttrInfo = ConfigManager.getInstance().itemAttrInfo.getItemAttrInfo(id);

        if (!config) {
            return null;
        }

        let path: string = config.resource.slice(config.resource.indexOf("/") + 1);
        const texture: egret.Texture = RES.getRes("battle_bead_json." + path + "_png");

        return texture;
    }

    public static getEffectResPath(path: string): string {
        const url = URLConstant.AsyncAssetsUrl + "battle/effect/" + path + ".png";

        return ResourceUtil.getResUrl(url);
    }
}