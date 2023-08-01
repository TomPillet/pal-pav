<script setup lang="ts">

const props = defineProps<{
    href: string;
    class?: string;
}>();

</script>

<template>
    <a :href="href" :class="class" draggable="false">
        <slot />
    </a>
</template>
