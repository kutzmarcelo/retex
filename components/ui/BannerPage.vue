<template>
  <div class="banner bg-gray-light border-b lg:border-none border-black flex w-full p-3 py-5 md:p-6 lg:p-16 lg:px-20 items-center text-black md:text-white md:min-h-[247px] relative">
    <span v-html="quoteIcon" class="relative z-20 -translate-y-10 -translate-x-2 lg:-translate-y-12 lg:-translate-x-2 w-9 lg:w-14"></span>
    <div class="relative w-full z-20 lg:p-10 lg:px-10">
      <h3 v-if="title" class="text-2xl md:text-3xl lg:text-[40px] font-bold">{{ title }}</h3>
      <p v-if="author" class="text-sm md:text-base italic lg:mt-2">{{ author }}</p>
    </div>
    <figure class="absolute z-10 w-full h-full left-0 top-0 hidden md:block">
      <img :src="image" :alt="title" class="object-cover w-full h-full">
    </figure>
  </div>
</template>

<script>
  import quoteIcon from "~/assets/icons/quote.svg?raw"
  export default {
    name: 'BannerPage',
    props: {
      title: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      },   
      image: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        quoteIcon
      }
    }
  }
</script>