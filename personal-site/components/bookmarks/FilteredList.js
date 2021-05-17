import { useEffect } from 'react'

export default function FilteredList({listObj = []}){

    const [people, filterPeople] = React.useState(listObj);
    const [catSet, setCatSet] = React.useState(new Set())
    // this one is actually a list
    const [catList, setCatList] = React.useState([]);
    const [showfil, setShowfil] = React.useState(false);

    // Getting all the categories from all the associated communities / poeple
    // add them to set so now duplicates
    let cateGorySet = new Set();
    for (let x = 0; x < listObj.length; x++) {
        const tempList = listObj[x].category
        tempList.forEach(cat => {
            cateGorySet.add(cat)
        })
    }

    // checking to see the individual contains all the categories
    function containsCategory(userList) {

        let result = catList.every(i => userList.includes(i))
        return result;
    }

    function showFilters() {
        setShowfil(!showfil);
    }
    let togglePeople = (filter) => {

        // make a new set out of our current categories so we can filter easier
        let set = new Set(catList);
        if (set.has(filter)) {
            set.delete(filter);
        }
        else {
            set.add(filter)
        }

        // turn the set back into an array and set
        setCatSet(set)
        setCatList([...set])


    }

    // watch [catList] to see if there's changes, once there's a change filterPeople()
    // this will act similiarly to an observer

    useEffect(() => {

        const fitL = listObj.filter(p => containsCategory(p.category))
        filterPeople(fitL)
    }, [catList]);

    // this is the intial set of categories
    cateGorySet = [...cateGorySet]; // turn the set into a list

    const shortDate = (date) => {
        const dateList = date.split("/")
        return `${dateList[0]}-${dateList[2]}`
    }
    return(
        
        <>
            <div onClick={showFilters} className="show-filters">{showfil ? 'Hide filters' : 'Show filters'} </div>
            { showfil ? (
                <div className="cat-contain">
                    {cateGorySet.map((item, index) => (
                        <span className={`cat-buttons ${catSet.has(item) ? 'selected-cat' : 'nonselected-cat'}`} onClick={() => togglePeople(item)} key={item}>
                            {item}
                        </span>

                    ))}

                </div>
            ) : null

            }


            <div>
                {people.map((item, index) => (
                    <div className="person" key={`${item.name}`}>
                        { item.date ? <span className="date ibm">{shortDate(item.date)}</span> : null }
                        <span className="item link ibm" key={`${index}`}><a target="_blank" href={item.url}>{item.name}</a></span>
                        <span className="item-category-container" key={`categories${item.name}`}>
                            {!!item.date == false ? item.category.map((cat, index) => <span className="no-select list-cat" key={`${cat}${index}`}>{cat}</span>) : null}
                        </span>
                    </div>

                ))}
            </div>

            <style jsx>{`
                .date{
                    margin-right: 50px;
                    font-size: .9rem;
                    width: 10%;
                    color: black;
                    display: inline-block;
                }
                .show-filters{
                    font-weight: bold;
                    width: 80%;
                    margin-bottom: 35px;
                    cursor: pointer;
                    width: max-content;
                }
                .results-found{
                    margin-bottom: 30px;
                }
                .person{
                    display: block;
                    margin-bottom: 20px;
                }
                .list-cat:first-child{
                    margin-left: 25px;
                }
                .list-cat{
                    font-size: .8rem;
                    margin-left: 10px;
                    padding: 5px;
                    background-color: black;
                    color: white;
                    border-radius: 5px;
                    font-weight: 500
                }

                .cat-contain{
                    width: 100%;
                    display: inline-block;
                    margin-bottom: 50px;
                    padding-left: 20px;
                    border-left: 2px solid black;
                    margin-top: 15px;
                }
                .cat-contain span:not(:last-child){
                    margin-right: 5px;
                }
                .selected-cat{
                    border: 2px solid transparent;
                    background-color: black;
                    color: white;

                }
                .nonselected-cat{
                    border: 2px solid transparent;
                    background-color: #efefef;
                }
                .cat-buttons{
                    cursor: pointer;
                    display: inline-block;
                    padding: 5px;
                    font-size: .8rem;
                    border-radius: 5px;
                    width: max-content;
                    margin-top: 5px;
                }
                .nonselected-cat:hover{
                    // border: 2px solid black;
                }
                .item{
                    width: max-content;
                }

            `}</style>
        </>
    )
}