const Callout = ({color="black", tagName="summary", underline=false ,children}) => {
    return(
        <>
            <div className="article-overview flex">
                <span className={`summary-tag ${color}`}>{tagName}</span>
                <div className={`${underline ? 'underline' : ''}`}>{children}</div>
            </div>

            <style jsx>{`
                .summary-tag{
                    border-radius: 10px;
                    color: #fff;
                    height: max-content;
                    padding: 5px 10px;
                    margin-right: 20px;
                    text-decoration: none;
                }
                .underline{
                    text-decoration: underline;
                }
                .yellow{
                    background-color: #fcca46;
                }
                .grey{
                    background-color: #97A7B3;
                }
                .black{
                    background-color: black;
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

            `}</style>
        </>
    )
}

export default Callout;