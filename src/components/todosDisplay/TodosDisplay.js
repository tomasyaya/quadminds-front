import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../actions/actions';
import TodoList from '../todoList/TodoList';

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
    const { todos } = this.props;
    console.log(todos)
    const undoneTodos = isLoaded ? <TodoList todos={ todos } title={"todos"} /> : null;
    return(
      <div>
        { undoneTodos }  
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  }
}

export default connect(mapStateToProps, { getTodos } )(TodosDisplay);