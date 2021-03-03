import BlogLayout from "../../components/blog/BlogLayout"
import fs from 'fs'
import path from 'path'
import dynamic from 'next/dynamic'
import { MDXProvider } from "@mdx-js/react";
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
// import {MDX} from "@mdx-js/runtime";

import IMG from '../../components/blog/Img';
import A from '../../components/A'



import matter from "gray-matter"

const components = { IMG, A }

export default function Post({slug , meta, mdx}){
    const sor = hydrate(mdx, { components })
    return (
        <BlogLayout meta={meta}>
            {/* <MDx/> */}
            {sor}
        </BlogLayout>
    );
}
    
export const getStaticProps = async ({ params }) => {
    const slug = params.slug;
    console.log(`start: ${slug}`);

    const newpath = `${path.join(process.cwd(),"posts",slug)}.mdx`

    const rawFileSource = fs.readFileSync(newpath);
    const { content, data } = matter(rawFileSource)
    const mdxSource = await renderToString(content)

    console.log(`end: ${slug}`);
    return {
        props: {
            mdx: mdxSource,
            slug,
            meta: data,
            title: data.title
        }
        
    }
}

    

export function getStaticPaths(){
    const dir = path.join(process.cwd(),"posts");
    const filenames = fs.readdirSync(dir)
    const paths = filenames.map(file => ({params : {slug : file.replace(".mdx","")}}))

    return{
        paths,
        fallback: false
    }
}

