import React from 'react'
import Link from 'next/link'
import getWestPosts from '../../lib/getWestPosts'
import Nav from '../../components/Nav'

const vancouverEast = ({westPosts}) => {
    return (
      <>
      <Nav />
     <div className='bg-b-b w-screen h-auto min-h-screen pt-36'>
       <h1 className='text-primary text-2xl lg:text-3xl font-title text-center mb-5'>West Vancouver Area</h1>
       <div className="w-16 lg:w-24 h-0.5 bg-primary mx-auto"></div>
      
      <div className="flex flex-col md:flex-row justify-around items-center w-full lg:w-11/12 m-auto pt-10">
      {westPosts.map((post, i)=>(
         <div className="w-9/12 md:w-3/12 h-70 md:h-96 max-h-96 rounded overflow-hidden shadow-lg bg-primary hover:bg-b-p flex flex-col justify-between items-center text-center mt-3" key={i}>
          <Link href={`/west-vancouver/${post.slug}`}>
         <a className="w-full">
         {post.featuredImage ? 
          <img className="w-full h-36 md:h-40 max-h-48 object-cover" src={post.featuredImage.node.sourceUrl} alt="cafe image" /> :
          <img className="w-full h-36 md:h-40 max-h-48 object-cover" src='/Noimage.png' alt="cafe image"/>
         }
          <div className="flex flex-col items-center justify-evenly px-4 h-40 md:h-52">
            <div className="font-bold text-sm my-1">{post.title}</div>
            <div className="font-para text-b-n text-xs" dangerouslySetInnerHTML={{ __html: post.excerpt.length > 55 ? post.excerpt.slice(0, 55).concat('...') : post.excerpt}} ></div>
          <div className="px-2 pt-1 pb-1">
            {post.categories.nodes.map((cat, i)=>(<span className="inline-block bg-b-b rounded-full px-2 text-xs text-primary font-button tracking-wider mr-2 mb-2" key={i}>{cat.name}</span>))}
          </div>
          </div>
        </a>
        </Link>
         </div>
     ))}
     </div>
     <div className="w-24 mx-auto mt-5 bg-primary rounded-md flex justify-center items-cente p-3 hover:bg-b-p hover:text-primary">
           <Link href="/"><a className='flex'>
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"></path></svg>
          Home</a></Link>
          </div>
     </div>
     </>
    )
}

export default vancouverEast

export async function getStaticProps(){
    const westPosts = await getWestPosts();
    return {
        props: {westPosts},
    }
}
