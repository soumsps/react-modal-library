import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import './dashboard.styles.css';

const Dashboard = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogOutButton = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  return (
    <div className="dashboard-container">
      <header role="heading" className="page-header">
        <h1 className="page-title">Example App Dashboard</h1>
        <nav role="navigation" aria-label="Main">
          <button
            className="btn btn-logout"
            type="button"
            onClick={() => handleLogOutButton()}
          >
            Sign out
          </button>
        </nav>
      </header>
      <div className="dashboard-panel">
        <div
          role="navigation"
          aria-label="Dashboard Navigation"
          className="dashboard-side-panel"
        >
          Nav links here
        </div>
        <div className="dashboard-content-panel">Dashboard Content</div>
      </div>
    </div>
  );
};

export default Dashboard;
