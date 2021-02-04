 import Callout from "../components/callout"

 const changelog = () => {
    return(
        <>
            <div className="h1-name flex-align-items-center">
                <h1 className="lib-title">Changelog</h1>
                <span className="margin-left-25">Website history</span>
            </div>
            <div>Nothing here yet...</div>
            {/* <Callout color="yellow">yes</Callout> */}
        </>
    )
}
export function getStaticProps(){
    return{
        props: {
            square: "change"
        }
    }
}
export default changelog;