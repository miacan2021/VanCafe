import fetcher from '../lib/fetcher'

const getSlug = async () => {
  const data = await fetcher(
    `
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        content
      }
    }
    `
  )
return data.post
}



export default getSlug
