import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.css";
import Flutterwave from "vue-flutterwave";

const app = createApp(App).use(store);

app.use(Flutterwave, {
  publicKey: "FLWPUBK_TEST-f11ee2feb182ec58e39951f02febd11c-X",
  currency: "NGN",
});
app.use(router);

app.mount("#app");
