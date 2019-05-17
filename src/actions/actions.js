import { GET_TODOS, CREATE_TODO, UPDATE_TODO } from './actionType';
import todoService from '../service/todoService';


export const createTodo = todo => async dispatch => {
  try {
    const newTodo = await todoService.createTodo(todo) 
    dispatch({
      type: CREATE_TODO,
      payload: newTodo
    })
  } catch (err) {
    console.log(err)
  }
}

export const getTodos = () => async dispatch => {
  try {
    const todos = await todoService.getTodos()
    dispatch({
      type: GET_TODOS,
      payload: todos
    })
  } catch (err) {
    console.log(err)
  }
}

export const updateTodo = (id, body) => async dispatch => {
  try {
    console.log(body)
    await todoService.updateTodo(id, body)
    const todos = await todoService.getTodos()
    dispatch({
      type: UPDATE_TODO,
      payload: todos
    })
  } catch(err) {
    console.log(err)
  }

}