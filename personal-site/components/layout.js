import Head from 'next/head'
import Link from 'next/link';





export default function Layout({ children, category = "" }) {


    // navShownOnce is initally set to false so on page load opacity 0 is used instead of fade out animation
    const [navShownOnce, setNav] = React.useState(false);
    const [pagesVisible, setPagesVisible] = React.useState(false);

    var togglePages = e => {

        // we set navshownonce to true so we can use the fadeout animation
        setNav(true);
        setPagesVisible(!pagesVisible);
    };
    
    const loadAnimation = 'animate__animated animate__fadeInRight animate__faster';
    const closeAnimation = 'animate__animated animate__fadeOutRight animate__faster'
    return (
        <>
            <Head><link rel="shortcut icon" href="/favicon.ico?v=2" type="image/x-icon" /></Head>
            <main id='main-wrapper'>
                <header className = 'nav page-size flex-justify-between'>

                    {/* this is the left side  of the nav bar */}
                    <div className='flex-align-items-center'>
                        <div className='bold'>
                            <Link href="/"><a>Tyrus</a></Link></div>

                        {/* if we don't want the page route display we just pass in category as "" */}
                        {category != "" ? <div className='page-selector'>{category}</div> : null}
                    </div>




                    {/* This is the container for the pages button and the list of pages it opens */}
                    <div className='flex-align-items-center other-links'>
                        <div className='pages-list-container'>
                            <ul id='pages-list' className={`flex ${navShownOnce == false ? 'opacity-0' : (pagesVisible ? loadAnimation : closeAnimation)}`}>

                                <Link href="/blog"><a><li>Blog</li></a></Link>
                                <Link href="/bookmarks"><a><li>Libary</li></a></Link>

                            </ul>
                        </div>

                        {/* pages button – onclick it has shadow and onhover it has shadow */}
                        <div onClick={togglePages} className={`pages-button ${pagesVisible ? 'pages-button-clicked' : null}`}>Pages</div>

                    </div>
                </header>


                {/* page contents / components that gets passed in*/}
                <div className='page-size' >
                    {children}
                </div>
                
            </main>
            <style jsx>{`
                .page-selector{
                    padding: 5px;
                    border-radius: 5px;
                    border: 1px solid black;
                    margin-left: 15px;
                }
                #pages-list{
                    margin-right: 10px;
                    list-style-type: none;
                    padding: 5px;

                    border-radius: 5px;
                    overflow: hidden;

                }

                #pages-list a:not(:last-child){
                    margin-right: 15px;
                }
                .trans-in{
                    transition: all 1s ease-in-out;
                }

                .pages-list-container{
                    padding: 10px;
                    overflow: hidden;
                }
                #pages-list li:hover{
                    background-color: #efefef;
                    // text-decoration: underline;
                }
                #pages-list li:not(:last-child){
                    // margin-right: 15px;
                }
                #pages-list li{
                    // margin-right: 20px;
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
                    // background:rgba(255,255,255, 0.98);
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