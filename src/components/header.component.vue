<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <!-- <b-navbar-brand href="/">MOCHA LIB</b-navbar-brand> -->
      <router-link to="/"
        ><b-navbar-brand>MOCHA LIB</b-navbar-brand></router-link
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav right>
        <b-navbar-nav>
          <b-nav-item href="/signin">Sign In</b-nav-item>
          <b-nav-item href="/search">Search</b-nav-item>
          <b-nav-item href="/contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
