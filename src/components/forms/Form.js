import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo, updateTodo } from '../../actions/actions';
import { string } from 'prop-types';

import './form.css';

const Form = props => {

  const [ validation, setValidation ] = useState(false)
  const [ title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')

  const { createTodo, updateTodo, id, header } = props;

  const newTodo = { title, body }
  const valMessage = validation ? <p className="validation">{ "Complete all fields" }</p> : null;
  const formTitle = !id ? <p className="header">{ header }</p> : null;
  
  const handleSubmit = async todo => {
    if(!title || !body) {
      setValidation(true)
      return
    }
    try {
      if(!id){
        await createTodo(todo)
      }
      if(id) {
        await updateTodo(id, newTodo)
      }
      setTitle('')
      setBody('')
    } catch(err) {
      console.log(err)
    }
  }

  return(
    <form className="form ui segment" onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(newTodo)}
      }>
      { formTitle }
      { valMessage }
      <input type="text" placeholder="title" value={title} onChange={(e) => { 
        setTitle(e.target.value) 
        setValidation(false) }
        }/>
      <input id="body" placeholder="message" type="text" value={body} onChange={(e) => { 
        setBody(e.target.value) 
        setValidation(false)}
        }/>
      <input type="submit" value="submit" className="ui primary button" />
    </form>
  )
}

Form.propTypes = {
  header: string,
  id: string
}

export default connect(null, { createTodo, updateTodo })(Form);