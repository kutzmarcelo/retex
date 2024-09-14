<template>
  <div class="flex flex-wrap">
    <PostItem v-for="(item, index) in newsPostList.slice(0,5)" :key="index" :item="item" :index="index" />
  </div>
</template>

<script>
  import PostItem from "~/components/posts/PostItem.vue"

  export default {
    name: 'PostList5Itens',
    components: {
      PostItem
    },
    props: {
      newsPostList: {
        type: Array,
        required: true
      }
    }
  }
</script>