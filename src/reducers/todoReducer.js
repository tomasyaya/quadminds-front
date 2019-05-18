import { GET_TODOS, GET_TODO } from '../actions/actionType';

const initialState = {
  todos: [],
  done: [],
  selectTodo: []
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
    case GET_TODO:
      return {
        ...state,
        selectTodo: payload
      }
    default:
    return {
      ...state
    }
  }
}

export default todoReducer;