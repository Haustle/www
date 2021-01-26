// It's easier and faster (assuming) to hardcode and have the article information available.
// Then to have to open all mdx files and read the metadata
export default function posts() {
    return (
        [
            {
                "year": 2020,
                "posts": [
                    {
                        "title": "MDX Example Post",
                        "date": "Dec 10 , 2020",
                        "tags": ["Life", "Code", "Practice"],
                        "summary": "Example Blog Layout Post",
                        "slug": "mdprac"
                    },
                    
                ]
            },
            {
                "year" : 2021,
                "posts": [
                    {
                        "title": "MDX Example Post 2",
                        "date": "Jan 22 , 2021",
                        "tags": ["Life", "Code", "Practice"],
                        "summary": "Example Blog Layout Post",
                        "slug": "mdprac"
                    },

                ]
            }

        ]
    )
}



export function withTag(tag){
    console.log(`Tag looking for ${tag}`)
    var currentPosts = posts();
    currentPosts.map(year => {
        year.posts = year.posts.filter(post => post.tags.includes(tag))
        return currentPosts
    })
    var returnList = currentPosts
    return returnList;

}

export async function allTags(){
    var list = []
    var temp = await posts();


    for(var x = 0; x < temp.length; x++){
        var yearPost = temp[x].posts;
        for(var y = 0; y < yearPost.length; y++){
            var tags = yearPost[y].tags;
            for(var z = 0; z < tags.length; z++){
                if(!list.includes(tags[z])){
                    list.push(tags[z])
                }
            }
        }

    }

    return list
}

