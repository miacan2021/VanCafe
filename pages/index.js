import React from 'react'
import FindPost from '../components/FindPost'
import HeadComponent from '../components/Head'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import getNewPosts from '../lib/getNewPosts'
import Link from 'next/link'


const HOME = ({ newPosts }) => {
    return (
    <>
        <HeadComponent/>
        <Nav />
        <Hero />
        <div className="w-screen h-auto bg-b-b">
        <FindPost />
        <div className="flex flex-col md:flex-row justify-around items-center w-full lg:w-11/12 m-auto">
             {newPosts.map((post, i)=>(
                <div className="w-11/12 md:w-3/12 h-70 md:h-96 max-h-96 rounded overflow-hidden shadow-lg bg-primary hover:bg-b-p flex flex-col justify-between items-center text-center mt-3" key={i}>
                 <Link href={`/new/${post.slug}`}>
                <a className="w-full">
                 <img className="w-full h-36 md:h-48 max-h-48 object-cover" src={post.featuredImage.node.sourceUrl} alt="cafe image"/>
                 <div className="px-6 py-4">
                   <div className="font-bold text-md my-3">{post.title}</div>
                   <div className="font-para text-b-n text-xs" dangerouslySetInnerHTML={{ __html: post.excerpt}} ></div>
                 </div>
                 <div className="px-2 pt-1 pb-2">
                   {post.categories.nodes.map((cat, i)=>(<span className="inline-block bg-b-b rounded-full px-3 py-1 text-xs text-primary font-button tracking-wider mr-2 mb-2" key={i}>{cat.name}</span>))}
                 </div>
               </a>
               </Link>
                </div>
            ))}
            </div>
            </div>
    </>
    )
}

export default HOME

export async function getStaticProps(){
    const newPosts = await getNewPosts();
    return {
        props: {newPosts},
    }
}
