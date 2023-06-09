import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [propChange, setPropChange] = useState(0)
    const incrementPropChange = () => {
        setPropChange(prev => prev + 1)
    }
    console.log("prop change re-render component");
    return (
        <>
            <button onClick={incrementPropChange} >Incremnt propChange Count</button>
            <p>=================================================</p>
            <Child propChange={propChange} />
        </>
    )
}

export default Parent
