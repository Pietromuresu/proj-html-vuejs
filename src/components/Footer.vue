
<script>
import {mainMenu, menuCategories, usefulLinks} from '../assets/data/menuDb'
export default {
  name: 'Footer',
  
  data(){
    return {
      mainMenu,
      menuCategories,
      usefulLinks
    }
  }
}
</script>

<template>
  <div class="pm-footer">
    <div class="pm-footer-top">
      <div class="row p-5">
        <div class="col pm-contacts">
          <img class="logo-footer mb-5" src="/images/mobile-light-pet-logo-2x-400x105.png" alt="">
          <p>1234 Avada Avenue Avadaville</p>
          <p>info@your-company.com</p>
          <p>Call us:(1) 234 5678</p>
        </div>
        <div class="col pm-catalogue">
          <h2>Shop By Brand</h2>
          <ul>
            <li v-for="(category, index) in menuCategories" :key="index">
              <a :href="category.href">{{ category.name }}</a>
            </li>
          </ul>
        </div>
        <div class="col pm-useful-links">
          <h2>Useful links</h2>
          <ul>
            <li v-for="(category, index) in usefulLinks" :key="index">
              <a :href="category.href">{{ category.name }}</a>
            </li>
          </ul>
        </div>
        <div class="col pm-subscribe-newsletter">
          <div class="pm-card">
            <h3>
              Subscribe to our newsletter
            </h3>
            <input type="text" placeholder="Insert your email...*">
            <div class="btn btn-success">Subscribe</div>
          </div>
        </div>
      </div>
      <hr>
      <div class=" justify-content-center ">
        <ul class="nav  justify-content-center">
          <li  class="nav-item " v-for="(link, index) in mainMenu" :key="index" >
            <a :class="{'d-none' : link.text === 'Shop by brand'}" class="nav-link" :href="link.href">{{ link.text }}</a>    
          </li>
        </ul>
      </div>
      <div class="pm-socials">

        <a class="me-3" href="#">
          <i class="fa-brands fa-facebook-f"></i>
        </a>

        <a class="me-3" href="#">
          <i class="fa-brands fa-twitter"></i>
        </a>

        <a class="me-3" href="#">
          <i class="fa-brands fa-instagram"></i>
        </a>

        <a  href="#">
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
    
    <div class="col text-center copyright-banner" >
      <p>
        © Copyright 2012 - 2023 | Avada Theme by  | All Rights Reserved | Powered by WordPress
      </p>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/general' as p;
@use '../scss/partials/vars' as *;
  .pm-footer{
    color: $white;
    .pm-footer-top{
      background-color: $dark-green;
      padding: 30px;
      padding: 100px 0;
      .logo-footer{
        height: 50px;
      }
      h2{
        color: $white;
        padding-left: 1.5rem;
      }

      .pm-subscribe-newsletter{
        max-width: 300px;
        min-height: 305px;
        padding: 30px;
        background-image: url('/images/bg-transparent-3.png');
        background-color: #264028;
        border-radius: 5px;
        input{
          margin-bottom: 30px;
          width: 100%;
          padding: 15px;
          border-radius: 30px;
        }

        .btn{
          width: 100%;
          line-height: 40px;
          border-radius: 30px;
        }
      }

    }

    hr{
      width: 95%;
      margin: 0 auto;
      color: $grey;
    }

    .copyright-banner{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
      height: 75px;
    }
  }

  .nav{
    a{
      color: $light-grey;

      &:hover{
        color: white;
      }
    }
  }

  .pm-socials{
    display: flex;
    justify-content: center;

    a{
      color: white;
      font-size: 20px;
    }
  }

    li{
      list-style: none;
      a{
        line-height: 50px;
        color: $white;
        text-decoration: none;
        
        &:hover{
          color: rgb(176, 176, 176);
        }

        
      }
    }
  
</style>