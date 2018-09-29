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
import POSTS_ALL from '@/graph/PostsAll.gql'
import CREATE_POST_MUTATION from '@/graph/PostCreate.gql'

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
          const data = store.readQuery({ query: POSTS_ALL })
          data.allPosts.push( createPost )
          store.writeQuery({ query: POSTS_ALL, data })
        }
      })
    }
  }
}
</script>
