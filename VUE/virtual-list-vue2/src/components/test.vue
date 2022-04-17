<template>
  <div>{{ array }}
<button @click="arrayAdd">test</button>
  </div>
  
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