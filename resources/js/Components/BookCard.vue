<script setup lang="ts">

const props = defineProps<{
    title: string;
    description: string;
}>();

console.log('yep');

</script>

<template>
    <div class="border w-[300px] h-[300px] justify-self-center">
        <h2>{{title}}</h2>
        <p>{{description}}</p>
    </div>
</template>

<style>

</style>
