const fetch = require('node-fetch');

const headers = {
    'Authorization': `Bearer ${process.env.NOTION_KEY}`,
    'Content-Type': 'application/json',
    'Notion-Version': '2021-05-13'
}


const queryNotionDatabase = async (database_id) => {
    const url = `https://api.notion.com/v1/databases/${database_id}/query`;
    const response = await fetch(url, {method: 'Post', headers });

    // db items are stored in results
    const { results } = await response.json();

    // loop through db items
    const orgList = results.map((item) => {

        // deconstruct the item by it's properties to get the values
        // Each DB's properties are unique so I need to filter first

        const { properties } = item;

        // to grab media under `Media` on /bookmarks
        if (database_id === process.env.FASC_DB_ID){
            const { URL, Name } = properties;
            return {
                url: URL.url,
                title: Name.title[0].text.content
            }
        }

        // to grab people under `Follows` tab on /bookmarks
        else if (database_id === process.env.PEOPLE_DB_ID){
            const {URL, Name, Tags} = properties;
            const tagList = Tags.multi_select.map(tag => tag.name);
            return {
                url: URL.url,
                name: Name.title[0].text.content,
                category: tagList
            }   
        }
    })

    return orgList

}

export default queryNotionDatabase;
