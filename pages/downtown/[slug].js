import { useState } from 'react';
import { getPost, getAllPostsSlug} from "../../lib/getPost";
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import Link from 'next/link';
import { useRouter } from 'next/router';

const token = process.env.NEXT_PUBLIC_MAP_BOX_TOKEN

const post = ({postData}) =>{
    const [viewport, setViewport] = useState({
        latitude: postData.location.lat,
        longitude: postData.location.lng,
        zoom: 14,
      });
    const router = useRouter()

    return(
             <div className="bg-primary text-b-n w-screen h-screen">
                <div className="relative h-1/3 w-full">
                <img src={postData.featuredImage.node.sourceUrl} alt="cafe image" className='absolute z-0 top-0 left-0 w-full h-80 object-cover' />
                <div className="absolute top-28 left-1/2 transform -translate-x-1/2 p-3 w-1/2 rounded-lg border">
                <h1 className="font-title sm:text-lg md:text-3xl text-center px-3 py-5 bg-primary rounded-lg border">{postData.title}</h1>
                </div>
                </div>
                <div className="md:pt-10 lg:pt-20 pb-10 bg-primary">
                <div className="mx-auto p-3 sm:w-full md:w-2/3 rounded-lg border">
                <div className='rounded-lg border py-5'>
                <div className="flex justify-around items-center flex-col lg:flex-row px-5">
                <div className="detail md:pr-0 lg:pr-3">
                <h1 className="font-title text-xl text-center pt-2 pb-3">POINTS</h1>
                <div className="mx-auto w-16 h-0.5 bg-b-n mb-3 rounded"></div>
                <div className="prose text-center break-words lg:prose-x prose-indigo font-para flex flex-col items-center justify-center mx-auto" dangerouslySetInnerHTML={{__html: postData.content}}/>
                <h1 className="font-title text-xl text-center pt-5 pb-3">ACCESS</h1>
                <div className="mx-auto w-16 h-0.5 bg-b-n rounded mb-3"></div>
                <h2 className="font-title text-mg text-center">{postData.title}</h2>
                <h3 className="font-pra text-sm text-center mb-1">{postData.adress.adress}</h3>
                <h3 className="font-pra text-sm text-center mb-5">{postData.adress.zip}</h3>
                </div>
         <div className="mapbox-react relative ml-0 lg:ml-3">
         <ReactMapGL
            {...viewport}
            width="40vh"
            height="30vh"
            mapStyle='mapbox://styles/miacan2021/ckx2yfuly4moi14lg6ny9mqja'
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken={token}
            style={{margin:'auto'}}
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
           <h1 className="font-title text-md text-center">{postData.title}</h1>
           <Link href={`https://maps.google.com?q=${postData.location.lat},${postData.location.lng}`}><a className="text-b-y text-sm font-para">View on Google Maps</a></Link>
          </Popup>
          </ReactMapGL>
        </div>
        </div>
        </div>
        </div>
        <button className='mt-5 flex justify-center items-center hover:bg-b-p hover:text-primary rounded-xl p-3 border mx-auto' onClick={() => router.back()}>
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"></path></svg>
          Back
        </button>
        </div>
        </div>
    )
}

export default post;


export async function getStaticPaths(){
    const allPosts = await getAllPostsSlug()
    return{
        paths: allPosts.edges.map(({node}) => `/downtown/${node.slug}`) || [],
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