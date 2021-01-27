import {useRouter} from 'next/router'
import { ArrowLeft } from 'react-feather'


export default function BackButton(){
    const router = useRouter();
    const [backhover, setBackHover] = React.useState(false)

    return(
        <>

                <a className=" back-button flex-align-items-center" onMouseOver={() => { setBackHover(true) }} onMouseOut={() => { setBackHover(false) }} onClick={() => router.back()}>
                    <ArrowLeft size="1rem" />
                    <span className={`back-text ${backhover ? 'back-hover ' : null}`}>Back</span>

                </a>


            <style jsx>{`
                .back-button{
                    width: max-content;
                    cursor: pointer;
                }


                .back-text{
                    margin-left: 20px;
                    padding: 2px 5px;
                    border-radius: 5px;
                    transition: all 0.2s;
                    width: max-content;
                }

                .back-hover{
                    background-color: #efefef;

                }
            `}</style>
        </>
    )
}