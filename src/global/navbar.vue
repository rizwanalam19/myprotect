
<template>
  <mdb-navbar color="secondary" position="top" dark>
    <mdb-navbar-brand href="#">
        <router-link to="/">
      Navbar
      </router-link>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <router-link to="/">
        <mdb-nav-item href="#" active>Home</mdb-nav-item>
          </router-link>
          <router-link to="/list">
        <mdb-nav-item href="#">Product</mdb-nav-item>
          </router-link>
         <router-link to="/contact">
        <mdb-nav-item href="#">Contact </mdb-nav-item>
        </router-link>
      </mdb-navbar-nav>
      <form>
        <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
      </form>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>
<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput } from 'mdbvue';
  export default {
    name: 'NavbarPage',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbInput
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
