import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-overview">
          <h2>Overview</h2>
          <p>Welcome to your dashboard! Here you can track your fitness progress and see your stats.</p>
        </section>
        <section className="dashboard-stats">
          <h2>Stats</h2>
          <p>Your recent activities and achievements will be displayed here.</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
