<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
import {eventBus} from './main.js'

export default {
  name: 'App',
  data(){
    return {
      cart : []
    }
  },
  created() {
    console.log(this.cart)
    // add cart
    eventBus.$on('addCard', (product) => {
    //  console.log(this.cart)
      eventBus.$data.cart.push(product)
      localStorage.setItem('__cart', JSON.stringify(eventBus.$data.cart));
    })

    if(localStorage.__cart){
      // console.log('insset')
      eventBus.$data.cart = JSON.parse(localStorage.getItem('__cart'))
    }

  }
}
</script>

<style lang="scss">
header{
  background: #563d7c;
}
.container-fluid{
  nav.sidebar{
    ul{
      margin: 0;
      padding: 0;
      li{
        list-style: none;
        a{
          text-decoration: none;
          display: block;
          padding: .25rem 1.5rem;
          font-size: 90%;
          color: rgba(0,0,0,.65);
        }
      }
    }
  }
}
#content{
  padding-top: 1rem;
  .product{
    box-shadow: 1px 0px 1px 2px rgba(0,1,1,0.06);
    margin-bottom: 2rem;
    border-radius: .2rem;
    overflow: hidden;
    .product__block{
      overflow: hidden;
      .block__img{
            height: 238px;
            overflow: hidden;
            &:hover{
              img{
                transform: scale(1.1);
              }
            }
        img{
          width: 100%;
          height:auto;
          transition: all .3s;
        }
      }
      .block__context{
        padding: .9rem .5rem .5rem .4rem;
        p{
          line-height: 0.5;
        }
        p.title{
          text-transform: uppercase;
          font-weight: bold;
        }
        .d-flex{
          justify-content: space-between;
          padding: .5rem .5rem;
          span.view{
            padding-left: .5rem;
            cursor: pointer;
            text-decoration: underline;
            font-weight: bold;
          }
          span.price{
            display: inline;
            color: #FF0036;
          }
        }
      }
    }
  }
}
.product-detail{
  margin-top: 1.7rem;
  .product-detail__img{
    .img{
      img{
        width: 100%;
      }
    }
  }
  .product-detail__context{
    .context{
      p{
        font-weight: bold;
        line-height: .7;
        span{
          font-weight: 400;
        }
      }
    }
  }
}
.load-container{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.65);
  .load{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .lds-roller {
      display: inline-block;
      position: relative;
      width: 64px;
      height: 64px;
    }
    .lds-roller div {
      animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: 32px 32px;
    }
    .lds-roller div:after {
      content: " ";
      display: block;
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #fff;
      margin: -3px 0 0 -3px;
    }
    .lds-roller div:nth-child(1) {
      animation-delay: -0.036s;
    }
    .lds-roller div:nth-child(1):after {
      top: 50px;
      left: 50px;
    }
    .lds-roller div:nth-child(2) {
      animation-delay: -0.072s;
    }
    .lds-roller div:nth-child(2):after {
      top: 54px;
      left: 45px;
    }
    .lds-roller div:nth-child(3) {
      animation-delay: -0.108s;
    }
    .lds-roller div:nth-child(3):after {
      top: 57px;
      left: 39px;
    }
    .lds-roller div:nth-child(4) {
      animation-delay: -0.144s;
    }
    .lds-roller div:nth-child(4):after {
      top: 58px;
      left: 32px;
    }
    .lds-roller div:nth-child(5) {
      animation-delay: -0.18s;
    }
    .lds-roller div:nth-child(5):after {
      top: 57px;
      left: 25px;
    }
    .lds-roller div:nth-child(6) {
      animation-delay: -0.216s;
    }
    .lds-roller div:nth-child(6):after {
      top: 54px;
      left: 19px;
    }
    .lds-roller div:nth-child(7) {
      animation-delay: -0.252s;
    }
    .lds-roller div:nth-child(7):after {
      top: 50px;
      left: 14px;
    }
    .lds-roller div:nth-child(8) {
      animation-delay: -0.288s;
    }
    .lds-roller div:nth-child(8):after {
      top: 45px;
      left: 10px;
    }
    @keyframes lds-roller {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

  }
}
</style>

