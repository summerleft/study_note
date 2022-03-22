<template>
    <div>
        <h2>浪里行舟</h2>
        <child-com1
            :foo="foo"
            :boo="boo"
            :coo="coo"
            :doo="doo"
            title="test"
        ></child-com1>
    </div>
</template>

<script>
const childCom1 = () => import("./childCom1.vue");
export default {
    components: { childCom1 },
    data() {
        return {
            foo: "Javascript",
            boo: "Html",
            coo: "CSS",
            doo: "Vue"
        };
    }
}
</script>