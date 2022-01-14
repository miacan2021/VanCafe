import axios from 'axios';
const USER_NAME = process.env.NEXT_PUBLIC_USER_NAME
const PASS = process.env.NEXT_PUBLIC_PASSWORD
const API_URL = process.env.NEXT_PUBLIC_WP_URL
const WP_REST = process.env.NEXT_PUBLIC_WP_REST


export const sendPost = (name, text, cate, img) => {
    axios({
      //add new post via graphQL
        url: API_URL,
        method: 'post',
        auth: {username: USER_NAME, password: PASS},
        data: {
         query: `
         mutation CREATE_POST {
            createPost(
              input: {clientMutationId: "CreatePost", title: "${name}", content: "${text}", categories: {nodes: {slug: "${cate.toString().toLowerCase()}"}, append: false}, slug: "${name}"}
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
       .then(res => {
         //get created post ID
        if(img){
        let slug = res.data.data.createPost.post.slug
        axios({
          url: `${WP_REST}posts?status=draft&slug=${slug}`,
          method: 'get',
          auth: {username: USER_NAME, password: PASS},
        })
        .then(res => {
          // post image to wp media via REST api
          const id = res.data[0].id
          const formData = new FormData()
          formData.append( 'file', img )
          formData.append( 'title', id )
          axios({
            url: `${WP_REST}media`,
            method: 'post',
            auth: {username: USER_NAME, password: PASS},
            data: formData
          })
          .then(res => {
            //post featured image to the post
            const imgId = res.data.id
            axios({
              url: `${WP_REST}posts/${id}`,
              method: 'post',
              auth: {username: USER_NAME, password: PASS},
              data: {"featured_media": imgId}
                })
            })
          .catch(err => {
            console.log(err.message);
           })
          })}
        })
        .catch(err => {
         console.log(err.message);
        });
      
}

export default sendPost

