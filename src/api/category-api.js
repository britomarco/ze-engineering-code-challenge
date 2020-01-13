import zxFetch from './zx-apollo-fetch'

const query =
    `query allCategoriesSearch {
    allCategory{
      title
      id
    }
}`

const getCategories = () => {
    return zxFetch({ query })
        .then(({ data }) => data.allCategory)
        .catch(error => error)
}

export { getCategories };