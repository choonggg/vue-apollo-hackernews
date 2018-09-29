import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)

const httpLink = new HttpLink({
  uri: "http://localhost:60000/simple/v1/cjmlei3ki00040157r3k1va1f",
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache,
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

export default apolloProvider
