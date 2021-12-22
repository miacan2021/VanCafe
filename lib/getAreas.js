import fetcher from './fetcher'

const getAreas = async () => {
  const data = await fetcher(
`

query MyQuery {
  posts(first: 1000) {
    nodes {
      categories {
        nodes {
          slug
        }
      }
    }
  }
}
`)
 return data.posts.nodes
}

export default getAreas
