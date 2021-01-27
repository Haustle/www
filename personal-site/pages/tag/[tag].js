import {withTag , allTags} from '../../paths'
import ArticleList from '../../components/blog/ArticleList'



export default function articleTags({ filteredPosts, tag }){

    const arrow = "->"
    return(
        <> 
            <div className="h1-name flex-align-items-center">
                <h1 className="">Blog</h1>
                <div className="containing">
                    <span className="containing-text">containing</span>  
                    <span className="tag">`{tag}`</span>
                </div>

            
            </div>
            <div>
                {filteredPosts ? <ArticleList posts={filteredPosts}/>: "loading..."}
            </div>

            <style jsx>
                {`
                    .posts-found{
                        margin-left: 15px;
                    }
                    h1{
                        font-size: 2rem;
                    }
                    .containing-text{
                        margin-right: 25px;
                    }
                    .containing{
                        margin-left: 25px;
                    }
                    .tag{
                        cursor: pointer;
                        font-size: 1.3rem;
                        height: max-content;
                        background-color: #efefef;
                        padding: 2px;
                        border-radius: 10px;
                    }

                    .lib-title{
                        font-size: 2rem;
                    }


                `}
            </style>
        </>
    )
}

export async function getStaticProps({params}) {
    const tag = params.tag
    var filteredPosts = await withTag(tag)
    filteredPosts = filteredPosts.filter(year => year.posts.length > 0)

    return {
        props: {
            tag,
            filteredPosts
        }
    }
}



export async function getStaticPaths(){
    var tags = await allTags();

    // this params property needs to be the same as file name [tag].js -> tag
    tags = tags.map(t => ({params : { tag : t}}))
    return{
        paths: tags,
        fallback: false
    }
    
}