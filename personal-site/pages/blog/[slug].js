import BlogLayout from "../../components/blog/BlogLayout"
import fs from 'fs'
import path from 'path'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import IMG from '../../components/blog/Img';
import A from '../../components/A'
import matter from "gray-matter"

const components = { IMG, a: A }

export default function Post({meta, mdx}){
    const renderedContent = hydrate(mdx, {components})
    return (
        <BlogLayout meta={meta}>
            {renderedContent}
        </BlogLayout>
    );
}
    
export const getStaticProps = async ({ params }) => {
    const slug = params.slug;

    const newpath = `${path.join(process.cwd(),"posts",slug)}.mdx`
    const rawFileSource = fs.readFileSync(newpath);
    const { content, data } = matter(rawFileSource)
    const mdxSource = await renderToString(content)


    return {
        props: {
            mdx: mdxSource,
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

