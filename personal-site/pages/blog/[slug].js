import BlogLayout from "../../components/blog/BlogLayout"
import fs from 'fs'
import path from 'path'
import dynamic from 'next/dynamic'





export default function Post({slug , meta}){
    const MDx = dynamic( () => import(`../../posts/${slug}.mdx`));
    return (
        <BlogLayout meta={meta}>
            <MDx/>
        </BlogLayout>
    );
}
    
export const getStaticProps = async ({ params }) => {
    const slug = params.slug;
    const metadata = require(`../../posts/${slug}.mdx`).meta
    return {
        props: {
            slug,
            meta: metadata,
            title: metadata.title
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

