import axios from 'axios';
const USER_NAME = process.env.NEXT_PUBLIC_USER_NAME
const USER_NAME_T = process.env.NEXT_PUBLIC_USER_NAME_T
const PASS = process.env.NEXT_PUBLIC_PASSWORD
const PASS_T = process.env.NEXT_PUBLIC_PASSWORD_T
const API_URL = process.env.NEXT_PUBLIC_WP_URL
const WP_REST = process.env.NEXT_PUBLIC_WP_REST


export const sendPost =　(name, text, cate) => {
 
    axios({
        url: API_URL,
        method: 'post',
        auth: {username: USER_NAME, password: PASS},
        data: {
         query: `
         mutation CREATE_POST {
            createPost(
              input: {clientMutationId: "CreatePost", title: "${name}", content: "${text}", categories: {nodes: {slug: "${cate.toLowerCase()}"}, append: false}, slug: "${name}"}
            ) {
              post {
                id
                title
                content
                slug
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
       .then(data => {
         //get created post ID
        let slug = data.data.data.createPost.post.slug
        axios({
          url: `${WP_REST}?status=draft&slug=${slug}`,
          method: 'get',
          auth: {username: USER_NAME, password: PASS},
        })
        .then(res => console.log(res.data[0].id))
        .catch(err => {
            console.log(err.message);
           });

        })
        .catch(err => {
         console.log(err.message);
        });
      
}

export default sendPost

