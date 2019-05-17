import React from 'react';
import PropTypes from 'prop-types';

const TodoCard = props => {

  const { title, body } = props;
  return (
    <div>
      <h4>{ title }</h4>
      <p>{ body }</p>
    </div>
  )
}

TodoCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string     
}

export default TodoCard;