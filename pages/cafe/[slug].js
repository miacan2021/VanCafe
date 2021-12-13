import { useState } from 'react';
import { getPost, getAllPostsSlug} from "../../lib/getPost";
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import Link from 'next/link';

const token = process.env.NEXT_PUBLIC_MAP_BOX_TOKEN

const post = ({postData}) =>{
    const [viewport, setViewport] = useState({
        latitude: postData.location.lat,
        longitude: postData.location.lng,
        zoom: 14,
      });

    return(
             <div className="bg-primary text-b-n w-screen h-screen">
                <h1 className="font-title text-3xl text-center pt-3 mb-3">{postData.title}</h1>
                <img src={postData.featuredImage.node.sourceUrl} alt="cafe image" className='w-full max-w-xs h-48 object-cover mx-auto' />
                <div className="prose text-center break-words lg:prose-x prose-indigo font-para w-9/12 h-auto flex flex-col items-center justify-center mx-auto rounded-sm " dangerouslySetInnerHTML={{__html: postData.content}}/>
                <h1 className="font-title text-xl text-center mb-3">ACCESS</h1>
                <h2 className="font-title text-mg text-center">{postData.title}</h2>
                <h3 className="font-pra text-sm text-center mb-1">{postData.adress.adress}</h3>
                <h3 className="font-pra text-sm text-center mb-5">{postData.adress.zip}</h3>
            <div className="mapbox-react relative bottom-2 left-1/2 transform -translate-x-1/4">
            <ReactMapGL
            {...viewport}
            width="50vw"
            height="50vh"
            mapStyle='mapbox://styles/miacan2021/ckx2yfuly4moi14lg6ny9mqja'
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken={token}
          >
         <Marker key={postData.title} longitude={postData.location.lng} latitude={postData.location.lat}>
         <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 transform -translate-x-3 -translate-y-5' viewBox="0 0 24 24" fill="none" stroke="#253D55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
         </Marker>
         <Popup
            tipSize={10}
            anchor="top-left"
            longitude={postData.location.lng}
            latitude={postData.location.lat}
            closeOnClick={false}
            closeButton={false}
          >
           <h1 className="font-title text-lg text-center">{postData.title}</h1>
           <Link href={`https://maps.google.com?q=${postData.location.lat},${postData.location.lng}`}><a className="text-b-y text-sm">View on Google Maps</a></Link>
          </Popup>
          </ReactMapGL>
        </div>
        </div>
    )
}

export default post;

export async function getStaticPaths(){
    const allPosts = await getAllPostsSlug()
    return{
        paths: allPosts.edges.map(({node}) => `/cafe/${node.slug}`) || [],
        fallback: false,
    }
    
}

export async function getStaticProps({params}){
    const data = await getPost(params.slug)
    return{
        props:{
            postData: data.post
        }
    }
}