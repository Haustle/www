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

            <Layout>
                <div className="h1-name-caption flex-align-items-center margin-bottom-50">
                    <h1>Projects</h1>
                    <span className="margin-left-25">Collection of projects I've been working on</span>
                </div>

                <div className="flex-align-items-center">
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





                <style jsx>{ ` 
                    .git-repo-button-text{
                        margin-left: 10px;
                    }
                    .disable{
                        opacity: .5;
                        pointer-events: none;
                    }
                    
                    .h1-name-caption{
                        // margin-bottom: 50px;
                        margin-top: 50px;
                        margin-bottom: 75px;
                        width: max-content;
                        padding-bottom: 25px;
                        // border-bottom: 1px solid black;
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
                        font-size: 20px;

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