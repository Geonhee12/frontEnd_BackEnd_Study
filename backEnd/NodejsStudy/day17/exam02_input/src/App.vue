<template>
  <div>
    <h1>none v-model</h1>
    <h5>{{textVal}}</h5>
    <!-- 태그안에는 {{}}로 넣는다. -->
    <input type="text" :value="textVal" @change="onChange"><br>
    <input type="text" :value="textVal" @input="onInput"><br>
    <input type="text" value="textVal">
    <button @click="onOk">ok</button>
  </div>


  <div>
    <h1>with v-model</h1>
    <h5>{{textVal_vm}}</h5>
    <input type="text" v-model="textVal_vm">
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
   // HelloWorld
  },
  data(){
    return{
      textVal : 'hello',
      textVal_vm : 'hi vue'
    }
  },
  methods:{
    onOk(){
      console.log(this.textVal);
      this.textVal = this.tempText;
    },
    onChange(evt){ //포커스가 바뀌면 실행
      console.log(evt.target.value);
      this.tempText = evt.target.value;
    },
    onInput(evt){ // 하나씩 입력될때마다
      console.log(evt.target.value);
      this.textVal = evt.target.value;
    }
  },
  created(){
    this.tempText = ''
  }
}
</script>

<style>

</style>
