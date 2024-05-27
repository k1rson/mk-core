// vuetify styles
import 'vuetify/styles';

// components
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// iconsets
import '@mdi/font/css/materialdesignicons.css';

// composables
import { createVuetify } from 'vuetify';

export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
    },
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
})