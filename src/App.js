const App = () => {
    const bootcamps = [
        {
            id: '1',
            name: 'Bootcamp 1',
            average_rating: 8 
        },
        {
            id: '2',
            name: 'Bootcamp 2',
            average_rating: 10 
        }
    ]
    return (
        <>
            <h1>This is the Component App {bootcamps[0].name} </h1>
            <ul>
                { bootcamps.map((bootcamp) =>(
                        <li> { bootcamp.name } </li>
                    )  ) 
                }
            </ul>
        </>
    )
}
export default App