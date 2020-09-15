import Head from 'next/head'
import Link from 'next/link';



// the fix for the click to open with useState is https://stackoverflow.com/questions/60939606/next-js-toggle-display-of-a-div-tag

export default function Layout({ children, category = "" }) {


    // navShownOnce is initally set to false so on page load opacity 0 is used instead of fade out animation
    const [navShownOnce, setNav] = React.useState(false);
    const [pagesVisible, setPagesVisible] = React.useState(false);
    var togglePages = e => {

        // we set navshownonce to true so we can use the fadeout animation
        setNav(true);
        setPagesVisible(!pagesVisible);
        console.log(`pagesVisible: ${pagesVisible} – navShownOnce ${navShownOnce}`);
    };
        
    return (
        <>
        <Head><link rel="shortcut icon" href="/favicon.ico"/></Head>
            <main id='main-wrapper'>
                < header className = 'nav page-size flex-justify-between'
                 >

                    <div className='flex-align-items-center'>
                        <div className='bold'>
                            <Link href="/"><a>tyrus.im</a></Link></div>
                        <div className='page-selector'>{category}</div>
                    </div>

                    <div className='flex-align-items-center other-links'>
                        <div className='pages-list-container'>
                            <ul id='pages-list' className={`flex ${navShownOnce == false ? 'opacity-0' : (pagesVisible ? 'animate__animated animate__fadeInRight animate__faster' : 'animate__animated animate__fadeOutRight animate__faster')}`}>

                                <li>
                                    <Link href="/projects"><a>Projects</a></Link>
                                </li>
                                <li>
                                    <Link href="/lib"><a>Bookmarks</a></Link>
                                </li>
                            </ul>
                        </div>

                        <div onClick={togglePages} className='pages-button'>Pages</div>

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
                    border: 1px solid black;
                    margin-left: 15px;
                }
                #pages-list{
                    margin-right: 10px;
                    list-style-type: none;
                    padding: 5px;
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                    border: 1px solid ghostwhite;
                    border-radius: 5px;
                    overflow: hidden;

                }
                .trans-in{
                    transition: all 1s ease-in-out;
                }

                .pages-list-container{
                    padding: 10px;
                    overflow: hidden;
                }
                #pages-list li:hover{
                    color: white;
                    background-color: black;
                    
                }
                #pages-list li:not(:last-child){
                    margin-right: 10px;
                }
                #pages-list li{
                    padding: 2px 5px;
                    border-radius: 5px;
                }


                #pages-button{
                    padding: 10px 0px 10px 10px;
                    font-weight: bold;
                }

                .nav{
                    margin-bottom: 50px;
                    position: sticky;
                    top: 0px;
                    background:rgba(255,255,255, 0.98)
                }
                #main-wrapper{
                    margin-top: 4.0rem;
                    margin-bottom: 4.0rem;
                    font-family: -apple-system,BlinkMacSystemFont,sans-serif;
                }

                .page-size{
                    margin: 0 auto;
                    max-width: 42em;
                    padding: 20px;
                }

                .pages-button{
                    cursor: pointer;
                    margin-left: 5px;
                }





            `}</style>
        </>
    )
}