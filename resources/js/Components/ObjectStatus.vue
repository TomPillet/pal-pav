<script setup lang="ts">
import { ref, onUpdated } from 'vue';

const props = defineProps<{
    fontWeight: string;
    message: string;
    pinTailwindColor: string;
}>()

</script>

<template>
    <div class="flex flex-row items-center">
        <div :class="`h-2 w-2 rounded-full bg-${pinTailwindColor}`"></div>
        <span :class="`ml-[6px] mb-[1px] text-xs ${fontWeight}`">{{ message }}</span>
    </div>
</template>

<style>
</style>
