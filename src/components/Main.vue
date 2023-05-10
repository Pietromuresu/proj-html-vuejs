
<script>
import Jumbotron from './sections/Jumbotron.vue';
import Categories from './sections/browse-by-category.vue'
export default {
  name: 'Main',
  components:{
    Jumbotron,
    Categories
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
</template>

<style lang="scss" scoped>

</style>