
<script>
import { Store } from './assets/data/Store';
import products from './assets/data/products';
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
      test: 'testalo',
      Store,
      products
    }
  },
  methods:{
    getCategArr(category){

      Store[category] = products.filter(product => {
        if(product.category === category){
          return true
        }
      })
    }
  },

  created(){
    this.getCategArr('bed');
    this.getCategArr('toys');
    this.getCategArr('transport');
    this.getCategArr('food');
    console.log(Store.bed);
    console.log(Store.food)
    console.log(Store.toys);
    console.log(Store.transport);

  }
}
</script>

<template>
  <Header />
  <Main />
  <Footer />
</template>

<style lang="scss">
@import '../node_modules/bootstrap';
body { font-family: "Playfair Display", serif; }
</style>