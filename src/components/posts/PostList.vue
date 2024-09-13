<template>
  <div class="post-">
    <div v-for="post in posts" :key="post.id" >
    
    </div>
  </div>
  <div class="post-preview" v-for="post in posts" :key="post.id">
    <PostSingle :post="post"/>
      </div>
      <hr>
</template>

<script>
import PostSingle from './PostSingle.vue';
export default {
    props: ['posts'],
    components: {
        PostSingle
    },
}
</script>

<style>

</style>