// import { useEffect } from 'react'

export default function ProjectCard({name="",sum="", link=""}){
    const [cardHov, setCardHov] = React.useState(false);
    return(
        <>
            <a href={`http://www.${link}`} target="_blank" className="max">
                <div className={`${cardHov ? 'shadow' : 'no-shadow'} card`} onMouseOver={() => setCardHov(true)} onMouseOut={() => setCardHov(false)}>
                    <h3 className="">{name}</h3>
                    <div className="grey sum">{sum}</div>

                </div>
            </a>        
            
            <style jsx>{`
                .sum{
                    font-size: 1rem;
                }
                .max{
                    width: max-content;
                    display: block;
                }
                .card{
                    line-height: 1.9rem;
                    width: max-content;
                    padding: 20px;
                    border-radius: 10px;
                    border: 1px solid whitesmoke;

                }


                .no-shadow{
                    border: 1px solid whitesmoke;
                    // box-shadow: 0 1px 1px rgba(0,0,0,0.0), 
                    //             0 2px 2px rgba(0,0,0,0.0), 
                    //             0 4px 4px rgba(0,0,0,0.0);
                    
                    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.03);
                    
                }
            `}</style>
        </>
    )
}