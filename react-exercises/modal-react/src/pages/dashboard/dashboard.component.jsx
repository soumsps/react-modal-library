import React from 'react';
import './dashboard.styles.css';

const Dashboard = () => (
  <div className="dashboard-container">
    <header role="heading" className="page-header">
      <h1 className="page-title">Example App Dashboard</h1>
      <nav role="navigation" aria-label="Main">
        <button className="btn btn-logout" type="button">
          Log out
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

export default Dashboard;
