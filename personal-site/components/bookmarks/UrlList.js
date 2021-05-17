import A from '../../components/A';
import { useState } from 'react';

const UrlList = ({list, catState}) => {

    const [month, setMonth] = useState(-1);
    const [year, setYear] = useState(-1);

    return (
        <>
            <div className="reason ibm">My saved tab – Things I'm trying to consume</div>

            {/* <h3>May 2021</h3> */}
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
            `}</style>
        </>
    )
}

export default UrlList;