
<script>
export default {
  name: 'Card',
  props:{
    image: String,
    name: String,
    price: String,
  }
}
</script>

<template>
  <div>
    <img :src="image" :alt="name">
    <p>{{ name }}</p>
    <p>{{ price }}</p>
  </div>
</template>

<style lang="scss" scoped>

</style>