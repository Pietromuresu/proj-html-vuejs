
<script>
import {mainMenu} from '../assets/data/menuDb'
export default {
  name: 'Header',
  
  data(){
    return {
      mainMenu,

      isScrolling: false
    }
  }
}
</script>

<template>
  <header  >
    <div class="pm-header-top row align-items-center p-3 pm-container">

      <div class="col-lg-7 ">

        <div class="row ">

          <div class="col ">
            <img src="/images/dark-pet-logo.png" alt="logo">

          </div>

          <div class="col d-flex align-items-center">
            <i class="fa-solid fa-magnifying-glass me-0 "></i>
            <input type="text" placeholder="Search..." class="ms-0">

          </div>

        </div>

      </div>

      <div class="col-lg-5">

        <div class="row ">

          <div class="col text-center">
            <p class="green-number mt-3"><strong>Questions?</strong> Call us : 1.800.123.4567</p>

          </div>

          <div class="col d-flex text-end align-items-center justify-content-end ">
            <a href="#" >
              <img class="cart-icon" src="public/images/cart-icon.png" alt="">
            </a>
            
            <i class="fa-regular fa-user ms-2"></i>
          </div>

        </div>

      </div>

    </div>

  </header>
  <div class="pm-header-bottom row px-4 sticky-top">
    <div class="col pm-logo">
      <img class="d-none" src="/images/logo-symbol.png" alt="">
    </div>
    <div class="col">

      <ul class="nav justify-content-center py-3">
        <li :class="{'dropdown' : link.brands}"   class="nav-item " v-for="(link, index) in mainMenu" :key="index" >
          <a :class="{'dropdown-toggle' : link.brands}" class="nav-link" href="#">{{ link.text }}</a>     
          
          <div  v-if="link.brands" class="pm-dropdown ">
            <div class="d-flex " aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#" v-for="(brand, index) in link.brands" :key="index">
                <div>
                  <img :src="`/images/${brand.img}`" alt="">
                  <div class="desc">
                    <h1 class="ms-3">{{ brand.name }}</h1>
                    <h4 class="ms-3">{{ brand.desc }}</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </li>
        
      </ul>
    </div>

    <div class="col d-flex text-end align-items-center justify-content-end ">
          <a href="#" class="d-none" >
            <img class="cart-icon" src="../../public/images/cart-icon.png" alt="">
          </a>
          
          <i class="fa-regular fa-user ms-2 d-none"></i>
        </div>

  </div>


</template>

<style lang="scss" scoped>
@use '../../node_modules/bootstrap' as *;
@use '../scss/partials/general' as *;



  .pm-header-top{
    height: 100px;
    
    img{
      height: 35px;
    }

    .fa-magnifying-glass{
      background-color: #F3F4F2;
      display: inline-block;
      line-height: 15px;
      padding: 15px;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
    }

    input{
      width: 80%;
      min-width: 200px;
      margin: 0 auto;
      height: 100%;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      border: 0;
      background-color: $light-grey;
      
    }

    .green-number{
      line-height: 40px;
    }

    .cart-icon{
      height: 25px;
    }

    .fa-user{
      font-size: large;
    }
  }

  .pm-header-bottom{
    border-top: 1px solid $light-grey;
    align-items: center;
    position: sticky;
    z-index: 3;
    background-color: #fff;
    top: 0;
    left: 0;
    .pm-logo{
      img{

        width: 50px;
      }
    }

    ul{

      li{
        max-width: 100px;
        margin-right: 5px;
        &:hover{
          .pm-dropdown{
            z-index: 400;
            display: block;
            opacity: 100;
          }
        }
        
        a{
          color: $grey;
          
          &:hover{
            color: black;
          }
          
        }
        .pm-dropdown{
          transition: 2s;
          display: none;
          opacity: 0;
          position: absolute;
          left: -56vw;
          width: 100vw;
          
          div{
            
            
            img{
              width: 100%;
              
            }
            .desc{
              position: absolute;
              bottom: 10px;
             
            }
          }
        }
      }
    }

    .cart-icon{
      height: 25px;
    }

    .fa-user{
      font-size: large;
    }
  }
</style>