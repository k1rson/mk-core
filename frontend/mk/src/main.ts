// style imports
import './assets/style.css';

// plugins
import { registerPlugins } from './plugins';

// components
import App from '../src/App.vue';

// composables
import { createApp } from 'vue';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');