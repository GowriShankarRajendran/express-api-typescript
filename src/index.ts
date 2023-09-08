import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { database } from './server';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpecs } from './swagger-setting';
dotenv.config();

//Routes
import { userRouter } from './routes/user';
import { orderRouter } from './routes/order';
import { productRouter } from './routes/product';
import { locationRouter } from './routes/location';
import { employeeRouter } from './routes/employee';

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

//Routes
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);
app.use("/location", locationRouter);
app.use("/employee", employeeRouter);
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

//database.connect((err) => {
database.getConnection((err, connection) => {
    if(err){
        console.log(err);
    }
    else{
        connection.release();
        app.listen(port, () => {
            console.log(`Express Server listening on port ${port}`);
            database.query('SELECT 1', (err, result) => {
                if(err) throw err;
                if(result){
                    console.log(result);
                }
            });
        });
        console.log('Database Connected Successfully');
    }
});
// app.listen(port, () => {
//     console.log(`Express Server listening on port ${port}`);
// });