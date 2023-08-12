<script setup lang="ts">
import { ref, defineProps, onUpdated } from 'vue';

const props = defineProps<{
    runDuration: string;
    resetDuration: string;
    width: string;
    height: string;
    strokeWidthFirst: string;
    strokeWidthSecond: string;
    reset: boolean;
}>()

</script>

<template>
    <div class="loader">
        <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124">
            <circle cx="62" cy="62" r="32" fill="none" stroke="#201E24" :stroke-width="strokeWidthFirst" stroke-opacity="0.5"></circle>
            <circle id="circle" :class="{ animateStroke: !reset, animateReset: reset }" cx="62" cy="62" r="32" fill="none" stroke="#fff" :stroke-width="strokeWidthSecond"></circle>
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

#circle {
  transform: rotate(-90deg);
  transform-origin: center;
  stroke-dasharray: 380;
  stroke-dashoffset: 380;
}

.animateStroke {
  animation: ease-in-out forwards v-bind(runDuration) run_stroke;
}
.animateReset {
  animation: ease-in-out forwards v-bind(resetDuration) reset_stroke;
}

@keyframes run_stroke {
    0% {
        stroke-dashoffset: 380;
    }
    95%, 100% {
        stroke-dashoffset: 180;
    }
}

@keyframes reset_stroke {
    from {
        stroke-dashoffset: 180;
    }
    to {
        stroke-dashoffset: -200;
    }
}
</style>
