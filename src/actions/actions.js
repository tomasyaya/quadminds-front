import { GET_TODOS, GET_TODO } from './actionType';
import todoService from '../service/todoService';



export const getTodo = id => async dispatch => {
  try {
    const todo = await todoService.getTodo(id)
    dispatch({
      type: GET_TODO,
      payload: todo
    })
  } catch(err) {
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

export const createTodo = todo => async dispatch => {
  try {
    await todoService.createTodo(todo) 
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
    await todoService.updateTodo(id, body)
    const todos = await todoService.getTodos()
    dispatch({
      type: GET_TODOS,
      payload: todos
    })
  } catch(err) {
    console.log(err)
  }
}

export const deleteTodo = id => async dispatch => {
  try {
    await todoService.deleteTodo(id)
    const todos = await todoService.getTodos()
    dispatch({
      type: GET_TODOS,
      payload: todos
    })
  } catch(err) {
    console.log(err)
  }
}