import express, { Router, Request, Response, NextFunction } from 'express';
import { Iusers } from '../model/user';

export const userRouter: Router = express.Router();

let users: Iusers[] = [
    {id: 1, name: 'Gowri Shankar', dateOfBirth: new Date('1993/09/13'), phoneNumber: 729928554, gender: 'Male', location: 'Chennai'},
    {id: 2, name: 'Sivan', dateOfBirth: new Date('1985/01/20'), phoneNumber: 9876543210, gender: 'Male', location: 'Thiruvanamalai'},
    {id: 3, name: 'Ramesh', dateOfBirth: new Date('1987/01/07'), phoneNumber: 789456120, gender: 'Male', location: 'Salem'}
];

//Get All Users
userRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(users);
});

//Get User by ID
userRouter.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    let getUserID = +req.params.id;
    let findIndex = users.findIndex(val => val.id === getUserID);
    findIndex >= 0 ? res.status(200).json(users[findIndex]) : res.status(404).json(`ID ${getUserID} User not found`);
});

//Create User
userRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
    let userData: Iusers = {id: users.length+1, name: req.body.name, dateOfBirth: req.body.dateOfBirth, phoneNumber: req.body.phoneNumber, gender: req.body.gender, location: req.body.location};
    users.push(userData);
    res.status(201).json(users);
});

//Update User
userRouter.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
    let getUserID = +req.params.id;
    let findIndex = users.findIndex(val => val.id === getUserID);
    if(findIndex >= 0){
        let userData: Iusers = {id: req.body.id, name: req.body.name, dateOfBirth: req.body.dateOfBirth, phoneNumber: req.body.phoneNumber, gender: req.body.gender, location: req.body.location};
        users[findIndex] = userData;
        res.status(200).json(users[findIndex]);
    }
    else{
        res.status(404).json(`ID ${getUserID} User not found`);
    }
});

//Delete User
userRouter.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
    let getUserID = +req.params.id;
    let findIndex = users.findIndex(val => val.id === getUserID);
    findIndex >= 0 ? (users.splice(findIndex, 1), res.status(200).json('User Deleted Successfully')) : res.status(404).json(`ID ${getUserID} User not found`);
});