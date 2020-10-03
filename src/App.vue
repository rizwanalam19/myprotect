<template>
  <div id="app">
     <Navbar/>
      <router-view/>
      <Footer />
  </div>
</template>

<script>
import Navbar from '@/global/navbar.vue';
import Footer from '@/global/footer.vue';
export default {
  name: 'App',
  components: {
    Footer,
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  text-align: center;

}
</style>
