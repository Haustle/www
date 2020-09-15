import '../style.css'
import 'animate.css'
import Head from 'next/head'
import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {

    return (
        <>
            <Head>
                {pageProps.pageName == undefined || pageProps.pageName == 'Home' ?
                    (<title>tyrus.im</title>) :
                    (<title>{pageProps.pageName} « tyrus.im</title>)
                }                
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout category={pageProps.pageName}>
                <Component {...pageProps} />
            </Layout>
        </>
    ) 
}