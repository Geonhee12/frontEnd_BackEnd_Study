<template>

<LoginBox v-show="bshowLoginBox" id="tommy" @login="onLogin" />
<p v-show="login_success">로그인 성공</p>
<p v-show="login_failed">로그인 실패</p>
<hr>

<div v-show="bShowList">
  <TextBox title="you" text="totototoo" />
  <TextBox title="hello" text="hihihi" />
  <TextBox title="인연" text="daasdsad"/>

</div>


</template>

<script>
import TextBox from "./components/TextBox.vue"
import LoginBox from "./components/LoginBox.vue"

export default {
  name: 'App',
  data() {
    return {
      login_success : false,
      login_failed : false,
      bshowLoginBox : true,
      bShowList : false

    }
  },
  components: {
    TextBox,
    LoginBox
  },
  methods:{
    onLogin(result) {
        if(result){
          this.login_success = true
          this.login_failed = false
          this.bshowLoginBox = false
          this.bShowList = true
        }
        else{
          this.login_success = false
          this.login_failed = true
          this.bshowLoginBox = true
          this.bShowList = false
        }
    }
  }
}
</script>

<style>

</style>
