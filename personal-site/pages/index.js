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
        <h1 className="h1-name">Tyrus Miles ⌨️</h1>
        <div className="personal-description">Hello I'm Tyrus & currently a computer science student. I'm passionate about <span className="link">design</span> & <span className="link">code</span> amongst other random <span className="link">things</span>. Having fun and trying to build projects at <span className="link">Haustle</span>.</div>
        <div className=" margin-25"></div>
        {/* <div className="home-social-links-container flex roboto-mono">
          <div><i className="fab fa-twitter"></i><span>Twitter</span></div>
          <div><i className="fab fa-github-alt"></i><span>GitHub</span></div>
          <div><i className="far fa-envelope"></i><span>Email</span></div>
        </div> */}

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

        <style jsx>{`
          .home-article-title{
              cursor: pointer;
              padding: 2px;
              font-weight: 600;
              margin-left: 20px;
          }

          .home-article-title:hover{
              background-color: #f4f4f4;
          }
          .home-article-date{
              width: 180px;
              text-align: right;
          }
          .home-article-container{
              font-size: 1.2rem;
              line-height: 1.6em;
          }
          .personal-description{
              line-height: 2;
              font-size: 1.2rem;
          }
          .link{
              border-bottom: 1px dotted black;
              cursor: pointer;
              padding: 2px;
          }
          .link:hover{
              border-radius: 2px;
              color: #fff;
              background-color: #000;
              border-bottom: none;
          }
          .home-social-links-container{
              margin-top: 50px;
          }
          .home-social-links-container div{
              cursor: pointer;
              width: max-content;
              font-size: 1.2rem;
              display: flex;
          }

          .home-social-links-container div:not(:first-child){
              margin-left: 20px;
          }

          .home-social-links-container i{
              margin-right: 10px;
              text-decoration: none;
              display: flex;
              align-items: center;
          }
        `}
        </style>
        <script src="https://kit.fontawesome.com/0ccbef2eb5.js" crossorigin="anonymous"></script>
      </Layout>

    </div>
  )
}
