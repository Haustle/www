import Layout from '../components/layout'
import Head from 'next/head'

export default function About() {
    return (
        <div className="container">
            <Head>
                <title>Tyrus Miles</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <h1 className="h1-name ">About</h1>
                <div>I'm a college student studying comp sci</div>
            </Layout>
        </div>

    )

}