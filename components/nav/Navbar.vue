<template>
  <div class="navbar">
    <div class="flex justify-between md:px-5 lg:px-10">
      <ul class="flex w-full md:w-auto divide-x divide-black md:divide-none border-t md:border-none border-black">
        <li class="w-1/2 md:w-auto"><NuxtLink to="#" title="Contribuisci" class="block text-center md:text-left p-2 lg:p-3 lg:pl-0">Contribuisci</NuxtLink></li>
        <li class="w-1/2 md:w-auto"><NuxtLink to="#" title="Abbonati" class="block text-center md:text-left p-2 lg:p-3">Abbonati</NuxtLink></li>
      </ul>
      <BtnLogin />
    </div>
  </div>
</template>

<script>
  import BtnLogin from "~/components/buttons/BtnLogin.vue"
  
  export default {
    name: 'Navbar',
    components: {
      BtnLogin
    }
  }
</script>