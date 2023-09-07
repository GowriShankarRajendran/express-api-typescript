import mysql, { ConnectionOptions, PoolOptions } from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const access: PoolOptions = {
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
};

export const database = mysql.createPool(access);

// const access: ConnectionOptions = {
//     host: 'localhost',
//     user: 'root',
//     password: 'Admin@123',
//     database: 'company'
// };

// export const database = mysql.createConnection(access);