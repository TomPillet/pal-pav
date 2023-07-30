<script setup lang="ts">
import NavLink from "./NavLink.vue";

defineProps<{
  canLogin?: boolean;
  canRegister?: boolean;
}>();
</script>

<template>
  <div class="bg-white w-60 h-screen drop-shadow-2xl absolute flex flex-col">
    <div class="basis-1/12 flex flex-col justify-end">
        <img class="mx-auto" src="storage/images/logo-default.svg" alt="Logo PalPav" />
    </div>

    <div class="my-auto">
        <ul class="block flex-col">
            <li class="my-12">
                <NavLink :href="'#'" :bgColor="'red'" :active="false">
                    <font-awesome-icon :icon="['fas', 'torii-gate']" />
                    Animes & mangas
                </NavLink>
            </li>
            <li class="my-12">
                <NavLink :href="'#'" :bgColor="'passion'" :active="true">
                    <font-awesome-icon :icon="['fas', 'clapperboard']" />
                    Films & séries
                </NavLink>
            </li>
            <li class="my-12">
                <NavLink :href="'#'" :bgColor="'bordeaux'" :active="false">
                    <font-awesome-icon :icon="['fas', 'book']" />
                    Livres
                </NavLink>
            </li>
        </ul>
    </div>

    <div class="basis-2/12 flex flex-col justify-end ">
        <ul class="flex flex-row justify-evenly mb-12 px-4">
            <li class="rounded-full hover:shadow-md">
                <a href="#">
                    <font-awesome-icon class="text-gray text-2xl p-4" :icon="['fas', 'user']" />
                </a>
            </li>
            <li class="rounded-full hover:shadow-md">
                <a href="#">
                    <font-awesome-icon class="text-gray text-2xl p-4" :icon="['fas', 'bell']" />
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>

<style></style>
