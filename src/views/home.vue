<template>
  <div class="main">
    <div
        class="banner"
        style="background-image: url(/src/assets/image/banner.jpg)"
    >
      <div class="title-container">
        <span v-for="(item, index) in title" :class="{ 'show': item.show }">{{ item.text }}</span>
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
    const title = ref([])

    onMounted(() => {
      nextTick(() => {
        const str = '上善若水'
        str.split('').forEach(el => {
          title.value.push({
            text: el,
            show: false
          })
        })
        let index = 0
        const intent = setInterval(() => {
          if (index <= title.value.length) {
           title.value[index].show = true
            index++
          } else {
            clearInterval(index)
          }
        },300)
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
      justify-content: center;
      align-items: center;

      span {
        opacity: 0;
        transition: all 0.3s;
      }
      span.show {
        opacity: 1;
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
