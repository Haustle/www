export default function ActivityCircle({ days = 0}){

    var colorChosen = "";
    switch (days >= 0) {
        case (days <= 7 && days >= 0):
            console.log(`We are inside of green: ${days}`)
            colorChosen = "green";
            break;
        case (days <= 14 && days >= 7):
            colorChosen = "yellow";
            break;
        case(days >= 14 && days <= 30):
            colorChosen = "orange";
            break;
        case (days <= 60 && days >=30):
            colorChosen = "blue";
            break;
        case (days >= 60):
            colorChosen = "red";
            break;
    }
    return(
        <div>
            <div className={`circle ${colorChosen}`}></div>
            <style jsx>{`
                .red{ background-color: red }
                .green{ background-color:  green}
                .yellow{ background-color: yellow}
                .orange{ background-color: orange}
                .blue{ background-color: blue}

                .circle{
                    margin-right: 10px;
                    border-radius: 50%;
                    height: 1em;
                    width: 1em;
                }
            `}</style>
        </div>
        
    )

}