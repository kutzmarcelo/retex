<template>
  <div class="navmenu w-[52px] h-[52px] lg:w-24 lg:h-24 relative">
    <button type="button" @click="toggleMenu" :class="`btn__hamburger border-r border-black relative w-[52px] h-[52px] lg:w-24 lg:h-24 ${isOpen ? 'active' : ''}`">
      <span></span>
      <span></span>
      <span></span>
    </button>
    
    <div v-if="isOpen" class="navmenu__links flex flex-col fade-in bg-white absolute left-0 mt-[1px] top-full w-screen overflow-auto" :style="`height: ${menuHeight}`">
      <div class="w-full flex-grow grid md:grid-cols-2 lg:grid-cols-3 md:divide-x divide-black">
        
        <div class="border-b border-black">
          <NuxtLink to="#" title="Articoli" class="flex flex-col justify-end p-4 md:p-5 lg:p-10 h-full relative group">
            <div class="relative z-10 group-hover:text-white transition-color duration-300">
              <h2 class="text-xl lg:text-5xl font-bold mb-2 lg:mb-4">Articoli</h2>
              <p>Trend, dati e novità del Terzo Settore.</p>
            </div>
            <span class="overlay w-0 h-full absolute group-hover:w-full transition-width duration-500 left-0 top-0 bg-color "></span>
          </NuxtLink>
        </div>

        <div class="border-b border-black">
          <NuxtLink to="#" title="Storie" class="flex flex-col justify-end p-4 md:p-5 lg:p-10 h-full relative group">
            <div class="relative z-10 group-hover:text-white transition-color duration-300">
              <h2 class="text-xl lg:text-5xl font-bold mb-2 lg:mb-4">Storie</h2>
              <p>Letture ed approfondimenti dei fenomeni complessi.</p>
            </div>
            <span class="overlay w-0 h-full absolute group-hover:w-full transition-width duration-500 left-0 top-0 bg-color "></span>
          </NuxtLink>
        </div>

        <div class="border-b border-black">
          <NuxtLink to="#" title="Interviste" class="flex flex-col justify-end p-4 md:p-5 lg:p-10 h-full relative group">
            <div class="relative z-10 group-hover:text-white transition-color duration-300">
              <h2 class="text-xl lg:text-5xl font-bold mb-2 lg:mb-4">Interviste</h2>
              <p>Racconti reali di persone ed organizzazioni.</p>
            </div>
            <span class="overlay w-0 h-full absolute group-hover:w-full transition-width duration-500 left-0 top-0 bg-color "></span>
          </NuxtLink>
        </div>

        <div class="border-b border-black">
          <NuxtLink to="#" title="Opinioni" class="flex flex-col justify-end p-4 md:p-5 lg:p-10 h-full relative group">
            <div class="relative z-10 group-hover:text-white transition-color duration-300">
              <h2 class="text-xl lg:text-5xl font-bold mb-2 lg:mb-4">Opinioni</h2>
              <p>Riflessioni e confronti dei nostri opinionisti.</p>
            </div>
            <span class="overlay w-0 h-full absolute group-hover:w-full transition-width duration-500 left-0 top-0 bg-color "></span>
          </NuxtLink>
        </div>

        <div class="border-b border-black">
          <NuxtLink to="#" title="Podcast" class="flex flex-col justify-end p-4 md:p-5 lg:p-10 h-full relative group">
            <div class="relative z-10 group-hover:text-white transition-color duration-300">
              <h2 class="text-xl lg:text-5xl font-bold mb-2 lg:mb-4">Podcast</h2>
              <p>Un luogo per dare voce ai protagonisti della sostenibilità.</p>
            </div>
            <span class="overlay w-0 h-full absolute group-hover:w-full transition-width duration-500 left-0 top-0 bg-color "></span>
          </NuxtLink>
        </div>

        <div class="border-b border-black">
          <NuxtLink to="#" title="Bookazine" class="flex flex-col justify-end p-4 md:p-5 lg:p-10 h-full relative group">
            <div class="relative z-10 group-hover:text-white transition-color duration-300">
              <h2 class="text-xl lg:text-5xl font-bold mb-2 lg:mb-4">Bookazine</h2>
              <p>Una rivista da leggere e un libro da conservare.</p>
            </div>
            <span class="overlay w-0 h-full absolute group-hover:w-full transition-width duration-500 left-0 top-0 bg-color "></span>
          </NuxtLink>
        </div>

      </div>

      <div class="grid flex-shrink-0 md:grid-cols-4 lg:grid-cols-6 md:divide-x divide-black">
        
        <div class="border-b border-black">
          <NuxtLink to="#" title="Chi siamo" class="block md:text-center py-2 px-6 md:py-4 relative hover:text-white transition-color duration-300 group">
            <h2 class="relative z-10">Chi siamo</h2>
            <span class="overlay w-0 h-full absolute group-hover:w-full transition-width duration-500 left-0 top-0 bg-color "></span>
          </NuxtLink>
        </div>

        <div class="border-b border-black">
          <NuxtLink to="#" title="Comitato editoriale" class="block md:text-center py-2 px-6 md:py-4 relative hover:text-white transition-color duration-300 group">
            <h2 class="relative z-10">Comitato editoriale</h2>
            <span class="overlay w-0 h-full absolute group-hover:w-full transition-width duration-500 left-0 top-0 bg-color "></span>
          </NuxtLink>
        </div>

        <div class="border-b border-black">
          <NuxtLink to="#" title="Servizi" class="block md:text-center py-2 px-6 md:py-4 relative hover:text-white transition-color duration-300 group">
            <h2 class="relative z-10">Servizi</h2>
            <span class="overlay w-0 h-full absolute group-hover:w-full transition-width duration-500 left-0 top-0 bg-color "></span>
          </NuxtLink>
        </div>

        <div class="border-b border-black">
          <NuxtLink to="#" title="Agenda / Eventi" class="block md:text-center py-2 px-6 md:py-4 relative hover:text-white transition-color duration-300 group">
            <h2 class="relative z-10">Agenda / Eventi</h2>
            <span class="overlay w-0 h-full absolute group-hover:w-full transition-width duration-500 left-0 top-0 bg-color "></span>
          </NuxtLink>
        </div>

        <div class="border-b border-black">
          <NuxtLink to="#" title="Mappa dell’attivismo" class="block md:text-center py-2 px-6 md:py-4 relative hover:text-white transition-color duration-300 group">
            <h2 class="relative z-10">Mappa dell’attivismo</h2>
            <span class="overlay w-0 h-full absolute group-hover:w-full transition-width duration-500 left-0 top-0 bg-color "></span>
          </NuxtLink>
        </div>

        <div class="border-b border-black">
          <NuxtLink to="#" title="Inchieste crowdfunding" class="block md:text-center py-2 px-6 md:py-4 relative hover:text-white transition-color duration-300 group">
            <h2 class="relative z-10">Inchieste crowdfunding</h2>
            <span class="overlay w-0 h-full absolute group-hover:w-full transition-width duration-500 left-0 top-0 bg-color "></span>
          </NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<script>  
  export default {
    name: 'NavMenu',
    data() {
      return {
        isOpen: false
      };
    },
    props: {
      menuHeight: {
        type: String,
        required: true
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
  @import "@/assets/styles/navmenu.scss";
</style>
