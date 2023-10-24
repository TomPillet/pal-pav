<script setup lang="ts">
import { ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Local components
import BookCard from "../Components/BookCard.vue";
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

const books = [
  {
    title: "AAAAAA",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "BBBBB",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "CCCC",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "DDDDD DDDDDDDDDD DDDD DDDDDD",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "EEE",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const categories = [];
</script>

<template>
  <div class="block h-60 relative mb-6">
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
          :backgroundImageURL="'storage/images/odyssee.jpg'"
          :statusMessage="'En cours de lecture'"
          :textTailwindColor="'white'"
          :pinTailwindColor="'working'"
        ></SwiperSlideLayout>
      </swiper-slide>
      <swiper-slide>
        <SwiperSlideLayout
          :backgroundImageURL="'storage/images/odyssee.jpg'"
          :statusMessage="'A été lu'"
          :textTailwindColor="'white'"
          :pinTailwindColor="'success'"
        ></SwiperSlideLayout>
      </swiper-slide>
      <swiper-slide>
        <SwiperSlideLayout
          :backgroundImageURL="'storage/images/odyssee.jpg'"
          :statusMessage="'A lire'"
          :textTailwindColor="'white'"
          :pinTailwindColor="'beige'"
        ></SwiperSlideLayout>
      </swiper-slide>
    </swiper>
  </div>

  <div>
    <div>
      <h2 class="text-mediumTitle font-semibold text-center mb-4">
        Les livres dans ma pile à lire
        <a href="#" class="text-base align-text-top text-bordeaux">{{ books.length }}</a>
      </h2>

      <div
        class="grid gap-8 xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 5xl:grid-cols-7"
      >
        <BookCard
          v-for="(book, index) in books"
          :id="index.toString()"
          :title="book.title"
          :description="book.desc"
          :additionalInfos="'À rendre le 13/09/23'"
          @click="console.log('test')"
        ></BookCard>
      </div>
    </div>

    <div v-if="categories.length > 0">
      <h2 class="text-mediumTitle font-semibold text-center">
        Les catégories de livres
        <a href="#" class="text-base align-text-top text-bordeaux">{{ books.length }}</a>
      </h2>

      <div
        class="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-8 place-content-center"
      >
        <div v-for="book in books" class="border w-[300px] h-[300px]"></div>
      </div>
    </div>
  </div>
</template>

<style></style>
