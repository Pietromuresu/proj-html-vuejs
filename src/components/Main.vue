
<script>
import Jumbotron from './sections/Jumbotron.vue';
import Categories from './sections/browse-by-category.vue';
import weeklyArrivals from './sections/weeklyArrivals.vue';
import bestSellers from './sections/best-sellers.vue';
import Reviews from './sections/testimonials.vue';
import Newsletter from './sections/Newsletter.vue';
import ctaBlog from './sections/ctaBlog.vue';
import ctaCatalog from './sections/ctaCatalog.vue';
import newArrival from './sections/newArrival.vue';
import Prebuilts from './partials/Prebuilts.vue';
export default {
  name: 'Main',
  components:{
    Jumbotron,
    Categories,
    weeklyArrivals,
    bestSellers,
    Reviews,
    Newsletter,
    ctaBlog,
    ctaCatalog,
    newArrival,
    Prebuilts
  },  
  data(){
    return {

    }
  }
}
</script>

<template>
  <div class="pm-container-main">

    <Jumbotron/>
    <Categories/>
    <weeklyArrivals/>
    <bestSellers/>
    <Reviews/>
    <Newsletter/>
    <ctaBlog/>
    <ctaCatalog/>
    <newArrival/>
    <Prebuilts/>
    
  </div>
</template>

<style lang="scss" scoped>

</style>