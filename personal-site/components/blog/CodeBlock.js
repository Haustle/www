import { useRef } from "react";
import { Copy } from 'react-feather'


export default function CodeBlock({language = "", code=""}){
    // we should have something to route the language to the actual language name

    function copy(){
        navigator.clipboard.writeText(code)
    }
    return(
        <>

                <div className="code-container">
                    <div className="inline-code">
                        <pre>
                            <code>
                                {code}
                            </code>
                        </pre>

                    </div>
                    <div className="flex-justify-between">
                        <div></div>
                        <div className="flex">
                            <div className="code-lang-tag">{language}</div>
                            <div className="copy" onClick={copy}><Copy className="feather-button-icon" size={15} /></div>
                        </div>
                        
                    </div>
                </div>
            
            <style jsx>{`
                code::selection{
                    background-color: white;
                    color: black;
                }
                .copy{

                    cursor: pointer;
                    padding: 5px;
                    border-radius: 5px;
                    display: flex;
                    align-items: center;

                }
                .copy:hover{
                    background-color: #424242;
                }
                .code-lang-tag{
                    color: white;
                    font-size: .8rem;
                    padding: 5px;
                    border-radius: 10px;
                    text-decoration: underline;
                    background-color: black;
                    width: max-content;
                    margin-right: 5px;
                }
                .code-container{
                    min-height: 250px;
                    width: 100%;
                    position: relative;
                    margin-top: 75px;
                    background-color: black;
                    color: white;
                    padding: 10px;
                    border-radius: 10px;
                }

                
            `}</style>
        </>
    )
}