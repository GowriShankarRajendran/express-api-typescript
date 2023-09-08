import express, { Router, Request, Response, NextFunction } from 'express';
import { QueryError } from 'mysql2';
import { database }  from '../server';
import { checkLoginUser } from '../middleware/checkLoginUser';

export const employeeRouter: Router = express.Router();

// Get All Employee Detail
employeeRouter.get("/", checkLoginUser, (req: Request, res: Response, next: NextFunction) => {
    let sqlQuery: string = 'select * from employee';
    database.query(sqlQuery, (err: QueryError, result: any) => {
        if(err){
            res.status(500).json(err);
        }
        else{
            if(result && result.length > 0){
                res.status(200).json(result);
            }
            else{
                res.status(404).json('Data not Available');
            }
        }
    });
});

// Get Employee by ID
employeeRouter.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    let getEmpID: string = req.params.id;
    let sqlQuery: string = `select * from employee where empId = ${getEmpID}`;
    database.query(sqlQuery, (err: QueryError, result: any) => {
        if(err){
            res.status(500).json(err);
        }
        else{
            if(result && result.length > 0){
                res.status(200).json(result[0]);
            }
            else{
                res.status(404).json(`Data not Available Emp ID ${getEmpID}`);
            }
        }
    });
});

// Add Employee
employeeRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
    let sqlQuery = `insert into employee (empName, qualification, phoneNumber, dateOfBirth, location, grade) values ('${req.body.empName}', '${req.body.qualification}', '${req.body.phoneNumber}', '${req.body.dateOfBirth}', '${req.body.location}', '${req.body.grade}')`;
    database.query(sqlQuery, (err: QueryError, result: any) => {
        if(err){
            res.status(500).json(err);
        }
        else{
            res.status(201).json(result);
        }
    });
});

// Update Employee
employeeRouter.put("/:id", (req: Request, res: Response, next: NextFunction) => {
    let getEmpID: string = req.params.id;
    let sqlQuery: string = `update employee set empName = '${req.body.empName}', qualification = '${req.body.qualification}', phoneNumber = '${req.body.phoneNumber}', dateOfBirth = '${req.body.dateOfBirth}', location = '${req.body.location}', grade = '${req.body.grade}' where empId = ${getEmpID}`;
    database.query(sqlQuery, (err: QueryError, result: any) => {
        if(err){
            res.status(500).json(err);
        }
        else{
            res.status(200).json(result);
        }
    });
});

// Update Employee Name
employeeRouter.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
    let getEmpID: string = req.params.id;
    let sqlQuery: string = `update employee set empName = '${req.body.empName}' where empId = ${getEmpID}`;
    database.query(sqlQuery, (err: QueryError, result: any) => {
        if(err){
            res.status(500).json(err);
        }
        else{
            res.status(200).json(result);
        }
    });
});

// Delete Employee
employeeRouter.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
    let getEmpID: string = req.params.id;
    let sqlQuery: string = `delete from employee where empID = ${getEmpID}`;
    database.query(sqlQuery, (err: QueryError, result: any) => {
        if(err){
            res.status(500).json(err);
        }
        else{
            res.status(200).json(result);
        }
    });
});