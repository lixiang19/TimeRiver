<template>

        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>登陆</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon='person' v-model='userName' name='login' label='Login' type="text" :rules='[rules.required]'></v-text-field>
              <v-text-field prepend-icon='lock' v-model='password' name='password' label='Password' type='password' :rules='[rules.required]'></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-action>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">Login</v-btn>
            <v-btn @click="test">test</v-btn>
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
    login () {
      this.checkForm() && this.requestLogin()
    },

    async requestLogin () {
      if (this.isLoading) return
      this.isLoading = true
      let data = {
        userName: this.userName,
        password: this.password
      }
      try {
        let result = await api.login(data)
        if (result.status === 200 && result.data.data) {
          localStorage.setItem('USER_TOKEN', result.data.data)
          this.$router.push({ path: '/' })
        }
      } catch (error) {
        this.isLoading = false
        console.log(error)
      }
    },
    checkForm () {
      let isOk = false
      if (this.userName && this.password) {
        isOk = true
      }
      return isOk
    }
  }
}
</script>

<style scoped>

</style>
