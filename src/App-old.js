import React from 'react';
import Router from './router'
import Navbar from './components/Navbar'


function App(props) {
  return (

      <div>
        <Navbar />
        <div className="py-4">
          <Router />
        </div>
      </div>

  );
}

export default App;