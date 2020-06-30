import Layout from '../components/layout'
import Head from 'next/head'

export default function Library(){
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
                <div className="bookmark-container flex-align-items-center">
                    <span className="date">06/25</span>
                    <div className="media-tag-container">
                        <div className="media-tag">Podcast</div>
                    </div>
                    <h3>True Sight: The Internation 2019 Finals</h3>
                </div>

                <div className="bookmark-container flex-align-items-center">
                    <span className="date">06/25</span>
                    <div className="media-tag-container">
                        <div className="media-tag">Video</div>
                    </div>
                    <h3>Kanye West: Uncensored and Uncut</h3>
                </div>

                <div className="bookmark-container flex-align-items-center">
                    <span className="date">06/25</span>
                    <div className="media-tag-container">
                        <div className="media-tag">Podcast</div>
                    </div>
                    <h3>HIBT – Dyson w/ James Dyson</h3>
                </div>

                <div className="bookmark-container flex-align-items-center">
                    <span className="date">06/25</span>
                    <div className="media-tag-container">
                        <div className="media-tag">Read</div>
                    </div>
                    <h3>The Desktop Metaphor Must Die</h3>
                </div>

                

                {/* <div>A collection of things I deem noteworthy in my eyes. Whether is be videos, music, articles, podcasts</div> */}
            </Layout>

            <style jsx>{`
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
                .bookmark-container:hover{
                    opacity: .6;
                    transform: scale(1.01);

                }
                .bookmark-container{
                    cursor: pointer;
                    filter: grayscale(1);
                    opacity: .5;
                    transition: all .2s ease-in-out;
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