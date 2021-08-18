<template>
  <div>
    <h1>
      {{msg}}  <!--중괄호 두개로 변수 값을 연결할 수 있다.-->
    </h1>
    <button @click="changeMsg('hello')">chnage1</button>
    <button @click="changeMsg('hel')">chnage2</button>
    <button @click="changeMsg('hell')">chnage3</button>
  </div>

  <div>
    <h2>reactive Counter</h2>
    <p>{{counter}}</p>
    <button @click="increaseCounter">count +</button>
    <button @click="decreaseCounter">count -</button>
    <button @click="resetCounter1">reset</button>
  </div>
  <div>
    <h2>none reactive</h2>
    <h5>{{myCounter}}</h5>
    <button @click="resetCounter2">reset</button>
  </div>

</template>

<script>
export default {
  name: 'App',
  components: {},
  data () { // es6부터 오브젝트 내의 함수 선언
    return {
      msg: '어서와',
      counter : 0
    }
  },
  methods : {
    changeMsg(msg) {
      this.msg = msg
    }
    ,
    increaseCounter(){
      this.counter++
    },
    decreaseCounter(){
      this.counter--
    },
    resetCounter1(){
      this.counter = 0;
    },
    resetCounter2(){
      this.myCounter = 0;
    }
  },
  created() {
    this.counter = 100
    this.myCounter = 200 // none reactive
  }
}
</script>

<style scoped> 
  h1 { 
    color: red;
  }
  div{
    border: 1px solid #000;
  }
</style>
