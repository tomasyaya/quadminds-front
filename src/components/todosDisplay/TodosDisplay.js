import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../actions/actions';
import TodoList from '../todoList/TodoList';

import './todosDisplay.css';

class TodosDisplay extends Component {

  state = {
    isLoaded: false
  }

  componentDidMount = async () => {
    const { getTodos } = this.props;
    try {
      await getTodos()
      this.setState({ isLoaded: true })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const { isLoaded } = this.state;
    const { todos, done } = this.props;
    const undoneTodos = isLoaded ? <TodoList todos={ todos } title={"todos"} /> : null;
    const doneTodos = isLoaded ? <TodoList todos={ done } title={"done"} /> : null;

    return(
      <>
        <div className="todo ui segment">
          { undoneTodos }  
        </div>
        <div className="done ui segment">
          { doneTodos }
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
    done: state.todos.done
  }
}

export default connect(mapStateToProps, { getTodos } )(TodosDisplay);