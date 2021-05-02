import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Layout({ children, category, extraMeta}) {
    const router = useRouter();
    const pubDir = router.asPath;

    // console.log(extraMeta)
    const meta = {
        title: 'Tyrus Miles',
        description: 'CS Student at ASU',
        ...extraMeta
    }

    const host = "https://tyrus.im"

    return (
        <>
            <Head>
                {/* go to julian lehr website for tips on meta tag */}
                <link rel="shortcut icon" href="/favicon.ico?v=2" type="image/x-icon" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:url" content={`${host}${pubDir}`} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="tyrus.im" />
                <meta property="og:type" content={pubDir.startsWith("/blog") ? "article" : "website"} />

                {meta.image ? 
                    (<>
                        <meta property="og:image" content={`${host}${pubDir}/${meta.image}`} />
                        <meta name="twitter:card" content="summary_large_image"/>
                        <meta name="twitter:site" content="@haustle"/>
                        <meta name="twitter:title" content={meta.title}/>
                        <meta name="twitter:description" content={meta.description}/>
                        <meta name="twitter:creator" content="@haustle"/>
                    </>)
                : null }
            </Head>

            <main id='main-wrapper'>
                <header className = 'nav page-size flex-justify-between'>

                    {/* this is the left side  of the nav bar */}
                    <div className='flex-align-items-center'>
                        <div className='bold'>
                            <Link href="/"><a>Tyrus</a></Link></div>

                        {/* if we don't want the page route display we just pass in category as "" */}
                        {category ? <div className='page-selector'>{category}</div> : null}
                    </div>

                    {/* This is the container for the pages button and the list of pages it opens */}
                    <div className='flex-align-items-center other-links'>
                            <ul id='pages-list' className='flex'>
                                <Link href="/blog"><a><li>Blog</li></a></Link>
                                <Link href="/bookmarks"><a><li>Libary</li></a></Link>
                            </ul>
                    </div>
                </header>

                <div className='page-size' >
                    {children}
                </div>
                
            </main>
            <style jsx>{`
                .page-selector{
                    padding: 5px;
                    border-radius: 5px;
                    margin-left: 15px;
                }
                #pages-list{
                    list-style-type: none;
                    padding: 10px;
                }

                #pages-list a:not(:last-child){
                    margin-right: 15px;
                }

                #pages-list li:hover{
                    background-color: #efefef;
                }

                #pages-list li{
                    padding: 2px 5px;
                    border-radius: 5px;
                    transition: all 0.2s
                    width: max-content;
                }

                .nav{
                    z-index: 9999;
                    margin-bottom: 50px;
                    position: sticky;
                    top: 0px;
                    background:rgba(255,255,255,0.99);
                }
                #main-wrapper{
                    margin-top: 4.0rem;
                    margin-bottom: 4.0rem;
                    font-family: Inter,-apple-system,BlinkMacSystemFont,sans-serif;
                }

                .page-size{
                    margin: 0 auto;
                    max-width: 42em;
                    padding: 20px;
                    font-size: 1.1rem;
                }

                .pages-button{
                    cursor: pointer;
                    margin-left: 5px;
                    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.0);
                    border: 1px solid transparent;
                    padding: 5px 10px;
                    border-radius: 10px;
                }

                .pages-button:hover{
                    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
                    border: 1px solid greysmoke;
                }

                .pages-button-clicked{
                    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
                    border: 1px solid greysmoke;
                }

            `}</style>
        </>
    )
}