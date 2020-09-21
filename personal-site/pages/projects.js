import ActivityCircle from '../components/projects/activityCircle'
import Head from 'next/head'
import { GitHub } from 'react-feather'
import {getRepos} from '../external-calls/gitCall'

export default function About({ repos }) {
    return (
        <>
            <div className="container">
                <div>
                    {/* <div className="status-container">
                        <div className="projects-status">⚠ Currently working on creating writeups and thoughts on projects</div>
                    </div> */}
                    {/* <div>View the source code for this website</div> */}

                    <div className="h1-name-caption flex-align-items-center">
                        <h2>Projects</h2>
                        <span className="margin-left-25">Collection of projects I've been working on!</span>
                    </div>

                    {repos.map((repo, index) => (
                        <div className="project-listing-container flex-align-items-center" key={repo}>
                            <div className="margin-right-25">
                                <a href={repo.url} target="_blank">
                                    <div className="git-repo-icon flex-align-items-center">
                                        <GitHub className="feather-button-icon" size={15} />
                                        <span className="git-repo-button-text">Git Repo</span>
                                    </div>
                                </a>
                            </div>
                            <div className="project-title">{repo.name}</div>
                            <div className="last-updated-container"><ActivityCircle days={repo.daysAgo}></ActivityCircle> {repo.daysAgo} {repo.daysAgo == 1 ? 'day ago' : 'days ago'}</div>
                        </div>
                    ))}


                </div>
            </div>
            
            <style jsx>{ ` 
                .last-updated-container{
                    margin-left: 30px;
                    display: flex;
                    align-items: center;
                }
                .project-listing-container:not(:first-child){
                    margin-top: 15px;
                }
                .status-container{
                    display: flex;
                    justify-content: center;
                }
                .projects-status{
                    font-size: 1rem;
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
                    margin-top: 50px;
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
                .container{
                    display: flex;
                    justify-content: center;
                }
                .project-listing{
                    margin-top: 10px;
                }

                .project-title{
                    cursor: pointer;
                    font-size: 1.0rem;
                    width: 150px;
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
        </>
        
    )

}
// to check when I get more requests use 
//              curl -i https://api.github.com/users/octocat
// this makes a call every time.
// Need to look into getting more requests
// export async function getServerSideProps() {

export async function getServerSideProps(){
    // console.log(`This is repos: ${repos.length}`);
    return {
        props: {
            repos: await getRepos('haustle'),
            pageName: 'Projects'
        },
        // unstable_revalidate: 3600,
    }
}