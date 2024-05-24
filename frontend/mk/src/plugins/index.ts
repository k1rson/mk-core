// plugins
import vuetify from "./vuetify";
import pinia from '../stores'
import router from "../router";
import i18n from "./i18n";

// types
import type { App } from "vue";

export function registerPlugins(app: App) {
    app
        .use(vuetify)
        .use(pinia)
        .use(router)
        .use(i18n)
}