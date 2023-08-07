<template>
  <NavBar />
  <div class="flex flex-col justify-center items-center w-screen height">
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from '../components/NavBar.vue'



export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>

<style>
.height{
  height: 70vh;
}
</style>
