import Link from 'next/link';

export default function ArticleLink({title="",summary="",date="", postUrl="example"}){


    return(
        <>
            <Link href={`/blog/${postUrl}`} >
                <a>
                    <div className="flex title-container">
                        <span className="date">{date.split(",")[0]}</span>
                        <div className="name-cat">
                            <div className="flex">

                                

                                <h2>{title}</h2>
                            </div>

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
                        color: #bcc2cc;

                    }
                    .summary-text{
                        color: #4a5568;
                        margin-top: 20px;
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
                        transform: translateY(1px);
                    }
                    .title-container{
                        display: flex;
                        // margin-bottom: 25px;
                        transition: all 0.2s

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
                    }

                    .writing-tag{
                        display: flex;
                        align-items: center;

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