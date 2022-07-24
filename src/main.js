import { createApp } from "vue";
import { Vue3Mq } from "vue3-mq";
import App from "./App.vue";

import "./assets/base.css";

const app = createApp(App);
app.use(Vue3Mq, {
  breakpoints: {
    mobile: 0,
    desktop: 1440,
  },
});
app.mount("#app");
