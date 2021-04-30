import '../styles/global.css'
import 'animate.css'
import Head from 'next/head'
import Layout from '../components/layout';
import { useRouter } from 'next/router'
import BackButton from '../components/BackButton'

export default function MyApp({ Component, pageProps }) {

    const router = useRouter();
    const noBackButtonHere = [""]

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
                {/* if the page is nested */}
                <title>{name ? `${headTitle} ← Tyrus` : 'Tyrus Miles'}</title>
            </Head>
            
            {/* main layout wrapper */}
            {/* can override nameCapitalized if you specify in page what you want the tag to be */}
            <Layout category={pageProps.square ?? nameCapitalized} meta={pageProps.meta}>
                {/* {!(noBackButtonHere.includes(name)) ? <BackButton/> : null} */}
                <Component {...pageProps} />
            </Layout>
        </>
    ) 
}