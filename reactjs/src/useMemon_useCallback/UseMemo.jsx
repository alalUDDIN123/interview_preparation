import React, { useState, useMemo } from 'react';

export default function UseMemo(props) {
  const [count, setCount] = useState(0);

  const expensiveResult = useMemo(() => {
    console.log('Use memo calling and component re-rendering...');
    let result = 0;
    for (let i = 0; i < 2; i++) {
      result += i;
    }
    return result+count;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive result: {expensiveResult}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
