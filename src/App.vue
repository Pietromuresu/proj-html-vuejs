
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';
export default {
  name: 'App',

  components: {
    Header,
    Main,
    Footer
  },

  data() {
    return {
      test: 'testalo'
    }
  }
}
</script>

<template>
  <Header />
  <Main />
  <Footer />
</template>

<style lang="scss">
@import '../node_modules/bootstrap'

</style>