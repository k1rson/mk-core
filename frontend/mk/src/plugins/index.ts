// plugins
import vuetify from "./vuetify";
import pinia from '../stores'
import router from "../router";

// types
import type { App } from "vue";

export function registerPlugins(app: App) {
    app
        .use(vuetify)
        .use(pinia)
        .use(router)
}