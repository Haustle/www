import {withTag , allTags} from '../../paths'
import ArticleList from '../../components/blog/ArticleList'
import fs from 'fs'
import path from 'path'
// import BackButton from '../../components/BackButton'



export default function articleTags({ filteredPosts, tag }){

    const arrow = "->"
    return(
        <> 
            {/* <BackButton/> */}

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

export async function getStaticProps({ params }) {
    const tag = params.tag

    const postDir = path.join(process.cwd(), "posts");
    const filenames = fs.readdirSync(postDir).filter(file => file.endsWith(".mdx"))

    let postMap = new Map()

    for (var x = 0; x < filenames.length; x++) {
        const newpath = path.join(postDir, filenames[x]);
        const metadata = require(`../../posts/${filenames[x]}`).meta
        const year = metadata.year;
        if (!postMap.has(year)) {
            postMap.set(year, [])
            // console.log(year)
        }
        postMap.get(year).push(metadata)

    }

    // get all posts
    const retPost = [...postMap].map(([year, posts]) => ({ year, posts }));

    var filteredPosts = await withTag(tag, retPost)
    filteredPosts = filteredPosts.filter(year => year.posts.length > 0)

    return {
        props: {
            tag,
            filteredPosts
        }
    }
}



export async function getStaticPaths(){
    const postDir = path.join(process.cwd(), "posts");
    const filenames = fs.readdirSync(postDir).filter(file => file.endsWith(".mdx"))

    let postMap = new Map()

    for (var x = 0; x < filenames.length; x++) {
        const newpath = path.join(postDir, filenames[x]);
        const metadata = require(`../../posts/${filenames[x]}`).meta
        const year = metadata.year;
        if (!postMap.has(year)) {
            postMap.set(year, [])
            // console.log(year)
        }
        postMap.get(year).push(metadata)

    }

    // get all posts
    const retPost = [...postMap].map(([year, posts]) => ({ year, posts }));

    var tags = await allTags(retPost);

    // this params property needs to be the same as file name [tag].js -> tag
    tags = tags.map(t => ({params : { tag : t}}))
    return{
        paths: tags,
        fallback: false
    }
    
}