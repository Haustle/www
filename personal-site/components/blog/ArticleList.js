import ArticleLink from './ArticleLink'
export default function ArticleList({posts = null}){

    return(
        <>
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
                    margin-top: 100px;
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


                .article-list-container{
                    margin-top: 100px;
                }
                .article-container{
                    width: 100%;
                }
                .year{
                    width: 20%;
                    margin-top: -3px;
                    // margin-bottom: 50px;
                }
            `}</style>
        </>
    )
}