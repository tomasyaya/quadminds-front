import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getTodo } from '../../actions/actions';
import './detail.css';


const Detail = props => {

  const { getTodo, todo } = props; 
  const { goBack } = props.history
  const { id } = props.match.params;
  const [ load, setLoad ] = useState(false)

  useEffect(() => {
    getTodo(id)
    setLoad(true)
  },[getTodo, id, setLoad])


  const { body, title } = todo;
  
  const showTitle = load ? <h3>{ title }</h3> : null;
  const showBody = load ? <p>{ body }</p> : null;
  const goBackButton = load ? <button className="ui inverted primary button" onClick={() => goBack()}>{ "Go back" }</button> : null;
  return(
    <div class="detail-conatiner">
      { showTitle }
      { showBody }
      { goBackButton }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todo: state.todos.selectTodo
  }
}

export default connect(mapStateToProps, { getTodo })(Detail);