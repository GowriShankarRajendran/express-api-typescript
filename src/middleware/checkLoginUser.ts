import { Request, Response, NextFunction } from 'express';

export const checkLoginUser = ((req: Request, res: Response, next: NextFunction) => {
    if(req.baseUrl === '/order'){
        res.status(401).json('You not have access');
    }
    else{
        next();
    }
});