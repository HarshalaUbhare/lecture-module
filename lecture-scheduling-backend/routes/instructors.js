import express from 'express';
const router = express.Router();
import Instructor from '../models/instructor.js';

router.post('/instructors', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const instructor = new Instructor({ name, email, password });
    await instructor.save();
    res.status(201).json(instructor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
