// routes/lectures.js
import express from 'express';
const router = express.Router();

import Lecture from '../models/lecture.js';

// Route to add a new lecture
router.post('/api/lectures', async (req, res) => {
  try {
    const { courseId, instructorId, date } = req.body;
    const lecture = new Lecture({ courseId, instructorId, date });
    await lecture.save();
    res.status(201).json(lecture);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

