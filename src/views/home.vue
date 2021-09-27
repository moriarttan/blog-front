<template>
  <div class="main">
    {{ name }}
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "home",
  setup() {
    const name = ref('首页')
    return {
      name
    }
  }
}
</script>

<style scoped>

</style>
