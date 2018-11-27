<template>
  <div>
    <v-dialog v-model="dialogLogin">
      <my-login-card></my-login-card>
    </v-dialog>
    <v-dialog v-model='dialogRegister'>
      <my-register-card></my-register-card>
    </v-dialog>
    <v-btn @click="openLogin">登录</v-btn>
    <v-btn @click='openRegister'>注册</v-btn>
  </div>
</template>

<script>
import loginCard from '../components/loginCard'
import registerCard from '../components/registerCard'
export default {
  data () {
    return {
      dialogLogin: false,
      dialogRegister: false
    }
  },
  methods: {
    openLogin () {
      this.dialogLogin = true
    },
    openRegister () {
      this.dialogRegister = true
    }
  },
  components: {
    'my-login-card': loginCard,
    'my-register-card': registerCard
  }
}
</script>

<style scoped>

</style>
