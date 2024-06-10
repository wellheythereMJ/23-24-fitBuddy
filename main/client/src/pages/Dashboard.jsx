import React, { useState } from 'react';
import './Dashboard.css';
import { users, workoutPlans } from '../utils/users';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { username } = useParams();
  const user = users.find((u) => u.username === username);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const navigate = useNavigate()

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedWorkout(null); // Reset selected workout when category changes
  };

  const handleWorkoutSelect = (workout) => {
    setSelectedWorkout(workout);
  };

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
        <section className="dashboard-category">
          <h2>Select a Category<a onClick={() => {navigate(`/profile/${user.username}`)}}><button className='dbb'>Profile</button></a></h2>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="upper">Upper Body</option>
            <option value="lower">Lower Body</option>
            <option value="cardio">Cardio</option>
            <option value="flexibility">Flexibility</option>
          </select>
        </section>
        {selectedCategory && (
          <section className="dashboard-workout-plans">
            <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Workouts</h2>
            {workoutPlans
              .filter((plan) => plan.area.toLowerCase() === selectedCategory)
              .map((plan, index) => (
                <div key={index} className="workout-plan" onClick={() => handleWorkoutSelect(plan)}>
                  <h3>{plan.muscleGroup}: {plan.difficulty}</h3>
                  <ul>
                    {plan.exercises.map((exercise, idx) => (
                      <li key={idx}>
                        {exercise.name}: {exercise.reps || exercise.duration}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            {selectedWorkout && (
              <div className="selected-workout">
                <h3>Selected Workout</h3>
                <h4>{selectedWorkout.muscleGroup} - {selectedWorkout.difficulty}</h4>
                <ul>
                  {selectedWorkout.exercises.map((exercise, idx) => (
                    <li key={idx}>
                      {exercise.name}: {exercise.reps || exercise.duration}
                    </li>
                  ))}
                </ul>
                <h2>Add New Workout Plan?</h2>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
