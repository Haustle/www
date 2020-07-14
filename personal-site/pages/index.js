import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link';


export default function Home() {
  return (

    <div className="container">
      <Head>
        <title>tyrus miles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="h1-name">Hi, I'm Tyrus ⌨️</h1>
        <div className="personal-description">...currently a computer science student. I'm interested in <span className="link"><Link href="/projects"><a>design & code</a></Link></span> amongst other random <Link href="/lib"><a><span className="link">things</span></a></Link>. Trying to build projects at <span className="link bold"><a href="http://www.haustle.studio" target="_blank">Haustle</a></span>.</div>
        <div className=" margin-25">
          <div className="home-social-links-container flex-justify-between">
            <a href="http://www.twitter.com/haustle" target="_blank">
                <div className="flex-align-items-center social-platform-container"><img src="twitter.svg"></img><span>Twitter</span></div>
            </a>
            <a href="http://www.github.com/haustle" target="_blank">
                <div className="flex-align-items-center social-platform-container"><img src="github.svg"></img><span>GitHub</span></div>
            </a>
            <a href="mailto:tyrus.miles@gmai.com">
              <div className="flex-align-items-center social-platform-container"><img src="mail.svg"></img><span>Email</span></div>
            </a>
          </div>
        </div>
       

        <div>
          <h1 className="h1-name">Thoughts</h1>
          <div className="home-article-container">
            <div className="flex-align-items-center disabled-thought">
              <div className="home-article-date">August 5, 2020</div>
              <h3 className="home-article-title">My first Internship</h3>
            </div>
          </div>

        </div>

        

        <style jsx>{`
          .disabled-thought {
            opacity: .5;
            text-decoration: line-through;
            webkit-user-select: none; /* Safari */        
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE10+/Edge */
            user-select: none; /* Standard */
          }

          .social-platform-container:hover{
            // border-bottom: 1px solid black;
            text-decoration: underline;
          }

          .social-platform-container{
            // padding-bottom: 2px;
            // border-bottom: 1px solid transparent;
          }
          .home-article-title{
              cursor: pointer;
              padding: 2px;
              // font-weight: 600;
              margin-left: 20px;
          }

          .home-article-title:hover{
              background-color: #f4f4f4;
              // color: white;
          }
          .home-article-date{
              width: 180px;
              text-align: right;
          }
          .home-article-container{
              // font-size: 1.2rem;
              line-height: 2.2em;
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
              width: 60%;
              
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

          .home-social-links-container img{
            height: 20px;
              margin-right: 10px;
              text-decoration: none;
              display: flex;
              align-items: center;
          }
        `}
        </style>
      </Layout>

    </div>
  )
}

// if we need to make calls to some api or grab information, we use this function

