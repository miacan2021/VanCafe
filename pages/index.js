import React from 'react'
import FindPost from '../components/FindPost'
import HeadComponent from '../components/Head'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import getNewPosts from '../lib/getNewPosts'
import Link from 'next/link'
import Form from '../components/Form'
import getAreas from '../lib/getAreas'

const HOME = ({ newPosts, listAreas }) => {
    const areas = []
    listAreas.forEach((area)=>{area.categories.nodes.forEach((a)=>areas.push(a.slug))})
    return (
    <>
        <HeadComponent />
        <Nav />
        <Hero />
        <div id='find-cafes' className=" bg-b-b pb-10">
        <FindPost />
        <div className="flex flex-col md:flex-row justify-around items-center w-full lg:w-11/12 m-auto">
             {newPosts.map((post, i)=>(
                <div className="w-9/12 md:w-3/12 h-70 md:h-96 max-h-96 rounded overflow-hidden shadow-lg bg-primary hover:bg-b-p flex flex-col justify-between items-center text-center mt-3" key={i}>
                 <Link href={`/new/${post.slug}`}>
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
            </div>
            <Form areas={areas} />
    </>
    )
}

export default HOME

export async function getStaticProps(){
    const newPosts = await getNewPosts();
    const listAreas = await getAreas();
    return {
        props: {newPosts, listAreas}
    }
}
