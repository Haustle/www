import {things} from '../external-calls/intplace'

const people = () => {
    var cateGorySet = new Set();
    for(var x = 0; x < things.length; x++){
        var tempList = things[x].category
        tempList.forEach(cat => {
            cateGorySet.add(cat)
        })
    }

    function filterSort(filter){
        // console.log(filter.innerHTML)
        console.log(filter)
    }

    cateGorySet = [...cateGorySet]; // turn the set into a list
    var current = cateGorySet[0];
    return(
        <>
            <div className="internet-sum">
                Down below is every corner of the internet that I've explored that has had an impact on me thus far.
            </div>
            <div className="question">
                Got a question as to why something is on the list, shoot an email <span className="bold">Tyrus@haustle.studio</span>
            </div>

            {/* category buttons */}
            <div className="cat-contain">
                {cateGorySet.map((item, index) => (
                    <span className="cat-buttons" onClick={filterSort}>
                        {item}
                    </span>
                ))}
            </div>

            <div>
                {things.map((item, index) => (
                    <span className="item link">{item.name}</span>
                ))}
            </div>
                

            


            <style jsx>{`
                .question{
                    margin-bottom: 15px;
                }
                .cat-contain{
                    width: 100%;
                    display: inline-block;
                    margin-bottom: 50px;
                }
                .cat-contain span:not(:last-child){
                    margin-right: 5px;
                }
                
                .cat-buttons{
                    cursor: pointer;
                    display: inline-block;
                    padding: 5px;
                    background-color: black;
                    border-radius: 5px;
                    width: max-content;
                    color: white;
                    margin-top: 5px;
                }
                .item{
                    width: max-content;
                    display: block;
                }
                .internet-sum{
                    // background-color: black;
                    // color: white;
                    // padding: 10px;
                    // border-radius: 5px;
                    text-decoration: underline;
                    width: 80%;
                    margin-bottom: 50px;
                }
            `}</style>
        </>
    )
}
export function getStaticProps() {
    return {
        props: {
            pageName: 'Internet',
            archive: things
        }
    }
}
export default people;