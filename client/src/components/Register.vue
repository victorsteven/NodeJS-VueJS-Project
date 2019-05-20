<template>
  <div>
    <h1>Register</h1>
    
    <input type="email" v-model="email" placeholder="emter email">
    <input type="password" v-model="password" placeholder="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

 
<script>

import AuthenticationService from '../../services/AuthenticationService'
export default {
  
  data() {
    return {
      email: '',
      password: ''
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
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      }) 

      console.log('this is the response: ', response.data)
    }
  }
}
</script>
