<template>
  <v-toolbar fixed class="cyan">
    <span class="home">
      <v-toolbar-title class="mr-4" @click="navigateTo({name: 'root'})">
      My App
      </v-toolbar-title>
    </span>
    

    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn flat dark 
              @click="navigateTo({name: 'login'})"
              v-if="!$store.state.isUserLoggedIn"
        >
          Login
        </v-btn>
    </v-toolbar-items>
 
    <v-toolbar-items>
        <v-btn flat dark 
        @click="navigateTo({name: 'register'})"
         v-if="!$store.state.isUserLoggedIn"
        >
        SignUp
        </v-btn>
    </v-toolbar-items>

    
  </v-toolbar>
</template>

<script>
export default {
  

  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
  .home {
    cursor: pointer;
  }
</style>

