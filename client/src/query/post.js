import gql from 'graphql-tag'

export const ALL_POSTS_QUERY = gql`
  query AllPostQuery {
    allPosts {
      id
      title
      body
    }
  }
`

export const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($title: String!, $body: String!) {
    createPost(
      title: $title
      body: $body
    ) {
      id
      title
      body
    }
  }
`
