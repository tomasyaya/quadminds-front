import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo, updateTodo } from '../../actions/actions';


const Form = props => {

  const [ validation, setValidation ] = useState(false)
  const [ title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')

  const { createTodo, updateTodo, id } = props;

  const newTodo = { title, body }
  const valMessage = validation ? <p>{ "Complete all fields" }</p> : null
  
  
  const handleSubmit = async todo => {
    if(!title || !body) {
      setValidation(true)
      return
    }
    try {
      if(!id){
        await createTodo(todo)
        setTitle('')
        setBody('')
      }
      if(id) {
        console.log(newTodo)
        await updateTodo(id, newTodo)
      }
    } catch(err) {
      console.log(err)
    }
  }

  return(
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(newTodo)}}>

      { valMessage }

      <input type="text" value={title} onChange={(e) => { 
        setTitle(e.target.value) 
        setValidation(false) }}/>

      <input type="text" value={body} onChange={(e) => { 
        setBody(e.target.value) 
        setValidation(false)}}/>

      <input type="submit" value="submit" />
    </form>
  )
}



export default connect(null, { createTodo, updateTodo })(Form);