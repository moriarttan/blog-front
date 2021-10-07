<template>
  <div class="label">
    <div class="label-title">标签</div>
    <div class="label-container">
      <span v-for="item in 10">前端工程师</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "label"
}
</script>

<style scoped lang="scss">
.label {
  background: $color-ground;
  color: $color-base;

  &-title{
    padding: 15px;
    font-size: 26px;
    border-bottom: 1px solid #fff;
  }
  &-container {
    padding: 15px;
  }
}
</style>
