<template class="border">
    <div>
        <p>foo: {{ foo }}</p> // Javascript
        <p>childCom1的$attrs: {{ $attrs }}</p> // { "boo": "Html", "coo": "CSS", "doo": "Vue", "title": "test" }
        <child-com2 v-bind="attrs"></child-com2>
    </div>
</template>

<script>
const childCom2 = () => import("./childCom2.vue");
export default {   
    components: {
        childCom2
    },
    inheretAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
    props: {
        foo: String, // foo作为props属性绑定
    },
    created() {
        console.log(this.$attrs); // { "boo": "Html", "coo": "CSS", "doo": "Vue", "title": "test" }
    }
}
</script>