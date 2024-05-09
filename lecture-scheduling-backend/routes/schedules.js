
// routes/schedules.js
import express from 'express';
const router = express.Router();

import Schedule from '../models/schedule.js';

// Route to add a new schedule
router.post('//api/schedules', async (req, res) => {
  try {
    const { lectureId, roomId, startTime, endTime } = req.body;
    const schedule = new Schedule({ lectureId, roomId, startTime, endTime });
    await schedule.save();
    res.status(201).json(schedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
