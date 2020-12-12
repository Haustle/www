import {things} from '../external-calls/intplace'
import { useEffect } from 'react'

const peoplePage = () => {
    const [people, filterPeople] = React.useState(things);

    const [catSet, setCatSet] = React.useState(new Set())
    // this one is actually a list
    const [catList, setCatList] = React.useState([])

    // Getting all the categories from all the associated communities / poeple
    // add them to set so now duplicates
    var cateGorySet = new Set();
    for(var x = 0; x < things.length; x++){
        var tempList = things[x].category
        tempList.forEach(cat => {
            cateGorySet.add(cat)
        })
    }

    // checking to see the individual contains all the categories
    function containsCategory(userList) {

        let result = catList.every(i => userList.includes(i))
        return result;
    }

    var togglePeople = (filter) => {

        // make a new set out of our current categories so we can filter easier
        var set = new Set(catList);
        if(set.has(filter)){
            set.delete(filter);
        }
        else{
            set.add(filter)
        }

        // turn the set back into an array and set
        setCatSet(set)
        setCatList([...set])


    }

    // watch [catList] to see if there's changes, once there's a change filterPeople()
    // this will act similiarly to an observer
    
    useEffect(() => {

        var fitL = things.filter(p => containsCategory(p.category))
        filterPeople(fitL)
    }, [catList]);


    cateGorySet = [...cateGorySet]; // turn the set into a list
    return(
        <>
            <div className="internet-sum ">
                Down below are sources I constantly visit for inspiration...
            </div>
            {/* <div className="question">
                Got a question as to why something is on the list, shoot an email <span className="bold">Tyrus@haustle.studio</span>
            </div> */}

            <div className="cat-contain">
                {cateGorySet.map((item, index) => (
                    <span className={`cat-buttons big-bord ${catSet.has(item) ? 'selected-cat' : 'nonselected-cat'}`} onClick={() => togglePeople(item)} key={index}>
                        {item}
                    </span>
                    
                ))}

            </div>
            <div className="results-found grey">
                {people.length} {people.length == 1 ? 'result' : 'results'} found...
            </div>
            <div>
                {people.map((item, index) => (
                    <div className="person" key={`${item.name}`}>
                        <span className="item link" key={`${index}`}><a target="_blank" href={item.url}>{item.name}</a></span>
                        <span className="item-category-container" key={`categories${item.name}`}>
                            {item.category.map((cat, index) => <span className="list-cat" key={`${cat}${index}`}>{cat}</span>)}
                        </span>
                    </div>

                ))}
            </div>
                

            


            <style jsx>{`
                .results-found{
                    margin-bottom: 20px;
                }
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
                    padding-left: 20px;
                    border-left: 2px solid black;
                    margin-top: 15px;
                    padding-top: 10px;
                }
                .cat-contain span:not(:last-child){
                    margin-right: 5px;
                }
                .selected-cat{
                    border: 2px solid black;

                }
                .nonselected-cat{
                    border: 2px solid transparent
                }
                .cat-buttons{
                    cursor: pointer;
                    display: inline-block;
                    padding: 5px;


                    border-radius: 5px;
                    width: max-content;

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
                    // text-decoration: underline;
                    font-weight: bold;
                    width: 80%;
                    margin-bottom: 10px;
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
export default peoplePage;