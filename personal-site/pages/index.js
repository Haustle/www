import Head from 'next/head'
import Layout from '../components/layout'
export default function Home() {
  return (

    <div className="container">
      <Head>
        <title>Tyrus Miles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="h1-name ">Tyrus Miles ⌨️</h1>
        <div className=" personal-description">Hello I'm Tyrus. I'm passionate about <span className="link">design</span> & <span className="link">code</span> amongst other random <span className="link">things</span>. Building fun side projects with friends at <span className="link">Haustle</span>.</div>
        <div className=" margin-25"></div>
        <div className="home-social-links-container flex roboto-mono">
          <div><i className="fab fa-github-alt"></i><span>GitHub</span></div>
          <div><i className="fab fa-twitter"></i><span>Twitter</span></div>
        </div>

        <div>
          <h1 className="h1-name">Sandbox</h1>
          <div className="home-article-container">
            <div className="flex-align-items-center">
              <div className="home-article-date">June 25, 2020</div>
              <div className="home-article-title">What is Haustle?</div>
            </div>

            <div className="flex-align-items-center">
              <div className="home-article-date">December 31, 2020</div>
              <div className="home-article-title">Goals for 2021</div>
            </div>

            <div className="flex-align-items-center">
              <div className="home-article-date">February 5, 2019</div>
              <div className="home-article-title">Cool...random snippets</div>
            </div>
          </div>

        </div>
      </Layout>

    </div>
  )
}
