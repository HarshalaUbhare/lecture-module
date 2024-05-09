// routes/courses.js
import express from 'express';
const router = express.Router();

import Course from '../models/course.js';

// Route to add a new course
router.post('/api/courses', async (req, res) => {
  try {
    const { name, level, description, image } = req.body;
    const course = new Course({ name, level, description, image });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

