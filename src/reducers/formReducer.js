import { SHOW_FORM } from '../actions/actionType';


const initialState = {
  showForm: false
}

const formReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case SHOW_FORM:
      return {
        ...state,
        showForm: payload
      }
    default:
      return {
        ...state
      }
  }
}


export default formReducer;