import { useRouter } from 'next/router'
import { getPost, getAllPostsSlug} from "../../lib/getPost";
import Error from '../error';
import GoogleMapReact from 'google-map-react';


const post = ({postData}) =>{
    const router = useRouter()
    if(!router.isFallback && !postData?.slug){
        return <Error status={404} />
    }
    const mapLocation = {
        center:{
        lat: postData.location.lat,
        lng: postData.location.lng,
        }
    }

const AnyReactComponent = ({ text }) => <div>{text}</div>;
    return(
        <div>
            {router.isFallback?(
                <div>Loading...</div>)
                :
                (
                <div className="bg-primary text-b-n w-screen h-auto">
                <div className="prose-2xl text-center font-title pt-6" dangerouslySetInnerHTML={{__html: postData.title}}/>
                <div className="prose text-center break-words lg:prose-x prose-indigo font-para w-9/12 h-auto flex flex-col items-center justify-center mx-auto rounded-sm " dangerouslySetInnerHTML={{__html: postData.content}}/>
                <div className="mx-auto" style={{ height: '300px', width: '300px' }}>
                     <GoogleMapReact
                     bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}}
                     defaultCenter={mapLocation.center}
                     defaultZoom={14}
                     > 
                     <AnyReactComponent
                     lat={postData.location.lat}
                     lng={postData.location.lng}
                     text="My Marker"
                   />
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