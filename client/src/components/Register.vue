<template>
  <v-layout>
    <v-flex xs4 offset-xs4>
        <panel title="Register">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form action="" autocomplete="off">
          <v-text-field
          v-model="email"
          label="Email"
          ></v-text-field>
          <v-text-field
            label="Title"
            v-model="password"
            type="password"
            auto-complete="new-password"
          ></v-text-field>
          </form>
          <br>
          <div class="error" v-html="error"></div>
          <br>
          <v-btn class="cyan" @click="register">Register</v-btn>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

 
<script>

import AuthenticationService from '../../services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
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
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
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

