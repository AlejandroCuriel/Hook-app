import React from 'react'
import { useCounter } from '../Hooks/useCounter';

export const CounterWithCustomHook = () => {

  const {counter, increment, reset, decrement} = useCounter();

  return (
    <>
      <h1>Counter With CustomHook: {counter}</h1>
      <hr />
      <button onClick={() => increment(2)} className='btn btn-primary'> +2 </button>
      <button onClick={reset} className='btn btn-secondary'> reset </button>
      <button onClick={() => decrement(2)} className='btn btn-primary'> -2 </button>
    </>
  )
}
