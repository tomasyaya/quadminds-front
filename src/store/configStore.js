import { createStore, combineReducers,  applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from '../reducers/todoReducer';



const rootReducer = combineReducers({
  todos: todosReducer,
})

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
}

export default configureStore