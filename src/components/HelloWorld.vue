<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="text-h1">{{ msg }}</h1>

  <br>

  <p class="text-body-1">
    Recommended IDE setup:
    <a class="text-decoration-none" href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a class="text-decoration-none" href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p class="text-body-1">See <code>README.md</code> for more information.</p>

  <p class="text-body-1">
    <a class="text-decoration-none" href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a class="text-decoration-none" href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    |
    <a class="text-decoration-none" href="https://next.vuetifyjs.com/en/features/internationalization/" target="_blank">Vuetify</a>
  </p>

  <v-btn variant="outlined" @click="count++">count is: {{ count }}</v-btn>
  
  <p class="text-body-1">
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
