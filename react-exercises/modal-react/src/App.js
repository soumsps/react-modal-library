import React, { useState } from 'react';
import Homepage from './pages/homepage/homepage.component';
import Dashboard from './pages/dashboard/dashboard.component';
import { Router } from '@reach/router';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Homepage path="/" isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Dashboard
            path="dashboard"
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Router>

        <div className="footer">Developed by Soumendu and Vinod</div>
      </div>
    </div>
  );
};

export default App;
