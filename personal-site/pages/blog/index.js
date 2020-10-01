import Callout from '../../components/callout'
export default function index(){
    return(
        <>
            {/* <h2>This is the blog page</h2> */}
            <Callout>If you want to see me write about something. Send an email :)</Callout>
            <h1 className="year">2020</h1>

            <div className="flex title-container">
                <span className="date">Sep 29, 2020</span>
                <div className="name-cat">
                    <div className="flex">
                        <div className="tag-container">
                            <span className="writing-tag">Example</span>
                        </div>
                        <a><h2>Example Blog Post</h2></a>
                    </div>
                    <div className="run-down-container">
                        <div className="run-down">This is a run down of what the article is about</div>

                    </div>  
                </div>

            </div>

            <style jsx>{`
                .tag-container{
                    width: 20%;
                }
                .year{
                    margin-top: 40px;
                }
                .run-down-container{
                    display: flex;
                    justify-content: flex-end
                }
                .run-down{
                    width: 80%;
                    margin-top: 15px;
                }
                .name-cat:first-child{
                    border-top: 1px solid black;
                }
                .name-cat{
                    // border-top: 1px solid black;
                    width: 100%;
                }
                .date{
                    height: max-content;
                    margin-right: 25px;
                    width: 20%;
                }
                .title-container{
                    display: flex;
                }
                .title-container:first-child{
                    margin-top: 50px;
                }
                .title-container:not(:first-child){
                    margin-top: 30px;
                    padding-top: 30px;
                }
                .writing-tag{
                    display: flex;
                    align-items: center;
                    font-size: .8rem;
                    padding: 5px 10px;
                    border-radius: 5px;
                    background-color: black;
                    width: max-content;
                    color: #fff;
                    // margin-right: 20px;
                }
                .title-container:hover{
                    cursor: pointer;
                    opacity: .6;
                }
            `}</style>
        </>
    )
}

export function getStaticProps() {
    return {
        props: {
            pageName: 'Blog'
        }
    }
}