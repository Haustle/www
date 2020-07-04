import Layout from '../components/layout'
import Head from 'next/head'
import { getBookmarks } from '../external-calls/vault';

export default function Library({ bookmarks }){
    return(
        <div className="container">
            <Head>
                <title>Tyrus Miles</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className="h1-name-caption flex-align-items-center margin-bottom-50">
                    <h1>Vault</h1>
                    <span className="margin-left-25">An unordered collection of my favorite bookmarks</span>
                </div>


                {bookmarks.map((bookmark) => (

                    <div className="bookmark-container flex-justify-between">
                        <div className="flex media-scale-hover">
                            <span className="date">{bookmark.date}</span>
                            <div className="media-tag-container">
                                <div className="media-tag">{bookmark.category}</div>
                            </div>
                            <a target="_blank" href={bookmark.url}>
                                <h3 className="media-title-container">{bookmark.title}</h3>
                            </a>
                            
                        </div>

                        <div className="message-square-container"><img src="message-square.svg"></img></div>
                    </div>

                ))}
                


                
            </Layout>

            <style jsx>{`
                .message-square-container img{
                    cursor: pointer;
                }
                .message-square-container{
                    margin-left: 5px;
                }
                .media-title-container{
                    width: 100%;
                }
                .media-tag-container{
                    min-width: 71px;
                    margin-right: 25px;
                }
                .h1-name-caption{
                    margin-top: 50px;
                    margin-bottom: 75px;
                    width: max-content;
                    padding-bottom: 25px;
                    border-bottom: 1px solid black;
                }
                .media-scale-hover:hover{
                    opacity: .8;
                    transform: scale(1.01);
                }
                .media-scale-hover{
                    opacity: .5;
                    transition: all .2s ease-in-out;
                    cursor: pointer;

                }
                .bookmark-container{
                    width: 95%;
                }

                .bookmark-container:not(:first-child){
                    margin-top: 20px;
                }
                .date{
                    margin-right: 20px;
                }
                .media-tag{
                    font-size: 12px;
                    padding: 5px 10px;
                    background-color: black;
                    border-radius: 5px;
                    color: #fff;
                    font-weight: normal;
                    width: max-content;
                }
            `}</style>
        </div>
        
    )
    
}

export async function getStaticProps() {
    const bookmarks = getBookmarks()
    return {
        props: {
            bookmarks
        }
    }
}