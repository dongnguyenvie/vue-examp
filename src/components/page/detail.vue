<template>
    <div class="row product-detail">
        <div class="col-md-3 product-detail__img">
            <div class="img">
                <img :src="product.img" class="img-thumbnail" alt="">
            </div>
        </div>
        <div class="col-md-9 product-detail__context">
            <div class="context">
                <h1 class="h3">{{product.name}} <span class="badge badge-secondary">{{product.quantity}}</span></h1>
                <hr>
                <h3 class="h5">{{product.brand}}</h3>
                <p>code: <span>{{product._id}}</span></p>
                <p>battery capacity: <span> {{product.properties.batterycapacity}}</span></p>
                <p>camera: <span> {{product.properties.camera}}</span></p>
                <p>chipset: <span> {{product.properties.chipset}}</span></p>
                <p>cpu speed: <span> {{product.properties.cpuspeed}}</span></p>
                <p>discount: <span> {{product.properties.discount}}</span></p>
                <p>film: <span> {{product.properties.film}}</span></p>
                <p>internal memory: <span> {{product.properties.internalmemory}}</span></p>
                <p>mobile network: <span> {{product.properties.mobilenetwork}}</span></p>
                <p>operating system: <span> {{product.properties.operatingsystem}}</span></p>
                <p>ram: <span> {{product.properties.ram}}</span></p>
                <p>Resolution: <span> {{product.properties.resolution}}</span></p>
                <p>screen: <span> {{product.properties.screen}}</span></p>
                <p>sim: <span> {{product.properties.sim}}</span></p>
                <p>touch glass: <span> {{product.properties.touchglass}}</span></p>
                <p>widescreen: <span> {{product.properties.widescreen}}</span></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            product: {}
        }
    },
    methods:{

    },
    created(){
        if(!this.$route.params.code){
            alert('please pick product')
            return 
        }
        this.$http.get('/api/products/get/'+ this.$route.params.code)
        .then( res => {
            this.product = {...res.data}
            console.log(res.data)
        })
        .catch ( err=> {
            alert(err)
        })
    }
}
</script>

<style>

</style>
