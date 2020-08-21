import styles from './layout.module.css';
import Head from 'next/head'
import Link from 'next/link';
// import 'animate.css'
// import


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
            <main id={styles['main-wrapper']}>
                <header className={`${styles['nav']} ${styles['page-size']} flex-justify-between`}>

                    <div className='flex-align-items-center'>
                        <div className='bold'>
                            <Link href="/"><a>tyrus.im</a></Link></div>
                        <div className={styles['page-selector']}>{category}</div>
                    </div>

                    <div className={`flex-align-items-center ${styles['other-links']}`}>
                        <div className={styles['pages-list-container']}>
                            <ul id={`${styles['pages-list']}`} className={`flex ${navShownOnce == false ? 'opacity-0' : (pagesVisible ? 'animate__animated animate__fadeInRight animate__faster' : 'animate__animated animate__fadeOutRight animate__faster')}`}>

                            {/* <ul id={`${styles['pages-list']}`} className={`flex ${pagesVisible ? 'animate__animated animate__fadeInRight animate__faster' : 'animate__animated animate__fadeOutRight animate__faster'}`}> */}
                                <li>
                                    <Link href="/projects"><a>Projects</a></Link>
                                </li>
                                <li>
                                    <Link href="/lib"><a>Bookmarks</a></Link>
                                </li>
                            </ul>
                        </div>

                        <div onClick={togglePages} className={styles["pages-button"]}>Pages</div>

                    </div>
                </header>

                <div className={styles['page-size']} >
                    {children}
                </div>
                
            </main>

        </>
    )
}