import mysql, { ConnectionOptions } from 'mysql2/promise';
import { BD_PORT, DATABASE, HOST, PASSWORD, USER } from '../globals';

const config: ConnectionOptions = {
    host: HOST || 'localhost',
    user: USER || 'root',
    port: BD_PORT || 3306,
    password: PASSWORD || 'root',
    database: DATABASE || 'bd_clinica',
};

export const getConnection = async (): Promise<mysql.Connection> => {
    const connection = await mysql.createConnection(config);
    return connection;
};
