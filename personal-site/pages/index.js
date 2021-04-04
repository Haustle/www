

import A from '../components/A'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <div className="about-container">
        <h2 className="h1-name index-h1">Tyrus Miles </h2>
        {/* <div className="personal-description grey">Currently <span className="no-select">–></span> Engineering (BSc) student</div> */}


      </div>
      <div className="more-links-vert">
        <div className="link"><A href="https://twitter.com/haustle">Twitter</A></div>
        <div className="link"><A href="mailto:tyrus@haustle.studio">Email</A></div>
        <div className="link"><A href="https://github.com/haustle">GitHub</A></div>
        <div className="link"><A href="https://haustle.studio">Haustle 😌</A></div>

      </div>


      <style jsx>{`
        .changes{
          // font-size: .8rem;
          margin-top: 20px;
        }
        .more-links-vert .link:not(:first-child){
          margin-top: 25px;
        }

        .about-container{
          margin-bottom: 50px;
        }

        .index-h1{
          font-size: 2rem;
        }
        .personal-description{
            line-height: 2.5rem;
        }
        
      `}
      </style>
    </>
  )
}

