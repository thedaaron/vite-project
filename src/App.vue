<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
   <v-app>
    <v-layout>
      <v-app-bar>
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <v-app-bar-title>
          App Name
          <v-app-bar-nav-icon class="ml-1"></v-app-bar-nav-icon>
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main>
        <router-view/>
         <img alt="Vue logo" src="./assets/logo.png" />
         <HelloWorld msg="Vite + Vue 3 + TypeScript + Vuetify" />
     </v-main>
    </v-layout>
  </v-app>
</template>

<style lang="scss">

</style>
