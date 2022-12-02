import { createStore } from "vuex";
import shop from "@/store/shop";

const store = createStore({
  modules: { shop },
});

export default store;
