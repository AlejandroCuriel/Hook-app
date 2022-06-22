import React, { useEffect, useState } from "react";
import { useForm } from "../Hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

  const {formState, onInputChange, onResetForm, username, email, password} = useForm({
    username: '',
    email: '',
    password: '',
  });


  // const [formState, setFormState] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const { username, email, password } = formState;

  // const onInputChange = ({ target }) => {
  //   const { name, value } = target;
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  useEffect(() => {
    // console.log('UseEffect Called!')
  }, []);

  useEffect(() => {
    // console.log('FormState Changed!')
  }, [formState]);

  useEffect(() => {
    // console.log('email changed!')
  }, [email]);

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      {username === "curiel2" && <Message />}

      <input
        type="email"
        className="form-control mt-3"
        placeholder="example@example.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-3"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

    <button onClick={onResetForm} className="btn btn-primary mt-3" >Borrar</button>

    </>
  );
};
