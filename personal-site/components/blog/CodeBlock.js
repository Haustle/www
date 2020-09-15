import { useRef } from "react";

export default function CodeBlock({language = "", code=""}){
    // we should have something to route the language to the actual language name

    function copy(){
        navigator.clipboard.writeText(code)
    }
    return(
        <>
            <p className="code-p">
                <div className="code-container">
                    <div className="inline-code">
                        <pre>
                            <code>
                                {code}
                            </code>
                        </pre>

                    </div>
                    <div className="flex-justify-between">
                        <div className="code-lang-tag">{language}</div>
                        <div className="copy" onClick={copy}>copy</div>
                    </div>
                </div>
            </p>
            
            <style jsx>{`
                .code-p{
                    background-color: black;
                    color: white;
                    font-size: 1.2rem;
                    padding: 10px;
                    border-radius: 10px;

                }
                .copy{
                    font-size: 1rem;
                    cursor: pointer;
                    padding: 2px 5px;
                    border-radius: 5px;
                    border: 1px solid white;
                }
                .code-lang-tag{
                    // position: absolute;
                    // bottom 0px;
                    color: black;
                    font-size: .8rem;
                    border: 1px solid white;
                    padding: 5px;
                    border-radius: 10px;
                    background-color: white;
                    // color: white;
                    width: max-content;
                }
                .code-container{
                    min-height: 250px;
                    width: 100%;
                    position: relative;
                }
                
            `}</style>
        </>
    )
}