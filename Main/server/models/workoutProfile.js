const mongoose = require('mongoose');

const userWorkoutProfileSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  workouts: [
    {
      date: { type: Date, default: Date.now },
      exercises: [
        {
          name: String,
          sets: Number,
          reps: Number,
          weight: Number
        }
      ]
    }
  ]
});

const UserWorkoutProfile = mongoose.model('UserWorkoutProfile', userWorkoutProfileSchema);

module.exports = UserWorkoutProfile;