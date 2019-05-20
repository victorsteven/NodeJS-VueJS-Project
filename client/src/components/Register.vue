<template>

  <div>
    <v-layout column>
      <v-flex xs4 offset-xs2>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>

          <div class="pl-4 pr-4 pt-2 pb-2">
            <input type="email" v-model="email" placeholder="emter email">
            <input type="password" v-model="password" placeholder="password">
            <br>
            <div class="error" v-html="error"></div>
            <br>
            <v-btn class="cyan" @click="register">Register</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
    
  </div>
</template>

 
<script>

import AuthenticationService from '../../services/AuthenticationService'
export default {
  
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  // watch: {
  //   email(value) {
  //     console.log('email has changed: ', value);
  //   }
  // },

  // mounted() {
  //   setTimeout(() => {
  //     this.email ='hello world'
  //   }, 2000)
  // },

  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      }) 
      } catch(error) {
        this.error = error.response.data.error
      }

      console.log('this is the response: ', response.data)
    }
  }
}
</script>

<style>
  .error {
    color: red;
  }
</style>

