// locales import
import { locales } from "../i18n";
import { defaultLocale } from "../i18n";

// composables
import { createI18n } from "vue-i18n";

const messages = Object.assign(locales)
export default createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en', 
    messages,
})