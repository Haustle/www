// const path = require("path");
import fs from 'fs'
import path from 'path'
import matter from "gray-matter"

export default function getPosts(){
    const postDir = path.join(process.cwd(), "posts");
    const filenames = fs.readdirSync(postDir).filter(file => file.endsWith(".mdx"))

    let postMap = new Map()

    for (var x = 0; x < filenames.length; x++) {
        const newpath = path.join(postDir, filenames[x]);

        const rawFileSource = fs.readFileSync(newpath);
        const { content, data } = matter(rawFileSource)

        const year = data.year;
        if (!postMap.has(year)) {
            postMap.set(year, [])
        }
        postMap.get(year).push(data)

    }
    const retPost = [...postMap].map(([year, posts]) => ({ year, posts }));
    return retPost
}
