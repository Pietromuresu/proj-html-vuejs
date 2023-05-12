
<script>
export default {
  name: 'BlogCard',
  props:{
    title: String,
    date: String,
    src: String
  }
}


</script>

<template>
  <div class="position-relative" >
    <img :src="src" alt="">
    <div class="pm-hover-blog position-absolute">
      <div>

        <h5 >
          {{title}}
        </h5>
        
        <p href="#">
          Tips & tricks
        </p>
      </div>
    </div>
  </div>
  <div class="desc w-75 mx-auto" >
    <h4>
      {{title}}
    </h4>
    <span>{{ date }}</span>
  </div>  

</template>
<style lang="scss" scoped>
@import '../../scss/partials/general';
      img{
        width: 100%;
        margin-bottom: 40px;

        &:hover{
          .pm-hover-blog{

            opacity: 100;
          }
        }
      }
      
      h4{
        transition: 1s;
        &:hover{
          color: $green;
        }
      }


      .pm-hover-blog{
    width: 100%;
    height: calc(100% - 12%);
    padding: 50px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  rgba(175, 118, 13, 0.288);
    opacity: 0;
    transition: 1s;
    color: white;
    text-align: center;
    &:hover{
      opacity: 100;
    }
  
    
  }
</style>