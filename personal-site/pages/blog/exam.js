import Link from 'next/link';
import ToggleList from '../../components/blog/toggleList';
import { goals } from '../../external-calls/goals';

import { ArrowLeft, Layers } from 'react-feather'


export default function exam(){
    const [backhover, setBackHover] = React.useState(false)

    return(
        <>
            <Link href="/blog">
                <a className=" back-button flex-align-items-center" onMouseOver={() => {setBackHover(true)}} onMouseOut={() => {setBackHover(false)}}>
                    <ArrowLeft size="1rem"/>
                    <span className={`back-text ${backhover ? 'back-hover ' : null}`}>Back</span>
                    
                </a>
            </Link>
            <article>
                <div className="blog-header">
                    <h1 className="article-title">Example Post</h1>

                    {/* these should be clickable to send the user to page of all blogs posts containing that tag*/}
                    <div className="flex-align-items-center">
                        <div>
                            <span className="article-tag">Personal</span>
                            <span className="article-tag">Life Update</span>
                            <span className="article-tag">School</span>
                        </div>
                        
                    </div>
                </div>


                <p>At the time when I was getting into web development, I had the chance to read one of the most inspiring book about the web, <span className="">Aaron Swartz's A Programmable Web</span>. And it completely changed my mind.</p>
                
                <p className="">
                    <b>Note:</b> Make sure to lay a piece of toilet paper first
                </p>


                <h3>Internship Hunt</h3>

                <p>
                    The problem with Clubhouse is that you can only listen to conversations live as they happen. Given that the majority of the current user base is in North America, the most interesting conversations usually happen in the middle of the (European) night when I’m asleep.
                </p>

                <p>
                    The first thing I see on my phone after I wake up are a handful of Clubhouse notifications telling me about the all the interesting conversations I missed. I wish I could just download these conversations as podcasts and listen to them later. The first thing I see on my phone after I wake up are a handful of Clubhouse notifications telling me about the all the interesting conversations I missed. I wish I could just download these conversations as podcasts and listen to them later.
                </p>

                {/* <ToggleList itemList={goals}></ToggleList> */}

                <h3>Conclusion</h3>

                <p>
                    The problem with Clubhouse is that you can only listen to conversations live as they happen. Given that the majority of the current user base is in North America, the most interesting conversations usually happen in the middle of the (European) night when I’m asleep.
                </p>

            </article>
            <style jsx>{`
                h3{
                    margin-top: 5rem;
                    margin-bottom: 2rem;
                }

                .article-tag{
                    font-size: 1rem;
                    padding: 5px;
                    background-color: #efefef;
                    border-radius: 5px;
                    margin-left: 10px;
                    cursor: pointer;
                }

                .article-tag:first-child{
                    margin-left: 0px;

                }

                h2 {
                    margin-top: 50px;
                }
                .blue{
                    color: #2D3047;
                    text-decoration-line: underline;
                    text-decoration-thickness: 1px;
                    
                    
                }

                p{
                    color: #424242;
                    line-height: 2.0rem;


                }
                p span{
                    color: black;
                    text-decoration: underline;
                    cursor: pointer;
                }
                article{
                    width: 90%;

                }

                .back-button{
                    width: max-content;
                }
                .article-details{
                    margin-top: 15px;
                    margin-bottom: 25px;
                }

                .back-text{
                    margin-left: 20px;
                    padding: 2px 5px;
                    border-radius: 5px;
                    transition: all 0.2s
                    width: max-content;
                }
                .blog-header{
                    margin-bottom: 4rem;
                    margin-top: 3rem;

                }
                .article-title{
                    color: black;
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    
                }
                .back-hover{
                    background-color: #efefef;

                }

            `}</style>
        </>
    )
}

