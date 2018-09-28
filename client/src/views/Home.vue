<template>
  <div class="home">
    <section class="section">
      <p v-if="loading">Loading...</p>
      <div
        v-for="post in allPosts"
        :key="post.id"
        class="PostItem">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
      </div>
    </section>

    <section class="section">
      <CreatePost />
    </section>
  </div>
</template>

<script>
import CreatePost from '@/components/CreatePost'
import { ALL_POSTS_QUERY } from '@/query/post'

export default {
  name: 'home',
  data() {
    return {
      allPosts: [],
      loading: 0
    }
  },
  apollo: {
    allPosts: {
      query: ALL_POSTS_QUERY
    }
  },
  components: {
    CreatePost
  }
}
</script>
