
<script>
import { Store } from '../../assets/data/Store';
import Card from '../partials/Card.vue';
export default {
  name: 'bestSellers',
  components:{
    Card
  },

  data(){
    return{
      Store
    }
  }
}
</script>

<template>
  <div class="pm-container">
    <span>
      All-time best sellers
    </span>
    <div class="d-flex justify-content-between mb-5">
      <h2>Items everyone loves</h2>
      <div class="btn green">View all products</div>
    </div>
  </div>
  <div class="row pm-container">
    <div class="col-3 text-center position-relative  " v-for="(item, index) in Store.transport" :key="index">

      <Card
      class=" overFlow"
      :image="`/images/${item.img}`"
      :name="item.name"
      :oldPrice="item.oldPrice"
      :price="item.price"
      /> 
      <div class="pm-hover position-absolute">
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
</template>

<style lang="scss" scoped>
@import '../../scss/partials/general';

.pm-container{
  margin-bottom: 100px;
  span{
    
    font-size: larger;
  }
  h2{
    font-weight: 540;
    font-size: xx-large;
  }
}
.row{
  overflow: hidden;
  flex-wrap: nowrap ;
  
  .col-3{
    overflow: hidden;

  }
}

.overFlow{
  overflow: hidden;

}


 
</style>