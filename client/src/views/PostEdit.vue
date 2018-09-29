<template>
  <div class="PostEdit">
    <div v-if="$apollo.queries.post.loading" class="loading">
      Loading..
    </div>
    <div v-else class="Post">
      <div class="form">
        <div class="field">
          <label class="label" for="">Title</label>
          <input class="input" type="text" v-model="post.title">
        </div>

        <div class="field">
          <textarea id="" v-model="post.body" class="textarea" name="" cols="30" rows="10"></textarea>
        </div>

        <button class="button" @click="updatePost">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import POST_GET from '@/graph/PostGet.gql'
import POST_UPDATE from '@/graph/PostUpdate.gql'

export default {
  name: 'PostEdit',
  data () {
    return {
      post: {},
    }
  },
  apollo: {
    post: {
      query: POST_GET,
      variables() {
        return {
          id: this.$route.params.id
        }
      },
      update ({ Post }) {
        return Post
      }
    }
  },
  methods: {
    updatePost() {
      this.$apollo.mutate({
        mutation: POST_UPDATE,
        variables: {
          id: this.post.id,
          title: this.post.title,
          body: this.post.body
        },
        update: (store, { data: { updatePost } }) => {
          const data = store.readQuery({
            query: POST_GET,
            variables: {
              id: this.post.id
            }
          })
          data.Post = updatePost
          store.writeQuery({ query: POST_GET, data })
        }
      }).then(data => {
        console.log(data)
        alert("DONE")
      })
    }
  },
}
</script>
