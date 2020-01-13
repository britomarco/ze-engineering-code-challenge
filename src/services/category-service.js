import apolloFetch from './apollo-fetch'

const query =
    `query allCategoriesSearch {
    allCategory{
      title
      id
    }
}`

const getCategories = () => {
    return apolloFetch({ query })
        .then(({ data }) => data.allCategory)
        .catch(error => error)
}

export { getCategories };
