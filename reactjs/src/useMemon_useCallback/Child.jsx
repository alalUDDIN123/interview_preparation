import React, { memo } from 'react'

function Child(props) {
    // When a React component is rendered, all of the functions that are used in the component are also recreated.
    // This is because React needs to be able to update the state of the component based on the values 
    // that are returned by the functions.

    // referential equality
    console.log("child component re-rendering 👍👍👍👍");
    // console.log("props:",props);

   
    return (
        <>
            <h1>I am from Child</h1>
            <p>Count from Child : {props.add}</p>
            <button onClick={()=>props.AddtionFn()} >Add 3</button>
            <p>====================Below From Main Component============</p>
        </>
    )
}

export default memo(Child)
