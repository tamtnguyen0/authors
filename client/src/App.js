import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import Read from './views/Read'
import Create from './views/Create'
import Update from './views/Update'
import Error from './views/Error'

function App() {
  return (
    <div className="App container mt-2">
      <Router>
        <Read path='/' />
        <Create path='/new' />
        <Update path='/authors/:id/edit' />
        <Error path='/error' />
      </Router>
    </div>
  );
}

export default App;
