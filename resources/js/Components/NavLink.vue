<script setup lang="ts">
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps<{
    href: string;
    active?: boolean;
    bgColor: string;
}>();

const classes = computed(() =>
    props.active
        ? `block w-10/12 m-auto py-2 text-center text-white text-lg font-semibold rounded-full hover:shadow-md hover:shadow-${props.bgColor} bg-${props.bgColor}`
        : `block w-10/12 m-auto py-2 text-center text-black text-lg font-semibold rounded-full hover:shadow-md`
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
