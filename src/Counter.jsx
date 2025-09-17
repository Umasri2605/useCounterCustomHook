import React from 'react'
import { useCounter } from './useCounter'

function Counter({ic,is,name}) {
    var [count,inc,dec]=useCounter(ic,is,name);
  return (
    <div  className="border border-primary border-1 m-3 p-3">
      <h1>CounterApp:{count}</h1>
      <button onClick={()=>{inc();}} className='ms-3 bg-success border-success-subtle text-white'>Increment</button>
      <button onClick={()=>{dec();}} className='ms-3 bg-danger border-danger-subtle text-white'>Decrement</button>

    </div>
  )
}

export default Counter
