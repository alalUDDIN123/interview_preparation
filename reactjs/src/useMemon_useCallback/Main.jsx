// import React, { useCallback, useState } from 'react'
// import Child from './Child'


// function Main() {
//     const [count, setCount] = useState(0)
//     const [add, setAdd] = useState(0)

//     const Addition = () => {
//         setAdd(prev => prev + 3)
//     }

//     // used useCallback
//     const useCallBackFn = useCallback(() => {
//         Addition()
//     }, [])

//     return (
//         <div style={{ textAlign: "center" }} >
//             <Child AddtionFn={useCallBackFn} add={add} />
//             <p>Count : {count} </p>
//             <button onClick={() => setCount(count + 1)} >IncrementCount</button>

//         </div>
//     );
// }

// export default Main


// for useMemo =================== 👍👍👍👍

import React from 'react'
import UseMemo from './UseMemo'

function Main() {
    return (
        <>
            <div style={{ textAlign: "center" }} >
                <UseMemo />
            </div>
        </>
    )
}

export default Main

