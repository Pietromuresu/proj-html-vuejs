
<script>
export default {
  name: 'ctaBlog',
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
        <img src="/images/blog-1-400x400.jpg" alt="">
        <div class="desc w-75 mx-auto" >
          <h4>
            How to 'loose leash walk' your dog
          </h4>
          <span>April 19th, 2020</span>
        </div>
      </div>
      <div class="col">
        <img src="/images/blog-2-400x400.jpg" alt="">
        <div class="desc w-75 mx-auto" >
          <h4>
            Stop cats from scratching furniture
          </h4>
          <span>April 19th, 2020</span>
        </div>
      </div>
      <div class="col">
        <img src="/images/blog-3-400x400.jpg" alt="">
        <div class="desc w-75 mx-auto" >
          <h4>
            Where to buy the best pet food
          </h4>
          <span>April 18st, 2020</span>
        </div>
      </div>
      <div class="col">
        <img src="/images/blog-4-400x400.jpg" alt="">
        <div class="desc w-75 mx-auto" >
          <h4>
            Proper care for your pet toys
          </h4>
          <span>April 17st, 2020</span>
        </div>
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
      img{
        width: 300px;
        height: 300px;
        margin-bottom: 40px;
      }
      
      h4{
        transition: 1s;
        &:hover{
          color: $green;
        }
      }
    }
  }

  .btn{
    margin-bottom: 100px;
  }
</style>