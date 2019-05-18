import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detai';
import ErrorPage from './pages/errorPage/ErrorPage';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route path="/error" component={ ErrorPage } />
      <Route path="/:id" component={ Detail } />
      <Route path="/" component={ Home } />
    </Switch>
  );
}

export default App;
