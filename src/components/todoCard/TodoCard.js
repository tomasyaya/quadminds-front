import React, { useState } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { updateTodo } from '../../actions/actions';
import Form from '../forms/Form';

const TodoCard = props => {

  const [ edit, setEdit ] = useState(false);

  const { title, body, id, updateTodo } = props;
  
  const showTitle = !edit ? <h4>{ title }</h4> : null;
  const showBody = !edit ? <p>{ body }</p> : null;
  const displayForm = edit ? <Form id={id} /> : null;
  const buttonText = !edit ? <p>{"Edit"}</p> : <p>{"Done"}</p>;
  const editButton = id ? <button onClick={() => setEdit(!edit)}> { buttonText } </button> : null;
  const statusButton = id ? <button onClick={() => updateTodo(id)}>{"Status"}</button> : null;
  return (
    <div>
      { showTitle }
      { showBody }
      { displayForm }
      { editButton }
      { statusButton }
    </div>
  )
}

TodoCard.propTypes = {
  title: string,
  body: string     
}



export default connect(null, { updateTodo })(TodoCard);