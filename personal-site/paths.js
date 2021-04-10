// It's easier and faster (assuming) to hardcode and have the article information available.
// Then to have to open all mdx files and read the metadata

// I need to make sure I have the exact same tags as the [article].mdx file has
// need to find a smooth way of making sure these match vs hardcoding





// returns posts that contain tag
// maintains year -> year.posts structure

export function withTag(tag, currentPosts){
    currentPosts.map(year => {
        year.posts = year.posts.filter(post => post.tags.includes(tag))
        return currentPosts
    })
    const returnList = currentPosts
    return returnList;

}


// This function returns set of all tags found in posts

export async function allTags(posts){
    // return master list of keys
    let list = []

    // grab all postings w/ their tags
    for (let x = 0; x < posts.length; x++){
        const yearPost = posts[x].posts;
        for(let y = 0; y < yearPost.length; y++){
            const tags = yearPost[y].tags;
            for(let z = 0; z < tags.length; z++){
                
                // make check to see if the list already contains the tag
                if(!list.includes(tags[z])){
                    list.push(tags[z])
                }
            }
        }

    }

    return list
}

