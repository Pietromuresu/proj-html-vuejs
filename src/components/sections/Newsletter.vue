
<script>
export default {
  name: 'Newsletter',  
}
</script>

<template>

    <div class="pm-container position-relative">
      <div class="text-container">
        <h1>
          Join our newsletter
        </h1>
        
        <p>
          Volutpat vel turpis nulla lorem sed semper. Aliquam sagittis sem libero viverra vehicula nullam ut nisl.
        </p>
        
        <input type="text" placeholder="Insert your email ...*">
        <div class="btn green ms-3">
          Subscribe
        </div>
      </div>
      <div class="bg"></div>
    </div>  
    
</template>

<style lang="scss" scoped>
  @import '../../scss/partials/general';
  .pm-container{
    height: 500px;
    margin-top: -100px;
    background-image: url('/images/banner-7-2x-scaled.jpg');
    background-size: cover;
    
      .text-container{
      width: 600px;
      padding: 100px;

      h1{
        font-size: 40px;
      }
      p{
        font-size: larger;
        margin: 50px 0;
      }

      input{
        padding: 10px ;
        border-radius: 20px;
        width: 65%;
        border: 0;
        background: $light-grey;
      }
      .btn{
        width: 25%;
      }
    }
  }

  .bg{
    height: 20%;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(0deg, #FBFAF9 , rgba(255, 255, 255, 0));
  }

</style>