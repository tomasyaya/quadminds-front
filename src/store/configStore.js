import { createStore, combineReducers,  applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from '../reducers/todoReducer';
import fromReducer from '../reducers/formReducer';


const rootReducer = combineReducers({
  todos: todosReducer,
  form: fromReducer
})

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
}

export default configureStore