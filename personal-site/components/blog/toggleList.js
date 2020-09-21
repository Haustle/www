export default function ToggleList({ itemList }){
    return(
        <>
            <div className="list-container">

                {/* we take in itemList –– list of js objects that contain attributes 'task'(string) and 'completed'(boolean) */}

                {itemList.map((item, index) => (
                    <div className="list-item">
                        <div className={`box ${item.completed ? `fill` : ``}`}></div> 
                        <div className={`list-item-name ${item.completed ? `completed` : ``}`}>{item.task}</div>
                    </div>

                ))}
            </div>
            

            <style jsx>{`
                .list-container{
                    margin: 50px 0px;
                    font-size: 1rem;
                    padding: 20px;
                    width: max-content;
                    // border-top: 1px solid black;
                    // border-bottom: 1px solid black;
                    
                }
                .completed{
                    // opacity: .5;
                    text-decoration: line-through;
                }
                .box{
                    height: 1em;
                    width: 1em;
                    border-radius: 5px;
                    border: 1px solid black;
                    margin-right: 20px;
                }
                .fill{
                    background-color: black
                }
                .list-item{
                    display: flex;
                    align-items: center;
                    -webkit-user-select:none;
                    -khtml-user-select:none;
                    -moz-user-select:none;
                    -ms-user-select:none;
                    -o-user-select:none;
                    user-select:none;
                }
                .list-item:not(:first-child){
                    margin-top: 10px;
                }
            `}</style>
        </>
    )
}