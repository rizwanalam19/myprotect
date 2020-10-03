<template>
  <div>
    <mdb-navbar color="indigo" dark>
      <mdb-navbar-brand href="#">
        Navbar
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav class="mx-auto">
          <mdb-nav-item href="#" class="">Home</mdb-nav-item>
          <mdb-nav-item href="#">Product</mdb-nav-item>
          <mdb-nav-item href="#">About </mdb-nav-item>
          <mdb-nav-item  href="#">Contact</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
</div>
</template>

<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
  export default {
    name: 'NavbarPage',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem
    }
  }
</script>
<style scoped>

</style>
