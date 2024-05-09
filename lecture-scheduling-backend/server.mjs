// server.mjs

//Jw83cdTzmDcMjhfF
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose'; // Importing mongoose directly

import courseRoutes from './routes/courses.js';
import instructorRoutes from './routes/instructors.js';
import lectureRoutes from './routes/lectures.js';
import scheduleRoutes from './routes/schedules.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json()); // Using bodyParser.json directly
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb+srv://harshalaubhare:Jw83cdTzmDcMjhfF@cluster0.l1ykduu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection; // Using mongoose.connection directly
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Mount routes
app.use('/api/courses', courseRoutes);
app.use('/api/instructors', instructorRoutes);
app.use('/api/lectures', lectureRoutes);
app.use('/api/schedules', scheduleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
