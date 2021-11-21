import fetcher from '../lib/fetcher'

const getDowntownPosts = async () => {
const data = await fetcher(
`
query Downtown {
    posts(
      last: 3
      where: {orderby: {field: DATE, order: DESC}, categoryName: "DOWNTOWN"}
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

export default getDowntownPosts

