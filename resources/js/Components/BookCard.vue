<script setup lang="ts">
import { onMounted, ref } from "vue";
import ObjectStatus from "./ObjectStatus.vue";

const props = defineProps<{
  id: string;
  title: string;
  description: string;
  additionalInfos: string;
}>();

const titleID = "bookTitle-" + props.id;
const descID = "bookDescription-" + props.id;
const displayFullTitleBox = ref(false);
const displayFullDescBox = ref(false);

onMounted(() => {
  const titleElement = document.querySelector(`#${titleID}`);
  const descElement = document.querySelector(`#${descID}`);

  displayFullTitleBox.value = titleElement.clientHeight != titleElement.scrollHeight;
  displayFullDescBox.value = descElement.clientHeight != descElement.scrollHeight;
});
</script>

<template>
  <div class="shadow-md rounded-lg w-[300px] h-[300px] justify-self-center">
    <div class="bg-img h-2/5 rounded-t-lg"></div>

    <div class="relative h-3/5 p-2">
      <ObjectStatus
        :fontWeight="'font-light'"
        :message="'En cours de lecture'"
        :pinTailwindColor="'working'"
      ></ObjectStatus>

      <h3
        :id="titleID"
        :class="`mt-1 text-extraSmallTitle font-semibold line-clamp-1`"
        :title="displayFullTitleBox ? title : ''"
      >
        {{ title }}
      </h3>
      <p
        :id="descID"
        class="px-1 text-xs line-clamp-4"
        :title="displayFullDescBox ? description : ''"
      >
        {{ description }}
      </p>

      <p id="moreInfos" class="absolute bottom-0 p-1 text-lightgray text-sm">
        {{ additionalInfos }}
      </p>
    </div>
  </div>
</template>

<style>
.bg-img {
  background-image: url("storage/images/odyssee.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
