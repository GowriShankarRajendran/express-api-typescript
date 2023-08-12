import express, { Router, Request, Response, NextFunction } from 'express';

export const productRouter: Router = express.Router();

//Get All Product
productRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(`Get Product Successfully`);
});

//Get Product by ID
productRouter.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    let getProductID: number = +req.params.id;
    res.status(200).json(`Get Product by ${getProductID} Successfully`);
});

//Post Product
productRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(`Create Product Successfully`);
});

//Update Product
productRouter.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
    let getProductID: number = +req.params.id;
    res.status(200).json(`Update Product by ${getProductID} Successfully`);
});

//Delete Product
productRouter.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
    let getProductID: number = +req.params.id;
    res.status(200).json(`Delete Product by ${getProductID} Successfully`);
});