export const NEW_POSTS = `
query MyQuery {
  posts(last: 3, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      date
      slug
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}

`