<template>
    <div>
        <app-header></app-header>
        <!-- <h1>{{pickProduct}}</h1> -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <app-sidebar></app-sidebar>
                </div>
                <div class="col-md-9">
                    <!-- <router-view :product-detail="pickProduct" 
                        v-on:changeValue="pickProduct = $event"></router-view> -->
                        <router-view 
                            ></router-view>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import header from '../header/Header'
import sidebar from '../sidebar/Sidebar'
import {eventBus} from '../../../src/main.js'

export default {
    data(){
        return {
        //    pickProduct: 10
        }
    },
    components: {
        appHeader : header,
        appSidebar : sidebar
    },
    // created(){
    //     eventBus.$on('changePickProduct', (val) => {
    //         this.pickProduct = val
    //     } )
    // }
}
</script>

<style>

</style>
