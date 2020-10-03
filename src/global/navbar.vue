<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar indigo">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto pr-5">
      <li class="nav-item ">
        <router-link to="/home">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/list">
        <a class="nav-link" href="#">Product</a>
      </router-link>
      </li>
      <li class="nav-item">
          <router-link to="/blog">
        <a class="nav-link" href="#">Blog</a>
          </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact">
        <a class="nav-link" href="#">Contact</a>
        </router-link>
      </li>
    </ul>

  </div>
</nav>

</div>

</template>

<script>
  // import {  mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
  export default {
    name: 'NavbarPage',
    components: {

      // mdbNavbarBrand,
      // mdbNavbarToggler,
      // mdbNavbarNav,
      // mdbNavItem
    }
  }
</script>
<style scoped>
.navbar{
  background-color: #59c6de !important;
  margin-bottom:50px;
}
.navbar-item .nav-link{
  font-weight: bold!important;
  color: white!important;
 }
</style>
