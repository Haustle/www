import posts from '../../paths'
import ArticleList from '../../components/blog/ArticleList'
// import fs from 'fs'
import path from 'path'

import getPosts from "../../external-calls/prac"





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
    const posts = getPosts();



    return {
        props : {
            // posts: posts()
            posts
        }
    }
}
