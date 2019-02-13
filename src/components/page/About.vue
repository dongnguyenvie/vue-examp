<template >
    <div>
        <h1>this is about <span>using JSON API</span></h1>
        <p 
            v-for="(el, index) in text" :key="index">
            {{el}}</p> 
        <!-- <button @click="changeValue">Click</button>
        <h2>{{productDetail}}</h2> -->
    </div>
</template>
<script>
import {eventBus} from '../../../src/main.js'

export default {
    data(){
        return {
          //  codeProduce: this.productDetail
          text: []
        }
    },
    props:{
    //    productDetail: Number
    },
    created(){
        this.$http.get('https://baconipsum.com/api/?type=meat-and-filler')
        .then( res => {
            this.text = res.data
            console.log(res.data)
        })
        .catch( err => {
            alert(err)
        })
    },
    // methods:{
    //     changeValue : function (){
    //         this.codeProduce += 1
    //         eventBus.$emit('changePickProduct', this.codeProduce)
    //     }
    // }
}
</script>
