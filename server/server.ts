import express, {
  ErrorRequestHandler,
  Express,
  NextFunction,
  Request,
  Response,
} from 'express';
import path from 'path';
import { taskRouter } from './routes/taskRouter';

const app: Express = express();

const PORT: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// displaying bundled dist folder content
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// routes
app.use('/api/task', taskRouter);

// catch all
app.use('*', (req: Request, res: Response) => {
  res.status(404).send('Page Not Found');
});

// global error handler
app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign(defaultErr, { log: `${err}` });
    console.log('log', errorObj.log);
    res.status(errorObj.status).send(errorObj.message);
  }
);

app.listen(PORT, () => {
  console.log(`📍 Server Listening on Port ${PORT} 📍`);
});
