<template>
    <div id="border">
        <p>boo: {{ boo }}</p>
        <p>childCom2: {{ $attrs }} </p>
        <child-com3 v-bind="attrs"></child-com3>
    </div>
</template>

<script>
const childCom3 = () => import("./childCom3.vue");
export default {
    components: {
        childCom3
    },
    inheritAttrs: false,
    props: {
        boo: String
    },
    created() {
        console.log(this.$attrs); // { "coo": "CSS", "doo": "Vue", "title": "test" }
    }
}
</script>