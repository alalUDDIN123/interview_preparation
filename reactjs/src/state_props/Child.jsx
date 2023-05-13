
import React, { useState } from 'react';

function Child(props) {
  const { propChange } = props;
  const [stateChange, setStateChange] = useState(0)

  const incrementStateChange = () => {
    setStateChange(prev => prev - 1)
  }
  console.log("state change re-render component");


  return (
    <>

      <p>Count from Parent: {propChange}</p>
      <p>=================================================</p>
      <p>Count for state : {stateChange}</p>
      <button onClick={incrementStateChange} > Increment State Count</button >
    </>
  );
}

export default Child;