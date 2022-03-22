<template>
    <div class="hello">
        <ul>
            <li v-for="user in users">{{user}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        users: {
            type: Array,
            required: true
        }
    }    
}
</script>