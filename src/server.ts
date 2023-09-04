import mysql, { ConnectionOptions } from 'mysql2';

const access: ConnectionOptions = {
    host: 'localhost',
    user: 'root',
    password: 'Admin@123',
    database: 'company'
};

export const database = mysql.createConnection(access);