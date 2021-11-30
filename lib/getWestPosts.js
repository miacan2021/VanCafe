import fetcher from '../lib/fetcher'

const getWestPostsPosts = async () => {
const data = await fetcher(
`
query Downtown {
    posts(
      last: 100
      where: {orderby: {field: DATE, order: DESC}, categoryName: "VANCOUVER WEST"}
    ) {
      nodes {
        slug
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
  
`)
 return data.posts.nodes
}

export default getWestPostsPosts

