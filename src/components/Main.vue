
<script>
import Jumbotron from './sections/Jumbotron.vue';
import Categories from './sections/browse-by-category.vue';
import newArrivals from './sections/new-arrivals.vue';
import bestSellers from './sections/best-sellers.vue';
export default {
  name: 'Main',
  components:{
    Jumbotron,
    Categories,
    newArrivals,
    bestSellers
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
</template>

<style lang="scss" scoped>

</style>