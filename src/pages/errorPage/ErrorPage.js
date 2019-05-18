import React from 'react';
import { connect } from 'react-redux';

const ErrorPage = props => {
  const { message } = props;
  console.log(message)
  return(
    <h2>Error</h2>
  )
}

const mapStateToProps = state => {
  return {
    message: state.error.errMessage
  }
}

export default connect(mapStateToProps, null)(ErrorPage);