<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> ｜ 
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  routerLink {
    display: block;
  }
</style>
