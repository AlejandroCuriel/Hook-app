const initialState = [
  {
  id: 1,
  todo: 'Recolectar la piedra del alma',
  done: false,
  }
];

const todoReducer = (state = initialState, action = {}) => {

  if (action.type == '[Todo] add todo') {
    return [...state, action.payload]
  }


  return state;
}

let  todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Recolectar la priedra del poder',
  done: false,
}

const addTodoAction = {
  type: '[Todo] add todo',
  payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);
console.log(todos)