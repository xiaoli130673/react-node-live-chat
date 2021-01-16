import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Chat from './pages/Chat/Chat';
import Join from './pages/Join/Join';

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Join} />
      <Route path='/chat' component={Chat} />
    </Router>
  );
};

export default App;
