import React, { useEffect } from 'react';
import todoService from '../../service/todoService';

const Home = () => {

  useEffect(() => {
    todoService.getTodos()
  }, [])
  return(
    <h1>Hello</h1>
  )
}

export default Home;