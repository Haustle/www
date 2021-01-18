import Link from 'next/link';
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <>
      <div className="about-container">
        <h2 className="h1-name index-h1">Hello, I'm Tyrus ⌨️</h2>
        <div className="personal-description grey">Engineering (BSc) student</div>

      </div>




      <ProjectCard name="Haustle Studios" link="haustle.studio" sum="More Structured Projects with others" />
      

      

      

      <footer className="no-select flex-align-items-center">
        <div className="copyright"><span className="grey underline">CC BY-NC 4.0</span> 2021 © Tyrus Miles </div>
        <div className="more-links">
          <span className="link"><a href="https://twitter.com/haustle" target="_blank">Twitter</a></span>
          <span className="link"><a href="mailto:tyrus@haustle.studio" target="_blank">Email</a></span>
          <span className="link"><a href="https://github.com/haustle" target="_blank">Code</a></span>
        </div>
      </footer>
      
        

      <style jsx>{`
        .comp-logo{
          height: 1rem;
          margin-bottom: 15px;
        }
        .haustle-b{
          background-color: #fff7df;
        }
        footer{
          font-size: 1rem;
          margin-top: 100px;
        }
        .copyright{
          
        }


        .about-container{
          margin-bottom: 50px;
        }





        .index-h1{
          font-size: 2rem;
        }
        .more-links{
          margin-left: 40px;
        }
        .more-links span:not(:last-child){
          margin-right: 10px;
        }

        .personal-description{
            line-height: 2.5rem;
        }
        
      `}
      </style>
    </>
  )
}

