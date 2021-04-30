// const path = require("path");
import fs from 'fs'
import path from 'path'
import matter from "gray-matter"

export default function getPosts(){

    // get all files in the /posts directory
    const postDir = path.join(process.cwd(), "posts");
    const filenames = fs.readdirSync(postDir).filter(file => file.endsWith(".mdx"))

    let postMap = new Map()

    for (let x = 0; x < filenames.length; x++) {
        const newpath = path.join(postDir, filenames[x]);

        // open and read the mdx file
        const rawFileSource = fs.readFileSync(newpath);

        // we extract the header and the contents of the article
        const { content, data } = matter(rawFileSource)

        const fullDate   = new Date(data.date);
        const year = fullDate.getFullYear();
        data["year"] = year

        // if the year doesn't exist we make a new key to the map
        if (!postMap.has(year)) {
            postMap.set(year, [])
        }

        // add the post data as an item of the year
        postMap.get(year).push(data)

    }

    // turn map into an array
    const retPost = [...postMap].map(([year, posts]) => ({ year, posts }));

    // sorting all the posts from each year
    for(let x = 0; x < retPost.length; x++){
        // order the post from most recent to oldest
        retPost[x].posts.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });

    }

    // order the years
    retPost.sort(function(a,b){
        return b.year - a.year;
    })

    // return the sorted list of posts
    return retPost
}
