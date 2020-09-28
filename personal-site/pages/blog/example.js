import ToggleList from '../../components/blog/toggleList';
import BlogFooter from '../../components/blog/BlogFooter';
import CodeBlock from '../../components/blog/CodeBlock'
import H from '../../components/blog/H'
import { goals } from '../../external-calls/goals';
export default function Example(){




    var codeSnip = `
    {itemList.map((item, index) => (
        <div className="list-item">
            {item}
        </div>
    ))};`;
    return(
        <>
            <div className="article-overview flex">
                <span className="summary-tag">Summary</span>
                <div>This is a brief overview of my blog layout as well as components for it</div>
            </div>

            <div className="article-header">
                <div className="flex-justify-between">
                    <div className="article-date">March 23, 2020</div>
                    <div className="article-date">0 views</div>
                </div>
                <h1 className="article-title">Example Title</h1>
            </div>

            <article className="space">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veniam in reiciendis dolorem molestias quasi voluptatem dolor assumenda velit eligendi vel sit, itaque est illum ullam doloribus non, iure totam modi. Hic, earum nostrum ut illum, dolorem fugit voluptatum rem id incidunt libero ullam minus quidem itaque, sunt nobis? Eum deserunt dolor quibusdam ea quo recusandae dignissimos, nam cum tempore officiis a omnis rem vero eveniet quidem eos dolorum obcaecati quod <H>earum placeat</H> voluptatum. Incidunt laborum provident asperiores? Veritatis ducimus quidem atque dignissimos tenetur rem maiores harum quasi quod recusandae a libero quis officiis at, esse enim totam numquam possimus!
                </p>
                
                <ToggleList itemList={goals}></ToggleList>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veniam in reiciendis dolorem molestias quasi voluptatem dolor assumenda velit eligendi vel sit, itaque est illum ullam doloribus non, iure totam modi. Hic, earum nostrum ut illum, dolorem fugit voluptatum rem id incidunt libero ullam minus quidem itaque, sunt nobis? Eum deserunt dolor quibusdam ea quo recusandae dignissimos, nam cum tempore officiis a omnis rem vero eveniet quidem eos dolorum obcaecati quod earum placeat voluptatum. Incidunt laborum provident asperiores? Veritatis ducimus quidem atque dignissimos tenetur rem maiores harum quasi quod recusandae a libero quis officiis at, esse enim totam numquam possimus!
                </p>

                <p className="code-p">
                    <CodeBlock language="JavaScript" code={codeSnip}></CodeBlock>
                </p>
            </article>
            <BlogFooter></BlogFooter>
            <style jsx>{`

                .code-p{
                    background-color: whitesmoke;
                    color: black;
                    font-size: 16px;
                }
                article{
                    line-height: 1.9;
                    font-size: 1.0rem;
                }
                .article-title{
                    margin-top: 1rem;
                }
                .article-header{
                    margin-bottom: 50px;
                    margin-top: 50px;
                }
                .summary-tag{
                    border-radius: 10px;
                    // background-color: #1976d2;
                    // color: #f2f5fa;
                    height: max-content;
                    color: black;
                    background-color: white;
                    padding: 5px 10px;
                    margin-right: 20px;
                }
                .article-overview{
                    padding: 20px 50px;
                    margin-top: 50px;
                    // background-color: #f2f5fa;
                    background-color: black;
                    color: white;
                    border-radius: 10px;
                    margin-bottom: 20px;

                }
            `}</style>
        </>
    )
}

export function getStaticProps(){
    return{
        props : {
            pageName: 'Blog'
        }
    }
}