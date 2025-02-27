<script setup>
import Card from 'primevue/card';

import { ref } from "vue";
let HokusaiRef = ref(0);

const hokusaiImages =[
  {ID: "Fugaka", Pic:"src/assets/Hokusai/fugaka.jpg"}, 
  {ID: "Great Wave", Pic:"src/assets/Hokusai/greatwave.jpg"},
  {ID: "Koshu", Pic:"src/assets/Hokusai/koshu.jpg"},
  {ID: "Mannen Bridge", Pic:"src/assets/Hokusai/mannenbridge.jpg"},
  {ID: "Sekiya", Pic:"src/assets/Hokusai/sekiya.jpg"},
  {ID: "Surugadai", Pic:"src/assets/Hokusai/surugadai.jpg"}]

  function increment() {
    if (HokusaiRef < hokusaiImages.length) {
      HokusaiRef++;
    }
  }

  function decrement() {
    HokusaiRef--;
  }



</script>

<template>
  <h1>Art Gallery</h1>
  <h2>Hokusai - "36 Views of Mount Fuji"</h2>

      <Card v-if="HokusaiRef > -1 && HokusaiRef < hokusaiImages.length">
      <template #title>{{hokusaiImages[HokusaiRef].ID}}</template>
        <template #content>
          <img :src="hokusaiImages[HokusaiRef].Pic" /> 
        </template>
      </Card>
      <button @click=HokusaiRef-->Previous</button>
      Image {{ HokusaiRef + 1 }} of 6
      <button @click=HokusaiRef++>Next</button>
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
