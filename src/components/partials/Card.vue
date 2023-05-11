
<script>
export default {
  name: 'Card',
  props:{
    image: String,
    name: String,
    price: String,
    oldPrice: String
  }
}
</script>

<template>
  <div>
    <img :src="image" :alt="name">
    <h4 class="mt-4">{{ name }}</h4>
    <span class="oldPrice">{{ oldPrice }}</span>
    <span>{{ price }}</span>
  </div>
</template>

<style lang="scss" scoped>

@import '../../scss/partials/general' ;

  img{
    width: 300px;
  }
  .oldPrice{
    text-decoration: line-through ;
    font-size: smaller;
    margin-right: 10px;
  }
  span{
    color: $green;
    font-size: 15px ;
  }
</style>