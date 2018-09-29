<template>
  <div class="home">
    <section class="section">
      <p v-if="$apollo.queries.posts.loading">Loading...</p>
      <div
        v-for="post in posts"
        :key="post.id"
        class="PostItem">
        <h1>
          <router-link :to="{ name: 'PostEdit', params: { id: post.id } }">
            {{ post.title }}
          </router-link>
        </h1>
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
import POSTS_ALL from '@/graph/PostsAll.gql'

export default {
  name: 'home',
  data() {
    return {
      posts: [],
      loading: 0
    }
  },
  apollo: {
    posts: {
      query: POSTS_ALL,
      update ({ allPosts }) {
        return allPosts
      },
    }
  },
  components: {
    CreatePost
  }
}
</script>
