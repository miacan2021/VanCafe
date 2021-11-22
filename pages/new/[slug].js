import fetcher from "../../lib/fetcher";
import { useRouter } from 'next/router'
import { getPost, getAllPostsSlug} from "../../lib/getPost";

const post = ({postData}) =>{
    const router = useRouter()
    if(!router.isFallback && !postData?.slug){
        return <div>ERR{console.log(postData.title)}</div>
        // <ErrorPage status={404} />
    }
    return(
        <div>
            {router.isFallback?(
                <div>Loading...</div>)
                :
                (<div dangerouslySetInnerHTML={{__html: postData.title}}/>
            )}
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