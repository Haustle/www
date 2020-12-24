import {things} from '../external-calls/intplace'
import {bookmarks} from '../external-calls/vaultdup'
import Callout from '../components/callout'
import FilteredList from '../components/bookmarks/FilteredList'
import { useEffect } from 'react'


const peoplePage = () => {
    // const [curList, setList] = React.useState(things)
    const [currentCat, setCat] = React.useState("Following")
    // const [comp, setComp] = React.useState(<FilteredList listObj={curList} />)

    const compChange = (item) => {
        var category = item.target.innerText;
        if(category != currentCat){
            setCat(category)
        }

    }

    useEffect(() => {
        var cats = {
            'Following': things,
            'Consumed': bookmarks
        }

    }, [currentCat])

    return(
        <>
            <div>Here are a list of some sources I follow as well</div>
            <div className="online-head">
                <div onClick={compChange} className={`${currentCat == "Following" ? 'black-background' : ''}`}>Following</div>
                <div onClick={compChange} className={`${currentCat == "Consumed" ? 'black-background' : ''}`}>Consumed</div>
            </div>

            { currentCat == "Following" ? <div> <FilteredList listObj={things} /></div> : <div><FilteredList listObj={bookmarks}/></div> }




            


            <style jsx>{`
                .black-background{
                    background-color: black;
                    color: white;
                }
                .online-head div{
                    cursor: pointer;
                }

                .online-head div:hover{
                    background-color: black;
                    color: white;
                }
                .online-head{
                    padding: 10px;
                    display: flex;
                    width: 200px;
                    border: 1px solid black;
                    justify-content: space-between;
                    border-radius: 10px;
                    margin-top: 25px;
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