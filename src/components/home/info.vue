<template>
  <div class="info">
    <div class="info-ground">
      <img src="/src/assets/image/info-ground.jpg" />
    </div>
    <div class="info-container">
      <div class="avatar">
        <el-avatar src="/src/assets/image/avatar.jpg" :size="150" />
      </div>
      <div class="desc">知行合一</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "info"
}
</script>

<style scoped lang="scss">
.info {
  width: 100%;
  background: $color-ground;
  color: $color-base;
  text-align: center;

  .info-ground {
    width: 100%;
    height: 200px;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info-container {
    position: relative;
    padding: 75px 0;
    .avatar{
      position: absolute;
      top: -75px;
      left: 0;
      right: 0;
    }
    .desc {
      font-size: 20px;
      margin-top: 20px;
    }
  }
}
</style>
