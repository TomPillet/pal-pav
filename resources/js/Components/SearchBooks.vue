<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

// FORMS AND REQUESTS

const searchTerms = ref("");
const searchItems = ref([]);
const searchBooks = () => {
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
