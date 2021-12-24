import fetcher from './fetcher'

const getOtherCities = async () => {
const data = await fetcher(
`
query EAST {
    posts(
      last: 100
      where: {orderby: {field: DATE, order: DESC}, categoryName: "OTHER"}
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

export default getOtherCities

