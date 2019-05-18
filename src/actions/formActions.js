import { SHOW_FORM } from './actionType';

export const showForm = term => dispatch => {
  dispatch({
    type: SHOW_FORM,
    payload: term
  })
}
