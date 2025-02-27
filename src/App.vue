<script setup>
import HelloWorld from './components/HelloWorld.vue'

import { ref } from "vue";
let TacoCount = ref(0);
let BurritoCount = ref(0)
let ChimichangaCount = ref(0)

</script>

<template>
  <h2>Your Order</h2>
  <h3>Taco</h3>
  <button @click=TacoCount-->-</button>
  {{TacoCount}}
  <button @click=TacoCount++>+</button>
  <h3>Burrito</h3>
  <button @click=BurritoCount-->-</button>
  {{BurritoCount}}
  <button @click=BurritoCount++>+</button>
  <h3>Chimichanga</h3>
  <button @click=ChimichangaCount-->-</button>
  {{ChimichangaCount}}
  <button @click=ChimichangaCount++>+</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
