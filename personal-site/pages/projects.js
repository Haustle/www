import Layout from '../components/layout'
import Head from 'next/head'
import { GitHub } from 'react-feather'

export default function About() {
    return (
        <div className="container">
            <Head>
                <title>Tyrus Miles</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout category="Projects">
                <div className="status-container">
                    <div className="projects-status">⚠ Currently working on creating writeups and thoughts on projects</div>
                </div>

                <div className="h1-name-caption flex-align-items-center">
                    <h1>Projects</h1>
                    <span className="margin-left-25">Collection of projects I've been working on!</span>
                </div>
                <div className="project-listing-container flex-align-items-center">
                    <div className="margin-right-25">
                        <a href="http://www.github.com/haustle/www" target="_blank">
                            <div className="git-repo-icon flex-align-items-center">
                                <GitHub className="feather-button-icon" size={15} />
                                <span className="git-repo-button-text">Git Repo</span>
                            </div>
                        </a>
                    </div>
                    <div className="project-title">Personal Website (this)</div>
                </div>

                {/* <div className="project-listing-container flex-align-items-center">
                    <div className="margin-right-25">
                        <a href="http://www.github.com/haustle/www" target="_blank">
                            <div className="git-repo-icon flex-align-items-center">
                                <GitHub className="feather-button-icon" size={15} />
                                <span className="git-repo-button-text">Git Repo</span>
                            </div>
                        </a>
                    </div>
                    <div className="project-title">Metabend</div>
                </div>

                <div className="project-listing-container flex-align-items-center">
                    <div className="margin-right-25">
                        <a href="http://www.github.com/haustle/www" target="_blank">
                            <div className="git-repo-icon flex-align-items-center">
                                <GitHub className="feather-button-icon" size={15} />
                                <span className="git-repo-button-text">Git Repo</span>
                            </div>
                        </a>
                    </div>
                    <div className="project-title">PS Cards</div>
                </div>

                <div className="project-listing-container flex-align-items-center">
                    <div className="margin-right-25">
                        <a href="http://www.github.com/haustle/www" target="_blank">
                            <div className="git-repo-icon flex-align-items-center">
                                <GitHub className="feather-button-icon" size={15} />
                                <span className="git-repo-button-text">Git Repo</span>
                            </div>
                        </a>
                    </div>
                    <div className="project-title">RaspPi Video Loop</div>
                </div>

                <div className="project-listing-container flex-align-items-center">
                    <div className="margin-right-25">
                        <a href="http://www.github.com/haustle/www" target="_blank">
                            <div className="git-repo-icon flex-align-items-center">
                                <GitHub className="feather-button-icon" size={15} />
                                <span className="git-repo-button-text">Git Repo</span>
                            </div>
                        </a>
                    </div>
                    <div className="project-title">Haustle</div>
                </div> */}





                <style jsx>{ ` 
                    .project-listing-container:not(:first-child){
                        margin-top: 15px;
                    }
                    .status-container{
                        display: flex;
                        justify-content: center;
                    }
                    .projects-status{
                        font-size: 14px;
                        // color: white;
                        // background-color: black;
                        border: 1px solid black;
                        padding: 20px;
                        border-radius: 5px;
                        text-align: center;
                        margin-bottom: 40px;
                        margin-top: 50px;
                        width: max-content;

                    }
                    .git-repo-button-text{
                        margin-left: 10px;
                    }
                    .disable{
                        opacity: .5;
                        pointer-events: none;
                    }
                    
                    .h1-name-caption{
                        margin-bottom: 75px;
                        padding-bottom: 25px;
                    }
                    .git-repo-icon{
                        padding: 5px 10px;
                        border-radius: 5px;
                        // border: 1px solid black;
                        background-color: black;
                        // margin-right: 25px;
                        color: white; 
                    }
                    .project-listing{
                        margin-top: 10px;
                    }

                    .project-title{
                        cursor: pointer;
                        font-size: 1.2rem;
                        // font-weight: bold;

                    }
                    .project-title:hover{
                        text-decoration: underline;
                    }

                    .margin-right-25{
                        margin-right: 25px;
                    }
        `}

        </style>
            </Layout>
        </div>
        
    )

}