
<script>
export default {
  name: 'newArrivals',
  
  
}
</script>

<template>
  <div class="pm-new-arrivals-container pm-container">
    <div class="pm-text">
      <p class="fw-bold">FIND THE BEST ANIMAL SUPPLIES</p>
      <h1 class="my-3">New arrivals weekly</h1>
      <div class="btn white">
        Learn more about us
      </div>
    </div>
    <div class="bg" ></div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/partials/general';

  .pm-new-arrivals-container{
    position: relative;
    margin: 100px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    color: white;
    text-align: center;
    
    .bg{
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      background-image: url('/images/banner-3-2x-scaled.jpg');
      background-size: cover;
      filter: brightness(60%);
    }

    .pm-text{
      color: white;
      position: relative;
      z-index: 1;
    }
  }
</style>