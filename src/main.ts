import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "vant/es/toast/style";

import "amfe-flexible";

import "@vant/touch-emulator";

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
