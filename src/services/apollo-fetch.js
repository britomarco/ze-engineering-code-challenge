import { createApolloFetch } from 'apollo-fetch';
const uri = 'https://api.code-challenge.ze.delivery/public/graphql'

export default createApolloFetch({ uri })
