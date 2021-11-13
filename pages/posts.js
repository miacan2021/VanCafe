import fetcher from '../lib/fetcher'
import { NEW_POSTS } from '../lib/api'

export default function Home({ newPosts}) {
  const posts = newPosts
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      
        
        {posts.map((post,i)=>(
          <div>
          <p key={i}>
           title: {post.title}
           </p>
           <p key={i+2}>
          date: {post.date}
          </p>
          <img key={i+3} src={post.featuredImage.node.sourceUrl} />
        
            </div>
         ))}
  
    </div>
  )
}

export async function getStaticProps(){
  const res = await fetcher(NEW_POSTS)
  const newPosts = res.posts.nodes

  return{
      props:{newPosts},
      revalidate: 1,
  }
}