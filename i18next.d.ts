import "i18next";
import pt from "./src/translations/pt.json";
import en from "./src/translations/en.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "pt";
    resources: {
      pt: typeof pt;
      en: typeof en;
    };
  }
}
