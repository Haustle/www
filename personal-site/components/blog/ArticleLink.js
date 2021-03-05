import Link from 'next/link';

export default function ArticleLink({title="",date=null, postUrl="example"}){

    // Date object returns a number for the month so we can use this list as a way to 
    // link number to month name
    const monthAbrev = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    return(
        <>
            <Link href={`/blog/${postUrl}`} >
                <a>
                    <div className="flex title-container">
                        {/* pass the date month number into the monthAbrev list */}
                        {/* we use date.getDate() to get the actual day number which we don't need to change */}
                        <span className="date">{monthAbrev[date.getMonth()]} {date.getDate()}</span>
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