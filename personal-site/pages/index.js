import Link from 'next/link';


export default function Home() {
  return (
    <>
      <div className="about-container">
        <h2 className="h1-name index-h1">Hello, I'm Tyrus ⌨️</h2>
        <div className="personal-description">Engineering student – Side projects <span className="link"><a href="http://haustle.studio" target="_blank">@Haustle</a></span> </div>
      </div>


      <div className="project-card-wrapper">
        <div className="project-card-container"></div>
        <div className="project-card-details">
          <h3 className="project-name">Work 1</h3>
          <div>Project Description</div>
        </div>
      </div>

      <div className="project-card-wrapper">
        <div className="project-card-container"></div>
        <div className="project-card-details">
          <h3 className="project-name">Work 2</h3>
          <div>Project Description</div>
        </div>
      </div>
      

      

      <footer className="no-select">
        {/* <div className="more-links">
          <span className="link"><a href="https://twitter.com/haustle" target="_blank">Twitter</a></span>
          <span className="link"><a href="mailto:tyrus@haustle.studio">Email</a></span>
          <span className="link"><a href="mailto:tyrus@haustle.studio">Code</a></span>
        </div> */}
        <div className="copyright">2021 © Tyrus Miles </div>
      </footer>
      
        

      <style jsx>{`
        footer{
          margin-top: 75px;
        }
        .copyright{
          margin-top: 25px;
          
        }

        .project-card-wrapper:not(:last-child){
          margin-bottom: 50px;
        }

        .project-card-wrapper:last-child{
          margin-bottom: 0px;
        }

        .project-card-details{
          margin-top: 30px;
        }
        .about-container{
          margin-bottom: 50px;
        }
        .project-card-container{
          height: 300px;
          background-color: black;
          width: 75%;
          border-radius: 10px;
          color: white;
          display: flex;
          align-items: flex-end;
        }

        .project-card-container:not(:first-child){
          margin-top: 25px;
        }

        .index-h1{
          font-size: 2rem;
        }

        .more-links span:not(:last-child){
          margin-right: 20px;
        }

        .personal-description{
            line-height: 2.5rem;
        }
        
      `}
      </style>
    </>
  )
}

