<template>
  <div class="main">
    <div
        class="banner"
        style="background-image: url(/src/assets/image/banner.jpg)"
    >
      <div class="title-container">
        <div class="title">{{ title }}</div>
      </div>
    </div>
    <div class="warp">
      <div class="article"></div>
      <div class="sidebar">
        <!-- 用户信息 -->
        <home-info class="sidebar-info" />
        <!-- 标签 -->
        <home-Label class="sidebar-label" />
        <!-- 专栏 -->
        <home-category class="sidebar-category" />
      </div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, nextTick } from "vue";
import HomeInfo from '/src/components/home/info.vue'
import HomeLabel from '/src/components/home/label.vue'
import HomeCategory from '/src/components/home/category.vue'
export default {
  name: "home",
  components: {
    HomeInfo,
    HomeLabel,
    HomeCategory
  },
  setup() {
    const name = ref('首页')
    const title = ref('')

    onMounted(() => {
      const str = '上善若水。水利万物而不争，处众人之所恶，故几于道。居善地，心善渊，与善人，言善信，政善治，事善能，动善时。夫唯不争，故无尤。'
      nextTick(() => {
        const a = setInterval(() => {
          if (title.value.length < str.length) {
            title.value = str.slice(0, title.value.length + 1)
          } else {
            clearInterval(a)
          }
        }, 300)
      })
    })
    return {
      name,
      title
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;

  .banner {
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    .title-container{
      padding: 60px;
      height: 100%;
      box-sizing: border-box;
      font-size: 36px;
      line-height: 1.5em;
      color: #ffffff;
      display: flex;
      justify-content: flex-end;

      .title{
        text-align: left;
        writing-mode: vertical-rl;
        transition: all 0.3s;
      }
    }
  }

  .warp{
    max-width: 1200px;
    width: 100%;
    height: 1000px;
    margin: 0 auto;
    display: flex;
    .article {
      width: 100%;
      margin: 20px 20px 20px 0;
      flex: 1;
      background: $color-ground;
    }
    .sidebar {
      width: 330px;

      &-info, &-label, &-category {
        margin-top: 20px;
      }
    }
  }
}
</style>
