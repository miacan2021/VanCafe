import axios from 'axios';
const USER_NAME = process.env.NEXT_PUBLIC_USER_NAME
const PASS = process.env.NEXT_PUBLIC_PASSWORD
const API_URL = process.env.NEXT_PUBLIC_WP_URL


export const sender =　() => {
    axios({
        url: API_URL,
        method: 'post',
        auth: {username: USER_NAME, password: PASS},
        data: {
         query: `
         mutation CREATE_POST {
            createPost(
              input: {clientMutationId: "CreatePost", title: "new!!!", content: "sample", categories: {nodes: {slug: "downtown"}, append: false}}
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
        .then(res => {
         console.log(res.data);
        })
        .catch(err => {
         console.log(err.message);
        });
      
}

export default sender

