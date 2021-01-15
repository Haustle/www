export default function ToggleList({ itemList }){
    return(
        <>
            <div className="list-container shadow">

                {/* we take in itemList –– list of js objects that contain attributes 'task'(string) and 'completed'(boolean) */}

                {itemList.map((item, index) => (
                    <div className="list-item" key={index}>
                        <div className={`box ${item.completed ? `fill` : ``}`}></div> 
                        <div className={`list-item-name ${item.completed ? `completed` : ``}`}>{item.task}</div>
                    </div>

                ))}
            </div>
            

            <style jsx>{`
                .list-container{
                    margin: 50px 0px;
                    padding: 20px;
                    width: max-content;
                    font-size: 1rem;
                    border-radius: 10px;

                    
                }
                .completed{
                    text-decoration: line-through;
                }
                .box{
                    height: 1rem;
                    width: 1rem;
                    border-radius: 50%;
                    border: 1px solid grey;
                    margin-right: 20px;
                }
                .fill{
                    border: 1px solid black;

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