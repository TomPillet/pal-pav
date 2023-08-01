<script setup lang="ts">
import { computed } from 'vue';
import Link from './Link.vue';

const props = defineProps<{
    href: string;
    active?: boolean;
    bgColor: string;
}>();

const commonClasses = "block w-5/6 m-auto p-2 text-center text-lg font-semibold rounded-full hover:shadow-md border-2";

const classes = computed(() =>
    props.active
        ? `${commonClasses} text-white border-${props.bgColor} bg-${props.bgColor}`
        : `${commonClasses} text-gray border-white hover:border-gray`
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
