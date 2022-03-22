<template>
    <div id="app">
        <users v-bind:users="users"></users>
    </div>
</template>

<script>
import Users from './Users'
export default {
    name: 'App',
    components: {
        "users": Users
    },
    data() {
        return {
            users: ["Henry", "Buckey", "Emily"]
        }
    },

}
</script>