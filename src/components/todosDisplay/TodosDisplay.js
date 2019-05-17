import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../actions/actions';

class TodosDisplay extends Component {

  async componentDidMount() {
    const { getTodos } = this.props;
    try {
      await getTodos()
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.props.todos)
    return(
      <h3>Display</h3>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { getTodos } )(TodosDisplay);