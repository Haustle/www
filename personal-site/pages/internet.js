import {things} from '../external-calls/intplace'
import { useEffect } from 'react'

const people = () => {
    const [people, filterPeople] = React.useState(things);
    const [catSet, setCatSet] = React.useState([])

    // Getting all the categories from all the associated communities / poeple
    // add them to set so now duplicates
    var cateGorySet = new Set();
    for(var x = 0; x < things.length; x++){
        var tempList = things[x].category
        tempList.forEach(cat => {
            cateGorySet.add(cat)
        })
    }

    // chec
    function containsCategory(userList) {
        let result = catSet.every(i => userList.includes(i))
        return result;
    }

    var catSort = (fil) => {
        // console.log(fil)
    }
    var togglePeople = (filter) => {
        catSort(filter)
        setCatSet([filter])


        // console.log(catSet)

    }

    useEffect(() => {
        var fitL = things.filter(p => containsCategory(p.category))
        filterPeople(fitL)
        // console.log("yes");
    }, [catSet]);


    cateGorySet = [...cateGorySet]; // turn the set into a list
    return(
        <>
            <div className="internet-sum">
                Down below is every corner of the internet that I've explored that has had an impact on me thus far.
            </div>
            <div className="question">
                Got a question as to why something is on the list, shoot an email <span className="bold">Tyrus@haustle.studio</span>
            </div>

            <div className="cat-contain">
                {cateGorySet.map((item, index) => (
                    <span className="cat-buttons big-bord" onClick={() => togglePeople(item)} key={index}>
                        {item}
                    </span>
                    
                ))}
                <div>
                    {catSet}
                </div>
            </div>


            <div>
                {people.map((item, index) => (
                    <div className="person">
                        <span className="item link" key={index}>{item.name}</span>
                        <span className="item-category-container">
                            {item.category.map((cat, index) => <span className="list-cat">{cat}</span>)}
                        </span>
                    </div>

                ))}
            </div>
                

            


            <style jsx>{`
                .person{
                    display: block;
                    margin-bottom: 20px;
                }
                .list-cat:first-child{
                    // color: red;
                    margin-left: 25px;
                    // font-weight: bold;
                }
                .list-cat{
                    font-size: .8rem;
                    margin-left: 10px;
                    padding: 5px;
                    background-color: black;
                    color: white;
                    border-radius: 5px;
                }
                .big-bord{
                    border: 3px solid black;
                }
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
                    // background-color: black;
                    border: 1px solid black;
                    border-radius: 5px;
                    width: max-content;
                    // color: white;
                    margin-top: 5px;
                }
                .item{
                    width: max-content;
                    // display: block;
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