
<script>
import Jumbotron from './sections/Jumbotron.vue';
import Categories from './sections/browse-by-category.vue';
import newArrivals from './sections/new-arrivals.vue';
export default {
  name: 'Main',
  components:{
    Jumbotron,
    Categories,
    newArrivals
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
</template>

<style lang="scss" scoped>

</style>