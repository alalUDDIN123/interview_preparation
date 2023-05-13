import React, { useState } from 'react'
import UseMemo from './UseMemo';
import UseCallback from './UseCallback';

function Main() {
    const [count, setCount] = useState(0);

    return (
        <div style={{textAlign:"center"}} >
            <UseMemo />
            <UseCallback onClick={() => setCount(count + 1)} />
            <p>Count: {count}</p>
        </div>
    );
}

export default Main
