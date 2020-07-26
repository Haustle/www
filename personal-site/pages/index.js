import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link';


export default function Home() {
  return (

    <div className="container">
      <Head>
        <title>Tyrus Miles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout category="Home">
        <h1 className="h1-name">Hi, I'm Tyrus ⌨️</h1>
        <div className="personal-description">...currently a computer science student. I'm interested in <span className="link"><Link href="/projects"><a>design & code</a></Link></span> amongst other random <Link href="/lib"><a><span className="link">things</span></a></Link>. Trying to build projects at <span className="link"><a href="http://www.haustle.studio" target="_blank">Haustle</a></span>.</div>
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
          <div className="home-article-container" >
            <div className="flex-align-items-center disabled-thought">
              <div className="home-article-date "><span className="article-status">soon</span></div>
              {/* <div className="home-article-date ">August 5, 2020</div> */}
              <h3 className="home-article-title ">Goals for this website</h3>
            </div>
          </div>
          <div className="home-article-container" >
            <div className="flex-align-items-center disabled-thought">
              <div className="home-article-date"><span className="article-status">soon</span></div>
              <h3 className="home-article-title">Projects I want to complete</h3>
            </div>
          </div>
          <div className="home-article-container" >
            <div className="flex-align-items-center disabled-thought">
              
              <div className="home-article-date ">
                <span className="article-status">soon</span>
              </div>
              <h3 className="home-article-title ">Sophmore Year & Internship</h3>
            </div>
          </div>

        </div>

        

        <style jsx>{`
          .article-status{
            padding: 2px 5px;
            border-radius: 2px;
            background-color: black;
            color: white;
            margin-left: 10px;
          }
          .disabled-thought {
            opacity: .5;
            // text-decoration: line-through;
            webkit-user-select: none; /* Safari */        
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE10+/Edge */
            user-select: none; /* Standard */
            pointer-events: none;
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
              // color: blue;
          }

          .home-article-title:hover{
              // background-color: #f4f4f4;
              text-decoration: underline;
              // color: white;
          }
          .home-article-date{
              width: 180px;
              text-align: right;
          }
          .home-article-container{
              // font-size: 1.2rem;
              // line-height: 2.2em;
          }
          .home-article-container:not(:first-child){
            margin-top: 20px;
          }

          
          .personal-description{
              line-height: 2;
              font-size: 1.2rem;
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

