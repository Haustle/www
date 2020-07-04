import styles from './layout.module.css';
import Head from 'next/head'
import Link from 'next/link';



export default function Layout({ children }) {

    function closePages(){
        console.log('this is:', this);
    }

    return(
        <>
        {/* <Head>
        </Head> */}
        <main id={styles['main-wrapper']}>
            <header className={`${styles.nav} ${styles['page-size']} flex-justify-between`}>
                <div className='flex-align-items-center'>
                    <div className='bold'>
                        <Link href="/"><a>tyrus.im</a></Link></div>
                    <div className = {styles['page-selector']}>Home</div>
                </div>

                <div className={`flex-align-items-center ${styles['other-links']}`}>
                    <div>
                        <ul id={`${styles['pages-list']}`} className={`flex `}>
                            <li>
                                <Link href="/about"><a>About</a></Link>
                            </li>
                            <li>
                                <Link href="/lib"><a>Bookmarks</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div id={styles['pages-button']} onClick = {() => this.closePages()}>
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