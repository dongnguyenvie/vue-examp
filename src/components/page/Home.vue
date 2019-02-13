<template>
    <div id="content">
        <div class="row">
            <div class="col-md-3 product_container" 
                v-for="(el, index) in fetchProducts" :key="index">
                <div class="product">
                    <div class="product__block">
                        <div class="block__img">
                            <img :src="el.img" alt="">
                        </div>
                        <div class="block__context">
                            <p class="title">{{el.brand}} - {{el.name}}</p>
                            <div class="d-flex">
                                <span class="price">${{el.price}}</span>
                                <span class="view" @click="viewProduct(el._id)">View</span>
                            </div>
                            <!-- <hr> -->
                            <button class="btn btn-primary" @click="addCart(el._id)">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="load-container" v-if="load">
            <div class="load">
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    </div>
</template>

<script>
import data from './data.js'
import {eventBus} from '../../main.js'

export default {
    data() {
        return{
            load: true,
            products: []
        }
    },
    methods: {
        viewProduct: function (code, index){
           // console.log(code)
            this.$router.push({ name: 'product detail', params: { code } })
        },
        addCart: function(code) {
            let product = this.products.find( e=> {
                return e._id == code
            })
            eventBus.$emit('addCard', product)
        }
    },
    computed: {
        fetchProducts: function () {
            return this.products
        }
    },
    created() {
 
        this.$http.post('/api/products/pagination', {
            page: 0,
            perpage: 10
        })
        .then( (res) => {
           // console.log(this.products)
            this.products = res.data.data
            this.load = false
             console.log(1,this.products)
        })
        .catch ( (err) => {
            if (confirm('API is die, you using data seed ?')) {
                 this.products = data.data
                  this.load = false
            } else {
                alert('yep, you f5 browser')
            }
           
        })

    }
}
</script>
