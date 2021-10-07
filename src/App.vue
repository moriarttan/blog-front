<template>
  <div class="container">
    <layout-header />
    <router-view />
    <layout-footer />
  </div>
</template>

<script>
import LayoutHeader from '@/layout/header.vue'
import LayoutFooter from '@/layout/footer.vue'
import {ref, onMounted} from "vue"

export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutFooter
  },
  setup() {
    const path = ref(import.meta.env.VITE_APP_TITLE)

    onMounted(() => {
      // 渐变log
      console.log("%c欢迎来到飞仙的博客",
          "color:#fff; background: linear-gradient(270deg, #FF7AF5, #513162); padding: 8px 15px; border-radius: 8px;")
    })

    return {
      path
    }
  }
}

</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-base;
}
</style>
