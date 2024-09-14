<template>
  <!-- Page Header -->
  <header class="masthead" style="background-image: url('img/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>Clean Blog</h1>
            <span class="subheading">A Blog Theme by Start Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
          <PostList :posts="posts"/>
        </div>
        <div v-else>
          <loading/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue';
import Loading from '@/components/Loading.vue';
import getPosts from '@/composable/getPosts';
export default {
  name: 'HomeView',
  components: {
    PostList, Loading
  },
  setup(){
    const {posts, error, load} = getPosts()

    
    load()

    return {posts, error}
  }
}
</script>
