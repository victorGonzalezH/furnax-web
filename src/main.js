import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
// Globally register your component

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
