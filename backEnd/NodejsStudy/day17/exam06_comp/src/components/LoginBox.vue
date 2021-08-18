<template>
    <div>
        id : <input type="text" v-model = "user.id">
        passwd : <input type="text" v-model = "user.passwd">
        <button @click="loginCheck">login</button>
    </div>
</template>
<script>
export default {
    name : "LoginBox",
    props:["id"], // 받는 것
    emit:["login"], //내보내는 것
    data(){ // 반드시 데이터로 받아서 뷰 모델에 넣어줘야 한다. props로 받아서 넣어줄 수 는 없다.
        return {
            user: {}
        }
    },
    created(){
        this.user.id = this.id
        this.user.passwd = ''
    },
    methods:{
        loginCheck(){
            if(this.user.passwd == 'qwer'){
                console.log('login success');
                this.$emit("login", true)
            }
            else{
                console.log('login failed');
                this.$emit("login", false)
            }
        }
    }
}
</script>
<style>
    
</style>