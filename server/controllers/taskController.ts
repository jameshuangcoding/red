import { TaskController } from '../types';
import { Task } from '../models/taskModels';

export const taskController: TaskController = {
  getTasks: (req, res, next) => {
    Task.find({})
      .exec()
      .then((tasks) => {
        console.log('tasks:', tasks);
        return next();
      })
      .catch((err) => {
        return next({
          log: 'Error: Couldn\t get tasks.',
          message: {
            error: `taskController.getTasks - ERROR: ${err}`,
          },
        });
      });
  },

  addTask: (req, res, next) => {
    const inputTask = req.body;

    Task.create(inputTask)
      .then((task) => {
        console.log('created task:', task);
        return next();
      })
      .catch((err) => {
        return next({
          log: 'Error: Couldn\t add tasks.',
          message: {
            error: `taskController.addTask - ERROR: ${err}`,
          },
        });
      });
  },

  updateTask: (req, res, next) => {},
  
  deleteTask: (req, res, next) => {},
};
