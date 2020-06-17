import { mapState, mapGetters } from "vuex";

export default {
  filters: {
    formatStr(text, frontLen = 3, endLen = 4) {
      const end = text.length - endLen;
      const len = end - frontLen;
      let asterisk = "";
      for (let i = 0; i < len; i++) {
        asterisk += "*";
      }
      return text.substring(0, frontLen) + asterisk + text.substring(end);
    }
  },
  computed: {
    ...mapState({
      $isLoading: state => state.app.isLoading,
      $height: state => state.app.height,
      $width: state => state.app.width
    }),
    ...mapGetters(["$scale"])
  }
};
