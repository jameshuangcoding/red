import express, {
  ErrorRequestHandler,
  Express,
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';
import { taskController } from '../controllers/taskController';

export const taskRouter: Router = express.Router();

taskRouter.get('/', taskController.getTasks, (req: Request, res: Response) => {
  return res.status(200).json('hello in task get request');
});

taskRouter.post('/add', taskController.addTask, (req: Request, res: Response) => {
  return res.status(200).json('hello in task post request');
});

taskRouter.patch('/edit', taskController.updateTask, (req: Request, res: Response) => {
  return res.status(200).json('hello in task patch request');
});

taskRouter.delete('/delete', taskController.deleteTask, (req: Request, res: Response) => {
  return res.status(200).json('hello in task delete request');
});
