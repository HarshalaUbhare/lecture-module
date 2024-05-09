// models/lecture.js
import { Schema, model } from 'mongoose';

const lectureSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  instructorId: { type: Schema.Types.ObjectId, ref: 'Instructor', required: true },
  date: { type: Date, required: true },
});

export default model('Lecture', lectureSchema);
