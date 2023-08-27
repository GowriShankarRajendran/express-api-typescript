import express, { Express, Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpecs } from './swagger-setting';

//Routes
import { userRouter } from './routes/user';
import { orderRouter } from './routes/order';
import { productRouter } from './routes/product';
import { locationRouter } from './routes/location';

const app: Express = express();
const port = 6200;

app.use(express.json());

app.use("/", (req: Request, res: Response, next: NextFunction) => {
    req.url === '/order' || req.url === '/product' ? res.status(401).json(`You not have access on ${req.url} route`) : next();
});

//Routes
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);
app.use("/location", locationRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs, { explorer: true }));

//Route Not Found
app.use("", (req: Request, res: Response, next: NextFunction) => {
    const error: any = new Error('route not found');
    error.status = 404;
    next(error);
});
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status).json({message: error.message, url: req.url, method: req.method});
});

app.listen(port, () => {
    console.log(`Express Server listening on port ${port}`);
});