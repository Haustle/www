import { getBookmarks } from '../external-calls/vault';

export default function Library({ bookmarks }){
    var commentRefs = [];
    var setCom = (ref) => {
        commentRefs.push(ref);
    };
    var currentCommentIndex = -1;
    
    var showComment = (comIcon) => {

        var id = parseInt(comIcon.target.id)
        if (commentRefs[id].style.display == 'block' ){
            commentRefs[id].style.display = "none";
        }
        else{
            commentRefs[id].style.display = 'block';
        }
        if (currentCommentIndex != -1 && (id != currentCommentIndex)) {
            commentRefs[currentCommentIndex].style.display = "none";
        }
        currentCommentIndex = id;
    }
    var count = 0;

    return(
        <div className="container">

                <div className="h1-name-caption flex-align-items-center margin-bottom-50">
                    <h1>Vault</h1>
                    <span className="margin-left-25">An unordered collection of my favorite bookmarks</span>
                </div>


                {bookmarks.map((bookmark, index) => (

                    <div key={index} className="bookmark-container flex-justify-between">
                        <div className="flex">
                            <span className="date">{bookmark.date}</span>
                            <div className="media-tag-container">
                                <div className="media-tag">{bookmark.category}</div>
                            </div>
                            <a target="_blank" className="title-comment" href={bookmark.url}>
                                <div className="media-title-container">
                                    <span className="media-title-span">{bookmark.title}</span></div>
                                {
                                    bookmark.comment != '' ? <div className="comment-styling" ref={setCom}>{bookmark.comment}</div> : null
                                }
                            </a>
                            
                        </div>
                        <div>
                            <div className="message-square-container">
                                {/* <span>www.youtube.com</span> */}
                                {
                                    bookmark.comment != '' ? <img className="" src="message-square.svg" onClick={showComment} id={count++}></img> : null
                                }
                            </div>
                        </div>
                        
                    </div>
                ))}                

            <style jsx>{`
                .title-comment{
                    // width: 440px;
                }

                .comment-styling{
                    margin-top: 30px;
                    margin-bottom: 30px;
                    border-left: 2px solid black;
                    padding-left: 10px;
                    width: auto;
                    font-weight: bold;
                    // color: white;
                    // background-color: black;
                    display: none;
                }
                .message-square-container img{
                    cursor: pointer;
                }
                .message-square-container{
                    margin-left: 20px;
                }
                .media-title-container{
                    // color: blue;
                    // text-decoration: underline;
                    font-size: 1.0rem;
                    width: 100%;
                    line-height: 1.6em;
                }
                .media-title-span{
                    padding: 2px;
                }
                .media-title-span:hover{
                    text-decoration: underline;
                    // color: grey;
 

                }
                .media-tag-container{
                    min-width: 71px;
                    margin-right: 25px;
                }
                .h1-name-caption{
                    margin-top: 50px;
                    margin-bottom: 75px;
                    width: max-content;
                    padding-bottom: 25px;
                    border-bottom: 1px solid black;
                }
                .media-scale-hover:hover{
                    // opacity: .3;
                    color: grey;
                    // transform: scale(1.02);
                }
                .media-scale-hover{
                    // opacity: .;
                    transition: all .2s ease-in-out;
                    cursor: pointer;

                }
                .bookmark-container{
                    // width: 95%;
                    // width: 100%;
                    transition: all .2s ease-in-out;
                    align-items: normal;

                }

                .bookmark-container:not(:first-child){
                    margin-top: 15px;
                }
                .date{
                    margin-right: 20px;
                }
                .media-tag{
                    font-size: 12px;
                    padding: 5px 10px;
                    background-color: black;
                    border-radius: 5px;
                    color: #fff;
                    font-weight: normal; 
                    width: max-content;
                }
            `}</style>
        </div>
        
    )
    
}

export async function getStaticProps() {
    const bookmarks = getBookmarks();
    return {
        props: {
            bookmarks,
            pageName: 'Library'
        }
    }
}