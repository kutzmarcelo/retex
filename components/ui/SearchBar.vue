<template>
  <div :class="`searchbar h-[52px] lg:h-24 relative flex items-center transition-width duration-1000 ${isOpen ? 'flex-grow w-full' : 'w-[52px] lg:w-24'}`">
    
    <button v-if="isOpen" type="button" @click="toggleMenu" :class="`btn__hamburger border-l border-black relative flex justify-center items-center w-[52px] lg:w-24 h-[52px] lg:h-24 ${isOpen ? 'active' : ''}`">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_4150_137)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L3.70711 21.7071C3.31658 22.0976 2.68342 22.0976 2.29289 21.7071C1.90237 21.3166 1.90237 20.6834 2.29289 20.2929L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289Z" fill="#E63036"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z" fill="#E63036"/>
        </g>
        <defs>
        <clipPath id="clip0_4150_137">
        <rect width="20" height="20" fill="white" transform="translate(2 2)"/>
        </clipPath>
        </defs>
      </svg>
    </button>
      
    
    <button v-if="!isOpen" type="button" @click="toggleMenu" :class="`btn__hamburger border-l border-black relative flex justify-center items-center w-[52px] lg:w-24 h-[52px] lg:h-24 ${isOpen ? 'active' : ''}`">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_4150_416)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8461 3.53846C6.81022 3.53846 3.53846 6.81022 3.53846 10.8461C3.53846 14.8821 6.81022 18.1538 10.8461 18.1538C14.8821 18.1538 18.1538 14.8821 18.1538 10.8461C18.1538 6.81022 14.8821 3.53846 10.8461 3.53846ZM2 10.8461C2 5.96055 5.96055 2 10.8461 2C15.7317 2 19.6923 5.96055 19.6923 10.8461C19.6923 15.7317 15.7317 19.6923 10.8461 19.6923C5.96055 19.6923 2 15.7317 2 10.8461Z" fill="#E63036"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0136 16.0138C16.314 15.7134 16.801 15.7134 17.1014 16.0138L21.7745 20.6868C22.0749 20.9872 22.0749 21.4743 21.7745 21.7747C21.4741 22.0751 20.9871 22.0751 20.6867 21.7747L16.0136 17.1016C15.7132 16.8012 15.7132 16.3142 16.0136 16.0138Z" fill="#E63036"/>
        </g>
        <defs>
          <clipPath id="clip0_4150_416">
            <rect width="20" height="20" fill="white" transform="translate(2 2)"/>
          </clipPath>
        </defs>
      </svg>        
    </button>
    
    <div v-if="isOpen" class="bg-white flex flex-grow">
      <input type="text" name="Search" id="search" placeholder="Cerca" class="h-[52px] lg:h-24 w-full p-4">
      <button v-if="isOpen" type="button" :class="`btn__hamburger relative flex justify-center items-center w-[52px] lg:w-24 h-[52px] lg:h-24 ${isOpen ? 'active' : ''}`">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_4150_416)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8461 3.53846C6.81022 3.53846 3.53846 6.81022 3.53846 10.8461C3.53846 14.8821 6.81022 18.1538 10.8461 18.1538C14.8821 18.1538 18.1538 14.8821 18.1538 10.8461C18.1538 6.81022 14.8821 3.53846 10.8461 3.53846ZM2 10.8461C2 5.96055 5.96055 2 10.8461 2C15.7317 2 19.6923 5.96055 19.6923 10.8461C19.6923 15.7317 15.7317 19.6923 10.8461 19.6923C5.96055 19.6923 2 15.7317 2 10.8461Z" fill="#E63036"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0136 16.0138C16.314 15.7134 16.801 15.7134 17.1014 16.0138L21.7745 20.6868C22.0749 20.9872 22.0749 21.4743 21.7745 21.7747C21.4741 22.0751 20.9871 22.0751 20.6867 21.7747L16.0136 17.1016C15.7132 16.8012 15.7132 16.3142 16.0136 16.0138Z" fill="#E63036"/>
          </g>
          <defs>
            <clipPath id="clip0_4150_416">
              <rect width="20" height="20" fill="white" transform="translate(2 2)"/>
            </clipPath>
          </defs>
        </svg>        
      </button>
    </div>
  </div>
</template>

<script>  
  export default {
    name: 'SearchBar',
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      }
    }
  }
</script>