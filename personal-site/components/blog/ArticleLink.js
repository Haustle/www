import Link from 'next/link';

export default function ArticleLink({title="",summary="",date="", postUrl="example"}){

    const [underline, setUnderline] = React.useState(false);

    return(
        <>
            <Link href={`/blog/${postUrl}`} >
                <a>
                    <div className="flex title-container" onMouseOver={() => { setUnderline(true)}} onMouseOut={() => setUnderline(false)}>
                        <span className="date">{date}</span>
                        <div className="name-cat">
                            <div className="flex">

                                
                                {/* <h3 className={`${underline ? 'yellow-back' : null}`}>{title}</h3> */}
                                <h3>{title}</h3>
                            </div>
                            <div className="summary-text">{summary}</div>
                            <div className="last-updated">Last updated <b>2 months ago</b></div>

                        </div>
                    </div>
                </a>
            </Link>

            <style jsx>
                {`
                    .yellow-back{
                        background-color: #F2E39B;
                    }
                    .last-updated{
                        margin-top: 10px;
                        font-size: .9rem;
                        opacity: .6;
                        color: #4a5568;

                    }
                    .summary-text{
                        color: #4a5568;
                        margin-top: 20px;
                    }
                    .title{
                        // font-size: 1.4rem;
                    }
                    .black-background{
                        background-color: black;
                        color: #fff;


                    }
                    .blue-background{
                        background-color: #EFF0D1;
                        color: #262730;
                    }
                    .normal-under{
                        border-bottom: 1px solid transparent;
                    }
                    .tag-container{
                        width: 20%;
                    }
                    .name-cat:first-child{
                        border-top: 1px solid black;
                    }
                    .name-cat{
                        width: 100%;
                    }
                    .date{
                        height: max-content;
                        margin-right: 25px;
                        width: 20%;
                        text-align: right;
                    }
                    .title-container{
                        display: flex;
                        margin-bottom: 25px;
                    }
                    .title-under{
                        text-decoration-line: underline;
                        text-decoration-style: solid;
                        text-decoration-color: black;
                        text-decoration-thickness: 1px;
                    }

                    .title-container:hover{
                        cursor: pointer;
                        opacity: .4;
                        transition: all 0.1s
                    }

                    .writing-tag{
                        display: flex;
                        align-items: center;
                        // font-size: 1rem;

                        // same as tags on /library
                        font-size: .8rem;
                        padding: 5px 10px;
                        border-radius: 5px;
                        width: max-content;
                    }
                `}
            </style>
        </>
    )
}