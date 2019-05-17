import { GET_TODOS } from '../actions/actionType';

const initialState = {
  todos: []
}

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case GET_TODOS:
      return {
        ...state,
        todos: [...payload]
      }
    default:
    return {
      ...state
    }
  }
}

export default todoReducer;