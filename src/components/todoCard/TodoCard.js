import React, { useState } from 'react';
import { string } from 'prop-types';
import Form from '../forms/Form';

const TodoCard = props => {

  const [ edit, setEdit ] = useState(false)

  const { title, body, id } = props;
  
  const showTitle = !edit ? <h4>{ title }</h4> : null;
  const showBody = !edit ? <p>{ body }</p> : null;

  const showForm = edit ? <Form id={id} /> : null;

  return (
    <div>
      { showTitle }
      { showBody }
      { showForm }
      <button onClick={() => setEdit(true)}>
        edit
      </button>
    </div>
  )
}

TodoCard.propTypes = {
  title: string,
  body: string     
}

export default TodoCard;