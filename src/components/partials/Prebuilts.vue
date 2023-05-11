<script>
export default {
  name: 'Prebuilts',
}
</script>
<template>
  <div class="prebuilts">

    <div type="button" class="pm-btn" data-toggle="modal" data-target=".bd-example-modal-lg">
      <div class="d-flex">
        <img class="pm-animated-icon" src="/images/prebuilts.png" alt="">
        <img class="pm-animated-sobstitute " src="/images/prebuilts.png" alt="">
      </div>
      Prebuilts
    </div>
    
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="row">
            <div class="col">
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="shopNow">

    <div type="button" class="pm-btn" data-toggle="modal" data-target=".bd-example-modal-lg">
      <div class="d-flex">

        <i class="fa-solid fa-cart-shopping  pm-animated-icon "></i>
        <i class="fa-solid fa-cart-shopping  pm-animated-sobstitute "></i>
      </div>
      <p>
        Buy Now
      </p> 
    </div>
    
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="row">
            <div class="col">
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style lang="scss" scoped>
@import '../../scss/partials/general';

.pm-animated-icon{
  transition: .3s;
  margin-left:13px
}

.pm-animated-sobstitute{
  transition: .3s;
  margin-left: -25px;
  
  transform: translateX(100px);
}
.prebuilts{
  position: fixed;
  z-index: 2000;
  
    top: 190px;
    right: 20px;
  

}

.shopNow{
  position: fixed;

  z-index: 2000;
  top: 280px;
  right: 20px;
  font-size: small;
  i{
    font-size: 25px;
    margin-bottom: 10px;
    margin-top: 7px;
   
      
    
  }
}
.pm-btn{
  text-align: center;
  height: 75px;
  width: 75px;
  border-radius: 10px;
  padding: 10px;
  background-color: $white;
  color: #33475B;
  box-shadow: 0 0 140px 4px black;
  overflow: hidden;


  &:hover{
    .pm-animated-icon{
      transform: translateX(-100px);
    }

    .pm-animated-sobstitute{
      transform: translateX(-10px);

    }
  }
}


</style>