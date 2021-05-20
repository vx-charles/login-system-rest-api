<template>
  <div id="app" v-bind:class="{appFlexColumn: showNavbar}">
    <Menu v-if="showNavbar" />
    <main class="main-container">
      <router-view />
      <Footer />
    </main>
  </div>
</template>

<script>
import Menu from './components/layout/Menu'
import Footer from './components/layout/Footer'

export default {
  components: {
    Menu,
    Footer
  },
  computed: {
    showNavbar () {
      return this.$route.name !== 'login'
    }
  }
}
</script>
