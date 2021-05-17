import FilteredList from '../components/bookmarks/FilteredList'
import queryNotionDatabase from '../external-calls/notion';
import UrlList from '../components/bookmarks/UrlList';



const peoplePage = ({notion_bookmarks, notion_people}) => {
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
                <span className="margin-left-25">My favorites</span>
            </div>
            
            <div className="online-head">
                <div onClick={compChange} className={` base-button no-select ${currentCat == "Follows" ? 'selected' : 'unselected'}`}>Follows</div>
                <div onClick={compChange} className={` base-button no-select ${currentCat == "Media" ? 'selected' : 'unselected'}`}>Media</div>

            </div>

            { currentCat == "Follows" ? <FilteredList listObj={notion_people} /> : null}
            { currentCat == "Media" ? <UrlList catState={setCat} list={notion_bookmarks} /> : null}



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
                    background-color: #f8f8f8;
                    
                }
                .online-head{
                    display: flex;
                    margin-top: 25px;
                    margin-bottom: 50px;
                }
                
            `}</style>
        </>
    )
}
export async function getStaticProps() {
    const notion_bookmarks = await queryNotionDatabase(process.env.FASC_DB_ID);
    const notion_people = await queryNotionDatabase(process.env.PEOPLE_DB_ID);

    return {
        props: {
            square: "Library",
            notion_bookmarks,
            notion_people
        }
    }
}
export default peoplePage;