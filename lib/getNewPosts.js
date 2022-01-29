import fetcher from '../lib/fetcher'

const getNewPosts = async () => {
  const data = await fetcher(
`
  query NewPosts {
    posts(first: 3, where: {orderby: {field: DATE, order: DESC}}) {
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

export default getNewPosts



