import styles from './layout.module.css';
import Link from 'next/link';

export default function Layout({ children }) {
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
                        <ul className={`flex ${styles['pages-list']}`}>
                            <li>
                                <Link href="/about"><a>About</a></Link>
                            </li>
                            <li>
                                <Link href="/lib"><a>Bookmarks</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles['pages-button']}>
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