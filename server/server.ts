import express, {
  ErrorRequestHandler,
  Express,
  NextFunction,
  Request,
  Response,
} from 'express';
import path from 'path';

const app: Express = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.use('*', (req: Request, res: Response) => {
  res.status(404).send('Page Not Found');
});

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
