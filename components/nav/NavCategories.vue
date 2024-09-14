<template>
  <div class="flex justify-between md:px-5 lg:px-10 font-raleway font-bold">
    <ul class="nav-menu-categories flex flex-wrap w-full md:w-auto divide-x divide-black md:divide-none border-t md:border-none border-black space-x-5">
      <li>
        <NuxtLink to="/" title="Tutti i temi" exact-active-class="active" class="block font-bold text-lg lg:text-2xl py-6 lg:py-6">Tutti i temi</NuxtLink>
      </li>
      <li v-for="(item, index) in navMenuCategoryItems" :key="index">
        <NuxtLink :to="item.link" :title="item.name" exact-active-class="active" class="block font-bold text-lg lg:text-2xl py-6 lg:py-6">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'NavCategories',
    props: {
      title: {
         type: String,
         required: true
      },
      navMenuCategoryItems: {
         type: Array,
         required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/navmenuCategories.scss";
</style>
