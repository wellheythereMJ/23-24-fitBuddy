import React from 'react';
import './Dashboard.css';
import { workoutPlans } from '../utils/users';

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
        <section className="dashboard-workout-plans">
          <h2>Workout Plans</h2>
          {workoutPlans.map((plan, index) => (
            <div key={index} className="workout-plan">
              <h3>{plan.muscleGroup} - {plan.difficulty}</h3>
              <ul>
                {plan.exercises.map((exercise, idx) => (
                  <li key={idx}>
                    {exercise.name}: {exercise.reps || exercise.duration}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
