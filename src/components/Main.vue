
<script>
import Jumbotron from './sections/Jumbotron.vue';
import Categories from './sections/browse-by-category.vue';
import newArrivals from './sections/new-arrivals.vue';
import bestSellers from './sections/best-sellers.vue';
import Reviews from './sections/testimonials.vue';
import Newsletter from './sections/Newsletter.vue';
import ctaBlog from './sections/ctaBlog.vue';
import ctaCatalog from './sections/ctaCatalog.vue';
import newArrival from './sections/newArrival.vue';
export default {
  name: 'Main',
  components:{
    Jumbotron,
    Categories,
    newArrivals,
    bestSellers,
    Reviews,
    Newsletter,
    ctaBlog,
    ctaCatalog,
    newArrival
  },  
  data(){
    return {

    }
  }
}
</script>

<template>
  <Jumbotron/>
  <Categories/>
  <newArrivals/>
  <bestSellers/>
  <Reviews/>
  <Newsletter/>
  <ctaBlog/>
  <ctaCatalog/>
  <newArrival/>
  
</template>

<style lang="scss" scoped>

</style>