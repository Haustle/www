import '../styles/global.css'
import Head from 'next/head'
import Layout from '../components/layout';
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {

    const router = useRouter();

    // we get the path from the router
    const fullPath = router.route;
    const name = fullPath.split("/")[1]
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)

    // to determine the title of the webpage
    // we ceheck to see if we override the router title with props.name
    
    const headTitle = pageProps.title ?? nameCapitalized;


    return (
        <>
            <Head>
                <title>{name ? `${headTitle} ← Tyrus` : 'Tyrus Miles'}</title>
            </Head>
            
            <Layout category={pageProps.square ?? nameCapitalized} extraMeta={pageProps.extraMeta}>
                <Component {...pageProps} />
            </Layout>
        </>
    ) 
}