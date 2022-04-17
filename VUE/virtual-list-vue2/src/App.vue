<template>
  <!-- <VirtualList :listData="data" :itemSize="100" /> -->
  <TestArray />
</template>

<script>
// import VirtualList from './components/VirtualList.vue'
import TestArray from './components/test.vue'

const d = [];
for (let i = 0; i < 1000; i++) {
  d.push({ id: 1, value: i });
}

export default {
  name: 'App',
  components: {
    // VirtualList
    TestArray
  },
  data() {
    return {
      data: d
    };
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
}
</style>
