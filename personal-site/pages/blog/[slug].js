import BlogLayout from "../../components/blog/BlogLayout"
import fs from 'fs'
import path from 'path'
import dynamic from 'next/dynamic'





export default function Post({slug , meta}){
    const MDx = dynamic( async () => await import(`../../posts/${slug}.mdx`));
    return (
        <BlogLayout meta={meta}>
            <MDx/>
        </BlogLayout>
    );
}
    
export const getStaticProps = async (context) => {
    const slug = context.params.slug;
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
    const paths = filenames.map(file => '/blog/' + file.replace(".mdx",""))

    return{
        paths,
        fallback: false
    }
}

