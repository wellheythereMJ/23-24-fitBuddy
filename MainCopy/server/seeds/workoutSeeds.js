// seeds/userWorkoutProfiles.js
const mongoose = require('mongoose');
const UserWorkoutProfile = require('../models/UserWorkoutProfile');

const seedData = [
  {
    username: 'johndoe',
    email: 'johndoe@example.com',
    workouts: [
      {
        date: new Date('2023-05-01'),
        exercises: [
          { name: 'Bench Press', sets: 3, reps: 10, weight: 135 },
          { name: 'Squat', sets: 3, reps: 10, weight: 185 }
        ]
      },
      {
        date: new Date('2023-05-03'),
        exercises: [
          { name: 'Deadlift', sets: 3, reps: 10, weight: 225 },
          { name: 'Pull Up', sets: 3, reps: 8, weight: 0 }
        ]
      }
    ]
  },
  {
    username: 'janedoe',
    email: 'janedoe@example.com',
    workouts: [
      {
        date: new Date('2023-05-01'),
        exercises: [
          { name: 'Shoulder Press', sets: 3, reps: 10, weight: 95 },
          { name: 'Leg Press', sets: 3, reps: 10, weight: 200 }
        ]
      },
      {
        date: new Date('2023-05-04'),
        exercises: [
          { name: 'Bench Press', sets: 3, reps: 10, weight: 115 },
          { name: 'Lunges', sets: 3, reps: 12, weight: 50 }
        ]
      }
    ]
  }
];

mongoose.connect('mongodb://localhost:27017/yourDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await UserWorkoutProfile.deleteMany({});
    await UserWorkoutProfile.insertMany(seedData);
    console.log('Database seeded!');
    mongoose.connection.close();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
    mongoose.connection.close();
  });