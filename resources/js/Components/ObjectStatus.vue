<script setup lang="ts">
import { ref, defineProps, onUpdated } from 'vue';

const props = defineProps<{
    message: string;
    pinTailwindColor: string;
}>()

</script>

<template>
    <div class="p-5 flex flex-row items-center">
        <div :class="`h-3 w-3 rounded-full bg-${pinTailwindColor}`"></div>
        <span :class="`ml-2 font-semibold text-xs`">{{ message }}</span>
    </div>
</template>

<style>
</style>
