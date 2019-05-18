import React from 'react';
import { string, array } from 'prop-types';
import TodoCard from '../todoCard/TodoCard';
import './todoList.css';

const TodoList = props => {

  const { todos, title } = props;
  const todoList =  todos.map(({title, body, _id}) => <TodoCard key={_id} title={title} body={body} id={_id} />);

  return(
    <div className="list-container">
      <h3 className="list-title">{ title }</h3>
      { todoList }
    </div>
  )
}

TodoList.propTypes = {
  todos: array,
  title: string
}


export default TodoList;