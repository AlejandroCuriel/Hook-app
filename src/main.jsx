/*
Aqui podremos ver en practica los difereste hooks creados y al igual
los hooks existentes de react, para ver en paractica cada uno solo es
necesario descomentar la exportación del componente
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <FormWithCustomHook />
    <MultipleCustomHooks />
  // </React.StrictMode>
)
