
<script>
export default {
  name: 'ctaCatalog',
}
</script>

<template>
  <div class="row cta">
    <div class="col-6 ">
      <a href="#">

        <div class="text-center">
          
          <h5>FIND THE BEST ANIMAL SUPPLIES</h5>
          <h1>Popular accessories</h1>
          <div class="btn white">
            View all toys products
          </div>
        </div>
      </a>
      <div class="bg pm-dog"></div>
    </div>
    <div class="col-6 ">
      <a href="#">

        <div class="text-center">
          
          <h5>FIND THE BEST FOOD</h5>
          <h1>New food arrival</h1>
          <div class="btn white">
            View all food products
          </div>
        </div>
        
      </a>
      <div class="bg pm-cat"></div>
    </div> 
  </div>

  <div class="bundle">
    <div class="row pm-strong-points pm-container">
      <div class="col">
        <div>
          <i class=" fa-solid fa-truck"></i>
          <h5>
            Free worldwide deliveries
          </h5>
        </div>
      </div>
      <div class="col">
        <div>
          <i class="fa-regular fa-map"></i>
          <h5>
            Find stores near you
          </h5>
        </div>
      </div>
      <div class="col">
        <div>
          <i class="fa-regular fa-dollar-sign"></i>
          <h5>
            Best prices guarranteed
          </h5>
        </div>
      </div>
      <div class="col">
        <div>
          <i class="fa-regular fa-credit-card"></i>
          <h5>
            All credit card accepted
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/partials/general';

.cta{
  height: 450px;
  
  .col-6{
    height: 100%;
    
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
    
    &:hover{
      transform: scale(1.05);
    }
    
    h1{
      margin: 50px 0;
      font-size: 40px;
      font-weight: 600;
    }
    
    a{
      color: white;
      text-decoration: none;
    }
    
    .btn{
      border-radius: 30px;
      padding: 10px 25px;
    }
    
    .bg{
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      filter:brightness(80%);
      z-index: -1;
      &.pm-cat{
  
        background-image: url('/images/banner-9-2x.jpg');
        background-size: cover;
      }
      &.pm-dog{
  
        background-image: url('/images/banner-8-2x.jpg');
        background-size: cover;
      }
    }
    }
}

.bundle{
  height: 300px;

  .pm-strong-points{
    color: white;
    height: 100%;
    font-size: 60px;

    .col{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      h5{
        color: rgb(150, 150, 150);
      }
    }


  }
}

</style>