import mysql from 'mysql2/promise';
import { BD_PORT, DATABASE, HOST, PASSWORD, USER } from '../globals';

const config = {
    host: HOST,
    user: USER,
    port: BD_PORT,
    password: PASSWORD,
    database: DATABASE,
};

export const getConnection = async () => await mysql.createConnection(config);
