import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/popper.js/dist/popper.js";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import router from "./router";
import store from "./store";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import registerGlobalComponent from "./utils/defineGlobalComponents";

import AppModal from "./components/AppModal.vue";
const app = createApp(App);
app.use(router);
app.use(store);
registerGlobalComponent(app);
app.use(VueLoading);
app.use(Toast, {
  // Setting the global default position
  position: POSITION.TOP_LEFT,
});
app.component("app-modal", AppModal);
app.mount("#app");
