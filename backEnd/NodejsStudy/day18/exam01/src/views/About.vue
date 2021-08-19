<template>
  <div class="home">
    <h1>about</h1>
    <button @click="goHome">홈으로...</button>
  </div>
</template>

<script>
// @ is an alias to /src 즉 @가 소스폴더 기준이다.
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'About',
  methods : {
    goHome(){
      this.$router.push({
        "path" : "/"
      })
    }
  }
}
</script>
<style scoped>
  h1{
    color: red;
  }
</style>
