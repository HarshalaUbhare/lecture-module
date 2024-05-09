// models/schedule.js
import { Schema, model } from 'mongoose';

const scheduleSchema = new Schema({
  lectureId: { type: Schema.Types.ObjectId, ref: 'Lecture', required: true },
  roomId: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
});

export default model('Schedule', scheduleSchema);
