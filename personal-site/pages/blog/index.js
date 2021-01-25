import Callout from '../../components/callout'
import Link from 'next/link';
import ArticleLink from '../../components/blog/ArticleLink'
import posts from '../../paths'




export default function index({posts}){
    return(
        <>
            
            <div className="h1-name flex-align-items-center lib-header">
                <h1 className="lib-title">Blog</h1>
                <span className="margin-left-25">Sharing ideas</span>
            </div>

            <div className=" article-list-container">
                {posts.map((year, index) => (

                    <div className="flex year-article-container">
                    <h2 className="year">{year.year}</h2>
                    <div className="article-container"> 
                        <div>
                            {year.posts.map((post, index) => (
                                <div className="article-link-container"> 
                                    <ArticleLink title={post.title} summary={post.summary} date={post.date} postUrl={post.slug} />
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>

                ))}

            </div>
            
            


            <style jsx>{`
                .year-article-container:not(:first-child){
                    margin-top: 50px;
                }
                .article-link-container{
                    margin-top: 50px;
                }
                .article-link-container:first-child{
                    margin-top: -2px;
                }
                .selected{
                    background-color: #efefef;

                }
                .unselected:hover{
                    background-color: #f8f8f8;
                    
                }
                .sort-by{
                    margin-right: 30px;
                }
                .base-button{
                    cursor: pointer;
                    padding: 2px 5px;
                    border-radius: 5px;
                }
                .base-button:not(:first-child){
                    margin-left: 30px;
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
                .year{
                    // margin-top: 40px;
                    width: 20%;
                    margin-top: -3px;
                    margin-bottom: 50px;
                    // margin-right: 20px;
                }
                .run-down-container{
                    display: flex;
                    justify-content: flex-end
                }
                .run-down{
                    width: 80%;
                    margin-top: 15px;
                }
                
                

            `}</style>
        </>
    )
}

export function getStaticProps(){
    return {
        props : {
            posts: posts()
        }
    }
}
