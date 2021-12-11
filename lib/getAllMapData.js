import fetcher from './fetcher'

const getAllMapData = async () => {
  const data = await fetcher(
`
query getAllMapData {
  posts(first: 10000) {
    nodes {
      location {
        lat
        lng
      }
      time {
        open
        close
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      adress {
        zip
        adress
      }
      title
      slug
    }
  }
}

`)
 return data.posts.nodes
}

export default getAllMapData



