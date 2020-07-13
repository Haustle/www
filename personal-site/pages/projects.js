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

                <div className="flex-align-items-center project-listing">
                    <div className="git-repo-icon flex-align-items-center"><GitHub className="feather-button-icon" size={15} /><span className="git-repo-button-text">Git Repo</span></div>
                    <div className="project-title">Personal Website (this)</div>
                </div>

                <div className="flex-align-items-center project-listing">
                    <div className="git-repo-icon flex-align-items-center"><GitHub className="feather-button-icon" size={15} /><span className="git-repo-button-text">Git Repo</span></div>
                    <div className="project-title">Haustle</div>
                </div>

                <div className="flex-align-items-center project-listing">
                    <div className="git-repo-icon flex-align-items-center"><GitHub className="feather-button-icon" size={15} /><span className="git-repo-button-text">Git Repo</span></div>
                    <div className="project-title">Show Manager</div>
                </div>

                
                {/* <h3>Haustle</h3> */}
                <style jsx>{ ` 
                    .feather-button-icon{
                        margin-rght: 10px;
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
                        margin-right: 25px;
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

                    .git-repo-button-text{
                        margin-left: 5px;
                    }
        `}

        </style>
            </Layout>
        </div>
        
    )

}