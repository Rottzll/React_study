import React from 'react';
import Eventpractice from './component/eventpractice';
import {Route} from 'react-router-dom';

const App = () => {
  return (
  <>
    <Route component= {Eventpractice} path="/" exact />;
  </>
  );
};

export default App;
