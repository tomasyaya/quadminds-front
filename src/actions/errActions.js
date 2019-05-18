import { SEND_ERROR } from './actionType';

export const sendError = err => dispatch => {
  dispatch({
    type: SEND_ERROR,
    payload: err
  })
} 