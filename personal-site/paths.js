// It's easier and faster (assuming) to hardcode and have the article information available.
// Then to have to open all mdx files and read the metadata

// I need to make sure I have the exact same tags as the [article].mdx file has
// need to find a smooth way of making sure these match vs hardcoding
export default function posts() {
    return (
        [
            
            {
                "year" : 2021,
                "posts": [
                    {
                        "title" : "Hello",
                        "date" : "Feb 1 , 2021",
                        "slug": "hello",
                        "tags": ["Hello World"]

                    },

                ]
            }

        ]
    )
}


// returns posts that contain tag
// maintains year -> year.posts structure

export function withTag(tag){
    var currentPosts = posts();
    currentPosts.map(year => {
        year.posts = year.posts.filter(post => post.tags.includes(tag))
        return currentPosts
    })
    var returnList = currentPosts
    return returnList;

}


// This function returns set of all tags found in posts

export async function allTags(){
    // return master list of keys
    var list = []

    // grab all postings w/ their tags
    var temp = await posts();


    for(var x = 0; x < temp.length; x++){
        var yearPost = temp[x].posts;
        for(var y = 0; y < yearPost.length; y++){
            var tags = yearPost[y].tags;
            for(var z = 0; z < tags.length; z++){
                
                // make check to see if the list already contains the tag
                if(!list.includes(tags[z])){
                    list.push(tags[z])
                }
            }
        }

    }

    return list
}

