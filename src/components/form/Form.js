import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../actions/actions';


const Form = props => {

  const [ validation, setValidation ] = useState(false)
  const [ title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')

  const { createTodo } = props;

  const newTodo = { title, body }
  const valMessage = validation ? <p>{ "Complete all fields" }</p> : null
  
  
  const handleSubmit = async todo => {
    if(!title || !body) {
      setValidation(true)
      return
    }
    try {
      await createTodo(todo)
    } catch(err) {
      console.log(err)
    }
  }

  return(
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(newTodo)
    }}>

      { valMessage }

      <input type="text" onChange={(e) => { 
        setTitle(e.target.value) 
        setValidation(false) }}/>

      <input type="text" onChange={(e) => { 
        setBody(e.target.value) 
        setValidation(false)}}/>

      <input type="submit" value="submit" />
    </form>
  )
}



export default connect(null, { createTodo })(Form);