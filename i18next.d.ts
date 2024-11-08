import "i18next";
import pt from "./src/languages/pt.json";
import en from "./src/languages/en.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "pt";
    resources: {
      pt: typeof pt;
      en: typeof en;
    };
  }
}
