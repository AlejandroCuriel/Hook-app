import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'curiel',
    email: 'curiel@gmail.com',
  })

  const { username, email } = formState;

  const onInputChange = ({target}) => {
    console.log(target)
    const {name, value} = target;
    console.log(name, value)
    // setFormState({
    //   ...formState,
    //   [ name ]:value
    // })
  }

  useEffect( () => {
    // console.log('UseEffect Called!')
  }, []);

  useEffect( () => {
    // console.log('FormState Changed!')
  }, [ formState ]);

  useEffect( () => {
    // console.log('email changed!')
  }, [ email ]);



  return (
    <>
      <h1>Simple Form</h1>
      <hr/>

      <input
        type="text"
        className='form-control'
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      {(username === 'curiel2') && <Message />}

      <input
        type="email"
        className='form-control mt-3'
        placeholder="example@example.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

    </>
  )
}
