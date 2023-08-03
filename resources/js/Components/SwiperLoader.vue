<script setup lang="ts">
import { ref, defineProps } from 'vue';

defineProps<{
    duration: string;
    width: string;
    height: string;
    strokeWidthFirst: string;
    strokeWidthSecond: string;
}>();
</script>

<template>
    <div class="loader">
        <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124">
            <circle class="circle-loader" cx="62" cy="62" r="36" fill="none" stroke="#201E24" :stroke-width="strokeWidthFirst" stroke-opacity="0.5"></circle>
            <circle class="circle" cx="62" cy="62" r="36" fill="none" stroke="#fff" :stroke-width="strokeWidthSecond"></circle>
        </svg>
    </div>
</template>

<style>
.loader {
  width: v-bind(width);
  height: v-bind(height);
}

.loader svg {
  display: block;
  width: 100%;
  height: 100%;
}

.circle {
  transform: rotate(-90deg);
  transform-origin: center;
  stroke-dasharray: 380;
  stroke-dashoffset: 380;
  animation: ease-in-out infinite forwards circle_stroke;
  animation-duration: v-bind(duration);
}

@keyframes circle_stroke {
    0% {
        stroke-dashoffset: 380;
    }
    90% {
        stroke-dashoffset: 80;
    }
    96% {
        stroke-dashoffset: 0;
    }
    100% {
        stroke-dashoffset: -370;
    }
}
</style>
