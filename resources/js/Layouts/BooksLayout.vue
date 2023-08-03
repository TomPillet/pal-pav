<script setup lang="ts">
import { ref } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Local components
import SwiperLoader from '../Components/SwiperLoader.vue';

const delay = 8000;
const slideSpeed = 200;
const modules = [Autoplay];
const slider = ref(null);
const onSwiper = (swiper) => {
    slider.value = swiper;
};
</script>

<template>

    <div class="block h-60 relative">
        <SwiperLoader :class="'absolute z-50 bottom-0 right-0 mb-2 mr-2'"
            :duration="delay+slideSpeed+'ms'"
            :width="'36px'" :height="'36px'"
            :strokeWidthFirst="'20px'"
            :strokeWidthSecond="'24px'"></SwiperLoader>

        <swiper
            @swiper="onSwiper"
            :allowTouchMove="false"
            :class="'h-full'"
            :modules="modules"
            :slides-per-view="1"
            :speed="slideSpeed"
            :autoplay="{ delay: delay, disableOnInteraction: false }"
        >
            <swiper-slide :class="'bg-orange-200'">Slide 1</swiper-slide>
            <swiper-slide :class="'bg-blue-200'">Slide 2</swiper-slide>
            <swiper-slide :class="'bg-yellow-200'">Slide 3</swiper-slide>
        </swiper>
    </div>

</template>

<style></style>
