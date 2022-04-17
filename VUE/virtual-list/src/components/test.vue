<template>
  <div>{{ array }}</div>
  <button @click="arrayAdd"></button>
</template>

<script>
export default {
    name: 'TestArray',
    data() {
        return {
            array: [1,2,3,4]
        }
    },
    methods: {
        arrayAdd() {
            this.array[3] = 999;
        }
    }
}
</script>

<style>

</style>