<template>
  <div id="wrapper" class="overflow-x-clip">
    <AppHeader />
    <slot /> <!-- Isso renderiza a página ou conteúdo da rota -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped>
/* Seus estilos aqui */
</style>
