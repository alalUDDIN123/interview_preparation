import React, { useCallback } from 'react'

function UseCallback(props) {
    const handleClick = () => {
        console.log('useCallback triggering...');
        props.onClick();
    };

    // Using useCallback to memoize a function
    const memoizedHandleClick = useCallback(handleClick, [props.onClick]);

    return (
        <button onClick={memoizedHandleClick}>Click me</button>
    );
}

export default UseCallback
