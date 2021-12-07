import axios from 'axios';
const USER_NAME = process.env.NEXT_PUBLIC_USER_NAME
const PASS = process.env.NEXT_PUBLIC_PASSWORD
const API_URL = process.env.NEXT_PUBLIC_WP_URL


export const sendPost =　(name, text, cate) => {
    axios({
        url: API_URL,
        method: 'post',
        auth: {username: USER_NAME, password: PASS},
        data: {
         query: `
         mutation CREATE_POST {
            createPost(
              input: {clientMutationId: "CreatePost", title: "${name}", content: "${text}", categories: {nodes: {slug: "${cate.toLowerCase()}"}, append: false}}
            ) {
              post {
                id
                title
                content
                categories{
                  nodes {
                    slug
                  }
                }
              }
            }
          }          
          `
        }
       })
        .catch(err => {
         console.log(err.message);
        });
      
}

export default sendPost

