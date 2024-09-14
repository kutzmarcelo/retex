<template>
  <NuxtLink :to="item.link" title="{{ item.title }}" :class="['post-card group flex flex-col overflow-hidden w-full relative border-b md:border-none border-black', { 'bg-color': !item.image }, index === 4 ? 'md:w-full lg:w-4/6' : 'md:w-1/2 lg:w-2/6']">
    
    <div v-if="item.image && item.show_image_mobile" class="block md:hidden p-5 pb-0">
      <figure class="relative">
        <span v-if="item.overlay" :style="{ opacity: item.overlay }" class="`overlay absolute w-full h-full bg-black left-0 top-0 z-10"></span>
        <img :src="item.image" :alt="item.title" class="w-full h-full min-h-[360px] object-cover"/>
        <figcaption v-if="item.image_mobile_caption" v-html="item.image_mobile_caption" class="absolute z-20 left-0
        bottom-0 w-full p-5 text-white text-2xl"></figcaption>
      </figure>
    </div>

    <div :class="`post-card__description md:left-0 md:top-0 p-5 md:p-6 lg:p-10 md:h-full z-30 md:absolute ${item.image ? 'text-black md:text-white' : 'text-white'}`">
      <h3 v-if="item.category" class="post-card__category inline-block text-black font-bold text-2xs">{{ item.category }}</h3>
      <span v-if="item.show_player" class="block mt-4 md:mt-6 max-w-full" v-html="iconPlayer"></span>
      <h2 v-if="item.title" class="text-sm font-bold md:text-lg lg:text-2xl mt-4 md:mt-6">{{ item.title }}</h2>
      
      <div :class="`md:absolute md:left-0 md:bottom-0 mt-4 md:mt-0 md:p-6 lg:p-10`">
        <img v-if="item.author_image" :src="item.author_image" :alt="item.author" class="rounded-full w-8 h-8 md:w-12 md:h-1/2"/>
        <p v-if="item.author" class="text-sm mt-4">{{ item.author }}</p>
        <p v-if="item.date" class="text-2xs mt-2">{{ item.date }}</p>
        <span class="post-card__arrow hidden md:block mt-4 md:mt-6 transition-translate duration-500 group-hover:translate-x-2" v-html="arrowRight"></span>
      </div>

    </div>
    <figure v-if="item.image" class="hidden md:block h-full max-h-[500px] relative z-1">
      <span v-if="item.overlay" :style="{ opacity: item.overlay }" class="`overlay absolute w-full h-full bg-black left-0 top-0 z-20"></span>
      <img :src="item.image" :alt="item.title" class="w-full h-full md:min-h-[480px] object-cover transition-transform duration-500 group-hover:scale-110"/>
    </figure>
  </NuxtLink>
</template>

<script>
  import arrowRight from "~/assets/icons/arrowRight.svg?raw"
  import iconPlayer from "~/assets/icons/player.svg?raw"

  export default {
    name: 'PostItem',
    props: {
      item: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        arrowRight,
        iconPlayer
      }
    }
  }
</script>