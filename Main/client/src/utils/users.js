export const profilePictures = [
  '/jailHorse.jpg',
  '/doublehp.jpg',
  '/Sam.JPG',
  '/Alex.JPG',
  '/Terry.JPG',
  '/Gabe.JPG'
];

export const users = [
  {
    username: 'user1',
    password: 'password1',
    name: 'John Doe',
    bio: "Hello! I'm John Doe, a fitness enthusiast and software developer. I love working out and helping others achieve their fitness goals.",
    goals: ['Run a marathon', 'Improve my strength', 'Maintain a healthy diet'],
    profilePicture: '/jailHorse.jpg'
  },
  {
    username: 'user2',
    password: 'password2',
    name: 'Jane Smith',
    bio: "Hi, I'm Jane Smith. I am passionate about yoga and healthy living.",
    goals: ['Become a yoga instructor', 'Eat more plant-based foods', 'Travel more'],
    profilePicture: '/doublehp.jpg'
  },
  {
    username: 'user3',
    password: 'password3',
    name: 'Alice Johnson',
    bio: "Hi, I'm Alice Johnson. I'm a software engineer with a love for hiking and nature.",
    goals: ['Climb Mount Everest', 'Learn to meditate', 'Volunteer at animal shelters'],
    profilePicture: '/Terry.JPG'
  },
  {
    username: 'user4',
    password: 'password4',
    name: 'Bob Brown',
    bio: "Hello! I'm Bob Brown, a graphic designer and artist. I enjoy painting and exploring new art techniques.",
    goals: ['Create a solo art exhibition', 'Learn digital illustration', 'Travel to Paris'],
    profilePicture: '/Sam.JPG'
  },
  {
    username: 'user5',
    password: 'password5',
    name: 'Charlie Davis',
    bio: "Hi, I'm Charlie Davis. I'm a music producer and DJ. I love creating new music and performing live.",
    goals: ['Release an album', 'Collaborate with other artists', 'Perform at a major festival'],
    profilePicture: '/jailHorse.jpg'
  },
  {
    username: 'user6',
    password: 'password6',
    name: 'Dana Lee',
    bio: "Hi, I'm Dana Lee. I'm a fitness trainer and nutritionist. I enjoy helping others achieve their health goals.",
    goals: ['Open my own gym', 'Write a nutrition book', 'Complete an Ironman triathlon'],
    profilePicture: '/Gabe.JPG'
  },
  {
    username: 'user7',
    password: 'password7',
    name: 'Evan Wilson',
    bio: "Hello! I'm Evan Wilson, a data scientist and AI enthusiast. I love solving complex problems with data.",
    goals: ['Publish a research paper', 'Develop an AI project', 'Teach a data science course'],
    profilePicture: '/doublehp.jpg'
  },
  {
    username: 'user8',
    password: 'password8',
    name: 'Fiona Clark',
    bio: "Hi, I'm Fiona Clark. I'm a chef and food blogger. I love experimenting with new recipes and sharing them.",
    goals: ['Start a cooking show', 'Write a cookbook', 'Travel to Italy for culinary inspiration'],
    profilePicture: '/Alex.JPG'
  }
];


export const workoutPlans = [
  {
    area: 'upper',
    muscleGroup: 'Chest',
    difficulty: 'Intermediate',
    exercises: [
      { name: 'Bench Press', reps: '3 sets of 10 reps' },
      { name: 'Incline Dumbbell Press', reps: '3 sets of 12 reps' },
      { name: 'Chest Fly', reps: '3 sets of 15 reps' }
    ]
  },
  {
    area: 'upper',
    muscleGroup: 'Back',
    difficulty: 'Advanced',
    exercises: [
      { name: 'Deadlift', reps: '4 sets of 8 reps' },
      { name: 'Pull-Ups', reps: '4 sets to failure' },
      { name: 'Bent Over Row', reps: '4 sets of 10 reps' }
    ]
  },
  {
    area: 'lower',
    muscleGroup: 'Legs',
    difficulty: 'Beginner',
    exercises: [
      { name: 'Squats', reps: '3 sets of 15 reps' },
      { name: 'Leg Press', reps: '3 sets of 12 reps' },
      { name: 'Calf Raises', reps: '3 sets of 20 reps' }
    ]
  },
  {
    area: 'upper',
    muscleGroup: 'Shoulders',
    difficulty: 'Intermediate',
    exercises: [
      { name: 'Overhead Press', reps: '3 sets of 10 reps' },
      { name: 'Lateral Raises', reps: '3 sets of 15 reps' },
      { name: 'Front Raises', reps: '3 sets of 15 reps' }
    ]
  },
  {
    area: 'upper',
    muscleGroup: 'Arms',
    difficulty: 'Advanced',
    exercises: [
      { name: 'Bicep Curls', reps: '4 sets of 12 reps' },
      { name: 'Tricep Dips', reps: '4 sets of 15 reps' },
      { name: 'Hammer Curls', reps: '4 sets of 12 reps' }
    ]
  },
  {
    area: 'lower',
    muscleGroup: 'Core',
    difficulty: 'Beginner',
    exercises: [
      { name: 'Crunches', reps: '3 sets of 20 reps' },
      { name: 'Plank', reps: '3 sets of 1 minute' },
      { name: 'Leg Raises', reps: '3 sets of 15 reps' }
    ]
  },
  {
    area: 'cardio',
    muscleGroup: 'Full Body',
    difficulty: 'Intermediate',
    exercises: [
      { name: 'Burpees', reps: '3 sets of 15 reps' },
      { name: 'Kettlebell Swings', reps: '3 sets of 20 reps' },
      { name: 'Mountain Climbers', reps: '3 sets of 30 seconds' }
    ]
  },
  {
    area: 'cardio',
    muscleGroup: 'Cardio',
    difficulty: 'Advanced',
    exercises: [
      { name: 'Sprinting', reps: '6 sets of 30 seconds' },
      { name: 'High-Intensity Interval Training (HIIT)', reps: '20 minutes' },
      { name: 'Jump Rope', reps: '10 minutes' }
    ]
  },
  {
    area: 'lower',
    muscleGroup: 'Lower Body',
    difficulty: 'Intermediate',
    exercises: [
      { name: 'Lunges', reps: '3 sets of 12 reps each leg' },
      { name: 'Step-Ups', reps: '3 sets of 15 reps each leg' },
      { name: 'Leg Curls', reps: '3 sets of 15 reps' }
    ]
  },
  {
    area: 'upper',
    muscleGroup: 'Upper Body',
    difficulty: 'Beginner',
    exercises: [
      { name: 'Push-Ups', reps: '3 sets of 10 reps' },
      { name: 'Dumbbell Rows', reps: '3 sets of 12 reps each arm' },
      { name: 'Tricep Extensions', reps: '3 sets of 15 reps' }
    ]
  },
  {
    area: 'flexibility',
    muscleGroup: 'Flexibility',
    difficulty: 'All Levels',
    exercises: [
      { name: 'Hamstring Stretch', reps: '3 sets of 30 seconds' },
      { name: 'Quadriceps Stretch', reps: '3 sets of 30 seconds each leg' },
      { name: 'Shoulder Stretch', reps: '3 sets of 30 seconds each arm' }
    ]
  }
];
