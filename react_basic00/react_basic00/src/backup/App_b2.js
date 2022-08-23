import { useState } from 'react';
import Test from './list';

const App = () => {
    const [num, setNum] = useState(1);
    const numHamdler = () => (setNum(num + 1));
    return (
        <>
            <h1>{num}</h1>

            {/* <button onClick={numHamdler}>num plus</button> */}
            <Test list="뭐여" name="왜여" age={21} onClick={numHamdler} />
            <Test list="뭔데" name="왜여" age={21} onClick={numHamdler} />
            <Test list="뭐시여" name="왜여" age={21} />
            <Test list="뭐고" name="왜여" age={21} />
            <div>{num}</div>
            <div>02</div>
        </>
    )

}

export default App;