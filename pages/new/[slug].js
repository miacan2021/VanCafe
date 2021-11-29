import { useRouter} from 'next/router'
import { useState } from 'react';
import { getPost, getAllPostsSlug} from "../../lib/getPost";
import Error from '../error';
import GoogleMapReact from 'google-map-react';
import Link from 'next/link';


const post = ({postData}) =>{
    const [open, setOpen] = useState(false)

    const router = useRouter()
    if(!router.isFallback && !postData?.slug){
        return <Error status={404} />
    }
    const latData = postData.location.lat
    const lngData = postData.location.lng
    const mapLocation = {
        center:{
        lat: latData,
        lng: lngData,
        }
    }

const Pin = () => {
    return(
     <svg onClick={handleOpen} className="w-10 h-10 cursor-pointer transform -translate-x-8 -translate-y-10" fill="bg-b-n" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    )
}
const handleOpen = () => {
    setOpen(!open)
}

const CafeDetail = () => {
return (
<div onClick={handleOpen} className="cursor-pointer bg-white w-40 h-auto p-1 text-b-n rounded-sm flex flex-col justify-center items-center transform -translate-x-28 -translate-y-10">
    <p className="text-md">{postData.title}</p>
    <p className="font-pra text-center mb-1">{postData.adress.adress}</p>
    <p>{postData.time.open} - {postData.time.close}</p>
    <Link href={`https://maps.google.com?q=${latData},${lngData}`}><a className="text-b-p">View on Google Maps</a></Link>
</div>
    )
}
    return(
        <div>
            {router.isFallback?(
                <div>Loading...</div>)
                :
                (
                <div className="bg-primary text-b-n w-screen h-auto">
                <h1 className="font-title text-3xl text-center pt-3 mb-3">{postData.title}</h1>
                <div className="prose text-center break-words lg:prose-x prose-indigo font-para w-9/12 h-auto flex flex-col items-center justify-center mx-auto rounded-sm " dangerouslySetInnerHTML={{__html: postData.content}}/>
                
                <h1 className="font-title text-xl text-center mb-3">ACCESS</h1>
                <h2 className="font-title text-mg text-center">{postData.title}</h2>
                <h3 className="font-pra text-sm text-center mb-1">{postData.adress.adress}</h3>
                <h3 className="font-pra text-sm text-center mb-1">{postData.adress.zip}</h3>
                
                <div className="mx-auto" style={{ height: '300px', width: '300px' }}>
                     <GoogleMapReact
                     bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}}
                     defaultCenter={mapLocation.center}
                     defaultZoom={14}
                     > 
                   
                   {open ?
                   <CafeDetail lat={latData} lng={lngData} />
                    :
                    <Pin lat={latData} lng={lngData} />
                     }
                    </GoogleMapReact>
                </div>
                </div>
                   
    )
    }
        </div>
    )   
}

export default post;

export async function getStaticPaths(){
    const allPosts = await getAllPostsSlug()
    return{
        paths: allPosts.edges.map(({node}) => `/new/${node.slug}`) || [],
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