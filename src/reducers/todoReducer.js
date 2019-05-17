import { GET_TODOS, CREATE_TODO } from '../actions/actionType';

const initialState = {
  todos: [],
  done: []
}

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch(type) {
    case GET_TODOS:
      return {
        ...state,
        todos: [...payload].filter(todo => todo.status === false),
        done: [...payload].filter(todo => todo.status === true)
      }
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    default:
    return {
      ...state
    }
  }
}

export default todoReducer;