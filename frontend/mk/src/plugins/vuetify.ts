// vuetify styles
import 'vuetify/styles';

// components
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// composables
import { createVuetify } from 'vuetify';

export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
    },
})