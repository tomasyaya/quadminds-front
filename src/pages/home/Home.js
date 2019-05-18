import React from 'react';
import Form from '../../components/forms/Form';
import TodosDisplay from '../../components/todosDisplay/TodosDisplay';
import './home.css';

const Home = () => {

  return(
    <div className="home-main-container">
      <Form header={"Create your todo"}/>
      <TodosDisplay />
    </div>
  )
}

export default Home;