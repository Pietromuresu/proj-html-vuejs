
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
        <div class="position-relative" >
          <img src="/images/blog-1-200x200.jpg" alt="">
          <div class="pm-hover-blog position-absolute">
            <div>

              <h5 >
                How to 'loose leash walk' your dog
              </h5>
              
              <p href="#">
                Tips & tricks
              </p>
            </div>
          </div>
        </div>
        <div class="desc w-75 mx-auto" >
          <h4>
            How to 'loose leash walk' your dog
          </h4>
          <span>April 19th, 2020</span>
        </div>
      </div>
      <div class="col">
        <div class="position-relative">

          <img src="/images/blog-2-200x200.jpg" alt="">
          <div class="pm-hover-blog position-absolute">
            <div>
              
              <h5>
                Stop cats from scratching furniture
              </h5>
              
              <p href="#">
                Tips & tricks
              </p>
            </div>
          </div>
        </div>
        <div class="desc w-75 mx-auto" >
          <h4>
            Stop cats from scratching furniture
          </h4>
          <span>April 19th, 2020</span>
        </div>
      </div>
      <div class="col">
        <div class="position-relative">

          <img src="/images/blog-3-200x200.jpg" alt="">
          <div class="pm-hover-blog position-absolute">
            <div>
              
              <h5 >
                Where to buy the best pet food
              </h5>
              
              <p href="#">
                Tips & tricks
              </p>
            </div>
          </div>
        </div>
        <div class="desc w-75 mx-auto" >
          <h4>
            Where to buy the best pet food
          </h4>
          <span>April 18st, 2020</span>
        </div>
      </div>
      <div class="col">
        <div class="position-relative">

          <img src="/images/blog-4-200x200.jpg" alt="">
          <div class="pm-hover-blog position-absolute">
            <div>
              
              <h5 >
                Proper care for your pet toys
              </h5>
              
              <p href="#">
                Tips & tricks
              </p>
            </div>
          </div>
        </div>
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
      width: 25%;
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
  .btn{
    margin-bottom: 100px;
  }
</style>