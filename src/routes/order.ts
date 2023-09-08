import express, { Router, Request, Response, NextFunction } from "express";
import { checkLoginUser } from '../middleware/checkLoginUser';

export const orderRouter: Router = express.Router();

//Get All Orders
orderRouter.get("/", checkLoginUser, (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(`Get All Orders Successfully`);
});

//Get Orders By ID
orderRouter.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    let getOrderID: number = +req.params.id;
    res.status(200).json(`Get Orders By ID ${getOrderID}`);
});

//Create Orders
orderRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(`Order Created Successfully`);
});

//Update Order
orderRouter.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
    let getOrderID: number = +req.params.id;
    res.status(200).json(`Update Orders By ID ${getOrderID} Successfully`);
});

//Delete Order
orderRouter.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
    let getOrderID: number = +req.params.id;
    res.status(200).json(`Delete Orders By ID ${getOrderID} Successfully`);
});