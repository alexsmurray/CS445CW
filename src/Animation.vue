<script setup>
import HelloWorld from './components/HelloWorld.vue'
import './animation.css'
import Card from 'primevue/card';
import Button from 'primevue/button';

import { ref } from "vue";

const btnState = ref('Flip to back')
const cardRef = ref(0)
const cardInfo = ["What is 1 + 1?", "2!"]


</script>

<template>
  <Transition name="flip-over">
  <Card  v-if="cardRef === 0" class="cardFace" style="width: 25rem; overflow: hidden" >
   
    <template #content>
        <p @click="cardRef = 1">
            {{cardInfo[0]}}
        </p>
    </template>
    
  </Card>
</Transition>
</template>

<style scoped>


.cardFace {
   background: rgb(21, 201, 147);
}

.btn-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

.flip-over-enter-active,
.flip-over-leave-active {
  transition: all 2s;
}

.flip-over-enter-from {
  opacity: 1;
  transform: rotateY(180deg);
}

.flip-over-leave-to {
  opacity: 1;
  transform: rotateY(-180deg);
}

.section {
background-color: #26ef98 !important;
transition: background-color 700ms;
}
.selected {
background-color: #646cff !important;
}








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
/* :class="{'selected':section === 'about', 'section':true}" */
/* <template #footer>
        <div class="btn-container">
          
            <Button v-if="btnState === 'Flip to back'" @click="btnState = 'Flip to front'" severity="contrast" outlined class="w-full" raised>Flip to back</Button>
            <Button v-else-if="btnState === 'Flip to front'" @click="btnState = 'Flip to back'" severity="contrast" outlined class="w-full" raised>Flip to front</Button>
          
        </div>
    </template> */
/* flex gap-4 mt-1 */
</style>
