
<script>
import {mainMenu} from '../assets/data/menuDb'
export default {
  name: 'Header',
  
  data(){
    return {
      mainMenu,
      isScrolling: false
    }
  },
  
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

          <div class="col-8 text-center">
            <p class="green-number mt-3"><strong>Questions?</strong> Call us : 1.800.123.4567</p>

          </div>

          <div class="col d-flex text-end align-items-center justify-content-end ">
            <ul>
              <li>

                <a href="#" >
                  <img class="cart-icon" src="/images/cart-icon.png" alt="">
                </a>
              </li>
              <li class="position-relative pm-li">
                <i class="fa-regular fa-user ms-2"></i>
                <form class="position-absolute pm-login p-4">
                    <div class="form-group">
                      
                      <input type="email" class="form-control"  placeholder="Username">
                    </div>
                    <div class="form-group">
                      
                      <input type="password" class="form-control" placeholder="Password">
                    </div>
                    <div class=" text-start ">
                      <input type="checkbox" class="check">
                      <label class="d-inline" >
                        Remember me
                      </label>
                    </div>
                    <div class="text-end">

                      <button type="submit" class="btn green">Log in</button>
                      <button type="submit" class="btn register">Register</button>
                    </div>
                  </form>
              </li>
              </ul>
            </div>

        </div>

      </div>

    </div>

  </header>
  <div class="pm-header-bottom row px-4 sticky-top ">
    <div class="col pm-logo">
      <img class="d-none" src="/images/logo-symbol.png" alt="">
    </div>
    <div class="col">

      <ul class="nav justify-content-center py-3 row">
        <li :class="{'dropdown' : link.brands}"   class="nav-item position-static col" v-for="(link, index) in mainMenu" :key="index" >
          <div class="container-hover" @mouseenter="isHover">

            <a :class="{'dropdown-toggle' : link.brands}" class="nav-link" href="#">{{ link.text }}</a>     
            
          </div>
            <div v-if="link.brands" class="pm-dropdown position-absolute">
              <div class="d-flex " aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#" v-for="(brand, index) in link.brands" :key="index">
                  <diV class="max-height">
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
      margin: 10px auto;
      height: 100%;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      border: 0;
      background-color: $light-grey;
      
    }

    .green-number{
      line-height: 40px;
    }
    ul{
      list-style: none;
      display: flex;
      align-items: center;
      margin-bottom:0 ;
      li{
        max-width: 40px;
      }
      .cart-icon{
        height: 25px;
      }

      .pm-li{

        transition: 1s;
          padding-top: 3px;
          font-size: 21px;
          
          &:hover{
            color: #3D6F42;
            .pm-login{
              display: block !important;
            }
          
          }
      }
      .pm-login{
        transition: 1s;
        display: none;
        top:30px;
        left: -150px;
        background-color: #fff;
        z-index: 1000;
        .form-control{
          padding: 20px 20px;
          border-radius: 30px;
        }
        
          .check{
            height: 10px;
            min-width: 0;
            width: 10px !important;
            border: 1px solid black;
          
          }
          label{
          font-size: 13px;
        }

        .btn{
          padding: 5px 20px;
        }
        .register{
          color: #3D6F42;
          display: block;
          margin-left: 70%;
        }
      }
    }
  }

  .pm-header-bottom{
    position: relative;
    width: 100%;
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
      flex-wrap: nowrap;
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
          transition: 1s;
          
          display: none;
          position: absolute;
          left: 0;
          // right: -420%;
          width: 100vw;
          
          div{
          transition: 1s;
            
            
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

  .max-height{
    max-height: 400px;
    img{
      max-height: 400px;
    }
  }
</style>