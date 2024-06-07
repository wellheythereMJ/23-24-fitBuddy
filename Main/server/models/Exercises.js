const mongoose = require('mongoose');
const { Schema } = mongoose;

const exercisesSchema = new Schema({
  name: {
    type: String,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const Exercises = mongoose.model('Exercises', exercisesSchema);

module.exports = Exercises;
