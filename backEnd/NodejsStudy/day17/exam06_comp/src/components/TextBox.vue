<template>
  <div>
    <h1 class="title">{{title}}</h1>
    <p>{{text}}</p>
  </div>

</template>

<script>
export default {
    name : "TextBox",
    data(){
        return{
            
        }
    },
    props:["title", "text"],

    methods:{

    },
    created(){

    }
}
</script>
<style socped>
    div{
  border: 1px solid #000;
  background-color: gainsboro;
}
</style>