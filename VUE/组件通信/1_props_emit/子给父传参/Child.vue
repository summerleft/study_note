<template>
    <header>
        <h1 @click="changeTitle">{{title}}</h1>
    </header>
</template>

<script>
export default {
    name: 'child',
    data() {
        return {
            title: "Vue.js demo"
        }
    },
    methods: {
        changeTitle() {
            this.$emit("titleChanged", "子组件向父组件传值");
        }
    }
}
</script>