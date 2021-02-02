import Link from 'next/link';

export default function A({children, link="", text=""}){
    // need to check to see if I can use <Link> tag (for local pages)
    // or If I need a regular <a> tag
    
    const local = link.charAt(0) == "/"
    console.log(`this is local : ${local}`)

    if(local){
        return(
            <Link href={link}>
                <a>
                    {text}
                </a>
            </Link>
        )
        
        
    }
    return(
        <a href={link} target="_blank">
            {text}
        </a>
    )
}