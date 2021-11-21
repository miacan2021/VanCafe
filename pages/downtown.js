import React, {useState} from 'react'
import Nav from '../components/Nav'
import Link from 'next/link'
import SectionTitle from '../components/SectionTitle'
import getDowntownPosts from '../lib/getDowntownPosts'


const downtown = ({areaPosts}) => {
    const areasBtns = [
        'WEST END',
        'YALE TOWN'
    ]
    const handleAreas = (areaBtn) =>{
        setAreas = `${areaBtn}`
    }
    return (
    <div className="bg-b-b h-screen w-screen"> 
    <Nav />
    <div className="mt-20"> 
    <SectionTitle title={'Downtown Area'} />
    </div>
        {areasBtns.map((areaBtn,i)=>(
            <button key={i} className="m-2" onClick={handleAreas}>{areaBtn}</button>
        ))}
        <div className="flex flex-col md:flex-row justify-around items-center w-full lg:w-11/12 mx-auto">
             {areaPosts.map((post, i)=>(
                <div className="w-11/12 md:w-3/12 h-70 md:h-96 max-h-96 rounded overflow-hidden shadow-lg bg-primary hover:bg-b-p flex flex-col justify-between items-center text-center mt-3" key={i}>
                 <Link href={`downtown/${encodeURIComponent(post.slug)}`}>
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
   
    )
}

export default downtown

export async function getStaticProps(){
    const areaPosts = await getDowntownPosts();
    return {
        props: {areaPosts},
    }
}
