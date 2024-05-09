import { Schema, model } from 'mongoose';

const instructorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

export default model('Instructor', instructorSchema);
