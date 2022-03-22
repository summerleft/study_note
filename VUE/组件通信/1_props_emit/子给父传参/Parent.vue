<template>
    <div id="app">
        <app-header @titleChanged="updateTitle"></app-header>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
import Header from "./Child";
export default {
    name: 'App',
    components: {
        "app-header": Header
    },
    data() {
        return {
            title: '传递的是一个值'
        }
    },
    methods: {
        updateTitle(e) {
            this.title = e;
        }
    }
}
</script>