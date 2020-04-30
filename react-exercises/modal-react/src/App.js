import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import Dashboard from './pages/dashboard/dashboard.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Homepage />
        {/* <Dashboard /> */}
        <div className="footer">Developed by Soumendu and Vinod</div>
      </div>
    </div>
  );
}

export default App;
