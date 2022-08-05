export const todoReducer = (initialState = [], action) =>  {
  switch (action.type) {

    case '[TODO] Add Todo':
      return [ ...initialState, action.payload]
    break;

    case '[TODO] Delete Todo':
      return initialState.filter( todos => todos.id !== action.payload)
    break;

    case '[TODO] Toggle Todo':
      return initialState.map( todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo;
      })
    default:
      return initialState;
      break;
  }
}