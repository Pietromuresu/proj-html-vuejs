
<script>
import blogCard from '../partials/blogCard.vue';
export default {
  name: 'ctaBlog',

  components:{
    blogCard
  }
}
</script>

<template>

    <div class="titles text-center">
      <h2>
        Get the best tips & tricks
      </h2>
      <span>Recent articles</span>
    </div>
    <div class="row pm-container">
      <div class="col">
        <blogCard
        :src="`/images/blog-1-200x200.jpg`"
        :title="`How to 'loose leash walk' your dog`"
        :date="`April 20th, 2020`"
        />
       
      </div>
      <div class="col">
        <blogCard
        :src="`/images/blog-2-200x200.jpg`"
        :title="`Stop cats from scratching furniture`"
        :date="`April 19th, 2020`"
        />
        
      </div>
      <div class="col">
        <blogCard
        :src="`/images/blog-3-200x200.jpg`"
        :title="`Where to buy the best pet food`"
        :date="`April 18th, 2020`"
        />
       
      </div>
      <div class="col">
        <blogCard
        :src="`/images/blog-4-200x200.jpg`"
        :title="`Proper care for your pet toys`"
        :date="`April 17th, 2020`"
        />
       
      </div>

    </div>

    <div class="text-center ">
      <div class="btn green">
        Read all articles
      </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../scss/partials/_general.scss';

.titles{
  margin-top: 100px;
}
  .row{
    margin: 50px auto;
    .col{
      width: 25%;
      
    }
  }

 
  .btn{
    margin-bottom: 100px;
  }
</style>