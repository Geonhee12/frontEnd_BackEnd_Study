<template>
    <div>
        <h1> The Counter</h1>
        <h2>{{counter}}</h2>
        <button @click="increase"> 증가</button>
        <button @click="decrease"> 감소</button>
    </div>
</template>
<script>
export default {
    name : "Counter",
    data(){
        return {
            counter : 0
        }
    },
    methods:{
        increase(){
            this.counter++;
        },
        decrease(){
            this.counter--;
        }
    }
}
</script>
<style scoped>
    
</style>