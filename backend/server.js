const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Use the environment variable from docker-compose
const mongoUrl = process.env.MONGO_URL || 'mongodb://database:27017/tasks';

mongoose.connect(mongoUrl)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ DB Connection Error:', err));

const TaskSchema = new mongoose.Schema({ title: String });
const Task = mongoose.model('Task', TaskSchema);

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

app.post('/tasks', async (req, res) => {
  const newTask = new Task({ title: req.body.title });
  await newTask.save();
  res.status(201).send(newTask);
});

app.listen(5000, () => console.log('🚀 Backend running on port 5000'));
