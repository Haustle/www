import {things} from '../external-calls/intplace'
import {bookmarks} from '../external-calls/vaultdup'
import FilteredList from '../components/bookmarks/FilteredList'



const peoplePage = () => {
    const [currentCat, setCat] = React.useState("Follows")

    const compChange = (item) => {
        const category = item.target.innerText;
        if(category != currentCat){
            setCat(category)
        }

    }

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

            { currentCat == "Follows" ? <FilteredList listObj={things} /> : null}
            { currentCat == "Media" ? <FilteredList listObj={bookmarks} /> : null}


            <p className="notice">*These lists are cherry-picked statically. Sometime in the future it'll be connected via API.</p>
            <style jsx>{`
                .notice{
                    font-size: .8rem;
                    margin-top: 50px;
                }
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
            // archive: things,
            square: "Library"
        }
    }
}
export default peoplePage;