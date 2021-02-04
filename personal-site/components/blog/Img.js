import Image from 'next/image';
var IMG;
import {useRouter} from 'next/router'
export default IMG = ({url="", caption=null, title=false}) => {
    const router = useRouter().asPath;
    console.log(router)
    const arrow = "->"
    return(
        <>
            
            <div className={`border-back  ${title ? 'padding-top-0' : null}`}>

                <div className="image-wrapper stripe-box-shadow no-select">
                    <Image src={router + url} alt="gon" height={300} width={500} layout="intrinsic" priority/>
                </div>
                {caption ? <div className="caption">{arrow} {caption}</div> : null}

            </div>

            <style jsx>{`
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
                    width: 100%
                }
            `}</style>
        </>
    )
}

