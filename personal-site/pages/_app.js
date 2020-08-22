import '../style.css'
import 'animate.css'
import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {

    return (
        <Layout category={pageProps.pageName}>
            <Component {...pageProps} />
        </Layout>
    ) 
}