import { Schema, model, connect } from 'mongoose';

interface Task {
    title: string;
    descrption: string;
    dueDate: string;
    createdAt: string;
    createdBy: string;
}

