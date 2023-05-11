
<script>
import { Store } from '../../assets/data/Store';
import Card from '../partials/Card.vue';

export default {
  name: 'newArrivals',
  components:{
    Card
  },
  data() {
    return{
      Store,
      
      transport: []
    }
    
  },
  methods:{
    getLists(){
      
      this.transport = [Store.transport[0], Store.transport[1], Store.transport[2],]
      console.log(this.bed);
    }
  },
  mounted(){
    this.getLists()
  }
}
</script>

<template>
  <div class="pm-container">

    <div class="pm-title text-center mb-5">
      
      <h1>New products arrival</h1>
      <h5>Latest products</h5>
    </div>
    
    <div class="row">
      <div class="col-4" >
        <Card
        :image="`/images/${Store.bed[0].img}`"
        :name="Store.bed[0].name"
        :oldPrice="Store.bed[0].oldPrice"
        :price="Store.bed[0].price"
        />
        <div class="pm-hover position-absolute">
          <div>

            <div class="pm-stars ">
              ★★★★★
            </div>
            <div class="d-block">
              
              <a href="#">
                ADD TO CART
              </a>
              <span>/</span>
              <a href="#">
                QUICK VIEW
              </a>
            </div>
          </div>
        </div>
        <div v-if="Store.bed[0].oldPrice" class="sale btn green">sale!</div>
      </div>
      <div class="col-4">
        <Card
        :image="`/images/${Store.toys[0].img}`"
        :name="Store.toys[0].name"
        :oldPrice="Store.toys[0].oldPrice"
        :price="Store.toys[0].price"
        
        />
        <div class="pm-hover position-absolute">
          <div>

            <div class="pm-stars ">
              ★★★★★
            </div>
            <div class="d-block">
              
              <a href="#">
                ADD TO CART
              </a>
              <span>/</span>
              <a href="#">
                QUICK VIEW
              </a>
            </div>
          </div>
        </div>
        <div v-if="Store.toys[0].oldPrice" class="sale btn green">sale!</div>

      </div>
      <div class="col-4">
        <Card
        :image="`/images/${Store.food[0].img}`"
        :name="Store.food[0].name"
        :oldPrice="Store.food[0].oldPrice"
        :price="Store.food[0].price"
        
        />
        <div v-if="Store.food[0].oldPrice" class="sale btn green">sale!</div>
        <div class="pm-hover position-absolute">
          <div>

            <div class="pm-stars ">
              ★★★★★
            </div>
            <div class="d-block">
              
              <a href="#">
                ADD TO CART
              </a>
              <span>/</span>
              <a href="#">
                QUICK VIEW
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4" v-for="(item, index) in transport" :key="index">
        <Card
        :image="`/images/${item.img}`"
        :name="item.name"
        :oldPrice="item.oldPrice"
        :price="item.price"
        
        />
        <div v-if="item.oldPrice" class="sale btn green">sale!</div>
        <div class="pm-hover position-absolute">
          <div>

            <div class="pm-stars ">
              ★★★★★
            </div>
            <div class="d-block">
              
              <a href="#">
                ADD TO CART
              </a>
              <span>/</span>
              <a href="#">
                QUICK VIEW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>

<style lang="scss" scoped>
@import '../../scss/partials/general';


.row{
  text-align: center;

  .col-4{
    margin-bottom: 50px;
    position: relative;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
}


.sale{
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 2px 5px;
  border-radius: 80%;
  text-transform: capitalize;
}

.pm-hover{
  width: calc(100% - 6%) ;
  height: calc(100% - 18%);
}
</style>