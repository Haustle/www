import ArticleLink from '../../components/blog/ArticleLink'
import { useRouter } from 'next/router'
import {paths} from '../../paths'
export default function articleTags(){
    const router = useRouter().query;
    // console.log(router)
    const filteredPosts = paths.filter(a => a.tags.includes(router.tag))

    return(
        <> 
            <div className="h1-name flex-align-items-center">
                <h1 className="">Blog</h1>
                <div className="containing">
                    <span className="containing-text">containing</span>  
                    <span className="tag">`{router.tag}`</span>
                </div>

            </div>
            { filteredPosts.length > 0 ? <div>Posts found -> <span className="posts-found bold">{filteredPosts.length}</span></div> : null}
            <div className="flex article-list-container posts-container">
                <h2 className="year">2020</h2>
                <div className="article-container">
                    <div>
                        {filteredPosts.map((article, index) => (
                            <ArticleLink title={article.title} summary={article.summary} date={article.date} postUrl={article.slug} />

                        ))}

                        {filteredPosts.length == 0 ? 'No posts found' : null}
                        
                    </div>

                </div>

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
                    .article-list-container{
                        margin-top: 100px;
                    }
                    .article-container{
                        width: 100%;
                    }
                    .lib-title{
                        font-size: 2rem;
                    }
                    .posts-container{
                        margin-bottom: 50px;

                    }
                    .year{
                        // margin-top: 40px;
                        margin-right: 20px;
                    }
                    .run-down-container{
                        display: flex;
                        justify-content: flex-end
                    }
                    .run-down{
                        width: 80%;
                        margin-top: 15px;
                    }
                `}
            </style>
        </>
    )
}

export function getStaticProps() {
    return {
        props: {
            name: 'Tag'
        }
    }
}

export function getStaticPaths(){
    return{
        paths: paths.map(p => `/tag/${p.slug}`),
        fallback: true
    }
    
}