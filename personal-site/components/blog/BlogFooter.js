export default function BlogFooter(){
    return(
        <>
            <div>Final notes and credits</div>
            <div className="footer flex-justify-between">
                <div className="">
                    <div className="next-article">
                        <a href="">
                            <div className="next-article-arrow">
                                <span>Next</span>
                                <img className="arrow" src="/arrow-right.svg" />
                            </div>
                            <div>
                                {/* this needs to pass in and then we can figure out routers to */}
                                Example Article Name
                            </div>
                            
                        </a>
                    </div>

                </div>
                <div className="flex social-footer">
                    <span><a href="https://twitter.com/haustle" target="_blank">Twitter</a></span>
                    <span><a href="https://github.com/haustle" target="_blank">GitHub</a></span>
                    <span><a href="mailto:tyrus.miles@gmail.com">Email</a></span>
                </div>
            </div>



            <style jsx>{`
                .arrow{
                    height: 1rem;
                    margin-left: 5px;
                }
                .next-article-arrow{
                    display: flex;
                    align-items: center;
                }
                .next-article{
                    // padding: 15px;
                    position: relative;
                    display: block;
                    transition-duration: 0.2s;
                }
                .next-article:hover{
                    padding-left: 10px;
                    transition-duration: 0.2s;

                }
                .footer{
                    margin-top: 50px;
                    padding-top: 20px;
                    width: 100%;
                    // height: 25px;
                    border-top: 1px solid black;
                }

                .social-footer span:not(:first-child){
                    margin-left: 10px;
                }

                .social-footer span:hover{
                    text-decoration: underline;
                    cursor: pointer;
                }
            `}</style>
        </>
    )
}