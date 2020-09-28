// Used to highlight a portion of text
const H = ({ children, message="this is a default message" }) => {

    // create a react state for the message 
    // on click the ract component goes true
    // on click outside of the componenet we go to false.
    // https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

    // const [,set] = React.useState(false);
    message = "This is an example of how it would appear on the post"

    const [mesVisible, setMesVisibility] = React.useState(false);
    var toggleVisibility = e => {
        setMesVisibility(!mesVisible);
    }

    return (
        <>
            
            {message != "" ? <span className={mesVisible ? "message" : "hide"}>{message}</span> : null}
            <span onMouseOver={toggleVisibility} onMouseOut={toggleVisibility} className="highlight-text">{children}</span>
            
            <style jsx>{`
                .hide{
                    display: none;
                }
                .message{
                    position: aboslute;
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
                    background-color: black;
                    color: white;
                    border-radius: 5px;
                    padding: 5px 10px;
                    // border: 1px solid ghostwhite;

                    width: max-content;
                    position: absolute;
                    margin-top: 2rem;
                    font-size: .8rem;
                    max-width: 200px;

                }
                .highlight-text{
                    display: inline-block;
                    width: max-content;
                    cursor: pointer;
                    background-color: #F2E39B;
                    padding: 5px;
                    border-radius: 2px;
                    transition: all .05s ease-in-out;
                    line-height: 1rem;

                }
                .highlight-text:hover{
                    transform: scale(1.02);               
                }
            `}</style>

        </>
    )
}

export default H;