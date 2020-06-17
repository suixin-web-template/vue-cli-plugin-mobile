import store from "@/store";
import debounce from "lodash/debounce";
window.addEventListener(
  "resize",
  debounce(() => {
    store.commit("updateClientHeight");
    store.commit("updateClientWidth");
  }, 100)
);
