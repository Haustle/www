import {things} from '../external-calls/intplace'
import {bookmarks} from '../external-calls/vaultdup'
import Callout from '../components/callout'
import FilteredList from '../components/bookmarks/FilteredList'
import { useEffect } from 'react'


const peoplePage = () => {
    const [currentCat, setCat] = React.useState("Follows")

    const compChange = (item) => {
        var category = item.target.innerText;
        if(category != currentCat){
            setCat(category)
        }

    }

    useEffect(() => {
        var cats = {
            'Follows': things,
            'Media': bookmarks
        }

    }, [currentCat])

    return(
        <>
            <div className="h1-name flex-align-items-center lib-header">
                <h1 className="lib-title">Libary</h1>
                <span className="margin-left-25">My favorite bookmarks 📖</span>
            </div>
            
            <div className="online-head">
                <div onClick={compChange} className={` base-button ${currentCat == "Follows" ? 'selected' : 'unselected'}`}>Follows</div>
                <div onClick={compChange} className={` base-button ${currentCat == "Media" ? 'selected' : 'unselected'}`}>Media</div>
            </div>

            { currentCat == "Follows" ? <div> <FilteredList listObj={things} /></div> : <div><FilteredList listObj={bookmarks}/></div> }

            <style jsx>{`
                .base-button{
                    padding: 2px 5px;
                    border-radius: 5px;
                }
                .lib-title{
                    font-size: 2rem;
                }
                .selected{
                    background-color: #efefef;

                }
                .online-head div{
                    cursor: pointer;
                }

                .online-head div:not(:last-child){
                    margin-right: 30px;
                }
                .unselected:hover{
                    // text-decoration: underline;
                    background-color: #f8f8f8;
                    
                }
                .online-head{
                    display: flex;
                    margin-top: 25px;
                }
                
            `}</style>
        </>
    )
}
export function getStaticProps() {
    return {
        props: {
            archive: things,
        }
    }
}
export default peoplePage;