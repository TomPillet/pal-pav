<script setup lang="ts">
import { ref } from "vue";

import ObjectStatus from "../Components/ObjectStatus.vue";

const props = defineProps<{
  statusMessage: string;
  pinTailwindColor: string;
  textTailwindColor: string;
  backgroundImageURL: string;
}>();

const backgroundURL = `url(${props.backgroundImageURL})`;
</script>

<template>
  <div
    :class="`slide-bg  absolute h-full w-full p-5 flex flex-col shadow-inner-xl shadow-black text-${textTailwindColor}`"
  >
    <ObjectStatus
      :fontWeight="'font-semibold'"
      :message="statusMessage"
      :pinTailwindColor="pinTailwindColor"
    ></ObjectStatus>

    <div class="mt-auto">
      <h3 class="text-smallTitle font-bold">Illiade - Homère</h3>
      <!-- [TODO] Wrap le contenu avec des '...' à la fin si c'est trop long, à la place du scroll -->
      <p class="pr-6 max-h-24 max-w-full overflow-scroll">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna augue,
        condimentum a finibus ultrices, ullamcorper vel mi. Vivamus tristique rutrum lorem
        in rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna
        augue, condimentum a finibus ultrices, ullamcorper vel mi. Vivamus tristique
        rutrum lorem in rhoncus.
      </p>
    </div>
  </div>
</template>

<style>
.slide-bg {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), v-bind(backgroundURL);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
