import { createI18n } from "vue-i18n";
import arObj from "@/locales/ar";
import enObj from "@/locales/en";

export default defineNuxtPlugin(({ vueApp }) => {
  const config = useRuntimeConfig();

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: config.public["LOCALE"],
    fallbackLocale: config.public["FALLBACK_LOCALE"],
    messages: { ar: arObj, en: enObj },
  });

  vueApp.use(i18n);

  return {
    provide: {
      i18n,
    },
  };
});
