<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Local components
import SwiperLoader from "../Components/SwiperLoader.vue";
import SwiperSlideLayout from "./SwiperSlideLayout.vue";

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

// FORMS AND REQUESTS

const searchTerms = ref("");
const searchItems = ref([]);
const searchBooks = () => {
    console.log('search', searchTerms.value, );
    if (searchTerms.value.length <= 0) {
        console.log('no req => terms empty');
        return;
    }

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms.value}&maxResults=5`)
        .then(function (response) {
            console.log(response.data.items);
            searchItems.value = response.data.items;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            console.log('req end');
        });
}


</script>

<template>
  <div class="block h-60 relative">
    <SwiperLoader
      :class="'absolute z-50 bottom-0 right-0 mb-2 mr-2'"
      :width="'36px'"
      :height="'36px'"
      :strokeWidthFirst="'20px'"
      :strokeWidthSecond="'24px'"
      :runDuration="delay + 'ms'"
      :resetDuration="slideSpeed * 0.9 + 'ms'"
      :reset="resetLoader"
    ></SwiperLoader>

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
      <swiper-slide>
        <SwiperSlideLayout
          :statusMessage="'En cours de lecture'"
          :textTailwindColor="'white'"
          :pinTailwindColor="'working'"
        ></SwiperSlideLayout>
      </swiper-slide>
      <swiper-slide>
        <SwiperSlideLayout
          :statusMessage="'A été lu'"
          :textTailwindColor="'white'"
          :pinTailwindColor="'success'"
        ></SwiperSlideLayout>
      </swiper-slide>
      <swiper-slide>
        <SwiperSlideLayout
          :statusMessage="'A lire'"
          :textTailwindColor="'white'"
          :pinTailwindColor="'beige'"
        ></SwiperSlideLayout>
      </swiper-slide>
    </swiper>
  </div>

  <div>
    <input v-model="searchTerms"/>
    <button type="button" @click="searchBooks">Search</button>

    <ul>
        <li v-for="item in searchItems" class="border">
            <img v-if="item.volumeInfo.imageLinks" :src="item.volumeInfo.imageLinks.smallThumbnail">
            <p>{{item.volumeInfo.title}}</p>
            <p>{{item.volumeInfo.publishedDate}}</p>
            <p>{{item.volumeInfo.description}}</p>
        </li>
    </ul>
  </div>
</template>

<style></style>
