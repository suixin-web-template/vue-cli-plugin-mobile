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
  watch: {
    $loading(val) {
      this.$store.commit("toggleMask", val);
    }
  },
  computed: {
    ...mapState({
      platCode: state => state.route.query.platCode,
      $isLoading: state => state.app.isLoading,
      $showMask: state => state.app.showMask,
      $height: state => state.app.height,
      $width: state => state.app.width,
      $userInfo: state => state.app.userInfo
    }),
    ...mapGetters(["$scale"])
  }
};
