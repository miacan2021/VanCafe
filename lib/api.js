export const NEW_POSTS = `
query MyQuery {
  posts(last: 10, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      date
      slug
      title
    }
  }
}

`