var IMG;
export default IMG = ({url="", caption=null}) => {

    return(
        <>
            {/* <div className="image-container shadow-2"> */}
                <div className="image-wrapper">
                    <img className="" src={url} />
                    <div className="caption">{caption}</div>
                </div>
            {/* </div> */}
            
            

            <style jsx>{`

                .image-container{
                    margin-top: 50px;
                }
                .caption{
                    font-size: .9rem;
                    color: grey;
                    margin-top: 15px;
                    text-align: center;
                }
                .image-wrapper{
                    width: 75%;
                    border-radius: 20px;
                    margin: 0 auto;
                    margin-top: 30px;
                    margin-bottom: 40px;


                }
                img{
                    border-radius: 5px;
                    width: 100%;
                }
            `}</style>
        </>
    )
}

