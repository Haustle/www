// import idk from '../styles/utils.module.css';
import styles from './layout.module.css';
import Link from 'next/link';

export default function Layout({ children }) {
    return(
        <main>
            <header className={`${styles['apple-font']} ${styles.nav} ${styles['page-size']} ${styles['flex-justify-between']}`}>
                <div className={styles["flex-align-items-center"]}>
                    <div className={styles.bold}>tyrus.im</div>
                    <div className = {styles['page-selector']}>Home</div>
                </div>

                <div className={`${styles['flex-align-items-center']} ${styles['other-links']}`}>
                    <div>
                        <ul className={`${styles.flex} ${styles['pages-list']}`}>
                            <li>Library</li>
                            <li>About</li>
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
        
    )
}