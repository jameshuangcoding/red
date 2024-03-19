import { Schema, model, connect } from 'mongoose';

const MONGO_URI =
  'mongodb+srv://jhuang4647:tkdnSiVrpDWDurmx@red.c3ytmlf.mongodb.net/';

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
