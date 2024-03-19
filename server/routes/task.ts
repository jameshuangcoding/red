import express, {
    ErrorRequestHandler,
    Express,
    NextFunction,
    Request,
    Response,
    Router,
  } from 'express';

export const taskRouter: Router = express.Router();

taskRouter.get('/', (req: Request, res: Response) => {
    return res.status(200).json('hello in task get request');
})

taskRouter.post('/add', (req: Request, res: Response) => {
    return res.status(200).json('hello in task post request');
})

taskRouter.patch('/edit', (req: Request, res: Response) => {
    return res.status(200).json('hello in task patch request');
})

taskRouter.delete('/delete', (req: Request, res: Response) => {
    return res.status(200).json('hello in task delete request');
})
