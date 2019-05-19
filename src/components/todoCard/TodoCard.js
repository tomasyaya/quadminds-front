import React, { useState } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateTodo, deleteTodo } from '../../actions/actions';
import Form from '../forms/Form';

import './todoCard.css';

const TodoCard = props => {

  const [ edit, setEdit ] = useState(false);

  const { title, body, id, updateTodo, deleteTodo } = props;
  
  const showTitle = !edit ? <h4 className="card-title">{ title }</h4> : null;
  const showBody = !edit ? <p>{ body }</p> : null;
  const displayForm = edit ? <Form id={id} /> : null;
  const buttonText = !edit ? "Edit" : "Done";
  const editButton = id ? <button className="ui inverted violet button" onClick={() => setEdit(!edit)}> { buttonText } </button> : null;
  const statusButton = id ? <button className="ui inverted green button" onClick={() => updateTodo(id)}>{"Status"}</button> : null;
  const deleteButton = id ? <button className="ui inverted red button" onClick={() => deleteTodo(id)}>{"Remove"}</button> : null;
  return (
    <div className="card">
      <div>
        <Link to={`/${id}`}>
          { showTitle }
          { showBody }
        </Link> 
          { displayForm }
      </div>
      <div className="card-buttons">
        { editButton }
        { statusButton }
        { deleteButton }
      </div>
    </div>
  )
}

TodoCard.propTypes = {
  title: string,
  body: string     
}



export default connect(null, { updateTodo, deleteTodo })(TodoCard);