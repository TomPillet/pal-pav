<script setup lang="ts">
import { ref, defineProps } from "vue";

import ObjectStatus from "../Components/ObjectStatus.vue";

const props = defineProps<{
  statusMessage: string;
  pinTailwindColor: string;
  textTailwindColor: string;
}>();
</script>

<template>
    <div :class="`slide-bg absolute h-full w-full flex flex-col shadow-inner-xl shadow-black text-${textTailwindColor}`">
      <ObjectStatus
        :message="statusMessage"
        :pinTailwindColor="pinTailwindColor"
      ></ObjectStatus>

      <div class="p-5 mt-auto">
        <h3 class="text-slideTitle font-bold font-montserrat tracking-tight">Illiade - Homère</h3>
        <!-- [TODO] Wrap le contenu avec des '...' à la fin si c'est trop long, à la place du scroll -->
        <p class="pr-6 max-h-24 max-w-full overflow-scroll">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna augue, condimentum a finibus ultrices, ullamcorper vel mi. Vivamus tristique rutrum lorem in rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna augue, condimentum a finibus ultrices, ullamcorper vel mi. Vivamus tristique rutrum lorem in rhoncus.</p>
      </div>
    </div>
</template>

<style>
.slide-bg {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("storage/images/odyssee.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
