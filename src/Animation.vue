<script setup>
import Card from "primevue/card";

import { ref } from "vue";

const cards = ref([
  { id: 1, front: "What is the name of the best-selling video game franchise to come out of Disney's home-grown intellectual property?", back: "Kingdom Hearts!", flipped: false },
  { id: 2, front: "What Pokmon holds the title as the first listed creature? This creature is No.1 in the encyclopedic Pokdex and is considered a hybrid grass-poison type.", back: "Bulbasaur!", flipped: false },
  { id: 3, front: "'Korobeiniki,' a folk song about a peddler and a girl haggling over the price of goods, is best known outside Russia as the theme music for what video game?", back: "Tetris!", flipped: false },
  { id: 4, front: "What classic open-ended PC game of 1993 may have been inspired by a Jules Verne novel whose characters were marooned on an island?", back: "Myst!", flipped: false },
  { id: 5, front: "What is the name of the theme music that plays in the final battle against Sephiroth in Final Fantasy 7?", back: "One-Winged Angel!", flipped: false },
  { id: 6, front: "What video game got its name by combining the two top words from the best customer testing results when asked what evokes an epic RPG?", back: "Dragon Age!", flipped: false },
  { id: 7, front: "What is the name of Link’s horse in The Legend of Zelda series?", back: "Epona!", flipped: false },
  { id: 8, front: "Released in 1999, what was the first video game to prominently feature taking pictures with a camera as the main focus of the game?", back: "Pokémon Snap!", flipped: false },
]);

const flipCard = (index) => {
  cards.value[index].flipped = !cards.value[index].flipped;
};
</script>

<template>
  <div class="grid-container">
    <TransitionGroup name="flip-over">
      <div
        v-for="(card, index) in cards"
        :key="cards.id"
        @click="flipCard(index)"
        class="card-container"
        :class="{ flipped: card.flipped }"
      >
      <Card class="cardFace front">
          <template #content>
            <p>{{ card.front }}</p>
          </template>
        </Card>

        <Card class="cardFace back">
          <template #content>
            <p>{{ card.back }}</p>
          </template>
        </Card>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 1600px;
  margin: auto;
}

.card-container {
  width: 300px;
  height: 300px;
  cursor: pointer;
  perspective: 1000px;
  position: relative;
}

.cardFace {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.cardFace.front {
  background: rgb(56, 172, 239);
}

.cardFace.back {
  background: rgb(21, 201, 147);
  transform: rotateY(180deg);
}

.flipped .front {
  transform: rotateY(180deg);
}

.flipped .back {
  transform: rotateY(0deg);
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

</style>
