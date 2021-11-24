import { useRouter } from 'next/router'
import { getPost, getAllPostsSlug} from "../../lib/getPost";
import Error from '../error';

const post = ({postData}) =>{
    const router = useRouter()
    if(!router.isFallback && !postData?.slug){
        return <Error status={404} />
    }
    return(
        <div>
            {router.isFallback?(
                <div>Loading...</div>)
                :
                (
                <div className="bg-primary text-b-n w-screen h-auto">
                <div className="prose-2xl text-center font-title pt-6" dangerouslySetInnerHTML={{__html: postData.title}}/>
                <div className="prose text-center break-words lg:prose-x prose-indigo font-para w-9/12 mx-auto" dangerouslySetInnerHTML={{__html: postData.content}}/>
                </div>
            )}
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