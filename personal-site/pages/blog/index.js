import posts from '../../paths'
import ArticleList from '../../components/blog/ArticleList'
import fs from 'fs'
import path from 'path'





export default function index({posts}){




    return(
        <>
            
            <div className="h1-name flex-align-items-center">
                <h1 className="lib-title">Blog</h1>
                <span className="margin-left-25">Sharing ideas</span>
            </div>

            
            
            <ArticleList posts={posts}/>


            <style jsx>{`

                .lib-title{
                    font-size: 2rem;
                }

            `}</style>
        </>
    )
}

export function getStaticProps(){
    const postDir = path.join(process.cwd(), "posts");
    const filenames = fs.readdirSync(postDir).filter(file => file.endsWith(".mdx"))

    let postMap = new Map()

    for(var x = 0; x < filenames.length; x++){
        const newpath = path.join(postDir,filenames[x]);
        const metadata = require(`../../posts/${filenames[x]}`).meta
        const year = metadata.year;
        if(!postMap.has(year)){
            postMap.set(year,[])
            // console.log(year)
        }
        postMap.get(year).push(metadata)

    }


    const retPost = [...postMap].map(([year, posts]) => ({year, posts}));

    return {
        props : {
            // posts: posts()
            posts: retPost
        }
    }
}
