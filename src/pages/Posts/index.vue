<template>
  <div class="post-page">
    <PostsList />
  </div>
</template>

<script>
import PostsList from '@/components/business/PostsList.vue';

export default {
  name: 'PostsPage',
  components: {
    PostsList
  }
}
</script>
<style>
.post-page {
  background-color: #E1DEFF;
}
</style>