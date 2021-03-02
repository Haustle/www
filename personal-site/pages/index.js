

import A from '../components/A'
export default function Home() {
  return (
    <>
      <div className="about-container">
        <h2 className="h1-name index-h1">Tyrus Miles </h2>
        {/* <div className="personal-description grey">Currently <span className="no-select">–></span> Engineering (BSc) student</div> */}


      </div>
      <div className="more-links-vert">
        <div className="link"><A link="https://twitter.com/haustle" text="Twitter"/></div>
        <div className="link"><A link="mailto:tyrus@haustle.studio" text="Email"/></div>
        <div className="link"><A link="https://github.com/haustle" text="GitHub"/></div>
        <div className="link"><A link="https://haustle.studio" text="Haustle 😌"/></div>

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

