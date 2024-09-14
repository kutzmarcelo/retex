<template>
  <header id="header" ref="headerRef" class="header z-50 sticky top-0 left-0 bg-white">
    <Navbar />
    <nav class="navmenu">
      <div class="flex justify-between border-y border-black">
        <NavMenu :menuHeight="contentHeight" />
        <SearchBar />
      </div>
    </nav>
  </header>
</template>

<script>
  import Navbar from '~/components/nav/Navbar.vue'
  import NavMenu from '~/components/nav/NavMenu.vue'
  import SearchBar from '~/components/ui/SearchBar.vue'
  export default {
    name: 'AppHeader',
    components: {
      Navbar,
      NavMenu,
      SearchBar
    },
    data() {
      return {
        headerHeight: 0,
      };
    },
    computed: {
      contentHeight() {
        return `calc(100vh - ${this.headerHeight}px)`;
      },
    },
    mounted() {
      this.updateHeaderHeight();
      window.addEventListener('resize', this.updateHeaderHeight);
    },
    methods: {
      updateHeaderHeight() {
        const headerElement = document.getElementById('header');
        if (headerElement) {
          this.headerHeight = headerElement.offsetHeight;
        }
      },
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateHeaderHeight);
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/header.scss";
</style>
