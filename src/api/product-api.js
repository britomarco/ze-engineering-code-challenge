import zxFetch from './zx-apollo-fetch'

const query = `query pocCategorySearch($id: ID!, $search: String, $categoryId: Int) {
    poc(id: $id) {
      products(categoryId: $categoryId, search: $search) {
        productVariants{
          title
          description
          imageUrl
          price
        }
      }
    }
}`

const getProducts = (pocId, productTitle, categoryId) => {
    return zxFetch({
        query, variables: {
            id: pocId,
            search: productTitle,
            categoryId: categoryId
        }
    }).then(({ data }) => data.poc.products.map(product => product.productVariants[0]))
}

export { getProducts };
