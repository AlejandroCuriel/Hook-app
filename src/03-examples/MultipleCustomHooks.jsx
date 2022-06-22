import React from 'react';
import { useCounter } from '../Hooks/useCounter';
import { useFetch } from '../Hooks/useFetch';
import { Search } from './Search';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1> BreakingBad Quotes </h1>
      <hr/>

      {/* <Search /> */}

      {
        isLoading ? (
          <div className="alert alert-info text-center">
            Loading...
          </div>
        )
        : (
          <blockquote className='blockquote text-end'>
            <p className='mb-1'>{quote} </p>
            <footer className='mt-2 blockquote-footer'>{author}</footer>
          </blockquote>
        )
      }

      <button className='btn btn-primary' disabled={isLoading} onClick={() => increment()}>Next quote</button>
    </>
  )
}