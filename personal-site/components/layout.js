import styles from './layout.module.css';
import Head from 'next/head'
import Link from 'next/link';
// import


// the fix for the click to open with useState is https://stackoverflow.com/questions/60939606/next-js-toggle-display-of-a-div-tag

export default function Layout({ children }) {

    // this is a state
    const [pagesVisible, setPagesVisible] = React.useState(false);
    var togglePages = e => {
        setPagesVisible(!pagesVisible)
    };

    return(
        <>
        <main id={styles['main-wrapper']}>
            <header className={`${styles.nav} ${styles['page-size']} flex-justify-between`}>
                <div className='flex-align-items-center'>
                    <div className='bold'>
                        <Link href="/"><a>tyrus.im</a></Link></div>
                    <div className = {styles['page-selector']}>Home</div>
                </div>

                <div className={`flex-align-items-center ${styles['other-links']}`}>
                    <div>
                        <ul id={`${styles['pages-list']}`} className={`flex ${pagesVisible ? '' : 'display-none'}`}>
                            <li>
                                <Link href="/projects"><a>Projects</a></Link>
                            </li>
                            <li>
                                <Link href="/lib"><a>Bookmarks</a></Link>
                            </li>
                        </ul>
                    </div>
                        <div id={styles['pages-button']} className={pagesVisible ? styles['border-left'] : ''} onClick={togglePages}>
                        <div className="">Pages</div>
                    </div>

                </div>
            </header>

            <div className={styles['page-size']}>
                {children}
            </div>

        </main>
       
        </>
    )
}