<template>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>注册</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
               <v-text-field prepend-icon='person' v-model='userName' name='login' label='Login' type="text" :rules='[rules.required]'></v-text-field>
              <v-text-field prepend-icon='lock' v-model='password' name='password' label='Password' type='password' :rules='[rules.required]'></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-action>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="register">Login</v-btn>
          </v-card-action>
        </v-card>

</template>

<script>
import * as api from '../api/index'
export default {
  data () {
    return {
      userName: '',
      password: '',
      isLoading: false,
      rules: {
        required: value => !!value || '不能为空'
      }
    }
  },
  methods: {
    register () {
      this.checkForm() && this.requestRegister()
    },

    async requestRegister () {
      let data = {
        userName: this.userName,
        password: this.password
      }
      let res = await api.register(data)
      console.log(res)
    },
    checkForm () {
      let isOk = false
      if (this.userName && this.password) {
        isOk = true
        console.log(isOk)
      }
      console.log(isOk)
      return isOk
    }
  }
}
</script>

<style scoped>

</style>
