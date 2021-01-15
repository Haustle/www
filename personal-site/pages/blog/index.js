import Callout from '../../components/callout'
import Link from 'next/link';
import ArticleLink from '../../components/blog/ArticleLink'
import { paths } from '../../paths'




export default function index(){
    return(
        <>
            
            <div className="h1-name flex-align-items-center lib-header">
                <h1 className="lib-title">Blog</h1>
                <span className="margin-left-25">Sharing ideas</span>
            </div>
            
            <div className="flex article-list-container">
                <h2 className="year">2020</h2>
                <div className="article-container">
                    <div>
                        {paths.map((article, index) => (
                            <ArticleLink title={article.title} summary={article.summary} date={article.date} postUrl={article.slug} />

                        ))}
                    </div>

                </div>

            </div>
            
            


            <style jsx>{`
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
                    margin-bottom: 50px;
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
                
                

            `}</style>
        </>
    )
}

