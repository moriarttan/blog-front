<template>
  <div class="bg-yellow">
    {{ path }}
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const path = ref(import.meta.env.VITE_APP_TITLE)
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
