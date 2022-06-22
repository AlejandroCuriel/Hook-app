import React, { useState } from 'react'
import { useFetch } from '../Hooks/useFetch';
import { useForm } from '../Hooks/useForm'

export const Search = () => {
  const { searchId, onInputChange } = useForm({
    searchId: '',
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    const { data, isLoading } = useFetch(`https://breakingbadapi.com/api/quotes/${searchId}`)
  }

  return (
    <>
      <h3>Buscar: </h3>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Ingrese ID"
          name="searchId"
          value={searchId}
          onChange={onInputChange}
        />
      </form>
    </>
  )
}
