const Callout = ({color="black", tagName="summary", children}) => {
    return(
        <>
            <div className="article-overview flex">
                <span className={`summary-tag ${color}`}>{tagName}</span>
                <div>{children}</div>
            </div>

            <style jsx>{`
                .summary-tag{
                    border-radius: 10px;
                    // background-color: #1976d2;
                    background-color: #52E5AA;;
                    color: #3EBA88;
                    color: #fff;
                    // color: #f2f5fa;
                    height: max-content;
                    // color: black;
                    // background-color: white;
                    padding: 5px 10px;
                    margin-right: 20px;
                    text-decoration: none;
                }
                .article-overview{
                    line-height: 1.4;
                    display: flex;
                    align-items: center;
                    padding: 15px 50px;
                    margin-top: 50px;
                    border: 1px solid whitesmoke;
                    // background-color: #f2f5fa;
                    background-color: white;
                    // color: white;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                }
                .article-overview div{
                    text-decoration: underline;
                }
            `}</style>
        </>
    )
}

export default Callout;