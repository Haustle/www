import A from '../components/A'

export default function Home() {
  return (
    <>
      <div className="about-container">
        <h2 className="h1-name index-h1">Tyrus Miles </h2>
      </div>
      <p className="bio">Computer Science @ ASU</p>
      <div className="more-links-vert">
        <div className="link"><A href="https://twitter.com/haustle">Twitter</A></div>
        <div className="link"><A href="mailto:tyrus@haustle.studio">Email</A></div>
        <div className="link"><A href="https://github.com/haustle">GitHub</A></div>
        <div className="link"><A href="https://www.linkedin.com/in/tyrusmiles/">LinkedIn</A></div>
        
        {/* <div className="link haus"><A href="https://haustle.studio"><img alt="Official Haustle logo" src="haustle-red.svg" className="haus-logo" /> 😌</A> </div> */}

      </div>


      <style jsx>{`
        .bio{
          margin-bottom: 50px;
          color: #424242;

        }
        .haus-logo{
          height: 1rem;
        }
        .changes{
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

