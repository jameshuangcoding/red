import { Schema, model, connect } from 'mongoose';
import 'dotenv/config';

const MONGO_URI: string = (process.env['MONGO_URI'] as string);
connect(MONGO_URI);

interface Task {
  title: string;
  description: string;
  dueDate: string;
  createdBy: string;
}

const taskSchema = new Schema<Task>(
  {
    title: { type: String, required: true },
    description: String,
    dueDate: { type: String, required: true },
    createdBy: { type: String, required: true },
  },
  { timestamps: true }
);

export const Task = model<Task>('Task', taskSchema);
