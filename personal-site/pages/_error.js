export default function error() {
    return (
        <div className="justify-center">
            <div>
                <div>Page not found...</div>
                <div>You must construct additional pylons</div>
            </div>

            <style jsx>{`
                .justify-center{
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                }
            `}</style>
        </div>
        
    )
}

export function getStaticProps() {
    return {
        props: {
            name: 'Error'
        }
    }
}