import React, { useMemo, useState } from 'react'

function UseMemo() {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(0)

  const addFn = () => {
    setAdd(pre => pre + 5)
  }

  const minusFn = () => {
    console.log("minus function getting invoked 👍👍👍 ");
    setMinus(pre => pre - 5)
  }

  // MulTiplicationWithAddValue 

  const MulTiplicationWithAddValue = (add) => {
    console.log("MulTiplicationWithAddValue function getting invoked 👍👍👍 ");
    return (add * 2)
  }

  const useMemoFn = useMemo(() => MulTiplicationWithAddValue(add), [add])

  return (
    <>
      <h1>I am from useMemo</h1>
      <button onClick={addFn} >Add 5</button>
      <p>Current Add Value: {add} </p>
      <br />
      <br />
      <h3>MulTiplication With Add Value : <b>{useMemoFn}</b> </h3>
      <button onClick={minusFn} >Minus 5</button>
      <p>Current Minus Value: {minus} </p>

    </>
  )
}

export default UseMemo
