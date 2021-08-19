<template>
    <div>
        <h1>The Counter</h1>
        <h2>{{counter}}</h2>
        <button @click="increase">up</button>
    </div>
</template>
<script>
export default {
    name : "Counter",
    computed:{ // store에서 데이터를 가져올 때 사용
        counter(){
                return this.$store.state.counter;

        }
    },
    methods:{
        increase(){
            this.$store.commit('increase'); // increase함수를 호출
           // this.$store.state.counter++
        }
    }
}
</script>
<style scoped>
    
</style>