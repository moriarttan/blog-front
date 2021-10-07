<template>
  <header class="header">
    <header class="header-container">
      <nav class="nav">
        <div class="title">飞仙 blog</div>
        <ul class="menu">
          <li
              v-for="item in nav"
              :key="item.name"
              class="menu-item"
              :class="{ 'hasChild': item.children && item.children.length > 0 }"
          >
            <router-link :to="item.url">{{ item.name }}</router-link>
            <ul class="sub-menu">
              <li v-for="child in item.children" :key="child.name" class="menu-item">
                <router-link :to="child.url">{{ child.name }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="tools">
        <div class="tools-container">
          <!-- 跳转到后台登陆 -->
          <div class="tools-item">
            <el-icon :size="20">
              <avatar />
            </el-icon>
          </div>
          <!-- 搜索 -->
          <div class="tools-item">
            <el-icon :size="20">
              <search />
            </el-icon>
          </div>
          <!-- 切换主题 -->
          <div class="tools-item">
            <el-icon :size="20" @click="setTheme">
              <sunny v-if="theme" />
              <Sunrise v-else />
            </el-icon>
          </div>
        </div>
      </div>
    </header>
  </header>
</template>

<script>
import { ref } from "vue";
import { Avatar, Search, Sunny, Sunrise, CaretBottom } from '@element-plus/icons'

export default {
  name: "LayoutHeader",
  components: { Avatar, Search, Sunny, Sunrise, CaretBottom },
  setup() {
    const nav = ref([
      {
        name: '专栏',
        url: '/',
        children: [
          { name: '日记', url: '/'},
          { name: '阅读', url: '/'},
          { name: '想法', url: '/'},
          { name: '笔记', url: '/'},
        ]
      },
      { name: '归档', url: '/'},
      { name: '关于我', url: '/'},
      { name: '留言版', url: '/'},
    ])
    const theme = ref(true)

    // 设置主题
    const setTheme = () => {
      theme.value = !theme.value
    }
    return {
      nav,
      theme,
      setTheme
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/fonts.scss";

.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  color: #fff;
  background: linear-gradient(rgba(0,0,0, 0.8), rgba(0, 0, 0, 0));
  transition: background 1s;

  .header-container {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    ::v-deep .el-icon {
      //font-size: 30px;
      //color: #333333;
    }
  }
  //border-bottom: 1px solid #ccc;
}
.nav {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .title {
    font-family: 'webfont';
    font-size: 28px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .menu {
    display: flex;
    align-items: center;
    margin-left: 30px;
    .menu-item {
      padding: 0 10px;
      position: relative;
      & a{
        padding: 10px 0;
        min-width: 60px;
        text-align: center;
        display: inline-block;
        position: relative;
      }
      &.hasChild::after {
        content: "";
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-25%);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px;
        border-color: #fff;
        border-bottom-color: transparent;
        border-left-color: transparent;
        border-right-color: transparent;
      }
    }
    .sub-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
    }
    .menu-item:hover .sub-menu {
      display: block;
    }

    .menu-hidden {
      display: none;
    }
  }
}
.tools {
  display: flex;
  align-items: center;
  .tools-container {
    display: flex;
    .tools-item {
      margin: 0 10px;
    }
  }
}
/* 电脑端 */
/* 移动端 */
</style>
