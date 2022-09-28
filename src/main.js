import { createApp } from "vue";
import App from "./App.vue";
import globalDirectives from "./directives";
import router from "@/routes/router.js";
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App);

app.use(globalDirectives);
app.use(router);
app.mount("#app");
