<template>
  <div class="CreatePost">
    <section class="section">
      <div class="field">
        <label class="label" for="">Title</label>
        <input class="input" type="text" v-model="title">
      </div>

      <div class="field">
        <textarea id=""
          class="textarea"
          name=""
          cols="20"
          v-model="body"
          rows="5">
        </textarea>
      </div>

      <button class="button is-primary" @click="createPost">Submit</button>
    </section>
  </div>
</template>

<script>
import { CREATE_POST_MUTATION, ALL_POSTS_QUERY } from '@/query/post'

export default {
  name: 'CreatePost',
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {
      this.$apollo.mutate({
        mutation: CREATE_POST_MUTATION,
        variables: {
          title: this.title,
          body: this.body
        },
        update: (store, { data: { createPost } }) => {
          const data = store.readQuery({ query: ALL_POSTS_QUERY })
          data.allPosts.push( createPost )
          store.writeQuery({ query: ALL_POSTS_QUERY, data })
        }
      })
    }
  }
}
</script>
