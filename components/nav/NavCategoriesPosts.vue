<template>
   <div class="lg:flex lg:justify-between items-center px-4 md:px-5 lg:px-10 py-4 md:py-6 lg:py-12">
      <h2 v-if="title" class="text-2xl lg:text-[51px] font-bold flex items-center">{{ title }} <span  @click="toggleMenu"  v-html="chevronDown" class="lg:hidden ml-3 -translate-y-[2px] transition-rotate duration-300 " :class="isOpen ? 'rotate-180' : 'rotate-0'"></span> </h2>
      <div v-if="isOpen" class="font-raleway font-bold">
         <ul class="nav-menu-categories__posts flex flex-wrap w-full md:divide-none">
            <li v-for="(item, index) in navMenuCategoryItems" :key="index" class="mr-2 lg:ml-4 lg:mr-0 py-2">
               <NuxtLink :to="item.link" :title="item.name" exact-active-class="active" class="block font-bold uppercase text-2xs py-2 lg:py-3 px-3 lg:px-4" :style="`background-color: ${item.color}`">{{ item.name }}</NuxtLink>
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
  import chevronDown from "~/assets/icons/chevronDown.svg?raw"
  export default {
    name: 'NavCategoriesPosts',
    props: {
      title: {
         type: String,
         required: true
      },
      navMenuCategoryItems: {
         type: Array,
         required: true
      }
    },
    data() {
      return {
        isOpen: true,
        chevronDown
      }
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/navmenuCategoriesPosts.scss";
</style>
