import { Request, Response, NextFunction } from 'express';

export type TaskController = {
    getTasks: (req: Request, res: Response, next: NextFunction) => void;
    addTask: (req: Request, res: Response, next: NextFunction) => void;
    updateTask: (req: Request, res: Response, next: NextFunction) => void;
    deleteTask: (req: Request, res: Response, next: NextFunction) => void;
};
