import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Vue3TouchEvents from "vue3-touch-events";
import router from "./router";
const app = createApp(App);

app.use(Vue3TouchEvents);
app.use(router);
app.mount("#app");
