const db = require('../config/connection.js');
const { User, Exercises } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Exercises', 'exercises');
  await cleanDB('User', 'users');

  const exerciseData = await Exercises.insertMany([
    {
      //add exercise routine
      name: 'Single leg deadlifts',
      sets: 3,
      reps: 12,
      weight: 120
    },
    {
      //add exercise routine
      name: 'Romanian deadlifts',
      sets: 2,
      reps: 5,
      weight: 520
    }
  ]);

  console.log('exercises seeded');

  await User.create({
    username: 'Michael',
    email: 'michael@testmail.com',
    password: 'password',
    exercises: [exerciseData[0]._id]
  });

  console.log('users seeded');

  process.exit();
});
