import { SEND_ERROR } from '../actions/actionType';

const initialState = {
  errMessage: ''
}

const errorReducer = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch(type) {
    case SEND_ERROR:
      return {
        ...state,
        errMessage: payload
      }
    default:
    return {
      ...state
    }
  }
}

export default errorReducer;