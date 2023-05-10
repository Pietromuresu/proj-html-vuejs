<script>
import Reviews from '../../assets/data/reviewsDb';
export default {
  name: 'Testimonials',
  data(){
    return{
      Reviews
    }
  }
}
</script>

<template>
  <div class="testimonials-container">

    <div class="title bundle">
      <h1 >
        Users Testimonials
      </h1>
    </div>
    <div class="pm-container">
      
      <div class="row">
        <div class="col text-center" v-for="(review, index) in Reviews" :key="index">
          <div class="pm-card">
            <img :src="`/images/${review.img}.jpg`" alt="">
            <p class="mx-auto">
              {{ review.text }}
            </p>
            <span class="">
              {{ review.user }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/partials/general';

.testimonials-container{
  background-color: $dark-green;
  color: white;
  padding-bottom: 200px;
  font-size: 20px;

  .title{
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: end;
    h1{
      font-size: 40px;
      padding-bottom: 40px;
    }
  }
}

p{
  width: 300px;
}

img{
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 25px;
}

span{
  color: rgb(164, 164, 164);
  font-size: 20px;

}

</style>