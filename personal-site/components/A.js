import Link from 'next/link';

export default function A({children, href}){
    // need to check to see if it's an internal link
    if(href && href.startsWith("/")){
        return(
            <Link href={href}>
                <a>
                    {children}
                </a>
            </Link>
        )
        
        
    }
    return(
        <a href={href} target="_blank">
            {children}
        </a>
    )
}