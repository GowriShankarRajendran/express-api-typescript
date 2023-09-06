import mysql, { ConnectionOptions, PoolOptions } from 'mysql2';

const access: PoolOptions = {
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Admin@123',
    database: 'company'
};

export const database = mysql.createPool(access);

// const access: ConnectionOptions = {
//     host: 'localhost',
//     user: 'root',
//     password: 'Admin@123',
//     database: 'company'
// };

// export const database = mysql.createConnection(access);