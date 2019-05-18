import React, { useState } from 'react';
import { string } from 'prop-types';
import Form from '../forms/Form';

const TodoCard = props => {

  const [ edit, setEdit ] = useState(false);

  const { title, body, id } = props;
  
  const showTitle = !edit ? <h4>{ title }</h4> : null;
  const showBody = !edit ? <p>{ body }</p> : null;
  const displayForm = edit ? <Form id={id} /> : null;
  const buttonText = !edit ? <p>{"Edit"}</p> : <p>{"Done"}</p>;
  const showButton = id ? <button onClick={() => setEdit(!edit)}> { buttonText } </button> : null;

  return (
    <div>
      { showTitle }
      { showBody }
      { displayForm }
      { showButton }
    </div>
  )
}

TodoCard.propTypes = {
  title: string,
  body: string     
}



export default TodoCard;