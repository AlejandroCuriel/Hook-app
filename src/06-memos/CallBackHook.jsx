import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10)

  const incrementFather = useCallback( // Este hook nos sirve para memorizar funciones
    (value) => {
      setCounter((counter) => counter + value);
    },[],
  )

  return (
    <>
      <h1>UseCallBack Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  )
}
