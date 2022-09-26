import { createApp } from "vue";
import App from "./App.vue";
import globalDirectives from './directives'

const app = createApp(App)

app.use(globalDirectives);

app.mount("#app");
