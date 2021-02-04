// import BackButton from '../BackButton'
import Link from 'next/link';


export default function BlogLayout({ children, meta = null }){

    return (
        <>

            <article>
                <div className="blog-header">
                    <div className="date">{meta.date}</div>
                    <h1 className="article-title">{meta.title}</h1>

                    {/* these should be clickable to send the user to page of all blogs posts containing that tag*/}
                    <div className="flex-align-items-center">
                        <div className="tag-container">
                            {meta.tags.map((tag, index) => (
                                <Link href={`/tag/${tag}`} key={tag}>
                                    <a className="article-tag" >
                                        <span>{tag}</span>

                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    {children}
                </div>
                

                <div className="more-links">
                    {/* <div className="underline">Like</div> */}

                </div>
            </article>


            <style jsx>{`
                .subscribe-text{
                    margin-bottom: 20px;
                    font-size: 1rem;
                }
                #subscribe-button{
                    font-size: .9rem;
                    margin-left: 10px;
                    padding: 5px 10px;
                    // border: 1px solid grey;
                    border-radius: 5px;
                }
                #subscribe-box{
                    outline: none;
                    border: 1px solid grey;
                    font-size: 1.1rem;
                    padding: 5px 10px;
                    border-radius: 5px;
                }

                .tag-container{
                    margin-top: 15px;
                }
                .date{
                    margin-bottom: 20px;
                }
                .new-bold{
                    font-weight: 500;
                }
                .more-links{
                    margin-top: 100px;
                }
                .more-links .link:not(:first-child){
                    margin-left: 25px;
                }

                .sign-up-container{
                    margin-top: 75px;
                    padding-top: 30px;
                    border-top: 1px solid #bcc2cc;
                }

                .back-button{
                    width: max-content;
                }


                .back-text{
                    margin-left: 20px;
                    padding: 2px 5px;
                    border-radius: 5px;
                    transition: all 0.2s;
                    width: max-content;
                }


                .back-hover{
                    background-color: #efefef;

                }

            `}</style>
        </>
    )
}

export function getStaticProps() {
    return {
        props: {
            name: 'Library'
        }
    }
}