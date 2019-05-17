import React from 'react';
import PropTypes from 'prop-types';

import TodoCard from '../todoCard/TodoCard';

const TodoList = props => {

  const { todos, title } = props;
  const todoList =  todos.map(({title, body, _id}) => <TodoCard key={_id} title={title} body={body} id={_id} />);
  
  return(
    <div>
      <h3>{ title }</h3>
      { todoList }
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  title: PropTypes.string
}


export default TodoList;