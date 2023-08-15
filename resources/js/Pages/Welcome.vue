<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import Navbar from '../Components/Navbar.vue';
import AnimesAndMangasLayout from '../Layouts/AnimesAndMangasLayout.vue';
import BooksLayout from '../Layouts/BooksLayout.vue';
import FilmsAndSeriesLayout from '../Layouts/FilmsAndSeriesLayout.vue';

defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
    uri?: string;
}>();
</script>

<template>
    <Head title="Accueil" />

    <div class="flex">
        <div class="flex-none basis-60 font-source">
            <Navbar canLogin="canLogin" canRegister="canRegister" :activeSpace="uri" />
        </div>
        <div class="grow bg-white p-10 pb-0 w-3/6 font-montserrat tracking-tight">
            <AnimesAndMangasLayout v-if="uri === 'animes&mangas'"></AnimesAndMangasLayout>
            <BooksLayout v-if="uri === 'books'"></BooksLayout>
            <FilmsAndSeriesLayout v-if="uri === 'films&series'"></FilmsAndSeriesLayout>
        </div>
    </div>

</template>

<style>

</style>
