<template>
  <div class="exception">
    <div class="imgBlock">
      <div class="imgEle"></div>
    </div>
    <div class="content">
      <h1>404</h1>
      <div class="desc">抱歉，你访问的页面不存在</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.exception {
  padding-top: 50px;
  .imgBlock {
  }
  .imgEle {
    margin: 0 auto;
    height: 341/2px;
    width: 423/2px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    background-image: url("../assets/404.svg");
  }
  .content {
    padding-top: 20px;
    text-align: center;
    h1 {
      color: #434e59;
      font-size: 40px;
      font-weight: 600;
    }
    .desc {
      color: #999;
      font-size: 16px;
    }
  }
}
</style>
