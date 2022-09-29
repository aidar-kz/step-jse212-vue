import router from "@/routes/router.js";
import "bootstrap/dist/js/bootstrap.js";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import globalDirectives from "./directives/directivesIndex.js";

createApp(App)
  .use(globalDirectives)
  .use(router)
  .use(createPinia())
  .mount("#app");
