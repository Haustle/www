import A from '../../components/A';

const UrlList = ({list}) => {

    return (
        <>
            <div className="reason ibm">Things I'm trying to consume</div>

            {list.map((item, index) => (
                <div className="link item ibm">
                    <A href={item.url}>{item.title}</A>
                </div>
            ))}

            <style jsx>{`

                .item{
                    width: max-content;
                    padding: 2px;
                    border-radius: 2px;
                }
                .item:not(:last-child){
                    margin-bottom: 20px;
                }
                .item:hover{
                    background-color: #FAFAFA;
                }
                .reason{
                    color: #424242;
                    margin-bottom: 75px;
                    line-height: 2.2rem;
                    font-size: 1.1rem;
                }

                @media(max-width: 600px){
                    .item{
                        width: 100%;
                        line-height: 1.9;
                    }
                }
            `}</style>
        </>
    )
}

export default UrlList;