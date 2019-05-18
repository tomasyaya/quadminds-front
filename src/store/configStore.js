import { createStore, combineReducers,  applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from '../reducers/todoReducer';
import errorReducer from '../reducers/errorReducer';


const rootReducer = combineReducers({
  todos: todosReducer,
  error: errorReducer
})

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
}

export default configureStore