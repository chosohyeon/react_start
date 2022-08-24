const DATA = [
    { id: 1, name: '김가루', age: 28, sleep: false },
    { id: 2, name: '김자반', age: 23, sleep: true },
    { id: 3, name: '김밥', age: 31, sleep: true },
]

const detail = () => {
    return(
        <h2>DATA[0].title</h2>
    )
}

const List = () => {
    return (
        <ul>
            {
                DATA.map(it => 
                <li key={it.id}>
                    {it.name} {it.age} {it.sleep ? "sleepig" : "palying"}
                    </li>)
            }
        </ul >
    )
}

export default List;