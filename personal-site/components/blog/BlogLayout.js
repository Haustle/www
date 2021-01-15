import Link from 'next/link';
import { ArrowLeft } from 'react-feather'



export default function BlogLayout({ children, meta = {} }){
    const [backhover, setBackHover] = React.useState(false)

    return (
        <>
            <Link href="/blog">
                <a className=" back-button flex-align-items-center" onMouseOver={() => { setBackHover(true) }} onMouseOut={() => { setBackHover(false) }}>
                    <ArrowLeft size="1rem" />
                    <span className={`back-text ${backhover ? 'back-hover ' : null}`}>Back</span>

                </a>
            </Link>
            <article>
                <div className="blog-header">
                    <h1 className="article-title">{meta.title}</h1>

                    {/* these should be clickable to send the user to page of all blogs posts containing that tag*/}
                    <div className="flex-align-items-center">
                        <div>
                            {meta.tags.map((tag, index) => (
                                <Link href={`/tag/${tag}`}>
                                    <a className="article-tag" key={`${tag}${index}`}>
                                        <span  key={`${tag}${index}`}>{tag}</span>

                                    </a>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>

                <div>
                    {children}
                </div>

            </article>


            <style jsx>{`

                article{
                    width: 90%;

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