


export default function Home() {
  return (
    <>
      <div className="about-container">
        <h2 className="h1-name index-h1">Tyrus Miles </h2>
        {/* <div className="personal-description grey">Currently <span className="no-select">–></span> Engineering (BSc) student</div> */}


      </div>
      <div className="more-links-vert">
        <div className="link"><a href="https://twitter.com/haustle" target="_blank">Twitter</a></div>
        <div className="link"><a href="mailto:tyrus@haustle.studio" target="_blank">Email</a></div>
        <div className="link"><a href="https://github.com/haustle" target="_blank">GitHub</a></div>
        <div className="link"><a href="https://haustle.studio" target="_blank">Haustle 😌</a></div>

      </div>

      <style jsx>{`
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

