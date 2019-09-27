<template>
  <div class="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <div
      class="mask_transparent"
      v-show="$showMask"
      style="z-index: 99999"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: "slide-left",
      $showMask: false // 透明层显示 可配合vuex使用
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").filter(item => item !== "").length;
      const fromDepth = from.path.split("/").filter(item => item !== "").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>
