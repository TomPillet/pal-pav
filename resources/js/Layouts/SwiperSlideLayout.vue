<script setup lang="ts">
import { ref, defineProps } from 'vue';

import ObjectStatus from '../Components/ObjectStatus.vue';

const props = defineProps<{
    statusMessage: string;
    pinTailwindColor: string;
    messageTailwindColor: string;
}>();

</script>

<template>

    <div class="h-full">
        <!-- <div class="absolute bg-black h-full w-full opacity-10"></div> -->

        <div class="h-full w-full">
            <ObjectStatus :message="statusMessage" :pinTailwindColor="pinTailwindColor" :textTailwindColor="messageTailwindColor"></ObjectStatus>
        </div>
    </div>

</template>

<style></style>
