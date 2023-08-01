<script setup lang="ts">
import NavLink from "./NavLink.vue";
import { Link } from '@inertiajs/vue3';

defineProps<{
  canLogin?: boolean;
  canRegister?: boolean;
  activeSpace: string;
}>();

const navLinks = [
    { id: 'animes&mangas', color: 'red', icon: 'torii-gate', title: 'Animes & mangas' },
    { id: 'films&series', color: 'passion', icon: 'clapperboard', title: 'Films & series' },
    { id: 'books', color: 'bordeaux', icon: 'book', title: 'Livres' },
]
</script>

<template>
  <div class="bg-white w-60 h-screen drop-shadow-2xl absolute flex flex-col">
    <div class="basis-1/12 flex flex-col justify-end">
        <img class="mx-auto" src="storage/images/logo-default.svg" alt="Logo PalPav" />
    </div>

    <div class="my-auto">
        <ul class="block flex-col">
            <li v-for="link in navLinks" class="my-12">
                <NavLink :href="`/${link.id}`" :bgColor="link.color" :active="(activeSpace === link.id)">
                    <font-awesome-icon :icon="['fas', link.icon]" />
                    {{link.title}}
                </NavLink>
            </li>
        </ul>
    </div>

    <div class="basis-2/12 flex flex-col justify-end ">
        <ul class="flex flex-row justify-evenly mb-12 px-4">
            <li class="user-btns">
                <Link :href="'/login'">
                    <font-awesome-icon class="user-btns-icon" :icon="['fas', 'user']" />
                </Link>
            </li>
            <li class="user-btns">
                <Link :href="'#'">
                    <font-awesome-icon class="user-btns-icon" :icon="['fas', 'bell']" />
                </Link>
            </li>
        </ul>
    </div>
  </div>
</template>

<style>
@tailwind components;
@layer components {
    .user-btns {
        border-radius: theme('borderRadius.full');
    }
    .user-btns:hover {
        box-shadow: theme('boxShadow.md');
    }
    .user-btns-icon {
        color: theme('colors.gray');
        font-size: theme('fontSize.2xl');
        padding: theme('padding.4')
    }
}
</style>
