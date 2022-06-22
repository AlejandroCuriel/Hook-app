import { useCounter, useFetch } from '../Hooks';
import { LoadingQuote, Quote } from '../03-examples/index';
// import { Search } from './Search';

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1> BreakingBad Quotes </h1>
      <hr/>

      {/* <Search /> */}

      {
        isLoading
        ? <LoadingQuote />
        : <Quote quote={quote} author={author}/>
      }

      <button className='btn btn-primary' disabled={isLoading} onClick={() => increment()}>Next quote</button>
    </>
  )
}
