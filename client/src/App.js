import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Details from './views/Details'
import Updates from './views/Updates'


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Details path="people/:id"/>
        <Updates path="people/:id/edit"/>
      </Router>  
    </div>
  );
}

export default App;
