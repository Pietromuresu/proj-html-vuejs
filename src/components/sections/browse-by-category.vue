
<script>
import {Store} from '../../assets/data/Store';
import Products from '../../assets/data/products';
import Card from '../partials/Card.vue';
export default {
  name: 'Categories',
  components:{
    Card
  },

  data(){
    return{
      Products,
      Store
    }
  }
}
</script>

<template>
  <div class="pm-container mb-5 pt-5">
    <div class="pm-intestazione text-center">
      <h3>Browse by category</h3>
      <p>Augue purus et, tincidunt condimentum mauris. At nibh rutrum mi in. Nisi, vitae interdum eleifend dui, consequat nulla rhoncus dictum. Viverra.</p>
    </div>
    <div class="row pm-categories">
      <div class="col col-lg-3" >
        
        <Card 
        class="text-center"
        :image="'/images/product-9-400x400.jpg'"
        :name="`Bed (${Store.bed.length})`"
        />
      </div>
      <div class="col col-lg-3 px-2" >
        
        <Card 
        class="text-center"
        :image="'/images/product-3-400x400.jpg'"
        :name="`Food (${Store.food.length})`"
        />
      </div>
      <div class="col col-lg-3 pe-2" >
        
        <Card 
        class="text-center"
        :image="'/images/product-2-400x400.jpg'"
        :name="`Toys (${Store.toys.length})`"
        />
      </div>
      <div class="col col-lg-3  " >
        
        <Card 
        class="text-center"
        :image="'/images/product-4-400x400.jpg'"
        :name="`Transport (${Store.transport.length})`"
        />
      </div>
    </div>


    <div class="dried-food">
      <div class="pm-card-dried ">
        <div class="row">
          <div class="col text-center ">
            <div class="bundle  pb-3">
              <h3>Kibble</h3>
              <p>Dry dog food</p>
            </div>
            <img src="/images/food-transparent-18.png" alt="">
            <div class="btn green d-block">
              Shop dry food
            </div>
          </div>
          <div class="col text-center  mx-2">
            <div class="bundle pb-3">
              <h3>Moist</h3>
              <p>Canned dog food</p>
            </div>
              <img src="/images/food-transparent-17.png" alt="">
            <div class="btn green d-block">
              Shop moist food
            </div>
          </div>
          <div class="col text-center ">
            <div class="bundle  pb-3">
              <h3>Frozen</h3>
              <p>Freez-Dried dog food</p>
            </div>
            <img  src="/images/food-transparent-16.png" alt="">
            <div class="btn green d-block">
              Shop frozen food
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </template>

<style lang="scss" socped>
@import '../../scss/partials/general';

  .pm-intestazione{
    width: 600px;
    margin: 50px auto;
  }

  .pm-categories{

    
    .col{
      overflow: hidden;
      
      &:hover{
        color: $green;
      }
      
      p{
        margin-top: 20px;
      }
    }
    
  }

  .pm-card-dried{
    margin-top: 100px;
    .col{
      height: 600px;
      overflow: hidden;
      background-color: $dark-green;
      color: white;
      transition: 1s;
      
      

      &:hover{
        transform: scale(1.02);
        background-color: #1E3721;

        .bundle{
          p{
            color: #59AE62
          }
        }
      }
      
      .bundle{
        background-color: transparent;
        padding-top: 80px;
        p{
          transition: 1s;
          color: $green;
          font-size: large;
        }
        h3{
          font-size: 30px;
        }
      }
      
      img{
        width: 250px;
        object-fit: contain;
        margin-bottom: 50px;
      }

      .btn{

        width: fit-content;
        padding: 5px 20px;
        border-radius: 20px;
        margin: 0 auto;
        margin-bottom: 50px;


      }
    }
  }
</style>