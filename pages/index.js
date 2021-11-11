import fetcher from '../lib/fetcher'
import { NEW_POSTS } from '../lib/api'

export default function Home({ newPosts }) {
  const posts = newPosts
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      
      <h3 className="text-3xl mb-3 leading-snug">
        
        {posts.map((post,i)=>(
          <p key={i}>
           title: {post.title}
          date: {post.date}
          </p>
         ))}
      </h3>
  
      
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