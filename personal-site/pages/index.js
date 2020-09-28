import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link';


export default function Home() {
  return (

    <div className="container">
        {/* <h2 className="h1-name">Hello, I'm Tyrus ⌨️</h2> */}
        <div className="personal-description h1-name"><b>Tyrus Miles</b> is currently a computer science student and interested in <span className="link"><Link href="/projects"><a>design & code</a></Link></span> amongst other <Link href="/lib"><a><span className="link">things</span></a></Link>. Building projects at <span className="link"><a href="http://haustle.studio" target="_blank">Haustle</a></span>.</div>



        <div className="more-links">
          <div><b>My social lines</b></div>
        <div><span className="link"><a href="https://twitter.com/haustle" target="_blank">Twitter</a></span></div>
        <div><span className="link"><a href="https://github.com/haustle" target="_blank">GitHub</a></span></div>
        <div><span className="link"><a href="mailto:tyrus@haustle.studio">Email</a></span></div>
        <div><span className="link"><a href="https://github.com/haustle/www" target="_blank">Source Code</a></span></div>

        </div>

      <div className="flex margin-top-50">
        <h2>Thoughts</h2>
        <div className="home-article-wrapper">
          <div className="home-article-container" >
            {/* <div className="flex-align-items-center disabled-thought"> */}
            <div className="flex-align-items-center">
              <div className="home-article-date "><span className="article-status">Example</span></div>
              {/* <div className="home-article-date ">August 5, 2020</div> */}
              <div className=""><Link href="/blog/example"><a className="home-article-title">Hello World</a></Link></div>
            </div>
          </div>

        </div>
        

        </div>

        

        <style jsx>{`
          .home-article-wrapper{
            display: flex;
            align-items: center;
          }
          .more-links{
            line-height: 2;
            margin-top: 30px;
          }
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
              // font-weight: bold;
              margin-left: 20px;
              // color: blue;
          }

          .home-article-title:hover{
              text-decoration: underline;
          }
          .home-article-date{
              width: 100px;
              // width: 180px;
              text-align: right;
          }
          .home-article-container{
              // font-size: 1.0rem;
              // line-height: 2.2em;
          }
          .home-article-container:not(:first-child){
            margin-top: 20px;
          }


          
          .personal-description{
              line-height: 2;
              font-size: 1.0rem;
          }
          
          
          .home-social-links-container{
              margin-top: 50px;
              width: 60%;
              
          }
          .home-social-links-container div{
              cursor: pointer;
              width: max-content;
              font-size: 1.0rem;
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

    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      pageName: 'Root'
    }
  }
}

