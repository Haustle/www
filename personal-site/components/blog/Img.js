import { useRouter } from 'next/router'

var IMG;
export default IMG = ({url="", caption=null, title=false, width="500px", shadow=true}) => {
    const router = useRouter().asPath;
    // console.log(router)
    const arrow = "->"
    return(
        <>
            {/* If the title is intended to be at the top of the post we can add a title property */}
            {/* that will remove the margin top that is naturally used. */}
            <div className={`border-back  ${title ? 'padding-top-0' : null}`}>
                <div className="img-container">
                    <div className={`image-wrapper ${shadow ? 'stripe-box-shadow' : null} no-select`}>

                        {/* all images should be downloaded before hand so we can just use router */}
                        {/* and route the image to a folder path that's similar to the url */}
                        <img src={router + url} alt="gon" />
                    </div>
                </div>
                
                {/* if caption is null it means the user doesnt want a caption */}
                {/* to determine this we just use a ternary */}
                {caption ? <div className="caption">{arrow} {caption}</div> : null}

            </div>

            <style jsx>{`
                .img-container{
                    display: flex;
                    justify-content: center;
                }
                .white-canvas{
                    // width: 500px;
                    // height: 300px;
                    border-radius: 5px;


                }
                .stripe-box-shadow{
                    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 
                                0 3px 6px rgba(0, 0, 0, 0.08);

                }
                .border-back{
                    padding: 40px 0px;
                    width: 500px;
                    margin: 0 auto;
                    // display: flex;
                    // justify-content: center;

                }
                .padding-top-0{
                    padding-top: 0px;
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
                    width: max-content;
                    display: flex;
                    border-radius: 5px;
                }
                img{
                    width: ${width};
                    height: 100%;
                }
            `}</style>
        </>
    )
}

