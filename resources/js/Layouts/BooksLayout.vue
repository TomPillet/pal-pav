<script setup lang="ts">
import { ref } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Local components
import SwiperLoader from '../Components/SwiperLoader.vue';
import SwiperSlideLayout from './SwiperSlideLayout.vue';

const delay = 4000;
const slideSpeed = 400;
const modules = [Autoplay];
const slider = ref(null);
const resetLoader = ref(false);

const onSwiper = (swiper) => {
    slider.value = swiper;
};
const onSlideChange = () => {
    resetLoader.value = !resetLoader.value;
};
</script>

<template>

    <div class="block h-60 relative">
        <SwiperLoader :class="'absolute z-50 bottom-0 right-0 mb-2 mr-2'"
            :width="'36px'" :height="'36px'"
            :strokeWidthFirst="'20px'" :strokeWidthSecond="'24px'"
            :runDuration="delay+'ms'" :resetDuration="slideSpeed*0.9+'ms'"
            :reset="resetLoader"></SwiperLoader>

        <swiper
            @swiper="onSwiper"
            :allowTouchMove="false"
            :class="'h-full'"
            :modules="modules"
            :slides-per-view="1"
            :speed="slideSpeed"
            :autoplay="{ delay: delay }"
            @slideChangeTransitionStart="onSlideChange"
            @slideChangeTransitionEnd="onSlideChange"
        >
            <swiper-slide :class="'shadow-inner-xl shadow-transparentGray bg-passion'">
                <SwiperSlideLayout :statusMessage="'hello'" :messageTailwindColor="'white'" :pinTailwindColor="'working'"></SwiperSlideLayout>
            </swiper-slide>
            <swiper-slide :class="'shadow-inner-xl shadow-transparentGray bg-white'">
                <SwiperSlideLayout :statusMessage="'test'" :messageTailwindColor="'gray'" :pinTailwindColor="'warning'"></SwiperSlideLayout>
            </swiper-slide>
            <swiper-slide :class="'shadow-inner-xl shadow-transparentGray bg-black'">
                <SwiperSlideLayout :statusMessage="'aled'" :messageTailwindColor="'white'" :pinTailwindColor="'beige'"></SwiperSlideLayout>
            </swiper-slide>
        </swiper>
    </div>

</template>

<style></style>
