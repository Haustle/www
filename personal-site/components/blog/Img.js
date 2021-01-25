var IMG;
export default IMG = ({url="", caption=null}) => {
    const arrow = "->"
    return(
        <>
            <div className="border-back no-select">
                <div className="white-canvas ">
                    <div className="image-wrapper stripe-box-shadow"></div>
                </div>
                {caption ? <div className="caption">{arrow} {caption}</div> : null}

            </div>

            <style jsx>{`
                .white-canvas{
                    width: 75%;
                    margin: 0 auto;
                    // border-radius: 5px;


                }
                .stripe-box-shadow{
                    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 
                                0 3px 6px rgba(0, 0, 0, 0.08);

                }
                .border-back{
                    padding: 40px 0px;

                }

                .caption{
                    font-size: .9rem;
                    font-weight: 500;
                    width: 75%;
                    margin: 0 auto;
                    margin-top: 25px;
                    color: #424242;


                }
                .image-wrapper{
                    background-image: url(${url});
                    background-size: cover;
                    background-position: center; 
                    background-repeat: no-repeat;
                    height: 300px;
                    margin: 0 auto;
                    border-radius: 2px;
                }
                img{
                    width: 100%
                }
            `}</style>
        </>
    )
}

