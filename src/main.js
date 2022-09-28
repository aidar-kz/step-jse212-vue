import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import globalDirectives from "./directives";
import router from "@/routes/router.js";
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App);

app.use(globalDirectives);
app.use(router);

app.use(createPinia());
// app.config.globalProperties.shopStore = useShopStore();

app.mount("#app");
