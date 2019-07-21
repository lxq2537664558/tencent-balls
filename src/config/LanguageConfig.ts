interface LanguageInfo {
    key: string;
    value: string;
}

class LanguageConfig {
   private rawJson_: any;
   private languageMap_: {[key:string]: LanguageInfo};
   private keys_: Array<string>;

   constructor() {
       this.rawJson_ = RES.getRes("res_language_json");
       this.languageMap_ = {};
       this.keys_ = Object.keys(this.rawJson_);
   }

   public getLanguageInfo(key: string): LanguageInfo {
       if (!this.languageMap_[key]) {
           const rawConfig: any = this.rawJson_[key];

           if (!rawConfig) {
               return null;
           }

           if (this.keys_.indexOf(key) === -1) {
               return null;
           }

           const config: LanguageInfo = {
               key: key,
               value: rawConfig[key] || "",
           }

           this.languageMap_[key] = config;
       }

       return this.languageMap_[key];
   }

   public getStr(key: string): string {
       const info: LanguageInfo = this.getLanguageInfo(key);

       if (!info) {
           return "";
       }

       return info.value;
   }
}