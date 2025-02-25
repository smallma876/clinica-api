import mysql, { ConnectionOptions } from 'mysql2/promise';
import { BD_PORT, DATABASE, HOST, PASSWORD, USER } from '../globals';

const config: ConnectionOptions = {
    host: HOST,
    user: USER,
    port: BD_PORT,
    password: PASSWORD,
    database: DATABASE,
};

export const getConnection = async (): Promise<mysql.Connection> => {
    const connection = await mysql.createConnection(config);
    return connection;
};
