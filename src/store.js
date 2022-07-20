import { createStore } from "vuex";
//import createPersistedState from "vuex-persistedstate";
import blogs from "./modules/blog";
import createCache from "vuex-cache";

// Create store
export default createStore({
  modules: {
    blogs,
  },
  plugins: [createCache()],
  //plugins: [createPersistedState()],
});
