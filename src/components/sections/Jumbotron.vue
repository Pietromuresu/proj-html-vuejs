
<script>
export default {
  name: 'Jumbotron',
  data(){
    return{

    }
  }
}
</script>

<template>
  <div class="bundle">
    <div class="row pm-container">
      <div class="col text-center">
        <i class="fa-regular fa-map me-2"></i>
        <p class="d-inline"><strong>International</strong> Shipping Services</p>
      </div>
      <div class="col text-center">
        <i class="fa-regular fa-clock me-2"></i>
        <p class="d-inline">See our <strong>store hours</strong> and services</p>
      </div>
      <div class="col text-center">
        <i class="fa-sharp fa-solid fa-check me-2"></i>
        <p class="d-inline"> We price match to give you the <strong>best deals</strong></p>
      </div>
    </div>
  </div>

  <div class="pm-jumbotron">
    <div class="pm-container">

      <div class="jumbo-text ">
        <p class="mb-4 fw-bold ">FIND THE BEST ANIMAL SUPPLIES</p>
        <h1>We know animals are a part of your family, let us help take care of them</h1>
        <div class="btn white mt-4">Learn more about us</div>
      </div>
    </div>
  </div>

  <div class="bundle pm-bundle-discount ">
    <img src="/images/food-transparent-5.png" alt="">
    <p>Get $25 OFF your first purchase of our homemade pet food!</p>
    <a href="#">Vist the shop</a>
  </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/general' as *;
  .bundle{
    line-height: 60px;
    height: 60px;
    color: white;
    font-size: 17px;  
  }

  .pm-jumbotron{
    display: flex;
    align-items: center;
    height: 750px;
    background-image: url('/images/banner-5-2x-scaled.jpg');
    background-size:cover;

    .pm-container{
      width: 100%;
    }

    .jumbo-text{
      color: white;
      width: 650px;
      



      .btn{

        border-radius: 30px;
        padding: 10px 20px;

      }
    }
  }


  .pm-bundle-discount{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 130px;
    position: sticky;
    top: 75px;
    font-size: 22px;
    z-index: 3;

    img{
      width: 230px;
      margin-right: 10px;
    }

    a{
      color: rgb(149, 148, 148);
      margin-left: 30px;
      padding-bottom: 15px;
    }
  }
</style>